import java.util.Stack;
import java.lang.StringBuilder;

/*
Given a string with multiple words and spaces represented as a character array.
Write an in-place algorithm to reverse the order of words in the string.
Example: convert ['p', 'e', 'r', 'f', 'e', 'c', 't', ' ', 'm', 'a', 'k', 'e', 's', ' ', 'p', 'r', 'a', 'c', 't', 'i', 'c', 'e']
to
['p', 'r', 'a', 'c', 't', 'i', 'c', 'e', ' ', 'm', 'a', 'k', 'e', 's', ' ', 'p', 'e', 'r', 'f', 'e', 'c', 't']
*/

class ReverseWords {
  public static void main(String[] args) {
    char[] test = {'p', 'e', 'r', 'f', 'e', 'c', 't', ' ', 'm', 'a', 'k', 'e', 's', ' ', 'p', 'r', 'a', 'c', 't', 'i', 'c', 'e'};
    reverseWords(test);
  }

  static void reverseWords(char[] vals) {
    // using a stack will reverse the order of the words
    Stack<String> words = new Stack<>();
    retrieveWords(vals, words);
    StringBuilder res = new StringBuilder();
    if (!words.empty()) {
      res.append(words.pop());
      while (!words.empty()) {
        res.append(" " + words.pop());
      }
    }
    System.out.println(res.toString());
  }

  // helper function to push all words to a stack
  static void retrieveWords(char[] vals, Stack<String> s) {
    StringBuilder word = new StringBuilder();
    for (char val: vals) {
      if (Character.isSpaceChar(val)) {
        if (word.length() != 0) {
          s.push(word.toString());
        }
        word = new StringBuilder();
      } else {
        word.append(val);
      }
    }
    if (word.length()!=0) {
      s.push(word.toString());
    }
  }
}
