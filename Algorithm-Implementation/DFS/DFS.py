explored = set()
def depth_first_search(explored, network, current):
    if current not in explored:
        print(current)
        explored.add(current)
        for adjacent in network[current]:
            depth_first_search(explored, network, adjacent)
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
depth_first_search(explored, network, '0') 



