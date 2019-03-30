import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;

// Given a sorted list of integers, square the elements and give the output in sorted order.
// For example, given [-9, -2, 0, 2, 3], return [0, 4, 4, 9, 81].

class Squared {
    public static void main(String[] args) {
        ArrayList<Integer> vals = new ArrayList<Integer>();
        vals.add(-9);
        vals.add(-2);
        vals.add(0);
        vals.add(2);
        vals.add(3);
        System.out.println(squared(vals));
    }

    static ArrayList<Integer> squared(ArrayList<Integer> vals) {
        Iterator itr = vals.iterator();
        ArrayList<Integer> res = new ArrayList<>();
        while (itr.hasNext()) {
            int val = (int)itr.next();
            res.add((int) Math.pow(val, 2));
        }
        // Sort because of the possibility of a negative that was squared
        Collections.sort(res);
        return res;
    }
    
}