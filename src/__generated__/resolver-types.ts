import { GraphQLResolveInfo } from 'graphql';
import { Context } from '../server';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Agent = {
  __typename?: 'Agent';
  _id?: Maybe<Scalars['ID']>;
  description: Scalars['String'];
  fname: Scalars['String'];
  lname: Scalars['String'];
};

export type AgentInput = {
  description: Scalars['String'];
  fname: Scalars['String'];
  lname: Scalars['String'];
};

export type AgentUpdateInput = {
  description?: InputMaybe<Scalars['String']>;
  fname?: InputMaybe<Scalars['String']>;
  lname?: InputMaybe<Scalars['String']>;
};

export type BaseForm = {
  _id?: Maybe<Scalars['ID']>;
  addressLine1: Scalars['String'];
  addressLine2?: Maybe<Scalars['String']>;
  beneficiary: Scalars['String'];
  city: Scalars['String'];
  coverageAmount: Scalars['String'];
  coverageType: Scalars['String'];
  dob: Scalars['String'];
  email: Scalars['String'];
  fname: Scalars['String'];
  lname: Scalars['String'];
  phone: Scalars['String'];
  state: Scalars['String'];
  zip: Scalars['Int'];
};

export type DeletionResponse = {
  __typename?: 'DeletionResponse';
  message: Scalars['String'];
};

export type FinancialServiceForm = BaseForm & {
  __typename?: 'FinancialServiceForm';
  _id?: Maybe<Scalars['ID']>;
  addressLine1: Scalars['String'];
  addressLine2?: Maybe<Scalars['String']>;
  beneficiary: Scalars['String'];
  city: Scalars['String'];
  coverageAmount: Scalars['String'];
  coverageType: Scalars['String'];
  dob: Scalars['String'];
  email: Scalars['String'];
  estimatedNetWorth: Scalars['Int'];
  fname: Scalars['String'];
  lname: Scalars['String'];
  phone: Scalars['String'];
  retirementDate: Scalars['String'];
  state: Scalars['String'];
  zip: Scalars['Int'];
};

export type FinancialServiceFormInput = {
  addressLine1: Scalars['String'];
  addressLine2?: InputMaybe<Scalars['String']>;
  beneficiary: Scalars['String'];
  city: Scalars['String'];
  coverageAmount: Scalars['String'];
  coverageType: Scalars['String'];
  dob: Scalars['String'];
  email: Scalars['String'];
  estimatedNetWorth: Scalars['Int'];
  fname: Scalars['String'];
  lname: Scalars['String'];
  phone: Scalars['String'];
  retirementDate: Scalars['String'];
  state: Scalars['String'];
  zip: Scalars['Int'];
};

export type FinancialServiceFormUpdateInput = {
  addressLine1?: InputMaybe<Scalars['String']>;
  addressLine2?: InputMaybe<Scalars['String']>;
  beneficiary?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  coverageAmount?: InputMaybe<Scalars['String']>;
  coverageType?: InputMaybe<Scalars['String']>;
  dob?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  estimatedNetWorth?: InputMaybe<Scalars['Int']>;
  fname?: InputMaybe<Scalars['String']>;
  lname?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  retirementDate?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  zip?: InputMaybe<Scalars['Int']>;
};

export type InsertionResponse = {
  __typename?: 'InsertionResponse';
  id: Scalars['ID'];
  message: Scalars['String'];
};

export type InsuranceForm = BaseForm & {
  __typename?: 'InsuranceForm';
  _id?: Maybe<Scalars['ID']>;
  addressLine1: Scalars['String'];
  addressLine2?: Maybe<Scalars['String']>;
  beneficiary: Scalars['String'];
  city: Scalars['String'];
  coverageAmount: Scalars['String'];
  coverageType: Scalars['String'];
  dob: Scalars['String'];
  email: Scalars['String'];
  fname: Scalars['String'];
  healthRating: Scalars['String'];
  lname: Scalars['String'];
  medicalConditions: Array<Maybe<Scalars['String']>>;
  phone: Scalars['String'];
  state: Scalars['String'];
  tobaccoUse: Scalars['Boolean'];
  zip: Scalars['Int'];
};

export type InsuranceFormInput = {
  addressLine1: Scalars['String'];
  addressLine2?: InputMaybe<Scalars['String']>;
  beneficiary: Scalars['String'];
  city: Scalars['String'];
  coverageAmount: Scalars['String'];
  coverageType: Scalars['String'];
  dob: Scalars['String'];
  email: Scalars['String'];
  fname: Scalars['String'];
  healthRating: Scalars['String'];
  lname: Scalars['String'];
  medicalConditions: Array<InputMaybe<Scalars['String']>>;
  phone: Scalars['String'];
  state: Scalars['String'];
  tobaccoUse: Scalars['Boolean'];
  zip: Scalars['Int'];
};

export type InsuranceFormUpdateInput = {
  addressLine1?: InputMaybe<Scalars['String']>;
  addressLine2?: InputMaybe<Scalars['String']>;
  beneficiary?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  coverageAmount?: InputMaybe<Scalars['String']>;
  coverageType?: InputMaybe<Scalars['String']>;
  dob?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  fname?: InputMaybe<Scalars['String']>;
  healthRating?: InputMaybe<Scalars['String']>;
  lname?: InputMaybe<Scalars['String']>;
  medicalConditions?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  phone?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  tobaccoUse?: InputMaybe<Scalars['Boolean']>;
  zip?: InputMaybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  deleteAgent?: Maybe<DeletionResponse>;
  deleteFinancialServiceForm?: Maybe<DeletionResponse>;
  deleteInsuranceForm?: Maybe<DeletionResponse>;
  insertAgent?: Maybe<InsertionResponse>;
  insertFinancialServiceForm?: Maybe<InsertionResponse>;
  insertInsuranceForm?: Maybe<InsertionResponse>;
  updateAgent?: Maybe<UpdateResponse>;
  updateFinancialServiceForm?: Maybe<UpdateResponse>;
  updateInsuranceForm?: Maybe<UpdateResponse>;
};


export type MutationDeleteAgentArgs = {
  id: Scalars['String'];
};


export type MutationDeleteFinancialServiceFormArgs = {
  id: Scalars['String'];
};


export type MutationDeleteInsuranceFormArgs = {
  id: Scalars['String'];
};


export type MutationInsertAgentArgs = {
  agentInput?: InputMaybe<AgentInput>;
};


export type MutationInsertFinancialServiceFormArgs = {
  financialServiceFormInput?: InputMaybe<FinancialServiceFormInput>;
};


export type MutationInsertInsuranceFormArgs = {
  insuranceFormInput?: InputMaybe<InsuranceFormInput>;
};


export type MutationUpdateAgentArgs = {
  agentInput?: InputMaybe<AgentUpdateInput>;
  id: Scalars['String'];
};


export type MutationUpdateFinancialServiceFormArgs = {
  financialServiceFormInput?: InputMaybe<FinancialServiceFormUpdateInput>;
  id: Scalars['String'];
};


export type MutationUpdateInsuranceFormArgs = {
  id: Scalars['String'];
  insuranceFormInput?: InputMaybe<InsuranceFormUpdateInput>;
};

export type Query = {
  __typename?: 'Query';
  getAgent?: Maybe<Agent>;
  getAgents?: Maybe<Array<Maybe<Agent>>>;
  getFinancialServiceForm?: Maybe<FinancialServiceForm>;
  getFinancialServiceForms?: Maybe<Array<Maybe<FinancialServiceForm>>>;
  getInsuranceForm?: Maybe<InsuranceForm>;
  getInsuranceForms?: Maybe<Array<Maybe<InsuranceForm>>>;
};


export type QueryGetAgentArgs = {
  id: Scalars['String'];
};


export type QueryGetFinancialServiceFormArgs = {
  id: Scalars['String'];
};


export type QueryGetInsuranceFormArgs = {
  id: Scalars['String'];
};

export type UpdateResponse = {
  __typename?: 'UpdateResponse';
  message: Scalars['String'];
};

export type AdditionalEntityFields = {
  path?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Agent: ResolverTypeWrapper<Agent>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  AgentInput: AgentInput;
  AgentUpdateInput: AgentUpdateInput;
  BaseForm: ResolversTypes['FinancialServiceForm'] | ResolversTypes['InsuranceForm'];
  Int: ResolverTypeWrapper<Scalars['Int']>;
  DeletionResponse: ResolverTypeWrapper<DeletionResponse>;
  FinancialServiceForm: ResolverTypeWrapper<FinancialServiceForm>;
  FinancialServiceFormInput: FinancialServiceFormInput;
  FinancialServiceFormUpdateInput: FinancialServiceFormUpdateInput;
  InsertionResponse: ResolverTypeWrapper<InsertionResponse>;
  InsuranceForm: ResolverTypeWrapper<InsuranceForm>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  InsuranceFormInput: InsuranceFormInput;
  InsuranceFormUpdateInput: InsuranceFormUpdateInput;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  UpdateResponse: ResolverTypeWrapper<UpdateResponse>;
  AdditionalEntityFields: AdditionalEntityFields;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Agent: Agent;
  ID: Scalars['ID'];
  String: Scalars['String'];
  AgentInput: AgentInput;
  AgentUpdateInput: AgentUpdateInput;
  BaseForm: ResolversParentTypes['FinancialServiceForm'] | ResolversParentTypes['InsuranceForm'];
  Int: Scalars['Int'];
  DeletionResponse: DeletionResponse;
  FinancialServiceForm: FinancialServiceForm;
  FinancialServiceFormInput: FinancialServiceFormInput;
  FinancialServiceFormUpdateInput: FinancialServiceFormUpdateInput;
  InsertionResponse: InsertionResponse;
  InsuranceForm: InsuranceForm;
  Boolean: Scalars['Boolean'];
  InsuranceFormInput: InsuranceFormInput;
  InsuranceFormUpdateInput: InsuranceFormUpdateInput;
  Mutation: {};
  Query: {};
  UpdateResponse: UpdateResponse;
  AdditionalEntityFields: AdditionalEntityFields;
};

export type UnionDirectiveArgs = {
  discriminatorField?: Maybe<Scalars['String']>;
  additionalFields?: Maybe<Array<Maybe<AdditionalEntityFields>>>;
};

export type UnionDirectiveResolver<Result, Parent, ContextType = Context, Args = UnionDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AbstractEntityDirectiveArgs = {
  discriminatorField: Scalars['String'];
  additionalFields?: Maybe<Array<Maybe<AdditionalEntityFields>>>;
};

export type AbstractEntityDirectiveResolver<Result, Parent, ContextType = Context, Args = AbstractEntityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type EntityDirectiveArgs = {
  embedded?: Maybe<Scalars['Boolean']>;
  additionalFields?: Maybe<Array<Maybe<AdditionalEntityFields>>>;
};

export type EntityDirectiveResolver<Result, Parent, ContextType = Context, Args = EntityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type ColumnDirectiveArgs = {
  overrideType?: Maybe<Scalars['String']>;
};

export type ColumnDirectiveResolver<Result, Parent, ContextType = Context, Args = ColumnDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type IdDirectiveArgs = { };

export type IdDirectiveResolver<Result, Parent, ContextType = Context, Args = IdDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type LinkDirectiveArgs = {
  overrideType?: Maybe<Scalars['String']>;
};

export type LinkDirectiveResolver<Result, Parent, ContextType = Context, Args = LinkDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type EmbeddedDirectiveArgs = { };

export type EmbeddedDirectiveResolver<Result, Parent, ContextType = Context, Args = EmbeddedDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type MapDirectiveArgs = {
  path: Scalars['String'];
};

export type MapDirectiveResolver<Result, Parent, ContextType = Context, Args = MapDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AgentResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Agent'] = ResolversParentTypes['Agent']> = {
  _id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BaseFormResolvers<ContextType = Context, ParentType extends ResolversParentTypes['BaseForm'] = ResolversParentTypes['BaseForm']> = {
  __resolveType: TypeResolveFn<'FinancialServiceForm' | 'InsuranceForm', ParentType, ContextType>;
  _id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  addressLine1?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  addressLine2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  beneficiary?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  coverageAmount?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  coverageType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  dob?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phone?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  state?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  zip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type DeletionResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['DeletionResponse'] = ResolversParentTypes['DeletionResponse']> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FinancialServiceFormResolvers<ContextType = Context, ParentType extends ResolversParentTypes['FinancialServiceForm'] = ResolversParentTypes['FinancialServiceForm']> = {
  _id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  addressLine1?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  addressLine2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  beneficiary?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  coverageAmount?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  coverageType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  dob?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  estimatedNetWorth?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  fname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phone?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  retirementDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  state?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  zip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InsertionResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['InsertionResponse'] = ResolversParentTypes['InsertionResponse']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InsuranceFormResolvers<ContextType = Context, ParentType extends ResolversParentTypes['InsuranceForm'] = ResolversParentTypes['InsuranceForm']> = {
  _id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  addressLine1?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  addressLine2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  beneficiary?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  coverageAmount?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  coverageType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  dob?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  healthRating?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  medicalConditions?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  phone?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  state?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tobaccoUse?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  zip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  deleteAgent?: Resolver<Maybe<ResolversTypes['DeletionResponse']>, ParentType, ContextType, RequireFields<MutationDeleteAgentArgs, 'id'>>;
  deleteFinancialServiceForm?: Resolver<Maybe<ResolversTypes['DeletionResponse']>, ParentType, ContextType, RequireFields<MutationDeleteFinancialServiceFormArgs, 'id'>>;
  deleteInsuranceForm?: Resolver<Maybe<ResolversTypes['DeletionResponse']>, ParentType, ContextType, RequireFields<MutationDeleteInsuranceFormArgs, 'id'>>;
  insertAgent?: Resolver<Maybe<ResolversTypes['InsertionResponse']>, ParentType, ContextType, Partial<MutationInsertAgentArgs>>;
  insertFinancialServiceForm?: Resolver<Maybe<ResolversTypes['InsertionResponse']>, ParentType, ContextType, Partial<MutationInsertFinancialServiceFormArgs>>;
  insertInsuranceForm?: Resolver<Maybe<ResolversTypes['InsertionResponse']>, ParentType, ContextType, Partial<MutationInsertInsuranceFormArgs>>;
  updateAgent?: Resolver<Maybe<ResolversTypes['UpdateResponse']>, ParentType, ContextType, RequireFields<MutationUpdateAgentArgs, 'id'>>;
  updateFinancialServiceForm?: Resolver<Maybe<ResolversTypes['UpdateResponse']>, ParentType, ContextType, RequireFields<MutationUpdateFinancialServiceFormArgs, 'id'>>;
  updateInsuranceForm?: Resolver<Maybe<ResolversTypes['UpdateResponse']>, ParentType, ContextType, RequireFields<MutationUpdateInsuranceFormArgs, 'id'>>;
};

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getAgent?: Resolver<Maybe<ResolversTypes['Agent']>, ParentType, ContextType, RequireFields<QueryGetAgentArgs, 'id'>>;
  getAgents?: Resolver<Maybe<Array<Maybe<ResolversTypes['Agent']>>>, ParentType, ContextType>;
  getFinancialServiceForm?: Resolver<Maybe<ResolversTypes['FinancialServiceForm']>, ParentType, ContextType, RequireFields<QueryGetFinancialServiceFormArgs, 'id'>>;
  getFinancialServiceForms?: Resolver<Maybe<Array<Maybe<ResolversTypes['FinancialServiceForm']>>>, ParentType, ContextType>;
  getInsuranceForm?: Resolver<Maybe<ResolversTypes['InsuranceForm']>, ParentType, ContextType, RequireFields<QueryGetInsuranceFormArgs, 'id'>>;
  getInsuranceForms?: Resolver<Maybe<Array<Maybe<ResolversTypes['InsuranceForm']>>>, ParentType, ContextType>;
};

export type UpdateResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['UpdateResponse'] = ResolversParentTypes['UpdateResponse']> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = Context> = {
  Agent?: AgentResolvers<ContextType>;
  BaseForm?: BaseFormResolvers<ContextType>;
  DeletionResponse?: DeletionResponseResolvers<ContextType>;
  FinancialServiceForm?: FinancialServiceFormResolvers<ContextType>;
  InsertionResponse?: InsertionResponseResolvers<ContextType>;
  InsuranceForm?: InsuranceFormResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  UpdateResponse?: UpdateResponseResolvers<ContextType>;
};

export type DirectiveResolvers<ContextType = Context> = {
  union?: UnionDirectiveResolver<any, any, ContextType>;
  abstractEntity?: AbstractEntityDirectiveResolver<any, any, ContextType>;
  entity?: EntityDirectiveResolver<any, any, ContextType>;
  column?: ColumnDirectiveResolver<any, any, ContextType>;
  id?: IdDirectiveResolver<any, any, ContextType>;
  link?: LinkDirectiveResolver<any, any, ContextType>;
  embedded?: EmbeddedDirectiveResolver<any, any, ContextType>;
  map?: MapDirectiveResolver<any, any, ContextType>;
};

import { ObjectId } from 'mongodb';