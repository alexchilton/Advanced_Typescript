import { Equal, Expect } from "..";

/**
 * Type the `combineArrays` function to take several arrays
 * containing different types of values, and merge them into
 * a single array containing tuples of values for each index.
 *
 * *For example,
 * `combineArrays([1, 2], [true, false], ['a', 'b'])`
 * returns`[[1, true, 'a'], [2, false, 'b']]`. (number | boolean | string)[]
 */

declare function combineArrays(...arrays: TODO): TODO;

// Example usage and tests
const example1 = combineArrays([1, 2], [true, false]);
// => [[1, true], [2, false]]
type test1 = Expect<Equal<typeof example1, [number, boolean][]>>;

const example2 = combineArrays([1, 2], [true, false], ["a", "b"]);
// => [[1, true, 'a'], [2, false, 'b']]
type test2 = Expect<Equal<typeof example2, [number, boolean, string][]>>;

const example3 = combineArrays([1, 2, null], [true, false, undefined]);
// => [[1, true], [2, false], [null, undefined]]
type test3 = Expect<
  Equal<typeof example3, [number | null, boolean | undefined][]>
>;
