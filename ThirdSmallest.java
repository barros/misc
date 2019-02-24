import java.util.Arrays;

class ThirdSmallest {
  public static void main(String[] args) {
    int[] input = {4, 1, 5, 2, 0, 8};
    System.out.println(thirdSmallest(input));
  }
  static int thirdSmallest(int[] input) {
    if (input.length < 3) {
      return -1;
    }
    Arrays.sort(input);
    return input[2];
  }
}
