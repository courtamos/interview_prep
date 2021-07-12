## Good Code

1. Readable
2. Scalable

## Big-O Rules

A rulebook for simplifing Big-O calculations.

1. Worst Case
   We dont always know what the input will be (aka the size of it) so we can just assume that the worse case scenario is that the item we're looking for is last.

2. Remove Constants
   When calculating the Big-O during an interview, we only care about the Big-O's from the complexity chart. In the grand scheme, having constants doesn't make much of a difference, the way the line on the complexity chart grows will be consistent.

   For example, if we have calculated a Big-O of O(1 + n/2 + 100), then used the rule, we would end up wth O(n).

3. Different Terms For Inputs
   Look at the inputs that you take in, is it one or multiple?

   - Multiple Inputs: If you're taking multiple inputs then your Big-O will look like this, O(a + b).

   - Single Inputs: If you're taking a single input in then your Big-O notation will look like this, O(a \* b).

   The best way to determine whether to add or multiply is to look at your loops. When loops are inline, you add O(a + b). When loops are nested, you multiply O(a \* b).

4. Drop Non Dominants
   We only worry about the most dominant terms when calculating Big-O.

   For example, if we calculated a Big-O of O(n^2 + 3n + 100 + n/2), then used the rule, we would end up with O(n^2).
