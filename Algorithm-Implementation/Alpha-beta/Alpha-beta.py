def alphabeta(node, tree, alpha, beta, is_maximizing):
    if isinstance(tree[node], int):  # Base case: leaf node
        return tree[node]

    if is_maximizing:
        max_score = float('-inf')
        for child in tree[node]:
            score = alphabeta(child, tree, alpha, beta, False)
            max_score = max(max_score, score)
            alpha = max(alpha, score)
            if beta <= alpha:
                break
        return max_score
    else:
        min_score = float('inf')
        for child in tree[node]:
            score = alphabeta(child, tree, alpha, beta, True)
            min_score = min(min_score, score)
            beta = min(beta, score)
            if beta <= alpha:
                break
        return min_score

# Tree structure same as your minimax
game_tree = {
    'A': ['B', 'C'],
    'B': ['D', 'E'],
    'C': ['F', 'G'],
    'D': 3,
    'E': 5,
    'F': 2,
    'G': 9
}



# Start
optimal_value = alphabeta('A', game_tree, float('-inf'), float('inf'), True)
print("Optimal value at root:", optimal_value)