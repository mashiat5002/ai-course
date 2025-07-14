# Bidirectional Search

## How the Algorithm Works
Bidirectional search runs two simultaneous searches—one forward from the start node and one backward from the goal node. The search stops when the two searches meet. This approach can significantly reduce the search space compared to unidirectional search.

## Applications
- Pathfinding in large graphs
- Puzzle solving (e.g., Rubik's Cube)
- Network routing

## Complexity
- Time complexity: O(b^(d/2)), where b is the branching factor and d is the depth
- Space complexity: O(b^(d/2)) 