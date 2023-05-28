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
      if (!insuranceFormInput)
        throw new Error("No insurance form input provided.");
      if (!db) throw new Error("Could not connect to database.");
      const response = await db
        .collection("insurance_forms")
        .insertOne(insuranceFormInput);
      if (!response || !response.acknowledged)
        throw new Error("Failed to insert insurance form.");
      return {
        message: "Successfully inserted insurance form.",
        id: response.insertedId.toString(),
      };
    },
    updateInsuranceForm: async (
      _,
      { id, insuranceFormInput },
      { dataSources: { db } }
    ) => {
      if (!id) throw new Error("No insurance form ID provided.");
      if (!insuranceFormInput)
        throw new Error("No insurance form input provided.");
      if (!db) throw new Error("Could not connect to database.");
      const response = await db
        .collection("insurance_forms")
        .updateOne({ _id: new ObjectId(id) }, { $set: insuranceFormInput });
      if (!response || !response.acknowledged)
        throw new Error("Failed to update insurance form.");
      return {
        message: "Successfully updated insurance form.",
      };
    },
    deleteInsuranceForm: async (_, { id }, { dataSources: { db } }) => {
      if (!id) throw new Error("No insurance form ID provided.");
      if (!db) throw new Error("Failed to connect to database.");
      const response = await db
        .collection("insurance_forms")
        .deleteOne({ _id: new ObjectId(id) });
      if (!response || !response.acknowledged)
        throw new Error("Failed to delete insurance form.");
      return {
        message: "Successfully deleted insurance form.",
      };
    },
    insertFinancialServiceForm: async (
      _,
      { financialServiceFormInput },
      { dataSources: { db } }
    ) => {
      if (!financialServiceFormInput)
        throw new Error("No financial service form input provided.");
      if (!db) throw new Error("Could not connect to database.");
      const response = await db
        .collection("financial_service_forms")
        .insertOne(financialServiceFormInput);
      if (!response || !response.acknowledged)
        throw new Error("Failed to insert financial service form.");
      return {
        message: "Successfully inserted financial service form.",
        id: response.insertedId.toString(),
      };
    },
    updateFinancialServiceForm: async (
      _,
      { id, financialServiceFormInput },
      { dataSources: { db } }
    ) => {
      if (!id) throw new Error("No financial service form ID provided.");
      if (!financialServiceFormInput)
        throw new Error("No financial service form input provided.");
      if (!db) throw new Error("Could not connect to database.");
      const response = await db
        .collection("financial_service_forms")
        .updateOne(
          { _id: new ObjectId(id) },
          { $set: financialServiceFormInput }
        );
      if (!response || !response.acknowledged)
        throw new Error("Could not update financial service form.");
      return {
        message: "Successfully updated financial service form.",
      };
    },
    deleteFinancialServiceForm: async (_, { id }, { dataSources: { db } }) => {
      if (!id) throw new Error("No financial service form ID provided.");
      if (!db) throw new Error("Could not connect to database.");
      const response = await db
        .collection("financial_service_forms")
        .deleteOne({ _id: new ObjectId(id) });
      if (!response || !response.acknowledged)
        throw new Error("Failed to delete financial service form.");
      return {
        message: "Successfully deleted financial service form.",
      };
    },
    insertAgent: async (_, { agentInput }, { dataSources: { db } }) => {
      if (!agentInput) throw new Error("No agent input provided.");
      if (!db) throw new Error("Could not connect to database.");
      const response = await db.collection("agents").insertOne(agentInput);
      if (!response || !response.acknowledged)
        throw new Error("Failed to insert agent.");
      return {
        message: "Successfully inserted agent.",
        id: response.insertedId.toString(),
      };
    },
    updateAgent: async (_, { id, agentInput }, { dataSources: { db } }) => {
      if (!id) throw new Error("No agent ID provided.");
      if (!agentInput) throw new Error("No agent input provided.");
      if (!db) throw new Error("Could not connect to database.");
      const response = await db
        .collection("agents")
        .updateOne({ _id: new ObjectId(id) }, { $set: agentInput });
      if (!response || !response.acknowledged)
        throw new Error("Failed to update agent.");
      return {
        message: "Successfully updated agent.",
      };
    },
    deleteAgent: async (_, { id }, { dataSources: { db } }) => {
      if (!id) throw new Error("No agent ID provided.");
      if (!db) throw new Error("Could not connect to database.");
      const response = await db
        .collection("agents")
        .deleteOne({ _id: new ObjectId(id) });
      if (!response || !response.acknowledged)
        throw new Error("Failed to delete agent.");
      return {
        message: "Successfully deleted agent.",
      };
    },
  },
};
