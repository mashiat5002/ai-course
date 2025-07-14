explored = set()
path = []
found = False  # <- NEW FLAG

def depth_limited_search(network, current, depth, limit, goal):
    global found
    if found:  # If already found, stop
        return
    if depth > limit:
        return
    if current not in explored:
        path.append(current)
        explored.add(current)
        if current == goal:
            found = True
            return
        for adjacent in network[current]:
            depth_limited_search(network, adjacent, depth + 1, limit, goal)

def iterative_deepening_search(network, start, goal):
    limit = 0
    while True:
        global explored, path, found
        explored = set()
        path = []
        found = False
        
        depth_limited_search(network, start, 0, limit, goal)
        
        if found:
            return path
        limit += 1

# Network
network = {
    'A': ['B', 'C'],
    'B': ['D', 'E'],
    'C': ['F', 'G'],
    'D': ['H', 'I'],
    'E': ['J', 'K'],
    'F': ['L', 'M'],
    'G': ['N', 'O'],
    'H': [], 'I': [], 'J': [], 'K': [], 'L': [], 'M': [], 'N': [], 'O': []
}

# Find a path to 'K'
result_path = iterative_deepening_search(network, 'A', 'N')
print("->".join(result_path))