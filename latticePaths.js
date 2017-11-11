/*
*  Problem: Lattice Paths
*
*  Prompt:  Count the number of unique paths to travel from the top left
*           corder to the bottom right corner of a lattice of M x N squares.
*
*           When moving through the lattice, one can only travel to the adjacent
*           corner on the right or down.
*
*  Input:   m {Integer} - rows of squares
*  Input:   n {Integer} - column of squares
*  Output:  {Integer}
*
*  Example: input: (2, 3)
*
*           (2 x 3 lattice of squares)
*            __ __ __
*           |__|__|__|
*           |__|__|__|
*
*           output: 10 (number of unique paths from top left corner to bottom right)
*
*  Resource: https://projecteuler.net/problem=15
*
*/

const latticePaths = (rows, cols) => {
  if (rows < 0 || cols < 0) return 0;
  if (rows === 0 && cols === 0) return 1;
  
  return latticePaths(rows-1, cols) + latticePaths(rows, cols-1);
}

console.log(latticePaths(2, 3));