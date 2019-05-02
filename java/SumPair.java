import java.util.HashMap;
import java.util.LinkedList;
import java.util.Queue;

// Given the root of a binary search tree, and a target, 
// return two nodes in the tree whose sum equals the target.

class SumPair {
    private static class Node {
        int val = 0;
        Node left = null;
        Node right = null;

        public Node(){}
        public Node(int val) {
            this.val = val;
        }
    }
    private static class Tuple {
        Node one = null;
        Node two = null;
        
        public Tuple() {}
        public Tuple(Node one, Node two) {
            this.one = one;
            this.two = two;
        }
    }

    public static void main(String[] args) {
        Node root = new Node(15);
        root.left = new Node(10);
        root.right = new Node(20);
        root.right.left = new Node(11);
        root.right.right = new Node(24);

        int target = 39;
        Tuple pair = sumPair(root, target);
        if (pair != null) {
            System.out.println("Node 1: " + pair.one.val);
            System.out.println("Node 2: " + pair.two.val);
        } else {
            System.out.println("There are no nodes that sum to the target: " + target);
        }
        
    }

    static Tuple sumPair(Node root, int target) {
        if (root == null) {
            return null;
        }

        Tuple res = null;
        // map to keep track of visited values (key: node integer, value: node position).
        // the position is the first location the integer was located
        HashMap<Integer, Node> visited = new HashMap<Integer, Node>();
        Queue<Node> q = new LinkedList<Node>();
        q.add(root);

        while (!q.isEmpty()) {
            Node current = q.remove();
            int difference = target - current.val;
            // see if the difference has already been visited
            if (visited.containsKey(difference)) {
                res = new Tuple(visited.get(difference), current);
                break;
            }
            // add node and value to the visited map 
            if (!visited.containsKey(current.val)) {
                visited.put(current.val, current);
            }
            if (current.left != null) {
                q.add(current.left);
            }
            if (current.right != null) {
                q.add(current.right);
            }
        }
        return res;
    }
}