/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createTodoList = /* GraphQL */ `mutation CreateTodoList($input: CreateTodoListInput!) {
  createTodoList(input: $input) {
    id
    title
    description
    status
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateTodoListMutationVariables,
  APITypes.CreateTodoListMutation
>;
export const updateTodoList = /* GraphQL */ `mutation UpdateTodoList($input: UpdateTodoListInput!) {
  updateTodoList(input: $input) {
    id
    title
    description
    status
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateTodoListMutationVariables,
  APITypes.UpdateTodoListMutation
>;
export const deleteTodoList = /* GraphQL */ `mutation DeleteTodoList($input: DeleteTodoListInput!) {
  deleteTodoList(input: $input) {
    id
    title
    description
    status
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteTodoListMutationVariables,
  APITypes.DeleteTodoListMutation
>;
