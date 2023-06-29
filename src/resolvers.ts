import { Resolvers, Event, Vendor, Venue, User, Role } from "./__generated__/resolver-types";
import { Context } from "./server";
import { ObjectId } from "mongodb";

export const resolvers: Resolvers = {
  Query: {
    events: async (_, __, { dataSources }) => {
      return [
        {
          id: "1",
          description: "test",
          title: "test",
          datetime: "test",
          venue: "test",
          users: [],
          vendors: [],
        },
      ];
    },
  },
  Mutation: {
    createEvent: (_, args, context: Context) => {
      // Implement the logic to create a new event
      const newEvent: Event = {
        id: "1",
        title: args.title,
        description: args.description,
        datetime: args.datetime,
        venue: args.venue,
        vendors: [],
        users: [],
      };
      return newEvent;
    },
    updateEvent: (_, args, { dataSources }) => {

      const { id, title, description, datetime, venue } = args;

      dataSources.db.collection<Event>("events").updateOne(
        { _id: new ObjectId(id) },
        { $set: { title, description, datetime, venue } }
      );

      return { id, title, description, datetime, venue, vendors: [], users: [] };
    },
    deleteEvent: async (_, args, { dataSources }) => {
      const { id } = args;

      const eventToDelete = await dataSources.db.collection<Event>("events").findOne({ _id: new ObjectId(id) });
      if (!eventToDelete) {
        throw new Error(`Event with ID ${id} not found`);
      }

      await dataSources.db.collection<Event>("events").deleteOne({ _id: new ObjectId(id) });

      return eventToDelete;
    },
    createVendor: (_, args, { dataSources }) => {
      // Implement the logic to create a new vendor
      const newVendor: Vendor = {
        id: "1",
        name: args.name,
        address: "",
        city: "",
        country: "",
        description: "",
        email: "",
        phone: "",
        state: "",
        website: "",
        zip: ""
      };
      // Save the new vendor to the database
      dataSources.db.collection<Vendor>("vendors").insertOne(newVendor);
      return newVendor;
    },
    updateVendor: async (_, args, { dataSources }) => {
      const { id, ...updateData } = args;

      await dataSources.db.collection<Vendor>("vendors").updateOne(
        { _id: new ObjectId(id) },
        { $set: { updateData } }
      );

      const updatedVendor = await dataSources.db.collection<Vendor>("vendors").findOne({ _id: new ObjectId(id) });

      if (!updatedVendor) {
        throw new Error(`Vendor with ID ${id} not found`);
      }

      return updatedVendor;
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
    createVenue: (_, args, { dataSources }) => {
      // Implement the logic to create a new venue
      const newVenue: Venue = {
        id: "1",
        name: args.name,
        address: "",
        city: "",
        country: "",
        description: "",
        email: "",
        phone: "",
        state: "",
        website: "",
        zip: ""
      };
      // Save the new venue to the database
      dataSources.db.collection<Venue>("venues").insertOne(newVenue);
      return newVenue;
    },
    updateVenue: async (_, args, { dataSources }) => {
      const { id, ...updateData } = args;

      await dataSources.db.collection<Venue>("venues").updateOne(
        { _id: new ObjectId(id) },
        { $set: { updateData } }
      );

      const updatedVenue = await dataSources.db.collection<Venue>("venues").findOne({ _id: new ObjectId(id) });

      if (!updatedVenue) {
        throw new Error(`Venue with ID ${id} not found`);
      }

      return updatedVenue;
    },
    deleteVenue: async (_, args, { dataSources }) => {
      const { id } = args;

      const venueToDelete = await dataSources.db.collection<Venue>("venues").findOne({ _id: new ObjectId(id) });
      if (!venueToDelete) {
        throw new Error(`Venue with ID ${id} not found`);
      }

      await dataSources.db.collection<Venue>("venues").deleteOne({ _id: new ObjectId(id) });

      return venueToDelete;
    },
    createUser: (_, args, { dataSources }) => {
      // Implement the logic to create a new user
      const newUser: User = {
        id: "1",
        role: Role.User,
        fname: args.fname,
        lname: args.lname,
        phone: "",
        email: "",
        password: ""
      };
      // Save the new user to the database
      dataSources.db.collection<User>("users").insertOne(newUser);
      return newUser;
    },
    updateUser: async (_, args, { dataSources }) => {
      const { id, ...updateData } = args;

      await dataSources.db.collection<User>("users").updateOne(
        { _id: new ObjectId(id) },
        { $set: { updateData  } }
      );

      const updatedUser = await dataSources.db.collection<User>("users").findOne({ _id: new ObjectId(id) });

      if (!updatedUser) {
        throw new Error(`User with ID ${id} not found`);
      }

      return updatedUser;
    },
    deleteUser: async (_, args, { dataSources }) => {
      const { id } = args;

      const userToDelete = await dataSources.db.collection<User>("users").findOne({ _id: new ObjectId(id) });
      if (!userToDelete) {
        throw new Error(`User with ID ${id} not found`);
      }

      await dataSources.db.collection<User>("users").deleteOne({ _id: new ObjectId(id) });

      return userToDelete;
    },
  },
};

export default resolvers;
