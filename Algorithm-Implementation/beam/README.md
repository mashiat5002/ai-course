# Beam Search

## How the Algorithm Works
Beam search is a heuristic search algorithm that explores a graph by expanding only a limited number (beam width) of the most promising nodes at each level. It uses a priority queue to keep track of the best candidates and prunes the rest, trading off optimality for efficiency.

## Applications
- Natural language processing (machine translation, speech recognition)
- Pathfinding in large graphs
- Game AI

## Complexity
- Time complexity: O(b * d), where b is the beam width and d is the depth
- Space complexity: O(b * d) 