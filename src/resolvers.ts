import {
  Resolvers,
  Event,
  Vendor,
  Venue,
  User,
} from "./__generated__/resolver-types.js";
import { EventModel, UserModel, VendorModel, VenueModel } from "./db.js";
import { Context } from "./server.js";
import { ObjectId } from "mongodb";

export const resolvers: Resolvers = {
  Query: {
    events: async (_, __, { dataSources }) => {
      const events = await dataSources.db
        .collection("events")
        .aggregate([
          {
            $lookup: {
              from: "venues",
              localField: "venue",
              foreignField: "_id",
              as: "venue",
            },
          },
          {
            $unwind: {
              path: "$venue",
              preserveNullAndEmptyArrays: true,
            },
          },
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
          venue: event.venue && {
            ...event.venue,
            id: String(event.venue._id),
          },
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
              from: "venues",
              localField: "venue",
              foreignField: "_id",
              as: "venue",
            },
          },
          {
            $unwind: {
              path: "$venue",
              preserveNullAndEmptyArrays: true,
            },
          },
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
        venue: event[0].venue && {
          ...event[0].venue,
          id: String(event[0].venue._id),
        },
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
      const { title, description, datetime, venue, vendors, users } = args;

      // Insert event into the database.
      const { acknowledged, insertedId } = await context.dataSources.db
        .collection("events")
        .insertOne({
          title,
          description,
          datetime,
          venue: venue ? new ObjectId(venue) : null,
          vendors: vendors?.map((vendorId) => new ObjectId(vendorId as string)),
          users: users?.map((userId) => new ObjectId(userId as string)),
        });

      if (!acknowledged) {
        throw new Error("Unable to insert event");
      }

      if (venue) {
        const { acknowledged: venueAcknowledged } = await context.dataSources.db
          .collection("venues")
          .updateOne(
            { _id: new ObjectId(venue) },
            {
              $addToSet: {
                events: {
                  $each: [insertedId],
                },
              },
            }
          );

        if (!venueAcknowledged) {
          throw new Error("Unable to update venue");
        }
      }

      if (vendors?.length) {
        const vendorUpdate: any = {
          $addToSet: {
            events: {
              $each: [insertedId],
            },
          },
        };

        // Update vendors to include event.
        const { acknowledged: vendorAcknowledged } =
          await context.dataSources.db.collection("vendors").updateMany(
            {
              _id: {
                $in: vendors?.map((vendorId) => new ObjectId(vendorId ?? "")),
              },
            },
            vendorUpdate
          );

        if (!vendorAcknowledged) {
          throw new Error("Unable to update vendors");
        }
      }

      if (users?.length) {
        const userUpdate: any = {
          $addToSet: {
            events: {
              $each: [insertedId],
            },
          },
        };

        // Update users to include event.
        const { acknowledged: userAcknowledged } = await context.dataSources.db
          .collection("users")
          .updateMany(
            {
              _id: {
                $in: users?.map((userId) => new ObjectId(userId ?? "")),
              },
            },
            userUpdate
          );

        if (!userAcknowledged) {
          throw new Error("Unable to update users");
        }
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
                  : eventToUpdate.vendors ?? [],
              },
              users: {
                $each: users?.length
                  ? users?.map((userId) => new ObjectId(userId ?? ""))
                  : eventToUpdate.users ?? [],
              },
            },
          }
        );

      if (!acknowledged) {
        throw new Error("Unable to update event");
      }

      if (venue) {
        const { acknowledged: venueAcknowledged } = await dataSources.db
          .collection("venues")
          .updateOne(
            { _id: new ObjectId(venue ?? "") },
            {
              $addToSet: {
                events: {
                  $each: [new ObjectId(id)],
                },
              },
            }
          );

        if (!venueAcknowledged) {
          throw new Error("Unable to update venue");
        }
      }

      if (vendors?.length) {
        const vendorUpdate: any = {
          $addToSet: {
            events: {
              $each: [new ObjectId(id)],
            },
          },
        };

        // Update vendors to include event.
        const { acknowledged: vendorAcknowledged } = await dataSources.db
          .collection("vendors")
          .updateMany(
            {
              _id: {
                $in: vendors?.map(
                  (vendorId) => new ObjectId(vendorId as string)
                ),
              },
            },
            vendorUpdate
          );

        if (!vendorAcknowledged) {
          throw new Error("Unable to update vendors");
        }
      }

      if (users?.length) {
        const userUpdate: any = {
          $addToSet: {
            events: {
              $each: [new ObjectId(id)],
            },
          },
        };

        // Update users to include event.
        const { acknowledged: userAcknowledged } = await dataSources.db
          .collection("users")
          .updateMany(
            {
              _id: {
                $in: users?.map((userId) => new ObjectId(userId as string)),
              },
            },
            userUpdate
          );

        if (!userAcknowledged) {
          throw new Error("Unable to update users");
        }
      }

      return {
        acknowledged,
      };
    },
    deleteEvent: async (_, args, { dataSources }) => {
      const { id } = args;

      const { acknowledged } = await dataSources.db
        .collection<Event>("events")
        .deleteOne({ _id: new ObjectId(id) });

      if (!acknowledged) {
        throw new Error(`Event with ID ${id} not found`);
      }

      const venueDelete: any = {
        $pull: {
          events: new ObjectId(id),
        },
      };

      // Delete event id from venues.
      const { acknowledged: venueAcknowledged } = await dataSources.db
        .collection("venues")
        .updateMany({ events: new ObjectId(id) }, venueDelete);

      if (!venueAcknowledged) {
        throw new Error("Unable to update venues");
      }

      const vendorDelete: any = {
        $pull: {
          events: new ObjectId(id),
        },
      };

      // Delete event id from vendors.
      const { acknowledged: vendorAcknowledged } = await dataSources.db
        .collection("vendors")
        .updateMany({ events: new ObjectId(id) }, vendorDelete);

      if (!vendorAcknowledged) {
        throw new Error("Unable to update vendors");
      }

      const userDelete: any = {
        $pull: {
          events: new ObjectId(id),
        },
      };

      // Delete event id from users.
      const { acknowledged: userAcknowledged } = await dataSources.db
        .collection("users")
        .updateMany({ events: new ObjectId(id) }, userDelete);

      if (!userAcknowledged) {
        throw new Error("Unable to update users");
      }

      return {
        acknowledged,
      };
    },
    createVendor: async (_, args, { dataSources }) => {
      const {
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

      // Insert vendor to the database.
      const { acknowledged, insertedId } = await dataSources.db
        .collection("vendors")
        .insertOne({
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
          events: events?.map((eventId) => new ObjectId(eventId as string)),
        });

      if (!acknowledged) {
        throw new Error("Unable to insert vendor");
      }

      if (events?.length) {
        const eventUpdate: any = {
          $addToSet: {
            vendors: {
              $each: [insertedId],
            },
          },
        };

        // Update events to include vendor.
        const { acknowledged: eventAcknowledged } = await dataSources.db
          .collection("events")
          .updateMany(
            {
              _id: {
                $in: events?.map((eventId) => new ObjectId(eventId as string)),
              },
            },
            eventUpdate
          );

        if (!eventAcknowledged) {
          throw new Error("Unable to update events");
        }
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
              events: { $each: events ?? eventToUpdate.events ?? [] },
            },
          }
        );

      if (!acknowledged) {
        throw new Error("Unable to update vendor");
      }

      if (events?.length) {
        const eventUpdate: any = {
          $addToSet: {
            vendors: {
              $each: [new ObjectId(id)],
            },
          },
        };

        // Update events to include vendor.
        const { acknowledged: eventAcknowledged } = await dataSources.db
          .collection("events")
          .updateMany(
            {
              _id: {
                $in: events?.map((eventId) => new ObjectId(eventId as string)),
              },
            },
            eventUpdate
          );

        if (!eventAcknowledged) {
          throw new Error("Unable to update events");
        }
      }

      return {
        acknowledged,
      };
    },
    deleteVendor: async (_, args, context: Context) => {
      const { id } = args;

      const { acknowledged } = await context.dataSources.db
        .collection<Vendor>("vendors")
        .deleteOne({ _id: new ObjectId(id) });

      if (!acknowledged) {
        throw new Error(`Vendor with ID ${id} not found`);
      }

      const eventDelete: any = {
        $pull: {
          vendors: new ObjectId(id),
        },
      };

      // Delete vendor id from events.
      const { acknowledged: eventAcknowledged } = await context.dataSources.db
        .collection("events")
        .updateMany({ vendors: new ObjectId(id) }, eventDelete);

      if (!eventAcknowledged) {
        throw new Error("Unable to update events");
      }

      return {
        acknowledged,
      };
    },
    createVenue: async (_, args, { dataSources }) => {
      const {
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

      // Insert venue to the database.
      const { acknowledged, insertedId } = await dataSources.db
        .collection("venues")
        .insertOne({
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
          events: events?.map((eventId) => new ObjectId(eventId as string)),
        });

      if (!acknowledged) {
        throw new Error("Unable to insert venue");
      }

      if (events?.length) {
        const eventUpdate: any = {
          $addToSet: {
            venues: {
              $each: [insertedId],
            },
          },
        };

        // Update events to include venue.
        const { acknowledged: eventAcknowledged } = await dataSources.db
          .collection("events")
          .updateMany(
            {
              _id: {
                $in: events?.map((eventId) => new ObjectId(eventId as string)),
              },
            },
            eventUpdate
          );

        if (!eventAcknowledged) {
          throw new Error("Unable to update events");
        }
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

      if (events?.length) {
        const eventUpdate: any = {
          $addToSet: {
            venues: {
              $each: [new ObjectId(id)],
            },
          },
        };

        // Update events to include venue.
        const { acknowledged: eventAcknowledged } = await dataSources.db
          .collection("events")
          .updateMany(
            {
              _id: {
                $in: events?.map((eventId) => new ObjectId(eventId as string)),
              },
            },
            eventUpdate
          );

        if (!eventAcknowledged) {
          throw new Error("Unable to update events");
        }
      }

      return {
        acknowledged,
      };
    },
    deleteVenue: async (_, args, { dataSources }) => {
      const { id } = args;

      const { acknowledged } = await dataSources.db
        .collection<Venue>("venues")
        .deleteOne({ _id: new ObjectId(id) });

      if (!acknowledged) {
        throw new Error(`Venue with ID ${id} not found`);
      }

      const eventDelete: any = {
        $pull: {
          venues: new ObjectId(id),
        },
      };

      // Delete venue id from events.
      const { acknowledged: eventAcknowledged } = await dataSources.db
        .collection("events")
        .updateMany({ venues: new ObjectId(id) }, eventDelete);

      if (!eventAcknowledged) {
        throw new Error("Unable to update events");
      }

      return {
        acknowledged,
      };
    },
    createUser: async (_, args, { dataSources }) => {
      const { events } = args;

      const { acknowledged, insertedId } = await dataSources.db
        .collection("users")
        .insertOne({
          ...args,
          events: events?.map((eventId) => new ObjectId(eventId as string)),
        });

      return {
        acknowledged,
        insertedId: String(insertedId),
      };
    },
    updateUser: async (_, args, { dataSources }) => {
      const { id, role, fname, lname, phone, email, password, events } = args;

      const userToUpdate = await dataSources.db
        .collection<UserModel>("users")
        .findOne({ _id: new ObjectId(id) });

      if (!userToUpdate) {
        throw new Error(`User with ID ${id} not found`);
      }

      const { acknowledged } = await dataSources.db
        .collection("users")
        .updateOne(
          { _id: new ObjectId(id) },
          {
            $set: {
              role: role ?? userToUpdate.role,
              fname: fname ?? userToUpdate.fname,
              lname: lname ?? userToUpdate.lname,
              phone: phone ?? userToUpdate.phone,
              email: email ?? userToUpdate.email,
              password: password ?? userToUpdate.password,
            },
            $addToSet: {
              events: { $each: events ?? userToUpdate.events ?? [] },
            },
          }
        );

      if (!acknowledged) {
        throw new Error("Unable to update user");
      }

      if (events?.length) {
        const eventUpdate: any = {
          $addToSet: {
            users: {
              $each: [new ObjectId(id)],
            },
          },
        };

        // Update events to include user.
        const { acknowledged: eventAcknowledged } = await dataSources.db
          .collection("events")
          .updateMany(
            {
              _id: {
                $in: events?.map((eventId) => new ObjectId(eventId as string)),
              },
            },
            eventUpdate
          );

        if (!eventAcknowledged) {
          throw new Error("Unable to update events");
        }
      }

      return {
        acknowledged,
      };
    },
    deleteUser: async (_, args, { dataSources }) => {
      const { id } = args;

      const { acknowledged } = await dataSources.db
        .collection<User>("users")
        .deleteOne({ _id: new ObjectId(id) });

      if (!acknowledged) {
        throw new Error(`User with ID ${id} not found`);
      }

      const eventDelete: any = {
        $pull: {
          users: new ObjectId(id),
        },
      };

      // Delete user id from events.
      const { acknowledged: eventAcknowledged } = await dataSources.db
        .collection("events")
        .updateMany({ users: new ObjectId(id) }, eventDelete);

      if (!eventAcknowledged) {
        throw new Error("Unable to update events");
      }

      return {
        acknowledged,
      };
    },
  },
};

export default resolvers;
