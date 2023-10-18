"use strict";
{
    Alike, Expect;
}
from;
"./test-utils";
const result1 = a
    .option("foo", 123)
    .option("bar", { value: "Hello World" })
    .option("name", "type-challenges")
    .get();
const result2 = a
    .option("name", "another name")
    // @ts-expect-error
    .option("name", "last name")
    .get();
const result3 = a.option("name", "another name").option("name", 123).get();
// type Chainable<T = {}> = {
//   option<S extends string, V>(
//     key: S extends keyof T ? (V extends T[S] ? never : S) : S,
//     value: V
//   ): Chainable<
//     Omit<T, S> & {
//       [P in S]: V;
//     }
//   >;
//   get(): T;
// };
