// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type cases = [
  Expect<Equal<TupleToObject<typeof tuple>, { tesla: 'tesla'; 'model 3': 'model 3'; 'model X': 'model X'; 'model Y': 'model Y' }>>,
]

// @ts-expect-error
type error = TupleToObject<[[1, 2], {}]>


// ============= Your Code Here =============
// type TupleToObject<T extends readonly any[]> = {
//   [P in keyof T as P extends number ? T[P & number] : never]: P extends number ? T[P]: never
// }

type F<T extends readonly any[]> = T[number]
type TupleToObject<T extends readonly string[]> = {
  [P in T[number]]: P
}

type Foo = F<typeof tuple>;
