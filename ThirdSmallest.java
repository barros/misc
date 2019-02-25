import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

//Given a Set of numbers, find and return the 3rd smallest number

class ThirdSmallest {
  public static void main(String[] args) {
    HashSet<Integer> s = new HashSet<>(Arrays.asList(4, 1, 5, 2, 0, 8));
    System.out.println(thirdSmallest(s));

  }
  static int thirdSmallest(Set input) {
    Object[] arr = input.toArray();
    if (arr.length < 3) {
      return -1;
    }
    Arrays.sort(arr);
    return (int) arr[2];
  }
}
