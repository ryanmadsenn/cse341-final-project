import { ObjectId } from "mongodb";
import {
  Agent,
  FinancialServiceForm,
  InsuranceForm,
  Resolvers,
} from "./__generated__/resolver-types";
import { InsuranceForm as InsuranceFormModel } from "./models/InsuranceForm";
import { FinancialServiceForm as FinancialServiceFormModel } from "./models/FinancialServiceForm";
import { Agent as AgentModel } from "./models/Agent";

export const resolvers: Resolvers = {
  Query: {
    getInsuranceForms: async (_, __, { dataSources: { db } }) => {
      if (!db) throw new Error("Could not connect to database.");
      const response = (await db
        .collection("insurance_forms")
        .find()
        .toArray()) as InsuranceFormModel[];
      if (!response) throw new Error("Could not get insurance forms.");
      return response as InsuranceForm[];
    },
    getInsuranceForm: async (_, { id }, { dataSources: { db } }) => {
      if (!id) throw new Error("No insurance form id.");
      if (!db) throw new Error("Could not connect to database.");
      const response = (await db
        .collection("insurance_forms")
        .findOne({ _id: new ObjectId(id) })) as InsuranceFormModel;
      if (!response) throw new Error("Could not get insurance form.");
      return response as InsuranceForm;
    },
    getFinancialServiceForms: async (_, __, { dataSources: { db } }) => {
      if (!db) throw new Error("Could not connect to database.");
      const response = (await db
        .collection("financial_service_forms")
        .find()
        .toArray()) as FinancialServiceFormModel[];
      if (!response) throw new Error("Could not get financial service forms.");
      return response as FinancialServiceForm[];
    },
    getFinancialServiceForm: async (_, { id }, { dataSources: { db } }) => {
      if (!id) throw new Error("No financial service form id.");
      if (!db) throw new Error("Could not connect to database.");
      const response = (await db
        .collection("financial_service_forms")
        .findOne({ _id: new ObjectId(id) })) as FinancialServiceFormModel;
      if (!response) throw new Error("Could not get financial service form.");
      return response as FinancialServiceForm;
    },
    getAgents: async (_, __, { dataSources: { db } }) => {
      if (!db) throw new Error("Could not connect to database.");
      const response = (await db
        .collection("agents")
        .find()
        .toArray()) as AgentModel[];
      if (!response) throw new Error("Could not get agents.");
      return response as Agent[];
    },
    getAgent: async (_, { id }, { dataSources: { db } }) => {
      if (!id) throw new Error("No agent id.");
      if (!db) throw new Error("Could not connect to database.");
      const response = (await db
        .collection("agents")
        .findOne({ _id: new ObjectId(id) })) as AgentModel;
      if (!response) throw new Error("Could not get agent.");
      return response as Agent;
    },
  },
  Mutation: {
    insertInsuranceForm: async (
      _,
      { insuranceFormInput },
      { dataSources: { db } }
    ) => {
      if (!insuranceFormInput) throw new Error("No insurance form input.");
      if (!db) throw new Error("Could not connect to database.");
      const response = await db
        .collection("insurance_forms")
        .insertOne(insuranceFormInput);
      if (!response || !response.acknowledged)
        throw new Error("Could not insert insurance form.");
      return {
        message: "Successfully inserted insurance form.",
        id: response.insertedId.toString(),
      };
    },
    insertFinancialServiceForm: async (
      _,
      { financialServiceFormInput },
      { dataSources: { db } }
    ) => {
      if (!financialServiceFormInput)
        throw new Error("No financial service form input.");
      if (!db) throw new Error("Could not connect to database.");
      const response = await db
        .collection("financial_service_forms")
        .insertOne(financialServiceFormInput);
      if (!response || !response.acknowledged)
        throw new Error("Could not insert financial service form.");
      return {
        message: "Successfully inserted financial service form.",
        id: response.insertedId.toString(),
      };
    },
    insertAgent: async (_, { agentInput }, { dataSources: { db } }) => {
      if (!agentInput) throw new Error("No agent input.");
      if (!db) throw new Error("Could not connect to database.");
      const response = await db.collection("agents").insertOne(agentInput);
      if (!response || !response.acknowledged)
        throw new Error("Could not insert agent.");
      return {
        message: "Successfully inserted agent.",
        id: response.insertedId.toString(),
      };
    },
  },
};
