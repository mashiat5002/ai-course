# Iterative Deepening Search (IDS)

## How the Algorithm Works
Iterative Deepening Search combines the space efficiency of Depth-First Search (DFS) with the optimality of Breadth-First Search (BFS). It repeatedly applies Depth-Limited Search with increasing depth limits until the goal is found.

## Applications
- Pathfinding in large or infinite graphs
- Game tree exploration
- Solving puzzles

## Complexity
- Time complexity: O(b^d), where b is the branching factor and d is the depth of the shallowest solution
- Space complexity: O(d) 