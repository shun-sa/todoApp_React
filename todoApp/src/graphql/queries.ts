/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getTodoList = /* GraphQL */ `query GetTodoList($id: Int!) {
  getTodoList(id: $id) {
    id
    title
    description
    status
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetTodoListQueryVariables,
  APITypes.GetTodoListQuery
>;
export const listTodoLists = /* GraphQL */ `query ListTodoLists(
  $filter: TableTodoListFilterInput
  $limit: Int
  $nextToken: String
) {
  listTodoLists(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      description
      status
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListTodoListsQueryVariables,
  APITypes.ListTodoListsQuery
>;
