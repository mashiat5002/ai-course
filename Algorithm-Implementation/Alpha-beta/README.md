# Alpha-Beta Pruning

## How the Algorithm Works
Alpha-beta pruning is an optimization for the minimax algorithm used in decision-making and game theory. It reduces the number of nodes evaluated in the search tree by pruning branches that cannot possibly influence the final decision. Alpha represents the best value that the maximizer can guarantee, and beta represents the best value that the minimizer can guarantee.

## Applications
- Game AI (Chess, Tic Tac Toe, Checkers)
- Any two-player adversarial search problems

## Complexity
- Time complexity: O(b^(d/2)) with optimal move ordering, where b is the branching factor and d is the depth
- Space complexity: O(bd) 