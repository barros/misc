// Given an array of integers, return the largest product of adjacent elements.
// Return -1 if input array does not contain at least a pair of integers.

class AdjacentElementsProducts {
    public static void main(String[] args) {
        int[] arr = {8, 2, 9, 3, 0};
        System.out.println(adjacentElementsProducts(arr));
        // adjacentElementsProducts(arr) -> 27
    }

    static int adjacentElementsProducts(int[] vals) {
        int result = 0;
        if (vals.length<=2) {
            if (vals.length==2) {
                return vals[0] * vals[1];
            } 
            if (vals.length<2) {
                return -1;
            }
        } else {
            result = vals[0] * vals[1];
            for (int i=1; i<=vals.length-2; i++) {
                int product =  vals[i] * vals[i+1];
                if (product > result) {
                    result = product;
                }
            }
        }
        return result;
    }
}