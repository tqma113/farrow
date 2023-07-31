/**
 * This file was generated by farrow-api
 * Don't modify it manually
*/

export type JsonType =
  | number
  | string
  | boolean
  | null
  | undefined
  | JsonType[]
  | { toJSON(): string }
  | { [key: string]: JsonType }

/**
 * @label HelloInput
*/
export type HelloInput = {
  name: string
}

/**
 * @label HelloOutput
*/
export type HelloOutput = {
  message: string
}

/**
 * @label AddTodoInput
*/
export type AddTodoInput = {
  /**
  * @remarks a content of todo for creating
  */
  content: string
}

/**
 * @label AddTodoOutput
*/
export type AddTodoOutput = {
  /**
  * @remarks Todo list
  */
  todos?: (Todo)[] | null | undefined
}

/**
 * @label Todo
*/
export type Todo = {
  /**
  * @remarks Todo id
  */
  id: number,
  /**
  * @remarks Todo content
  */
  content: string,
  /**
  * @remarks Todo status
  */
  completed: boolean
}

/**
 * @label UpdateTodoInput
*/
export type UpdateTodoInput = {
  /**
  * @remarks Todo id for updating
  */
  id: number,
  /**
  * @remarks Todo content for updating
  */
  content: string
}

/**
 * @label UpdateTodoOutput
*/
export type UpdateTodoOutput = {
  /**
  * @remarks Todo list
  */
  todos: (Todo)[]
}

/**
 * @label RemoveTodoInput
*/
export type RemoveTodoInput = {
  /**
  * @remarks Todo id for removing
  */
  id: number
}

/**
 * @label RemoveTodoOutput
*/
export type RemoveTodoOutput = {
  /**
  * @remarks Remain todo list
  */
  todos: (Todo)[]
}

export type ApiClientLoaderInput = {
  path: string[]
  input: JsonType
}

declare global {
  interface ApiClientLoaderOptions {}
}

export type ApiClientOptions = {
  loader: (input: ApiClientLoaderInput, options?: ApiClientLoaderOptions) => Promise<JsonType>
}

export const createApiClient = (options: ApiClientOptions) => {
  return {
    hello: (input: HelloInput, loaderOptions?: ApiClientLoaderOptions) => {
      return options.loader(
        {
          path: ['hello'],
          input: input as JsonType,
        },
        loaderOptions
      ) as Promise<HelloOutput>
    },
    /**
    * @remarks add todo
    */
    addTodo: (input: AddTodoInput, loaderOptions?: ApiClientLoaderOptions) => {
      return options.loader(
        {
          path: ['addTodo'],
          input: input as JsonType,
        },
        loaderOptions
      ) as Promise<AddTodoOutput>
    },
    /**
    * @remarks update todo
    */
    updateTodo: (input: UpdateTodoInput, loaderOptions?: ApiClientLoaderOptions) => {
      return options.loader(
        {
          path: ['updateTodo'],
          input: input as JsonType,
        },
        loaderOptions
      ) as Promise<UpdateTodoOutput>
    },
    /**
    * @remarks remove todo
    */
    removeTodo: (input: RemoveTodoInput, loaderOptions?: ApiClientLoaderOptions) => {
      return options.loader(
        {
          path: ['removeTodo'],
          input: input as JsonType,
        },
        loaderOptions
      ) as Promise<RemoveTodoOutput>
    },
    /**
    * @remarks long task
    */
    longTask: (input: {
      
    }, loaderOptions?: ApiClientLoaderOptions) => {
      return options.loader(
        {
          path: ['longTask'],
          input: input as JsonType,
        },
        loaderOptions
      ) as Promise<{
        /**
        * @remarks time cost
        */
        time: number,
        /**
        * @remarks data
        */
        data: any
      }>
    }
  }
}