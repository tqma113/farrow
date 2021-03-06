import { Int, Type } from 'farrow-schema'
import { Api, ApiEntries } from '../api'
import { toJSON } from '../toJSON'
import { controvertEntries } from '../controvert'

describe('controvert', () => {
  it('work', () => {
    const definition = {
      input: {
        [Type]: Int,
      },
      output: {
        [Type]: Int,
      },
    }
    const incre = Api(definition, (input: number): number => {
      return input + 1
    })

    const entries: ApiEntries = {
      incre,
    }

    const newEntries = controvertEntries(toJSON(entries))

    expect('incre' in newEntries).toBeTruthy()
  })
})
