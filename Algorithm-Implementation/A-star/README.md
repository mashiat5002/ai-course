# A* Algorithm

## How the Algorithm Works
A* (A-star) is a best-first search algorithm that finds the shortest path from a start node to a goal node in a weighted graph. It uses a priority queue and evaluates nodes based on the sum of the cost to reach the node (g) and a heuristic estimate (h) of the cost from the node to the goal. The node with the lowest f = g + h is expanded first.

## Applications
- Pathfinding in maps and games
- Robot navigation
- Puzzle solving (e.g., 8-puzzle, sliding tiles)
- Network routing

## Complexity
- Time complexity: O(E), but can be exponential in the worst case depending on the heuristic
- Space complexity: O(V), where V is the number of vertices 