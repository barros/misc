// Implement a division function without the use of *, /, and %

class Divide {
  public static void main(String[] args) {
    System.out.println(divide(25, -4));
  }

  static int divide(int dividend, int divisor) {
    int sign = 1;
    if ((dividend < 0) ^ (divisor < 0)) {
      sign = -1;
    }
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);
    int quotient = 0;
    while (dividend >= divisor) {
      dividend -= divisor;
      quotient++;
    }
    return sign * quotient;
  }
}
