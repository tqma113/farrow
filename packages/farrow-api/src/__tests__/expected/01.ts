// @ts-nocheck just for testing
/**
 * This file was generated by farrow-api
 * Don't modify it manually
 */

import { createApiPipelineWithUrl } from 'farrow-api-client'

import type { JsonType } from 'farrow-api-client'

/**
 * {@label Collection}
 */
export type Collection = {
  number: number
  int: number
  float: number
  string: string
  boolean: boolean
  id: string
  nest: Collection | null | undefined
  list: Collection[]
  struct: {
    a: number
  }
  union: number | string | boolean
  intersect: {
    a: number
  } & {
    b: number
  } & {
    c: number
  }
  any: any
  unknown: any
  json: JsonType
  literal: 1 | '1' | false | null
  record: Record<string, Collection>
  /**
   * @remarks test description
   * @deprecated test deprecated
   */
  describable: number
}

export const url = ''

export const apiPipeline = createApiPipelineWithUrl(url)

export const api = {
  methodA: (input: Collection, batch: boolean = true) =>
    apiPipeline.invoke({ path: ['methodA'], input }, batch) as Promise<Collection>,
  methodB: (input: Collection, batch: boolean = true) =>
    apiPipeline.invoke({ path: ['methodB'], input }, batch) as Promise<Collection>,
}
