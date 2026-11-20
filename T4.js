import java.util.Scanner;
/**
* Simple Restaurant Tip &amp; Bill Splitter
* Calculates the tip amount, total bill, and equal cost per person
* based on user-entered meal subtotal, tip percentage, and group size.

*/
public class Main {
public static void main(String[] args) {
// Create a Scanner to read keyboard input from the user
Scanner scanner = new Scanner(System.in);
// Controls whether the user wants to calculate another bill
boolean keepGoing = true;
System.out.println(&quot;==========================================&quot;);
System.out.println(&quot; SIMPLE RESTAURANT TIP &amp; BILL SPLITTER &quot;);
System.out.println(&quot;==========================================&quot;);
// Repeat the calculator loop until the user chooses to stop
while (keepGoing) {
System.out.println();
// 1. Get a valid meal subtotal greater than $0.00
double mealSubtotal = readValidDouble(scanner, &quot;Enter meal subtotal ($): &quot;, 0.0);
// 2. Get a valid whole-number tip percentage (0% or higher)
int tipPercent = readValidInt(scanner, &quot;Enter tip percentage (e.g., 15, 18, 20):
&quot;, 0);
// 3. Get the number of people splitting the bill (must be at least 1)
int numPeople = readValidInt(scanner, &quot;Enter number of people splitting the bill:
&quot;, 1);
// Perform tip, total, and per-person division math
double tipAmount = mealSubtotal * (tipPercent / 100.0); // 100.0 ensures decimal
division
double totalBill = mealSubtotal + tipAmount;
double perPersonCost = totalBill / numPeople;
// Display the formatted receipt summary
printReceipt(mealSubtotal, tipPercent, tipAmount, totalBill, numPeople,
perPersonCost);
// Ask the user if they want to run another calculation
System.out.print(&quot;\nWould you like to split another bill? (y/n): &quot;);
String again = scanner.nextLine().trim();
if (!again.equalsIgnoreCase(&quot;y&quot;) &amp;&amp; !again.equalsIgnoreCase(&quot;yes&quot;)) {
keepGoing = false; // Ends the while loop
}
}
System.out.println(&quot;\nThank you for using the Tip &amp; Bill Splitter. Goodbye!&quot;);
scanner.close(); // Close Scanner to free system resources
}
/**
* Prints the itemized bill, tip, total, and per-person share formatted to 2 decimal
places.
*/
public static void printReceipt(double subtotal, int tipPct, double tipAmt,

double total, int people, double each) {
System.out.println(&quot;\n--- BILL &amp; TIP BREAKDOWN ---&quot;);
System.out.println(&quot;Meal Subtotal: $&quot; + String.format(&quot;%.2f&quot;, subtotal));
System.out.println(&quot;Tip (&quot; + tipPct + &quot;%): $&quot; + String.format(&quot;%.2f&quot;,
tipAmt));
System.out.println(&quot;Total Bill: $&quot; + String.format(&quot;%.2f&quot;, total));
System.out.println(&quot;Split (&quot; + people + (people == 1 ? &quot; person): $&quot; : &quot; people):
$&quot;)
+ String.format(&quot;%.2f&quot;, each) + &quot; per person&quot;);
}
/**
* Reads a valid decimal number greater than minExclusive, re-prompting on invalid input.
*/
public static double readValidDouble(Scanner scanner, String prompt, double minExclusive)
{
while (true) {
System.out.print(prompt);
if (!scanner.hasNextDouble()) {
// Discard non-numeric text so the program does not crash
scanner.nextLine();
System.out.println(&quot;Invalid input. Please enter a valid dollar amount (e.g.,
45.50).&quot;);
} else {
double value = scanner.nextDouble();
scanner.nextLine(); // Clear leftover newline character from input buffer
if (value &lt;= minExclusive) {
System.out.println(&quot;Amount must be greater than $&quot; +
String.format(&quot;%.2f&quot;, minExclusive) + &quot;.&quot;);
} else {
return value;
}
}
}
}
/**
* Reads a valid whole number at least equal to minInclusive, re-prompting on invalid
input.
*/
public static int readValidInt(Scanner scanner, String prompt, int minInclusive) {
while (true) {
System.out.print(prompt);
if (!scanner.hasNextInt()) {
// Discard non-numeric text so the program does not crash
scanner.nextLine();
System.out.println(&quot;Invalid input. Please enter a whole number.&quot;);
} else {
int value = scanner.nextInt();
scanner.nextLine(); // Clear leftover newline character from input buffer
if (value &lt; minInclusive) {
System.out.println(&quot;Number must be at least &quot; + minInclusive + &quot;.&quot;);
} else {
return value;
}
}
}
}

}