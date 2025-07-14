from collections import deque
def breadth_first_search(network, start):
    visited = set()
    queue = deque([start]) 
    while queue:
        current = queue.popleft()
        if current not in visited:
            print(current)
            visited.add(current)
            for adjacent in network[current]:
                if adjacent not in visited:
                    queue.append(adjacent)

# Graph network (same as your DFS one)
network = {
    '0': ['1', '2', '3'],
    '1': ['4','5'],
    '2': ['6'],
    '3': ['7'],
    '4': [],
    '5': [],
    '6': [],
    '7': [],
    
}
breadth_first_search(network, '0')










