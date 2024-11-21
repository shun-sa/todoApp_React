import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";
import { initSchema } from "@aws-amplify/datastore";

import { schema } from "./schema";





type EagerTodoListModel = {
  readonly createdAt?: string | null;
  readonly description: string;
  readonly id: number;
  readonly status: string;
  readonly title: string;
  readonly updatedAt?: string | null;
}

type LazyTodoListModel = {
  readonly createdAt?: string | null;
  readonly description: string;
  readonly id: number;
  readonly status: string;
  readonly title: string;
  readonly updatedAt?: string | null;
}

export declare type TodoListModel = LazyLoading extends LazyLoadingDisabled ? EagerTodoListModel : LazyTodoListModel

export declare const TodoListModel: (new (init: ModelInit<TodoListModel>) => TodoListModel)

type EagerTodoListConnectionModel = {
  readonly items?: (TodoList | null)[] | null;
  readonly nextToken?: string | null;
}

type LazyTodoListConnectionModel = {
  readonly items?: (TodoList | null)[] | null;
  readonly nextToken?: string | null;
}

export declare type TodoListConnectionModel = LazyLoading extends LazyLoadingDisabled ? EagerTodoListConnectionModel : LazyTodoListConnectionModel

export declare const TodoListConnectionModel: (new (init: ModelInit<TodoListConnectionModel>) => TodoListConnectionModel)

const { TodoList, TodoListConnection } = initSchema(schema) as {
  TodoList: PersistentModelConstructor<TodoListModel>;
  TodoListConnection: PersistentModelConstructor<TodoListConnectionModel>;
};

export {
  
};