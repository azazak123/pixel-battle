import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  JSON: { input: any; output: any; }
  bytea: { input: any; output: any; }
  timestamptz: { input: any; output: any; }
};

export type CreatePixelRequestInput = {
  color: Scalars['String']['input'];
  x: Scalars['Int']['input'];
  y: Scalars['Int']['input'];
};

export type CreateUserRequestInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type LoginRequestInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type PixelResponse = {
  __typename?: 'PixelResponse';
  authorId: Scalars['Int']['output'];
  color: Scalars['String']['output'];
  creationTime: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  x: Scalars['Int']['output'];
  y: Scalars['Int']['output'];
};

export type PixelResponseResultResponse = {
  __typename?: 'PixelResponseResultResponse';
  result: Scalars['Boolean']['output'];
  value: PixelResponse;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  username: Scalars['String']['output'];
};

export type UserResultResponse = {
  __typename?: 'UserResultResponse';
  result: Scalars['Boolean']['output'];
  value: User;
};

export type ValueTupleResultResponse = {
  __typename?: 'ValueTupleResultResponse';
  result: Scalars['Boolean']['output'];
  value: Scalars['JSON']['output'];
};

/** Boolean expression to compare columns of type "bytea". All fields are combined with logical 'AND'. */
export type Bytea_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bytea']['input']>;
  _gt?: InputMaybe<Scalars['bytea']['input']>;
  _gte?: InputMaybe<Scalars['bytea']['input']>;
  _in?: InputMaybe<Array<Scalars['bytea']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['bytea']['input']>;
  _lte?: InputMaybe<Scalars['bytea']['input']>;
  _neq?: InputMaybe<Scalars['bytea']['input']>;
  _nin?: InputMaybe<Array<Scalars['bytea']['input']>>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  change_pixel_color?: Maybe<PixelResponseResultResponse>;
  create_pixel?: Maybe<PixelResponseResultResponse>;
  create_user?: Maybe<UserResultResponse>;
  login?: Maybe<ValueTupleResultResponse>;
};


/** mutation root */
export type Mutation_RootChange_Pixel_ColorArgs = {
  createPixelRequestInput?: InputMaybe<CreatePixelRequestInput>;
};


/** mutation root */
export type Mutation_RootCreate_PixelArgs = {
  createPixelRequestInput?: InputMaybe<CreatePixelRequestInput>;
};


/** mutation root */
export type Mutation_RootCreate_UserArgs = {
  createUserRequestInput?: InputMaybe<CreateUserRequestInput>;
};


/** mutation root */
export type Mutation_RootLoginArgs = {
  loginRequestInput?: InputMaybe<LoginRequestInput>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "pixel_battle.pixel" */
export type Pixel_Battle_Pixel = {
  __typename?: 'pixel_battle_pixel';
  author_id: Scalars['Int']['output'];
  color: Scalars['bytea']['output'];
  creation_time: Scalars['timestamptz']['output'];
  id: Scalars['Int']['output'];
  x: Scalars['Int']['output'];
  y: Scalars['Int']['output'];
};

/** Boolean expression to filter rows from the table "pixel_battle.pixel". All fields are combined with a logical 'AND'. */
export type Pixel_Battle_Pixel_Bool_Exp = {
  _and?: InputMaybe<Array<Pixel_Battle_Pixel_Bool_Exp>>;
  _not?: InputMaybe<Pixel_Battle_Pixel_Bool_Exp>;
  _or?: InputMaybe<Array<Pixel_Battle_Pixel_Bool_Exp>>;
  author_id?: InputMaybe<Int_Comparison_Exp>;
  color?: InputMaybe<Bytea_Comparison_Exp>;
  creation_time?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  x?: InputMaybe<Int_Comparison_Exp>;
  y?: InputMaybe<Int_Comparison_Exp>;
};

/** Ordering options when selecting data from "pixel_battle.pixel". */
export type Pixel_Battle_Pixel_Order_By = {
  author_id?: InputMaybe<Order_By>;
  color?: InputMaybe<Order_By>;
  creation_time?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  x?: InputMaybe<Order_By>;
  y?: InputMaybe<Order_By>;
};

/** select columns of table "pixel_battle.pixel" */
export enum Pixel_Battle_Pixel_Select_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  Color = 'color',
  /** column name */
  CreationTime = 'creation_time',
  /** column name */
  Id = 'id',
  /** column name */
  X = 'x',
  /** column name */
  Y = 'y'
}

/** Streaming cursor of the table "pixel_battle_pixel" */
export type Pixel_Battle_Pixel_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Pixel_Battle_Pixel_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Pixel_Battle_Pixel_Stream_Cursor_Value_Input = {
  author_id?: InputMaybe<Scalars['Int']['input']>;
  color?: InputMaybe<Scalars['bytea']['input']>;
  creation_time?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  x?: InputMaybe<Scalars['Int']['input']>;
  y?: InputMaybe<Scalars['Int']['input']>;
};

/** columns and relationships of "pixel_battle.user" */
export type Pixel_Battle_User = {
  __typename?: 'pixel_battle_user';
  id: Scalars['Int']['output'];
  username: Scalars['String']['output'];
};

/** Boolean expression to filter rows from the table "pixel_battle.user". All fields are combined with a logical 'AND'. */
export type Pixel_Battle_User_Bool_Exp = {
  _and?: InputMaybe<Array<Pixel_Battle_User_Bool_Exp>>;
  _not?: InputMaybe<Pixel_Battle_User_Bool_Exp>;
  _or?: InputMaybe<Array<Pixel_Battle_User_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  username?: InputMaybe<String_Comparison_Exp>;
};

/** Ordering options when selecting data from "pixel_battle.user". */
export type Pixel_Battle_User_Order_By = {
  id?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
};

/** select columns of table "pixel_battle.user" */
export enum Pixel_Battle_User_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Username = 'username'
}

/** Streaming cursor of the table "pixel_battle_user" */
export type Pixel_Battle_User_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Pixel_Battle_User_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Pixel_Battle_User_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "pixel_battle.pixel" */
  pixel_battle_pixel: Array<Pixel_Battle_Pixel>;
  /** fetch data from the table: "pixel_battle.pixel" using primary key columns */
  pixel_battle_pixel_by_pk?: Maybe<Pixel_Battle_Pixel>;
  /** fetch data from the table: "pixel_battle.user" */
  pixel_battle_user: Array<Pixel_Battle_User>;
  /** fetch data from the table: "pixel_battle.user" using primary key columns */
  pixel_battle_user_by_pk?: Maybe<Pixel_Battle_User>;
};


export type Query_RootPixel_Battle_PixelArgs = {
  distinct_on?: InputMaybe<Array<Pixel_Battle_Pixel_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Pixel_Battle_Pixel_Order_By>>;
  where?: InputMaybe<Pixel_Battle_Pixel_Bool_Exp>;
};


export type Query_RootPixel_Battle_Pixel_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootPixel_Battle_UserArgs = {
  distinct_on?: InputMaybe<Array<Pixel_Battle_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Pixel_Battle_User_Order_By>>;
  where?: InputMaybe<Pixel_Battle_User_Bool_Exp>;
};


export type Query_RootPixel_Battle_User_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "pixel_battle.pixel" */
  pixel_battle_pixel: Array<Pixel_Battle_Pixel>;
  /** fetch data from the table: "pixel_battle.pixel" using primary key columns */
  pixel_battle_pixel_by_pk?: Maybe<Pixel_Battle_Pixel>;
  /** fetch data from the table in a streaming manner: "pixel_battle.pixel" */
  pixel_battle_pixel_stream: Array<Pixel_Battle_Pixel>;
  /** fetch data from the table: "pixel_battle.user" */
  pixel_battle_user: Array<Pixel_Battle_User>;
  /** fetch data from the table: "pixel_battle.user" using primary key columns */
  pixel_battle_user_by_pk?: Maybe<Pixel_Battle_User>;
  /** fetch data from the table in a streaming manner: "pixel_battle.user" */
  pixel_battle_user_stream: Array<Pixel_Battle_User>;
};


export type Subscription_RootPixel_Battle_PixelArgs = {
  distinct_on?: InputMaybe<Array<Pixel_Battle_Pixel_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Pixel_Battle_Pixel_Order_By>>;
  where?: InputMaybe<Pixel_Battle_Pixel_Bool_Exp>;
};


export type Subscription_RootPixel_Battle_Pixel_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootPixel_Battle_Pixel_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Pixel_Battle_Pixel_Stream_Cursor_Input>>;
  where?: InputMaybe<Pixel_Battle_Pixel_Bool_Exp>;
};


export type Subscription_RootPixel_Battle_UserArgs = {
  distinct_on?: InputMaybe<Array<Pixel_Battle_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Pixel_Battle_User_Order_By>>;
  where?: InputMaybe<Pixel_Battle_User_Bool_Exp>;
};


export type Subscription_RootPixel_Battle_User_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootPixel_Battle_User_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Pixel_Battle_User_Stream_Cursor_Input>>;
  where?: InputMaybe<Pixel_Battle_User_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};


export const CreateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"create_user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createUserRequestInput"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}},{"kind":"Field","name":{"kind":"Name","value":"value"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]} as unknown as DocumentNode<CreateUserMutation, CreateUserMutationVariables>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"loginRequestInput"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const ChangePixelColorDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ChangePixelColor"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"color"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"x"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"y"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"change_pixel_color"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createPixelRequestInput"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"color"},"value":{"kind":"Variable","name":{"kind":"Name","value":"color"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"x"},"value":{"kind":"Variable","name":{"kind":"Name","value":"x"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"y"},"value":{"kind":"Variable","name":{"kind":"Name","value":"y"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}},{"kind":"Field","name":{"kind":"Name","value":"value"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authorId"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"creationTime"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"x"}},{"kind":"Field","name":{"kind":"Name","value":"y"}}]}}]}}]}}]} as unknown as DocumentNode<ChangePixelColorMutation, ChangePixelColorMutationVariables>;
export const CreatePixelDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreatePixel"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"x"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"y"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"color"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"create_pixel"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createPixelRequestInput"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"x"},"value":{"kind":"Variable","name":{"kind":"Name","value":"x"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"y"},"value":{"kind":"Variable","name":{"kind":"Name","value":"y"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"color"},"value":{"kind":"Variable","name":{"kind":"Name","value":"color"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}},{"kind":"Field","name":{"kind":"Name","value":"value"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authorId"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"creationTime"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"x"}},{"kind":"Field","name":{"kind":"Name","value":"y"}}]}}]}}]}}]} as unknown as DocumentNode<CreatePixelMutation, CreatePixelMutationVariables>;
export const GetPixelsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPixels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pixel_battle_pixel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"author_id"}},{"kind":"Field","name":{"kind":"Name","value":"creation_time"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"x"}},{"kind":"Field","name":{"kind":"Name","value":"y"}}]}}]}}]} as unknown as DocumentNode<GetPixelsQuery, GetPixelsQueryVariables>;
export type CreateUserMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
}>;


export type CreateUserMutation = { __typename?: 'mutation_root', create_user?: { __typename?: 'UserResultResponse', result: boolean, value: { __typename?: 'User', email: string, id: number, username: string } } | null };

export type LoginMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginMutation = { __typename?: 'mutation_root', login?: { __typename?: 'ValueTupleResultResponse', result: boolean, value: any } | null };

export type ChangePixelColorMutationVariables = Exact<{
  color: Scalars['String']['input'];
  x: Scalars['Int']['input'];
  y: Scalars['Int']['input'];
}>;


export type ChangePixelColorMutation = { __typename?: 'mutation_root', change_pixel_color?: { __typename?: 'PixelResponseResultResponse', result: boolean, value: { __typename?: 'PixelResponse', authorId: number, color: string, creationTime: string, id: number, x: number, y: number } } | null };

export type CreatePixelMutationVariables = Exact<{
  x: Scalars['Int']['input'];
  y: Scalars['Int']['input'];
  color: Scalars['String']['input'];
}>;


export type CreatePixelMutation = { __typename?: 'mutation_root', create_pixel?: { __typename?: 'PixelResponseResultResponse', result: boolean, value: { __typename?: 'PixelResponse', authorId: number, color: string, creationTime: string, id: number, x: number, y: number } } | null };

export type GetPixelsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPixelsQuery = { __typename?: 'query_root', pixel_battle_pixel: Array<{ __typename?: 'pixel_battle_pixel', color: any, author_id: number, creation_time: any, id: number, x: number, y: number }> };
