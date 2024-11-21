/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateTodoList = /* GraphQL */ `subscription OnCreateTodoList(
  $id: Int
  $title: String
  $description: String
  $status: String
  $createdAt: AWSDateTime
) {
  onCreateTodoList(
    id: $id
    title: $title
    description: $description
    status: $status
    createdAt: $createdAt
  ) {
    id
    title
    description
    status
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateTodoListSubscriptionVariables,
  APITypes.OnCreateTodoListSubscription
>;
export const onUpdateTodoList = /* GraphQL */ `subscription OnUpdateTodoList(
  $id: Int
  $title: String
  $description: String
  $status: String
  $createdAt: AWSDateTime
) {
  onUpdateTodoList(
    id: $id
    title: $title
    description: $description
    status: $status
    createdAt: $createdAt
  ) {
    id
    title
    description
    status
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateTodoListSubscriptionVariables,
  APITypes.OnUpdateTodoListSubscription
>;
export const onDeleteTodoList = /* GraphQL */ `subscription OnDeleteTodoList(
  $id: Int
  $title: String
  $description: String
  $status: String
  $createdAt: AWSDateTime
) {
  onDeleteTodoList(
    id: $id
    title: $title
    description: $description
    status: $status
    createdAt: $createdAt
  ) {
    id
    title
    description
    status
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteTodoListSubscriptionVariables,
  APITypes.OnDeleteTodoListSubscription
>;
