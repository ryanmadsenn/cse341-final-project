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

export type DeletionResponse = {
  __typename?: 'DeletionResponse';
  acknowledged?: Maybe<Scalars['Boolean']>;
};

export type Event = {
  __typename?: 'Event';
  datetime?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  users?: Maybe<Array<Maybe<User>>>;
  vendors?: Maybe<Array<Maybe<Vendor>>>;
  venue?: Maybe<Venue>;
};

export type InsertionResponse = {
  __typename?: 'InsertionResponse';
  acknowledged?: Maybe<Scalars['Boolean']>;
  insertedId?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createEvent?: Maybe<InsertionResponse>;
  createUser?: Maybe<InsertionResponse>;
  createVendor?: Maybe<InsertionResponse>;
  createVenue?: Maybe<InsertionResponse>;
  deleteEvent?: Maybe<DeletionResponse>;
  deleteUser?: Maybe<DeletionResponse>;
  deleteVendor?: Maybe<DeletionResponse>;
  deleteVenue?: Maybe<DeletionResponse>;
  updateEvent?: Maybe<UpsertionResponse>;
  updateUser?: Maybe<UpsertionResponse>;
  updateVendor?: Maybe<UpsertionResponse>;
  updateVenue?: Maybe<UpsertionResponse>;
};


export type MutationCreateEventArgs = {
  datetime: Scalars['String'];
  description: Scalars['String'];
  title: Scalars['String'];
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  vendors?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  venue: Scalars['ID'];
};


export type MutationCreateUserArgs = {
  email: Scalars['String'];
  events?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  fname: Scalars['String'];
  lname: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
  role: Role;
};


export type MutationCreateVendorArgs = {
  address: Scalars['String'];
  city: Scalars['String'];
  country: Scalars['String'];
  description: Scalars['String'];
  email: Scalars['String'];
  events?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  name: Scalars['String'];
  phone: Scalars['String'];
  state: Scalars['String'];
  website: Scalars['String'];
  zip: Scalars['String'];
};


export type MutationCreateVenueArgs = {
  address: Scalars['String'];
  city: Scalars['String'];
  country: Scalars['String'];
  description: Scalars['String'];
  email: Scalars['String'];
  events?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  name: Scalars['String'];
  phone: Scalars['String'];
  state: Scalars['String'];
  website: Scalars['String'];
  zip: Scalars['String'];
};


export type MutationDeleteEventArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteVendorArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteVenueArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateEventArgs = {
  datetime?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  title?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  vendors?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  venue?: InputMaybe<Scalars['ID']>;
};


export type MutationUpdateUserArgs = {
  email: Scalars['String'];
  events?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  fname: Scalars['String'];
  id: Scalars['ID'];
  lname: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
  role: Role;
};


export type MutationUpdateVendorArgs = {
  address: Scalars['String'];
  city: Scalars['String'];
  country: Scalars['String'];
  description: Scalars['String'];
  email: Scalars['String'];
  events?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id: Scalars['ID'];
  name: Scalars['String'];
  phone: Scalars['String'];
  state: Scalars['String'];
  website: Scalars['String'];
  zip: Scalars['String'];
};


export type MutationUpdateVenueArgs = {
  address: Scalars['String'];
  city: Scalars['String'];
  country: Scalars['String'];
  description: Scalars['String'];
  email: Scalars['String'];
  events?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id: Scalars['ID'];
  name: Scalars['String'];
  phone: Scalars['String'];
  state: Scalars['String'];
  website: Scalars['String'];
  zip: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  event?: Maybe<Event>;
  events?: Maybe<Array<Maybe<Event>>>;
  user?: Maybe<User>;
  users?: Maybe<Array<Maybe<User>>>;
  vendor?: Maybe<Vendor>;
  vendors?: Maybe<Array<Maybe<Vendor>>>;
  venue?: Maybe<Venue>;
  venues?: Maybe<Array<Maybe<Venue>>>;
};


export type QueryEventArgs = {
  id: Scalars['ID'];
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryVendorArgs = {
  id: Scalars['ID'];
};


export type QueryVenueArgs = {
  id: Scalars['ID'];
};

export enum Role {
  Admin = 'ADMIN',
  User = 'USER'
}

export type UpsertionResponse = {
  __typename?: 'UpsertionResponse';
  acknowledged?: Maybe<Scalars['Boolean']>;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  events?: Maybe<Array<Maybe<Event>>>;
  fname: Scalars['String'];
  id: Scalars['ID'];
  lname: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
  role: Role;
};

export type Vendor = {
  __typename?: 'Vendor';
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  events?: Maybe<Array<Maybe<Event>>>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
};

export type Venue = {
  __typename?: 'Venue';
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  events?: Maybe<Array<Maybe<Event>>>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
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
  DeletionResponse: ResolverTypeWrapper<DeletionResponse>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Event: ResolverTypeWrapper<Event>;
  String: ResolverTypeWrapper<Scalars['String']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  InsertionResponse: ResolverTypeWrapper<InsertionResponse>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  Role: Role;
  UpsertionResponse: ResolverTypeWrapper<UpsertionResponse>;
  User: ResolverTypeWrapper<User>;
  Vendor: ResolverTypeWrapper<Vendor>;
  Venue: ResolverTypeWrapper<Venue>;
  AdditionalEntityFields: AdditionalEntityFields;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  DeletionResponse: DeletionResponse;
  Boolean: Scalars['Boolean'];
  Event: Event;
  String: Scalars['String'];
  ID: Scalars['ID'];
  InsertionResponse: InsertionResponse;
  Mutation: {};
  Query: {};
  UpsertionResponse: UpsertionResponse;
  User: User;
  Vendor: Vendor;
  Venue: Venue;
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

export type DeletionResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['DeletionResponse'] = ResolversParentTypes['DeletionResponse']> = {
  acknowledged?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EventResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Event'] = ResolversParentTypes['Event']> = {
  datetime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  vendors?: Resolver<Maybe<Array<Maybe<ResolversTypes['Vendor']>>>, ParentType, ContextType>;
  venue?: Resolver<Maybe<ResolversTypes['Venue']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InsertionResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['InsertionResponse'] = ResolversParentTypes['InsertionResponse']> = {
  acknowledged?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  insertedId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createEvent?: Resolver<Maybe<ResolversTypes['InsertionResponse']>, ParentType, ContextType, RequireFields<MutationCreateEventArgs, 'datetime' | 'description' | 'title' | 'venue'>>;
  createUser?: Resolver<Maybe<ResolversTypes['InsertionResponse']>, ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'email' | 'fname' | 'lname' | 'password' | 'phone' | 'role'>>;
  createVendor?: Resolver<Maybe<ResolversTypes['InsertionResponse']>, ParentType, ContextType, RequireFields<MutationCreateVendorArgs, 'address' | 'city' | 'country' | 'description' | 'email' | 'name' | 'phone' | 'state' | 'website' | 'zip'>>;
  createVenue?: Resolver<Maybe<ResolversTypes['InsertionResponse']>, ParentType, ContextType, RequireFields<MutationCreateVenueArgs, 'address' | 'city' | 'country' | 'description' | 'email' | 'name' | 'phone' | 'state' | 'website' | 'zip'>>;
  deleteEvent?: Resolver<Maybe<ResolversTypes['DeletionResponse']>, ParentType, ContextType, RequireFields<MutationDeleteEventArgs, 'id'>>;
  deleteUser?: Resolver<Maybe<ResolversTypes['DeletionResponse']>, ParentType, ContextType, RequireFields<MutationDeleteUserArgs, 'id'>>;
  deleteVendor?: Resolver<Maybe<ResolversTypes['DeletionResponse']>, ParentType, ContextType, RequireFields<MutationDeleteVendorArgs, 'id'>>;
  deleteVenue?: Resolver<Maybe<ResolversTypes['DeletionResponse']>, ParentType, ContextType, RequireFields<MutationDeleteVenueArgs, 'id'>>;
  updateEvent?: Resolver<Maybe<ResolversTypes['UpsertionResponse']>, ParentType, ContextType, RequireFields<MutationUpdateEventArgs, 'id'>>;
  updateUser?: Resolver<Maybe<ResolversTypes['UpsertionResponse']>, ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'email' | 'fname' | 'id' | 'lname' | 'password' | 'phone' | 'role'>>;
  updateVendor?: Resolver<Maybe<ResolversTypes['UpsertionResponse']>, ParentType, ContextType, RequireFields<MutationUpdateVendorArgs, 'address' | 'city' | 'country' | 'description' | 'email' | 'id' | 'name' | 'phone' | 'state' | 'website' | 'zip'>>;
  updateVenue?: Resolver<Maybe<ResolversTypes['UpsertionResponse']>, ParentType, ContextType, RequireFields<MutationUpdateVenueArgs, 'address' | 'city' | 'country' | 'description' | 'email' | 'id' | 'name' | 'phone' | 'state' | 'website' | 'zip'>>;
};

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  event?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType, RequireFields<QueryEventArgs, 'id'>>;
  events?: Resolver<Maybe<Array<Maybe<ResolversTypes['Event']>>>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'id'>>;
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  vendor?: Resolver<Maybe<ResolversTypes['Vendor']>, ParentType, ContextType, RequireFields<QueryVendorArgs, 'id'>>;
  vendors?: Resolver<Maybe<Array<Maybe<ResolversTypes['Vendor']>>>, ParentType, ContextType>;
  venue?: Resolver<Maybe<ResolversTypes['Venue']>, ParentType, ContextType, RequireFields<QueryVenueArgs, 'id'>>;
  venues?: Resolver<Maybe<Array<Maybe<ResolversTypes['Venue']>>>, ParentType, ContextType>;
};

export type UpsertionResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['UpsertionResponse'] = ResolversParentTypes['UpsertionResponse']> = {
  acknowledged?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = Context, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  events?: Resolver<Maybe<Array<Maybe<ResolversTypes['Event']>>>, ParentType, ContextType>;
  fname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phone?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['Role'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VendorResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Vendor'] = ResolversParentTypes['Vendor']> = {
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  events?: Resolver<Maybe<Array<Maybe<ResolversTypes['Event']>>>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  website?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  zip?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VenueResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Venue'] = ResolversParentTypes['Venue']> = {
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  events?: Resolver<Maybe<Array<Maybe<ResolversTypes['Event']>>>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  website?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  zip?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = Context> = {
  DeletionResponse?: DeletionResponseResolvers<ContextType>;
  Event?: EventResolvers<ContextType>;
  InsertionResponse?: InsertionResponseResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  UpsertionResponse?: UpsertionResponseResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  Vendor?: VendorResolvers<ContextType>;
  Venue?: VenueResolvers<ContextType>;
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