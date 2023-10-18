// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<DeepReadonly<X>, Expected>>,
]

type X = {
  a: () => 22
  b: string
  c: {
    d: boolean
    e: {
      g: {
        h: {
          i: true
          j: 'string'
        }
        k: 'hello'
      }
      l: [
        'hi',
        {
          m: ['hey']
        },
      ]
    }
  }
}

type Expected = {
  readonly a: () => 22
  readonly b: string
  readonly c: {
    readonly d: boolean
    readonly e: {
      readonly g: {
        readonly h: {
          readonly i: true
          readonly j: 'string'
        }
        readonly k: 'hello'
      }
      readonly l: readonly [
        'hi',
        {
          readonly m: readonly ['hey']
        },
      ]
    }
  }
}


// ============= Your Code Here =============
type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends [(infer U)]
  ? readonly [DeepReadonly<U>]
  : T[P] extends (...args: any) => any
  ? T[P]
  : T[P] extends object
  ? DeepReadonly<T[P]>
  : T[P];
}

type F = DeepReadonly<X['c']['e']['l'][1]>;

type G<T> = T extends (...args: any) => any ? true : false;

type g = G<X['b']>;