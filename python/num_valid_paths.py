"""
Given an n by m matrix of 0s and 1s, return the number of ways
to reach the bottom right corner from the top left.
Assume there will always be a 0 in the top left and bottom right corners.

0 represents an empty space while 1 represents a cell you cannot walk through.
Input:
[[0, 1, 0],
 [0, 0, 1]
 [0, 0, 0]]

Output:
2
"""


def num_of_valid_paths(arr):
    # number of rows
    m = len(arr)
    # number of columns
    n = len(arr[0])
    # num_of_ways[i][j] will contain the number of ways to get to cell [i][j]
    num_of_ways = [[0 for _ in arr[0]] for _ in arr]

    # fill in first row
    for j in range(n):
        if arr[0][j] == 1:
            break
        num_of_ways[0][j] = 1
    # fill in first column
    for i in range(m):
        if arr[i][0] == 1:
            break
        num_of_ways[i][0] = 1

    for i in range(1, m):
        for j in range(1, n):
            # if the cell contains a 1
            if arr[i][j] == 1:
                num_of_ways[i][j] = 0
            else:
                # number of ways to get to cell[i][j]
                # is the sum of the cell above and to the left of [i][j]
                num_of_ways[i][j] = num_of_ways[i-1][j] + num_of_ways[i][j-1]


    print(num_of_ways[m-1][n-1])


num_of_valid_paths(arr)