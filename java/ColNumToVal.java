import java.lang.StringBuilder;

/*
Given a spreadsheet's column number, return its alphabetical encoding.
i.e.: encode(4) => "D"
      encode(28) => "AB"
      encode(6828) => "JBP"
*/

class ColNumToVal {
  public static void main(String args[]) {
    System.out.println(encode(6828));
  }

  static String encode(int columnNum) {
    StringBuilder res = new StringBuilder();
    while (columnNum > 0) {
      int quotient = (columnNum-1) / 26;
      int remainder = (columnNum-1) % 26;

      // prepend new character
      res.insert(0, (char)(65+remainder));
      columnNum = quotient;
    }
    return res.toString();
  }
}