/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTodoListInput = {
  id: number,
  title: string,
  description: string,
  status: string,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type TodoList = {
  __typename: "TodoList",
  id: number,
  title: string,
  description: string,
  status: string,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type UpdateTodoListInput = {
  id: number,
  title?: string | null,
  description?: string | null,
  status?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteTodoListInput = {
  id: number,
};

export type TableTodoListFilterInput = {
  id?: TableIntFilterInput | null,
  title?: TableStringFilterInput | null,
  description?: TableStringFilterInput | null,
  status?: TableStringFilterInput | null,
  createdAt?: TableStringFilterInput | null,
  updatedAt?: TableStringFilterInput | null,
};

export type TableIntFilterInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
};

export type TableStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  size?: ModelSizeInput | null,
};

export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type TodoListConnection = {
  __typename: "TodoListConnection",
  items?:  Array<TodoList | null > | null,
  nextToken?: string | null,
};

export type CreateTodoListMutationVariables = {
  input: CreateTodoListInput,
};

export type CreateTodoListMutation = {
  createTodoList?:  {
    __typename: "TodoList",
    id: number,
    title: string,
    description: string,
    status: string,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type UpdateTodoListMutationVariables = {
  input: UpdateTodoListInput,
};

export type UpdateTodoListMutation = {
  updateTodoList?:  {
    __typename: "TodoList",
    id: number,
    title: string,
    description: string,
    status: string,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type DeleteTodoListMutationVariables = {
  input: DeleteTodoListInput,
};

export type DeleteTodoListMutation = {
  deleteTodoList?:  {
    __typename: "TodoList",
    id: number,
    title: string,
    description: string,
    status: string,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type GetTodoListQueryVariables = {
  id: number,
};

export type GetTodoListQuery = {
  getTodoList?:  {
    __typename: "TodoList",
    id: number,
    title: string,
    description: string,
    status: string,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type ListTodoListsQueryVariables = {
  filter?: TableTodoListFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTodoListsQuery = {
  listTodoLists?:  {
    __typename: "TodoListConnection",
    items?:  Array< {
      __typename: "TodoList",
      id: number,
      title: string,
      description: string,
      status: string,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateTodoListSubscriptionVariables = {
  id?: number | null,
  title?: string | null,
  description?: string | null,
  status?: string | null,
  createdAt?: string | null,
};

export type OnCreateTodoListSubscription = {
  onCreateTodoList?:  {
    __typename: "TodoList",
    id: number,
    title: string,
    description: string,
    status: string,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type OnUpdateTodoListSubscriptionVariables = {
  id?: number | null,
  title?: string | null,
  description?: string | null,
  status?: string | null,
  createdAt?: string | null,
};

export type OnUpdateTodoListSubscription = {
  onUpdateTodoList?:  {
    __typename: "TodoList",
    id: number,
    title: string,
    description: string,
    status: string,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type OnDeleteTodoListSubscriptionVariables = {
  id?: number | null,
  title?: string | null,
  description?: string | null,
  status?: string | null,
  createdAt?: string | null,
};

export type OnDeleteTodoListSubscription = {
  onDeleteTodoList?:  {
    __typename: "TodoList",
    id: number,
    title: string,
    description: string,
    status: string,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};
