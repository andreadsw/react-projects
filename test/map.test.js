import test from 'ava'
import map from '../src/map'

// test description
test('Empty array return empty array', t => {
  const result = map([], n => n)
  t.deepEqual(result, [])
})

test('returns a different array', t => {
  const arr = []
  const result = map(arr, n => n)
  t.not(result, arr)
})

test('the length of the array should be the same', t => {
  const arr = [1, 2, 3]
  const result = map(arr, n => n)
  t.is(result.length, arr.length)
})

test('map function that returns the same set of elements', t => {
  // Hint: Try testing that map([1, 2, 3], n => n) returns [1, 2, 3]
  // Hint 2: Can you remember the difference between t.is() and t.deepEqual()?
  const arr = [1, 2, 3]
  const result = map(arr, n => n)
  t.deepEqual(result, arr)
})

test('returns array of modified values', t => {
  // Hint: Try testing that map([1 ,2, 3], n => n * 2) returns [2, 4, 6]
  const arr = [1, 2, 3]
  // pass the fucntion as a value n => n * 2. Pass the function. Not function() like that.
  const result = map(arr, n => n * 2)
  // Should always add the result test that I want to test it.
  t.deepEqual(result, [2, 4, 6])
  // console.log()
})
