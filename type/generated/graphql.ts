import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: string;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "todo" */
  delete_todo?: Maybe<Todo_Mutation_Response>;
  /** delete single row from the table: "todo" */
  delete_todo_by_pk?: Maybe<Todo>;
  /** insert data into the table: "todo" */
  insert_todo?: Maybe<Todo_Mutation_Response>;
  /** insert a single row into the table: "todo" */
  insert_todo_one?: Maybe<Todo>;
  /** update data of the table: "todo" */
  update_todo?: Maybe<Todo_Mutation_Response>;
  /** update single row of the table: "todo" */
  update_todo_by_pk?: Maybe<Todo>;
};


/** mutation root */
export type Mutation_RootDelete_TodoArgs = {
  where: Todo_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Todo_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_TodoArgs = {
  objects: Array<Todo_Insert_Input>;
  on_conflict?: Maybe<Todo_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Todo_OneArgs = {
  object: Todo_Insert_Input;
  on_conflict?: Maybe<Todo_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_TodoArgs = {
  _inc?: Maybe<Todo_Inc_Input>;
  _set?: Maybe<Todo_Set_Input>;
  where: Todo_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Todo_By_PkArgs = {
  _inc?: Maybe<Todo_Inc_Input>;
  _set?: Maybe<Todo_Set_Input>;
  pk_columns: Todo_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "todo" */
  todo: Array<Todo>;
  /** fetch aggregated fields from the table: "todo" */
  todo_aggregate: Todo_Aggregate;
  /** fetch data from the table: "todo" using primary key columns */
  todo_by_pk?: Maybe<Todo>;
};


/** query root */
export type Query_RootTodoArgs = {
  distinct_on?: Maybe<Array<Todo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Todo_Order_By>>;
  where?: Maybe<Todo_Bool_Exp>;
};


/** query root */
export type Query_RootTodo_AggregateArgs = {
  distinct_on?: Maybe<Array<Todo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Todo_Order_By>>;
  where?: Maybe<Todo_Bool_Exp>;
};


/** query root */
export type Query_RootTodo_By_PkArgs = {
  id: Scalars['Int'];
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "todo" */
  todo: Array<Todo>;
  /** fetch aggregated fields from the table: "todo" */
  todo_aggregate: Todo_Aggregate;
  /** fetch data from the table: "todo" using primary key columns */
  todo_by_pk?: Maybe<Todo>;
};


/** subscription root */
export type Subscription_RootTodoArgs = {
  distinct_on?: Maybe<Array<Todo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Todo_Order_By>>;
  where?: Maybe<Todo_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTodo_AggregateArgs = {
  distinct_on?: Maybe<Array<Todo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Todo_Order_By>>;
  where?: Maybe<Todo_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTodo_By_PkArgs = {
  id: Scalars['Int'];
};


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "todo" */
export type Todo = {
  __typename?: 'todo';
  createdAt: Scalars['timestamptz'];
  id: Scalars['Int'];
  status: Scalars['String'];
  text: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
};

/** aggregated selection of "todo" */
export type Todo_Aggregate = {
  __typename?: 'todo_aggregate';
  aggregate?: Maybe<Todo_Aggregate_Fields>;
  nodes: Array<Todo>;
};

/** aggregate fields of "todo" */
export type Todo_Aggregate_Fields = {
  __typename?: 'todo_aggregate_fields';
  avg?: Maybe<Todo_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Todo_Max_Fields>;
  min?: Maybe<Todo_Min_Fields>;
  stddev?: Maybe<Todo_Stddev_Fields>;
  stddev_pop?: Maybe<Todo_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Todo_Stddev_Samp_Fields>;
  sum?: Maybe<Todo_Sum_Fields>;
  var_pop?: Maybe<Todo_Var_Pop_Fields>;
  var_samp?: Maybe<Todo_Var_Samp_Fields>;
  variance?: Maybe<Todo_Variance_Fields>;
};


/** aggregate fields of "todo" */
export type Todo_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Todo_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "todo" */
export type Todo_Aggregate_Order_By = {
  avg?: Maybe<Todo_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Todo_Max_Order_By>;
  min?: Maybe<Todo_Min_Order_By>;
  stddev?: Maybe<Todo_Stddev_Order_By>;
  stddev_pop?: Maybe<Todo_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Todo_Stddev_Samp_Order_By>;
  sum?: Maybe<Todo_Sum_Order_By>;
  var_pop?: Maybe<Todo_Var_Pop_Order_By>;
  var_samp?: Maybe<Todo_Var_Samp_Order_By>;
  variance?: Maybe<Todo_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "todo" */
export type Todo_Arr_Rel_Insert_Input = {
  data: Array<Todo_Insert_Input>;
  on_conflict?: Maybe<Todo_On_Conflict>;
};

/** aggregate avg on columns */
export type Todo_Avg_Fields = {
  __typename?: 'todo_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "todo" */
export type Todo_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "todo". All fields are combined with a logical 'AND'. */
export type Todo_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Todo_Bool_Exp>>>;
  _not?: Maybe<Todo_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Todo_Bool_Exp>>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  status?: Maybe<String_Comparison_Exp>;
  text?: Maybe<String_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "todo" */
export enum Todo_Constraint {
  /** unique or primary key constraint */
  TodoPkey = 'todo_pkey'
}

/** input type for incrementing integer column in table "todo" */
export type Todo_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "todo" */
export type Todo_Insert_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Todo_Max_Fields = {
  __typename?: 'todo_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "todo" */
export type Todo_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  text?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Todo_Min_Fields = {
  __typename?: 'todo_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "todo" */
export type Todo_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  text?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "todo" */
export type Todo_Mutation_Response = {
  __typename?: 'todo_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Todo>;
};

/** input type for inserting object relation for remote table "todo" */
export type Todo_Obj_Rel_Insert_Input = {
  data: Todo_Insert_Input;
  on_conflict?: Maybe<Todo_On_Conflict>;
};

/** on conflict condition type for table "todo" */
export type Todo_On_Conflict = {
  constraint: Todo_Constraint;
  update_columns: Array<Todo_Update_Column>;
  where?: Maybe<Todo_Bool_Exp>;
};

/** ordering options when selecting data from "todo" */
export type Todo_Order_By = {
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  text?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** primary key columns input for table: "todo" */
export type Todo_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "todo" */
export enum Todo_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Status = 'status',
  /** column name */
  Text = 'text',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "todo" */
export type Todo_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Todo_Stddev_Fields = {
  __typename?: 'todo_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "todo" */
export type Todo_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Todo_Stddev_Pop_Fields = {
  __typename?: 'todo_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "todo" */
export type Todo_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Todo_Stddev_Samp_Fields = {
  __typename?: 'todo_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "todo" */
export type Todo_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Todo_Sum_Fields = {
  __typename?: 'todo_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "todo" */
export type Todo_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "todo" */
export enum Todo_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Status = 'status',
  /** column name */
  Text = 'text',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type Todo_Var_Pop_Fields = {
  __typename?: 'todo_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "todo" */
export type Todo_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Todo_Var_Samp_Fields = {
  __typename?: 'todo_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "todo" */
export type Todo_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Todo_Variance_Fields = {
  __typename?: 'todo_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "todo" */
export type Todo_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

export type AddTodoMutationVariables = Exact<{
  object: Todo_Insert_Input;
}>;


export type AddTodoMutation = (
  { __typename?: 'mutation_root' }
  & { insert_todo_one?: Maybe<(
    { __typename?: 'todo' }
    & Pick<Todo, 'createdAt' | 'id' | 'status' | 'text' | 'updatedAt'>
  )> }
);

export type DeleteTodoMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteTodoMutation = (
  { __typename?: 'mutation_root' }
  & { delete_todo_by_pk?: Maybe<(
    { __typename?: 'todo' }
    & Pick<Todo, 'createdAt' | 'id' | 'status' | 'text' | 'updatedAt'>
  )> }
);

export type GetTodoQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTodoQuery = (
  { __typename?: 'query_root' }
  & { todo: Array<(
    { __typename?: 'todo' }
    & Pick<Todo, 'createdAt' | 'id' | 'status' | 'text' | 'updatedAt'>
  )> }
);

export type UpdateTodoMutationVariables = Exact<{
  _set: Todo_Set_Input;
  id: Scalars['Int'];
}>;


export type UpdateTodoMutation = (
  { __typename?: 'mutation_root' }
  & { update_todo_by_pk?: Maybe<(
    { __typename?: 'todo' }
    & Pick<Todo, 'createdAt' | 'id' | 'status' | 'text' | 'updatedAt'>
  )> }
);


export const AddTodoDocument = gql`
    mutation addTodo($object: todo_insert_input!) {
  insert_todo_one(object: $object) {
    createdAt
    id
    status
    text
    updatedAt
  }
}
    `;
export const DeleteTodoDocument = gql`
    mutation deleteTodo($id: Int!) {
  delete_todo_by_pk(id: $id) {
    createdAt
    id
    status
    text
    updatedAt
  }
}
    `;
export const GetTodoDocument = gql`
    query getTodo {
  todo {
    createdAt
    id
    status
    text
    updatedAt
  }
}
    `;
export const UpdateTodoDocument = gql`
    mutation updateTodo($_set: todo_set_input!, $id: Int!) {
  update_todo_by_pk(pk_columns: {id: $id}, _set: $_set) {
    createdAt
    id
    status
    text
    updatedAt
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = sdkFunction => sdkFunction();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    addTodo(variables: AddTodoMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AddTodoMutation> {
      return withWrapper(() => client.request<AddTodoMutation>(AddTodoDocument, variables, requestHeaders));
    },
    deleteTodo(variables: DeleteTodoMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteTodoMutation> {
      return withWrapper(() => client.request<DeleteTodoMutation>(DeleteTodoDocument, variables, requestHeaders));
    },
    getTodo(variables?: GetTodoQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetTodoQuery> {
      return withWrapper(() => client.request<GetTodoQuery>(GetTodoDocument, variables, requestHeaders));
    },
    updateTodo(variables: UpdateTodoMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateTodoMutation> {
      return withWrapper(() => client.request<UpdateTodoMutation>(UpdateTodoDocument, variables, requestHeaders));
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;