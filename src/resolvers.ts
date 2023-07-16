import {
  Resolvers,
  Event,
  Vendor,
  Venue,
  User,
} from "./__generated__/resolver-types.js";
import { EventModel, UserModel, VendorModel, VenueModel } from "./db.js";
import { Context } from "./server";
import { ObjectId } from "mongodb";

export const resolvers: Resolvers = {
  Query: {
    events: async (_, __, { dataSources }) => {
      const events = await dataSources.db
        .collection("events")
        .aggregate([
          {
            $lookup: {
              from: "users",
              localField: "users",
              foreignField: "_id",
              as: "users",
            },
          },
          {
            $lookup: {
              from: "vendors",
              localField: "vendors",
              foreignField: "_id",
              as: "vendors",
            },
          },
        ])
        .toArray();

      const formattedEvents = events.map((event) => {
        return {
          ...event,
          id: String(event._id),
          users: event.users.map((user: UserModel) => {
            return {
              ...user,
              id: String(user._id),
            };
          }),
          vendors: event.vendors.map((vendor: VendorModel) => {
            return {
              ...vendor,
              id: String(vendor._id),
            };
          }),
        };
      });

      return formattedEvents as Event[];
    },
    event: async (_, args, { dataSources }) => {
      const { id } = args;

      const event = await dataSources.db
        .collection<Event>("events")
        .aggregate([
          { $match: { _id: new ObjectId(id) } },
          {
            $lookup: {
              from: "users",
              localField: "users",
              foreignField: "_id",
              as: "users",
            },
          },
          {
            $lookup: {
              from: "vendors",
              localField: "vendors",
              foreignField: "_id",
              as: "vendors",
            },
          },
        ])
        .toArray();

      if (!event.length) {
        throw new Error(`Event with ID ${id} not found`);
      }

      const formattedEvent = {
        ...event[0],
        id: String(event[0]._id),
        users: event[0].users.map((user: UserModel) => {
          return {
            ...user,
            id: String(user._id),
          };
        }),
        vendors: event[0].vendors.map((vendor: VendorModel) => {
          return {
            ...vendor,
            id: String(vendor._id),
          };
        }),
      };

      return formattedEvent as Event;
    },
    vendors: async (_, __, { dataSources }) => {
      const vendors = await dataSources.db
        .collection("vendors")
        .aggregate([
          {
            $lookup: {
              from: "events",
              localField: "events",
              foreignField: "_id",
              as: "events",
            },
          },
        ])
        .toArray();

      const formattedVendors = vendors.map((vendor) => {
        return {
          ...vendor,
          id: String(vendor._id),
          events: vendor.events.map((event: EventModel) => {
            return {
              ...event,
              id: String(event._id),
            };
          }),
        };
      });

      return formattedVendors as Vendor[];
    },
    vendor: async (_, args, { dataSources }) => {
      const { id } = args;

      const vendor = await dataSources.db
        .collection<Vendor>("vendors")
        .aggregate([
          { $match: { _id: new ObjectId(id) } },
          {
            $lookup: {
              from: "events",
              localField: "events",
              foreignField: "_id",
              as: "events",
            },
          },
        ])
        .toArray();

      if (!vendor.length) {
        throw new Error(`Vendor with ID ${id} not found`);
      }

      const formattedVendor = {
        ...vendor[0],
        id: String(vendor[0]._id),
        events: vendor[0].events.map((event: EventModel) => {
          return {
            ...event,
            id: String(event._id),
          };
        }),
      };

      return formattedVendor as Vendor;
    },
    venues: async (_, __, { dataSources }) => {
      const venues = await dataSources.db
        .collection("venues")
        .aggregate([
          {
            $lookup: {
              from: "events",
              localField: "events",
              foreignField: "_id",
              as: "events",
            },
          },
        ])
        .toArray();

      const formattedVenues = venues.map((venue) => {
        return {
          ...venue,
          id: String(venue._id),
          events: venue.events.map((event: EventModel) => {
            return {
              ...event,
              id: String(event._id),
            };
          }),
        };
      });

      return formattedVenues as Venue[];
    },
    venue: async (_, args, { dataSources }) => {
      const { id } = args;

      const venue = await dataSources.db
        .collection<Venue>("venues")
        .aggregate([
          { $match: { _id: new ObjectId(id) } },
          {
            $lookup: {
              from: "events",
              localField: "events",
              foreignField: "_id",
              as: "events",
            },
          },
        ])
        .toArray();

      if (!venue.length) {
        throw new Error(`Venue with ID ${id} not found`);
      }

      const formattedVenue = {
        ...venue[0],
        id: String(venue[0]._id),
        events: venue[0].events.map((event: EventModel) => {
          return {
            ...event,
            id: String(event._id),
          };
        }),
      };

      return formattedVenue as Venue;
    },
    users: async (_, __, { dataSources }) => {
      const users = await dataSources.db
        .collection("users")
        .aggregate([
          {
            $lookup: {
              from: "events",
              localField: "events",
              foreignField: "_id",
              as: "events",
            },
          },
        ])
        .toArray();

      const formattedUsers = users.map((user) => {
        return {
          ...user,
          id: String(user._id),
        };
      });

      return formattedUsers as User[];
    },
    user: async (_, args, { dataSources }) => {
      const { id } = args;

      const user = await dataSources.db
        .collection<User>("users")
        .aggregate([
          { $match: { _id: new ObjectId(id) } },
          {
            $lookup: {
              from: "events",
              localField: "events",
              foreignField: "_id",
              as: "events",
            },
          },
        ])
        .toArray();

      if (!user.length) {
        throw new Error(`User with ID ${id} not found`);
      }

      const formattedUser = {
        ...user[0],
        id: String(user[0]._id),
      };

      return formattedUser as User;
    },
  },
  Mutation: {
    createEvent: async (_, args, context: Context) => {
      // Insert event into the database.
      const { acknowledged, insertedId } = await context.dataSources.db
        .collection("events")
        .insertOne(args);

      if (!acknowledged) {
        throw new Error("Unable to insert event");
      }

      return {
        acknowledged,
        insertedId: String(insertedId),
      };
    },
    updateEvent: async (_, args, { dataSources }) => {
      const { id, title, description, datetime, venue, vendors, users } = args;

      const eventToUpdate = await dataSources.db
        .collection<EventModel>("events")
        .findOne({ _id: new ObjectId(id) });

      if (!eventToUpdate) {
        throw new Error(`Event with ID ${id} not found`);
      }

      const { acknowledged } = await dataSources.db
        .collection("events")
        .updateOne(
          { _id: new ObjectId(id) },
          {
            $set: {
              title: title ?? eventToUpdate.title,
              description: description ?? eventToUpdate.description,
              datetime: datetime ?? eventToUpdate.datetime,
              venue: venue ?? eventToUpdate.venue,
            },
            // $addToSet only adds values that aren't already in the array.
            $addToSet: {
              // $each adds each value in the array to the db array individually,
              // rather than adding the whole array.
              vendors: {
                $each: vendors?.length
                  ? vendors?.map((vendorId) => new ObjectId(vendorId ?? ""))
                  : eventToUpdate.vendors,
              },
              users: {
                $each: users?.length
                  ? users?.map((userId) => new ObjectId(userId ?? ""))
                  : eventToUpdate.users,
              },
            },
          }
        );

      if (!acknowledged) {
        throw new Error("Unable to update event");
      }

      return {
        acknowledged,
      };
    },
    deleteEvent: async (_, args, { dataSources }) => {
      const { id } = args;

      const eventToDelete = await dataSources.db
        .collection<Event>("events")
        .findOne({ _id: new ObjectId(id) });
      if (!eventToDelete) {
        throw new Error(`Event with ID ${id} not found`);
      }

      await dataSources.db
        .collection<Event>("events")
        .deleteOne({ _id: new ObjectId(id) });

      return eventToDelete;
    },
    createVendor: async (_, args, { dataSources }) => {
      // Insert vendor into the database.
      const { acknowledged, insertedId } = await dataSources.db
        .collection("vendors")
        .insertOne(args);

      if (!acknowledged) {
        throw new Error("Unable to insert vendor");
      }

      return {
        acknowledged,
        insertedId: String(insertedId),
      };
    },
    updateVendor: async (_, args, { dataSources }) => {
      const {
        id,
        name,
        description,
        phone,
        email,
        address,
        city,
        state,
        zip,
        country,
        website,
        events,
      } = args;

      const eventToUpdate = await dataSources.db
        .collection<VendorModel>("vendors")
        .findOne({ _id: new ObjectId(id) });

      if (!eventToUpdate) {
        throw new Error(`Vendor with ID ${id} not found`);
      }

      const { acknowledged } = await dataSources.db
        .collection("vendors")
        .updateOne(
          { _id: new ObjectId(id) },
          {
            $set: {
              name: name ?? eventToUpdate.name,
              description: description ?? eventToUpdate.description,
              phone: phone ?? eventToUpdate.phone,
              email: email ?? eventToUpdate.email,
              address: address ?? eventToUpdate.address,
              city: city ?? eventToUpdate.city,
              state: state ?? eventToUpdate.state,
              zip: zip ?? eventToUpdate.zip,
              country: country ?? eventToUpdate.country,
              website: website ?? eventToUpdate.website,
            },
            $addToSet: {
              events: { $each: events ?? eventToUpdate.events },
            },
          }
        );

      if (!acknowledged) {
        throw new Error("Unable to update vendor");
      }

      return {
        acknowledged,
      };
    },
    deleteVendor: async (_, args, context: Context) => {
      const { id } = args;

      const vendorId = new ObjectId(id);

      const vendorToDelete = await context.dataSources.db
        .collection<Vendor>("vendors")
        .findOne({ _id: vendorId });
      if (!vendorToDelete) {
        throw new Error(`Vendor with ID ${id} not found`);
      }

      context.dataSources.db
        .collection<Vendor>("vendors")
        .deleteOne({ _id: vendorId });

      return vendorToDelete;
    },
    createVenue: async (_, args, { dataSources }) => {
      // Insert venue to the database.
      const { acknowledged, insertedId } = await dataSources.db
        .collection<Venue>("venues")
        .insertOne(args as Venue);

      if (!acknowledged) {
        throw new Error("Unable to insert venue");
      }

      return {
        acknowledged,
        insertedId: String(insertedId),
      };
    },
    updateVenue: async (_, args, { dataSources }) => {
      const {
        id,
        name,
        description,
        phone,
        email,
        address,
        city,
        state,
        zip,
        country,
        website,
        events,
      } = args;

      const venueToUpdate = await dataSources.db
        .collection<VenueModel>("venues")
        .findOne({ _id: new ObjectId(id) });

      if (!venueToUpdate) {
        throw new Error(`Venue with ID ${id} not found`);
      }

      const { acknowledged } = await dataSources.db
        .collection("venues")
        .updateOne(
          { _id: new ObjectId(id) },
          {
            $set: {
              name: name ?? venueToUpdate.name,
              description: description ?? venueToUpdate.description,
              phone: phone ?? venueToUpdate.phone,
              email: email ?? venueToUpdate.email,
              address: address ?? venueToUpdate.address,
              city: city ?? venueToUpdate.city,
              state: state ?? venueToUpdate.state,
              zip: zip ?? venueToUpdate.zip,
              country: country ?? venueToUpdate.country,
              website: website ?? venueToUpdate.website,
            },
            $addToSet: {
              events: { $each: events ?? venueToUpdate.events },
            },
          }
        );

      if (!acknowledged) {
        throw new Error("Unable to update venue");
      }

      return {
        acknowledged,
      };
    },
    deleteVenue: async (_, args, { dataSources }) => {
      const { id } = args;

      const venueToDelete = await dataSources.db
        .collection<Venue>("venues")
        .findOne({ _id: new ObjectId(id) });
      if (!venueToDelete) {
        throw new Error(`Venue with ID ${id} not found`);
      }

      await dataSources.db
        .collection<Venue>("venues")
        .deleteOne({ _id: new ObjectId(id) });

      return venueToDelete;
    },
    createUser: async (_, args, { dataSources }) => {
      // Implement the logic to create a new user
      // Save the new user to the database
      const { acknowledged, insertedId } = await dataSources.db
        .collection("users")
        .insertOne(args);
      return {
        acknowledged,
        insertedId: String(insertedId),
      };
    },
    updateUser: async (_, args, { dataSources }) => {
      const { id, ...updateData } = args;

      await dataSources.db
        .collection<User>("users")
        .updateOne({ _id: new ObjectId(id) }, { $set: { updateData } });

      const updatedUser = await dataSources.db
        .collection<User>("users")
        .findOne({ _id: new ObjectId(id) });

      if (!updatedUser) {
        throw new Error(`User with ID ${id} not found`);
      }

      return updatedUser;
    },
    deleteUser: async (_, args, { dataSources }) => {
      const { id } = args;

      const userToDelete = await dataSources.db
        .collection<User>("users")
        .findOne({ _id: new ObjectId(id) });
      if (!userToDelete) {
        throw new Error(`User with ID ${id} not found`);
      }

      await dataSources.db
        .collection<User>("users")
        .deleteOne({ _id: new ObjectId(id) });

      return userToDelete;
    },
  },
};

export default resolvers;
