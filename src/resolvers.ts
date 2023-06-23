import { Resolvers, Event, Vendor } from "./__generated__/resolver-types";
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
  },
};

export default resolvers;
