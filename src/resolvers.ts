import { Resolvers } from "./__generated__/resolver-types";

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
  Mutation: {},
};
