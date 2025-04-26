# C# Complete Guide (Concepts Only)

## **1. Introduction to C#**

### **Overview of C#**
C# (pronounced as "C-Sharp") is a modern, object-oriented programming language developed by Microsoft as part of its .NET framework. It is widely used for building applications such as desktop applications, web applications, mobile applications, and games. C# is known for its simplicity, strong typing, and powerful capabilities.

**Key Points:**
- Developed by Microsoft in 2000.
- Object-oriented programming language.
- Runs on the .NET framework.
- Used in web, desktop, and game development.
- Strongly typed and garbage-collected.

### **Features of C#**
C# provides several advanced features that make development efficient and scalable:

1. **Object-Oriented:** Supports classes, inheritance, polymorphism, and encapsulation.
2. **Type-Safe:** Prevents type-related errors during runtime.
3. **Garbage Collection:** Automatic memory management.
4. **Platform-Independent:** Runs on Windows, Linux, and macOS via .NET Core.
5. **Asynchronous Programming:** Supports async/await for non-blocking operations.
6. **Interoperability:** Can interact with C++ and other .NET languages.
7. **Language-Integrated Query (LINQ):** Provides query capabilities for collections and databases.
8. **Exception Handling:** Built-in error handling mechanisms.

### **Setting up the Development Environment**
To start coding in C#, follow these steps:

1. **Install .NET SDK:** Download and install the latest .NET SDK from [Microsoft's official site](https://dotnet.microsoft.com/).
2. **Install a Code Editor:**
   - **Visual Studio (Recommended):** Full-featured IDE for C# development.
   - **Visual Studio Code:** Lightweight code editor with C# extensions.
3. **Verify Installation:**
   - Open a terminal and run `dotnet --version` to check if .NET SDK is installed.

### **Writing and Running a Simple Program**
Below is a simple "Hello, World!" program in C#:

```csharp
using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Hello, World!");
    }
}
```

#### **Steps to Run the Program:**
1. Open a terminal or command prompt.
2. Create a new C# console application:
   ```sh
   dotnet new console -n MyFirstApp
   cd MyFirstApp
   ```
3. Replace `Program.cs` content with the above code.
4. Run the program using:
   ```sh
   dotnet run
   ```

This will output:
```
Hello, World!
```

---

## **2. C# Basics**

### **Syntax and Structure**
C# programs follow a structured syntax. Every program consists of:
- **Namespaces:** Group related classes.
- **Classes:** Contain methods and variables.
- **Methods:** Define program logic.
- **Statements and Expressions:** Define the flow of execution.

Example:
```csharp
using System;

namespace MyApplication
{
    class Program
    {
        static void Main()
        {
            Console.WriteLine("C# Syntax Example");
        }
    }
}
```

### **Variables and Data Types**
Variables store data values, and C# supports multiple data types.

Example:
```csharp
int num = 10;
float price = 99.99f;
bool isAvailable = true;
char letter = 'A';
string name = "John";
```

### **Type Casting**
Converting one data type to another.
- **Implicit Casting (Automatically done by C#):**
  ```csharp
  int num = 10;
  double d = num; // Implicit casting
  ```
- **Explicit Casting (Manual conversion):**
  ```csharp
  double d = 9.78;
  int num = (int)d; // Explicit casting
  ```

### **Operators**
C# supports arithmetic, logical, comparison, and bitwise operators.

Example:
```csharp
int a = 10, b = 5;
Console.WriteLine(a + b); // Addition
Console.WriteLine(a > b); // Comparison
Console.WriteLine(a == b && b < 10); // Logical
```

### **User Input**
Reading user input from the console.
```csharp
Console.WriteLine("Enter your name:");
string name = Console.ReadLine();
Console.WriteLine("Hello, " + name);
```

### **Control Statements (If-Else, Switch)**
#### **If-Else Statement**
```csharp
int age = 18;
if (age >= 18)
{
    Console.WriteLine("You are an adult.");
}
else
{
    Console.WriteLine("You are a minor.");
}
```

#### **Switch Statement**
```csharp
int day = 3;
switch (day)
{
    case 1:
        Console.WriteLine("Monday");
        break;
    case 2:
        Console.WriteLine("Tuesday");
        break;
    default:
        Console.WriteLine("Other day");
        break;
}
```

### **Loops (For, While, Do-While, Foreach)**
#### **For Loop**
```csharp
for (int i = 0; i < 5; i++)
{
    Console.WriteLine("Iteration: " + i);
}
```

#### **While Loop**
```csharp
int x = 0;
while (x < 5)
{
    Console.WriteLine("x: " + x);
    x++;
}
```

#### **Do-While Loop**
```csharp
int y = 0;
do
{
    Console.WriteLine("y: " + y);
    y++;
} while (y < 5);
```

#### **Foreach Loop (For collections)**
```csharp
string[] names = {"John", "Jane", "Doe"};
foreach (string n in names)
{
    Console.WriteLine(n);
}
```

## **3. Methods and Functions**

### **Defining and Calling Methods**
Methods in C# are blocks of code that perform a specific task and can be called multiple times.

Example:
```csharp
using System;

class Program
{
    static void Greet()
    {
        Console.WriteLine("Hello, Welcome to C#!");
    }

    static void Main()
    {
        Greet(); // Calling the method
    }
}
```

### **Method Parameters (Value, Reference, Output)**

#### **Value Parameters** (Pass-by-Value)
When passing arguments by value, changes inside the method do not affect the original variable.
```csharp
void Square(int num)
{
    num = num * num;
    Console.WriteLine("Inside method: " + num);
}

int x = 5;
Square(x);
Console.WriteLine("Outside method: " + x); // x remains unchanged
```

#### **Reference Parameters** (Pass-by-Reference)
The `ref` keyword allows modifying the original variable.
```csharp
void Square(ref int num)
{
    num = num * num;
}

int x = 5;
Square(ref x);
Console.WriteLine(x); // x is modified to 25
```

#### **Output Parameters**
The `out` keyword allows returning multiple values.
```csharp
void GetValues(out int a, out int b)
{
    a = 10;
    b = 20;
}

int x, y;
GetValues(out x, out y);
Console.WriteLine($"x: {x}, y: {y}");

// x: 10, y: 20

```

### **Method Overloading**
Method overloading allows multiple methods with the same name but different parameters.
```csharp
class Program
{
    static void Print(int num)
    {
        Console.WriteLine("Integer: " + num);
    }
    
    static void Print(string text)
    {
        Console.WriteLine("String: " + text);
    }

    static void Main()
    {
        Print(10);
        Print("Hello");
    }
}
```

### **Recursion**
A recursive method calls itself to solve a problem.

Example: Factorial using recursion
```csharp
int Factorial(int n)
{
    if (n <= 1)
        return 1;
    return n * Factorial(n - 1);
}

Console.WriteLine(Factorial(5)); // Output: 120
```


## **4. Object-Oriented Programming (OOP)**

### **Classes and Objects**
**What is it?**
Classes are blueprints for objects, defining properties and behaviors, while objects are instances of a class.

**Scenario:** Used when creating reusable templates for objects with shared properties and methods.

Example:
```csharp
class Car
{
    public string Brand = "Toyota";
}

class Program
{
    static void Main()
    {
        Car myCar = new Car();
        Console.WriteLine(myCar.Brand);
    }
}
// Toyota
```

### **Constructors and Destructors**
**What is it?**
Constructors initialize object properties when an object is created. Destructors are used for cleanup in memory-intensive applications.

**Scenario:** Useful when initializing mandatory properties upon object creation.

Example:
```csharp
class Car
{
    public string Brand;
    
    public Car(string brand)
    {
        Brand = brand;
    }
}
```

### **Access Modifiers**
**What is it?**
Defines the accessibility of class members (public, private, protected, internal).

**Scenario:** Used to restrict access to class members and enforce encapsulation.

Example:
```csharp
class Car
{
    // private: Only accessible within this class
    private string brand;

    // public: Accessible from anywhere (other classes or assemblies)
    public void SetBrand(string b) 
    {
        brand = b;
    }

    public string GetBrand() 
    {
        return brand;
    }

    // protected: Accessible within this class and by derived classes
    protected string model;

    // internal: Accessible only within this assembly
    internal int year;
}

```

### **Properties and Encapsulation**
**What is it?**
Encapsulation is the practice of hiding internal data and exposing controlled access.

**Scenario:** Provides controlled access to class fields, ensuring data security.

Example:
```csharp
using System;

public class BankAccount 
{
    // Private field: encapsulates the balance and hides it from external access
    private decimal balance;

    // Constructor: Initializes the account with an initial balance
    public BankAccount(decimal initialBalance)
    {
        balance = initialBalance;
    }

    // Deposit Method: Encapsulates how the balance is updated
    public void Deposit(decimal amount)
    {
        balance += amount;
    }

    // Withdraw Method: Encapsulates the rules for withdrawing money
    public void Withdraw(decimal amount)
    {
        if (balance >= amount) {
            balance -= amount;
        }
        else {
            Console.WriteLine("Insufficient funds.");
        }
    }

    // GetBalance Method: Provides controlled access to the balance (encapsulation)
    // Encapsulation: This method allows reading the balance without exposing the internal state directly
    public decimal GetBalance() 
    { 
        return balance; 
    }
}

class Program 
{
    static void Main(string[] args)
    {
        BankAccount myAccount = new BankAccount(1000);

        myAccount.Deposit(500);
        Console.WriteLine("Balance: " + myAccount.GetBalance());

        myAccount.Withdraw(2000);
        Console.WriteLine("Balance: " + myAccount.GetBalance());
    }
}

/* 
Expected Output:
Balance: 1500
Insufficient funds.
Balance: 1500
*/

```

### **Static vs Instance Members**
**What is it?**
Static members belong to the class rather than any specific instance, while instance members are unique to each object.

**Scenario:** Static members are useful for shared properties, such as configuration values.

Example:
```csharp
using System;

class Car
{
    // Static Member: Belongs to the class, shared across all instances
    public static int Wheels = 4;

    // Instance Member: Belongs to each specific object (car)
    public string Brand;

    public Car(string brand)
    {
        Brand = brand;
    }

    // Instance Method to display car information
    public void DisplayCarInfo()
    {
        Console.WriteLine($"Car Brand: {Brand}, Wheels: {Wheels}");
    }
}

class Program
{
    static void Main(string[] args)
    {
        // Create two instances of Car with different brands
        Car car1 = new Car("Toyota");
        Car car2 = new Car("Ford");

        // Display information for both cars
        car1.DisplayCarInfo();  // Output: Car Brand: Toyota, Wheels: 4
        car2.DisplayCarInfo();  // Output: Car Brand: Ford, Wheels: 4

        // Modify the static member Wheels (affects all instances)
        Car.Wheels = 6;

        // Display updated information for both cars
        car1.DisplayCarInfo();  // Output: Car Brand: Toyota, Wheels: 6
        car2.DisplayCarInfo();  // Output: Car Brand: Ford, Wheels: 6
    }
}

```

### **Inheritance**
**What is it?**
Allows a class to derive functionality from another class, promoting code reuse.

**Scenario:** Used when multiple classes share common properties and behaviors.

### **Types of Inheritance in C#**

1. **Single Inheritance**:
   - A class can inherit from only one base class.
   - **Example**: A `Car` class inherits from a `Vehicle` class.

   **Example**:
```csharp
   class Vehicle
{
    public string Brand = "Toyota";  // Base class property
}

class Car : Vehicle
{
    public string Model = "Corolla";  // Derived class property
}

class Program
{
    static void Main()
    {
        Car myCar = new Car();
        Console.WriteLine("Brand: " + myCar.Brand);  // Accessing base class property
        Console.WriteLine("Model: " + myCar.Model);  // Accessing derived class property
    }
}

// output
Brand: Toyota
Model: Corolla
```

### **What is Multilevel Inheritance?**
Multilevel inheritance is a type of inheritance where a class derives from another class, and then another class derives from the first derived class. In simple terms, a class can inherit properties and methods from a class that already inherits from another class. This forms a **chain of inheritance**.

### **Diagram of Multilevel Inheritance**:

    Vehicle
       |
      Car
       |
    SportsCar

### **Scenario:**
Multilevel inheritance is useful when you have a base class with common properties, and derived classes build upon the base class with more specific properties. You can continue to extend this behavior with multiple derived classes, each adding more functionality.

### **Example:**

```csharp
class Vehicle
{
    public string Brand = "Toyota";  // Base class property
}

class Car : Vehicle
{
    public string Model = "Corolla";  // Derived class property
}

class SportsCar : Car
{
    public string Speed = "200 mph";  // Further derived class property
}

class Program
{
    static void Main()
    {
        SportsCar mySportsCar = new SportsCar();
        Console.WriteLine("Brand: " + mySportsCar.Brand);  // Accessing base class property
        Console.WriteLine("Model: " + mySportsCar.Model);  // Accessing intermediate class property
        Console.WriteLine("Speed: " + mySportsCar.Speed);  // Accessing derived class property
    }
}

// output
Brand: Toyota
Model: Corolla
Speed: 200 mph

```
### 3. **Hierarchical Inheritance**
   - In **Hierarchical Inheritance**, multiple classes inherit from a single base class. The base class provides common functionality, and the derived classes extend it with more specific functionality.

   #### **Example**:
   ```csharp
   class Vehicle
   {
       public string Brand = "Toyota";  // Base class property
   }

   class Car : Vehicle
   {
       public string Model = "Corolla";  // Derived class property
   }

   class Truck : Vehicle
   {
       public string LoadCapacity = "5000 kg";  // Derived class property
   }

   class Program
   {
       static void Main()
       {
           Car myCar = new Car();
           Console.WriteLine("Car Brand: " + myCar.Brand);  // Accessing base class property
           Console.WriteLine("Car Model: " + myCar.Model);  // Accessing derived class property

           Truck myTruck = new Truck();
           Console.WriteLine("Truck Brand: " + myTruck.Brand);  // Accessing base class property
           Console.WriteLine("Truck Load Capacity: " + myTruck.LoadCapacity);  // Accessing derived class property
       }
   }

   // Output:
   // Car Brand: Toyota
   // Car Model: Corolla
   // Truck Brand: Toyota
   // Truck Load Capacity: 5000 kg
```
### 4. **Multiple Inheritance in C#**
   - **Multiple inheritance** refers to a scenario where a class inherits from more than one base class. However, **C# does not support multiple inheritance of classes**.
   - The reason for this is to avoid **ambiguity**. If a class inherits from multiple classes that have methods or properties with the same name, it creates confusion on which method or property to call.

   #### **Why is Multiple Inheritance Not Supported?**
   - **Ambiguity and Conflicts**: If two base classes have the same method or property, it creates confusion in the derived class on which method or property should be used.
   - **Diamond Problem**: This problem occurs when two classes inherit from the same base class, and then another class inherits from both of these classes. This can create conflicts when trying to access properties or methods from the shared base class.

   #### **How to Overcome Multiple Inheritance in C#?**
   - **Using Interfaces**: C# allows a class to implement multiple interfaces, which helps avoid conflicts. An interface defines a contract (method signatures and properties), and a class can implement multiple interfaces, thus inheriting behaviors from multiple sources.

   #### **Example of Multiple Inheritance via Interfaces**:
   ```csharp
   interface IVehicle
   {
       string Brand { get; set; }
       void Drive();
   }

   interface ICar
   {
       string Model { get; set; }
       void ShowCarInfo();
   }

   class SportsCar : IVehicle, ICar
   {
       public string Brand { get; set; }
       public string Model { get; set; }

       public SportsCar(string brand, string model)
       {
           Brand = brand;
           Model = model;
       }

       public void Drive()
       {
           Console.WriteLine("Driving the car...");
       }

       public void ShowCarInfo()
       {
           Console.WriteLine($"Brand: {Brand}, Model: {Model}");
       }
   }

   class Program
   {
       static void Main()
       {
           SportsCar mySportsCar = new SportsCar("Toyota", "Supra");
           mySportsCar.Drive();
           mySportsCar.ShowCarInfo();
       }
   }

   // Output:
   // Driving the car...
   // Brand: Toyota, Model: Supra
```
### **Polymorphism (Method Overriding and Overloading)**
It allows methods to behave differently based on the object that calls them, even if they share the same name. In C#, polymorphism is achieved primarily through Method Overloading and Method Overriding.

#### Types of Polymorphism in C#:
1. **Method Overloading** (Compile-time Polymorphism)
2. **Method Overriding** (Run-time Polymorphism)


#### **Method Overriding**
**What is it?**
Allows a derived class to modify the behavior of a base class method.

**Scenario:** Used when a subclass needs to provide a specific implementation of a base class method.

Example:
```csharp
class Animal
{
    public virtual void MakeSound() { Console.WriteLine("Animal sound"); }
}
class Dog : Animal
{
    public override void MakeSound() { Console.WriteLine("Bark"); }
}
```

#### **Method Overloading**
**What is it?**
Allows multiple methods with the same name but different parameters within the same class.

**Scenario:** Used when different versions of a method are needed for different input types.

Example:
```csharp
class MathOps
{
    public int Add(int a, int b) { return a + b; }
    public double Add(double a, double b) { return a + b; }
}
```
#### **Polymorphism Example in C# (Overloading + Overriding)**

```csharp
// Base class
class User
{
    // Method Overloading (compile-time polymorphism)
    public void Notify(string message)
    {
        Console.WriteLine("Notification: " + message);
    }

    public void Notify(string message, string tag)
    {
        Console.WriteLine($"Notification [{tag}]: {message}");
    }

    // Virtual method to be overridden (runtime polymorphism)
    public virtual string PerformOperation()
    {
        return "User: View dashboard";
    }
}

// Admin class overrides PerformOperation
class Admin : User
{
    public override string PerformOperation() // Method Overriding (runtime polymorphism)
    {
        return "Admin: Manage users and settings";
    }
}

// Seller class overrides PerformOperation
class Seller : User
{
    public override string PerformOperation() // Method Overriding (runtime polymorphism)
    {
        return "Seller: Manage products and orders";
    }
}

// Factory to return user based on type
User GetUserByType(string type)
{
    return type switch
    {
        "Admin" => new Admin(),
        "Seller" => new Seller(),
        _ => new User()
    };
}

void Main()
{
    string requestType = "Seller"; // Comes from API or request payload
    User user = GetUserByType(requestType);

    // Polymorphic behavior: Calls the correct overridden method at runtime
    Console.WriteLine(user.PerformOperation());

    // Overloaded methods: both Notify methods exist, picked by parameter signature
    user.Notify("Welcome!");
    user.Notify("Access granted", "INFO");
}
// output
Seller: Manage products and orders
Notification: Welcome!
Notification [INFO]: Access granted
```

### **Abstraction and Abstract Classes**
**What is it?**
Abstraction hides implementation details and enforces a contract using abstract classes.

**Scenario:** Used when creating a template for related classes with common behaviors.

Example:
```csharp
// Abstract Class Implementation
abstract class PaymentProcessor
{
    // Abstract method (no implementation)
    public abstract void ProcessPayment(decimal amount);

    // Concrete method (with implementation)
    public void LogTransaction()
    {
        Console.WriteLine("Transaction logged.");
    }
}

class CreditCardPayment : PaymentProcessor
{
    // Must implement the abstract method
    public override void ProcessPayment(decimal amount)
    {
        Console.WriteLine($"Processing credit card payment of ${amount}");
    }
}
```

### **Interfaces**
**What is it?**
Defines a contract that multiple classes can implement, ensuring a standardized structure.

**Scenario:** Used when different classes need to implement the same methods differently.

Example:

```csharp
// Interface Implementation
interface IPaymentProcessor
{
    // Interface method (no implementation)
    void ProcessPayment(decimal amount);

    // Note: You can't provide method implementations directly in interfaces, but you can use default interface methods (C# 8.0 and later)
    // Uncomment below if using C# 8.0+ to use default implementation (otherwise, this will be an error):
    // void LogTransaction() => Console.WriteLine("Transaction logged.");
}

class CreditCardPayment : IPaymentProcessor
{
    // Must implement the interface method
    public void ProcessPayment(decimal amount)
    {
        Console.WriteLine($"Processing credit card payment of ${amount}");
    }

    // LogTransaction must be implemented manually if you don’t use default interface method
    public void LogTransaction()
    {
        Console.WriteLine("Transaction logged.");
    }
}
class Program
{
    static void Main(string[] args)
    {
        IPaymentProcessor payment = new CreditCardPayment();

        // Process payment
        payment.ProcessPayment(100.00m);

        // Log the transaction
        payment.LogTransaction();
    }
}

// output
Processing credit card payment of $100
Transaction logged.
```

### **Enums and Structs**
#### **Enums**
**What is it?**
A special data type that defines a set of named constants.

**Scenario:** Used when a variable should have a fixed set of possible values, like days of the week.

Example:
```csharp
enum Days { Sunday, Monday, Tuesday, Wednesday }
```

#### **Structs**
**What is it?**
A value-type data structure that groups related variables.

**Scenario:** Used for small, simple objects that do not require inheritance.

Example:

```csharp

struct Point
{
    public int X, Y;
}
```
---

## **5. Collections and Data Structures**

### **Arrays**
**What is it?**
A fixed-size collection of elements of the same type.

**Scenario:** Used when the number of elements is known beforehand.

Example:
```csharp
int[] numbers = { 1, 2, 3, 4, 5 };
```

### **Lists**
**What is it?**
A dynamic collection of elements that can grow or shrink in size.

**Scenario:** Used when the number of elements is unknown or frequently changing.

Example:
```csharp
List<int> numbers = new List<int> { 1, 2, 3 };
numbers.Add(4);
```

### **Dictionaries**
**What is it?**
A collection of key-value pairs.

**Scenario:** Used when mapping unique keys to values is needed.

Example:
```csharp
Dictionary<string, int> ages = new Dictionary<string, int>();
ages["Alice"] = 25;
```

### **Queues and Stacks**
#### **Queues**
**What is it?**
A FIFO (First-In, First-Out) collection.

**Scenario:** Used for task scheduling or handling requests in order.

Example:
```csharp
Queue<string> queue = new Queue<string>();
queue.Enqueue("Task1");
queue.Enqueue("Task2");
```

#### **Stacks**
**What is it?**
A LIFO (Last-In, First-Out) collection.

**Scenario:** Used for undo operations or backtracking.

Example:
```csharp
Stack<int> stack = new Stack<int>();
stack.Push(10);
stack.Push(20);
```

### **HashSet and SortedSet**
**What is it?**
HashSet stores unique elements with no order, while SortedSet stores unique elements in sorted order.

**Scenario:** Used when ensuring uniqueness is important.

Example:
```csharp
HashSet<int> uniqueNumbers = new HashSet<int> { 1, 2, 3, 3 };
```

### **LinkedList**
**What is it?**
A linked structure where each node points to the next.

**Scenario:** Used when frequent insertions and deletions are required.

Example:
```csharp
LinkedList<int> list = new LinkedList<int>();
list.AddLast(10);
list.AddLast(20);
```

## **6. Exception Handling in C#**

### **What is an Exception?**
An **exception** is an error that occurs during the program's execution (runtime).  
While **compile-time errors** are detected by the compiler before the code runs, exceptions are errors that happen during the program's execution.

---

### **Exception Types by Stage**

#### **Compile-Time Errors** (Detected before program runs)

| Error Type             | Description                                   |
|------------------------|-----------------------------------------------|
| Syntax Error           | Missing `;`, unmatched `{}` etc.              |
| Type Mismatch          | Assigning string to an int, etc.              |
| Undeclared Identifier  | Using a variable that hasn't been defined     |

➡️ These are caught **before** the application runs. No `try-catch` needed.

---

#### **Run-Time Exceptions** (Handled via `try-catch`)

| Exception Type           | Description                                                    |
|--------------------------|----------------------------------------------------------------|
| `DivideByZeroException`  | Dividing a number by zero                                     |
| `NullReferenceException` | Accessing members on a null object                            |
| `IndexOutOfRangeException` | Index outside the bounds of an array/list                   |
| `InvalidOperationException` | Operation not valid for current state                      |
| `FileNotFoundException`  | File doesn't exist                                            |
| `FormatException`        | Parsing string with incorrect format                          |
| `ArgumentException`      | Invalid method argument passed                                |
| `ArgumentNullException`  | Null argument where a value is expected                       |
| `OverflowException`      | Numeric operation exceeds data type limits                    |
| `IOException`            | Base for input/output errors                                  |

---

###  **Final Real-Time Example: Throwing, Custom Exception, and Multiple Types**

This example demonstrates:
- Manual `throw`
- Custom exception
- Runtime exception types like `FileNotFoundException`, `FormatException`, `DivideByZeroException`

---

####  **Custom Exception**
```csharp
class InvalidReportException : Exception
{
    public InvalidReportException(string message) : base(message) { }
}
```
####  Report Generation Logic

```csharp
using System;
using System.IO;

class ReportService
{
    public void GenerateReport(string filePath, string rawValue)
    {
        if (string.IsNullOrEmpty(filePath))
            throw new ArgumentNullException("File path is required."); // Manually thrown

        if (!File.Exists(filePath))
            throw new FileNotFoundException("Report file not found."); // Runtime

        int value;
        if (!int.TryParse(rawValue, out value))
            throw new FormatException("Input is not a valid number."); // Format issue

        if (value == 0)
            throw new InvalidReportException("Report value cannot be zero."); // Custom exception

        int result = 100 / value; // Could throw DivideByZeroException if not checked

        Console.WriteLine($"Report processed. Result = {result}");
    }
}

class Program
{
    static void Main()
    {
        try
        {
            string path = "C:\\invalid\\report.txt";  // File doesn't exist
            string input = "0";                       // Will trigger custom exception

            ReportService service = new ReportService();
            service.GenerateReport(path, input);
        }
        catch (ArgumentNullException ex)
        {
            Console.WriteLine("Input Error: " + ex.Message);
        }
        catch (FileNotFoundException ex)
        {
            Console.WriteLine("File Error: " + ex.Message);
        }
        catch (FormatException ex)
        {
            Console.WriteLine("Format Error: " + ex.Message);
        }
        catch (InvalidReportException ex)
        {
            Console.WriteLine("Custom Exception: " + ex.Message); // Custom exception caught
        }
        catch (DivideByZeroException ex)
        {
            Console.WriteLine("Math Error: " + ex.Message);
        }
        catch (Exception ex)
        {
            Console.WriteLine("General Error: " + ex.Message);
        }
        finally
        {
            Console.WriteLine("Report process complete.");
        }
    }
}


// Output:
File Error: Report file not found.
Report process complete.

If the file existed and input = "0":

Math Error: Attempted to divide by zero.
Report process complete.
```

## **7. File Handling**

### **Reading and Writing Files**
C# provides the `System.IO` namespace to work with files. The `File` and `StreamWriter/StreamReader` classes are commonly used for file operations.

#### **Writing to a File**
```csharp
using System;
using System.IO;

class Program
{
    static void Main()
    {
        string filePath = "test.txt";
        File.WriteAllText(filePath, "Hello, C# File Handling!");
        Console.WriteLine("File written successfully.");
    }
}
```
**Output:**
```
File written successfully.
```

#### **Reading from a File**
```csharp
using System;
using System.IO;

class Program
{
    static void Main()
    {
        string filePath = "test.txt";
        string content = File.ReadAllText(filePath);
        Console.WriteLine("File Content: " + content);
    }
}
```
**Output:**
```
File Content: Hello, C# File Handling!
```

---

### **Working with Streams**
Streams provide more control over reading and writing operations.

#### **Using StreamWriter and StreamReader**
```csharp
using System;
using System.IO;

class Program
{
    static void Main()
    {
        string filePath = "data.txt";

        // Writing using StreamWriter
        using (StreamWriter writer = new StreamWriter(filePath))
        {
            writer.WriteLine("This is a test file.");
            writer.WriteLine("C# Stream handling is powerful!");
        }

        // Reading using StreamReader
        using (StreamReader reader = new StreamReader(filePath))
        {
            string line;
            while ((line = reader.ReadLine()) != null)
            {
                Console.WriteLine(line);
            }
        }
    }
}
```
**Output:**
```
This is a test file.
C# Stream handling is powerful!
```

---

## **Serialization and Deserialization in C#**

Serialization converts an object into a string (or byte format) that can be easily stored or transmitted. Deserialization converts it back to an object.

### Example: Object to String and String to Object

```csharp
using System;
using System.Text.Json;

class Person
{
    public string Name { get; set; }
    public int Age { get; set; }
}

// Object to string (Serialization)
Person person = new Person { Name = "John", Age = 30 };
string jsonString = JsonSerializer.Serialize(person);

// String to object (Deserialization)
Person deserializedPerson = JsonSerializer.Deserialize<Person>(jsonString);

Console.WriteLine($"Serialized: {jsonString}");
Console.WriteLine($"Deserialized: Name = {deserializedPerson.Name}, Age = {deserializedPerson.Age}");

Serialized: {"Name":"John","Age":30}
Deserialized: Name = John, Age = 30
```

**Serialization:** Convert object to string.

**Deserialization:** Convert string back to object.

## **8. Delegates in C#**

### ✅ **What is a Delegate?**
A **delegate** is a type that holds a reference to a method.  
It allows passing methods as arguments to other methods, enabling **flexibility**, **callbacks**, and **custom behaviors** without changing core logic.

---

### 🎯 **Where Are Delegates Used?**
- **Event handling** (e.g., UI button clicks)
- **Callback logic** (e.g., notify user after a task is done)
- **Strategy pattern** (e.g., select behavior at runtime)
- **Plug-in architecture** (e.g., pass different processing functions)
- **Logging / Payment / Notification handlers** (real-time usage)

---

### 💡 **Real-Time Scenario: Notification Sender**

You have a system that sends notifications. Based on the user's choice, you want to send an **email**, **SMS**, or **push notification**.  
You can use delegates to dynamically plug in the right method.

---

### 🔧 **Real-Time Delegate Example**

```csharp
using System;

// Declare a delegate
delegate void NotificationHandler(string message);

class NotificationService
{
    public void SendNotification(string message, NotificationHandler handler)
    {
        // Common logic (e.g., logging)
        Console.WriteLine("Preparing notification...");
        
        // Delegate invokes actual sending method
        handler(message);

        Console.WriteLine("Notification sent.\n");
    }

    public void SendEmail(string msg)
    {
        Console.WriteLine("📧 Email: " + msg);
    }

    public void SendSMS(string msg)
    {
        Console.WriteLine("📱 SMS: " + msg);
    }

    public void SendPush(string msg)
    {
        Console.WriteLine("📲 Push Notification: " + msg);
    }
}

class Program
{
    static void Main()
    {
        NotificationService service = new NotificationService();

        // Choose delivery method dynamically using delegate
        service.SendNotification("Order confirmed!", service.SendEmail);
        service.SendNotification("OTP: 123456", service.SendSMS);
        service.SendNotification("New offer available!", service.SendPush);
    }
}
```
**Output:**
```
Preparing notification...
📧 Email: Order confirmed!
Notification sent.

Preparing notification...
📱 SMS: OTP: 123456
Notification sent.

Preparing notification...
📲 Push Notification: New offer available!
Notification sent.

```

---

## **Anonymous Methods in C#**

### ✅ **What is an Anonymous Method?**
An **anonymous method** is a method **without a name** that you define **inline** using the `delegate` keyword.

- It allows you to assign a block of code directly to a delegate **without creating a separate named method**.
- Commonly used when the logic is **short**, **reusable**, or **not needed elsewhere**.

---

### 🔍 **When to Use?**
- When you need to pass a small block of logic to a method.
- To reduce boilerplate code.
- Mostly used with **delegates**, **events**, and **callbacks**.

---

### 💡 **Example Explained**
```csharp
delegate void MyDelegate(string message);

MyDelegate del = delegate (string msg) {
    Console.WriteLine("Anonymous method: " + msg);
};

del("Hello!");
```
**Output:**
```
Anonymous method: Hello!
```

---

### **Lambda Expressions**
Lambda expressions provide a more concise way to write anonymous methods.

#### **Example:**
```csharp
using System;

delegate int Square(int num);

class Program
{
    static void Main()
    {
        Square square = x => x * x;
        Console.WriteLine("Square of 5: " + square(5));
    }
}
```
**Output:**
```
Square of 5: 25
```

---

## **Events and Event Handlers in C#**

### ✅ **What is an Event?**
An **event** is a way for one class (publisher) to **notify other classes (subscribers)** when something happens.  
It works with **delegates** and follows the **publish-subscribe pattern**.

---

### 🔍 **When to Use?**
- UI button clicks
- Data received from an API
- Status updates
- Custom logic triggers (e.g., "on payment success")

---

### 💡 **Example: Basic Event Handling**

```csharp
using System;

class EventExample
{
    // Declare a delegate
    public delegate void Notify();

    // Declare an event based on the delegate
    public event Notify OnNotify;

    public void TriggerEvent()
    {
        if (OnNotify != null)
            OnNotify(); // Raise the event
    }
}

class Program
{
    static void Message()
    {
        Console.WriteLine("Event triggered!");
    }

    static void Main()
    {
        EventExample example = new EventExample();

        // Subscribe to the event
        example.OnNotify += Message;

        // Trigger the event
        example.TriggerEvent();
    }
}

```
**Output:**
```
Event triggered!
```

---
## **Func and Action Delegates in C#**

### ✅ **What Are They?**

C# provides built-in generic delegates for common use cases:

- **`Func<T, TResult>`**: Accepts parameters and **returns a value**.
- **`Action<T>`**: Accepts parameters and **returns void** (no value).

They help avoid declaring custom delegate types for simple methods or expressions.

---

### 💡 **Example: Using `Func` and `Action`**

```csharp
using System;

class Program
{
    static void Main()
    {
        // Func: takes an int and returns an int
        Func<int, int> square = x => x * x;
        Console.WriteLine("Square: " + square(4));

        // Action: takes a string and returns void
        Action<string> greet = name => Console.WriteLine("Hello, " + name);
        greet("Alice");
    }
}
```
**Output:**
```
Square: 16
Hello, Alice
```

## **9. LINQ (Language Integrated Query) in C#**

### **What is LINQ?**
**LINQ** allows you to query collections like arrays, lists, or objects using SQL-like or method syntax in C#.  
It makes data filtering, transformation, and grouping readable and concise.

---

### **Use Cases**
- Filter data from a list
- Transform/shape data (select specific fields)
- Sort or group results
- Aggregate (count, sum, average)
- Replace loops with expressive queries

---

### 🔧 **Syntax Types**

| Type           | Example                            |
|----------------|------------------------------------|
| **Query Syntax**   | `from x in data where x > 10 select x` |
| **Method Syntax**  | `data.Where(x => x > 10)`         |

---

### **Common LINQ Methods**

| Method          | Description                         |
|------------------|-------------------------------------|
| `Where()`       | Filter elements                     |
| `Select()`      | Project/transform items             |
| `OrderBy()`     | Sort in ascending order             |
| `OrderByDescending()` | Sort in descending order       |
| `GroupBy()`     | Group elements by key               |
| `First()` / `FirstOrDefault()` | Get first matching item  |
| `Any()` / `All()` | Check if any/all items match condition |
| `Count()` / `Sum()` | Aggregate operations             |

---

### **Real-Time Example: Product Filtering**

```csharp
var products = new[]
{
    new { Name = "Laptop", Price = 50000 },
    new { Name = "Mouse", Price = 500 },
    new { Name = "Keyboard", Price = 1500 },
    new { Name = "Monitor", Price = 7000 },
    new { Name = "USB Cable", Price = 200 }
};

// Filter products with price > 1000
var filtered = products.Where(p => p.Price > 1000);

// Sort by price
var sorted = filtered.OrderBy(p => p.Price);

// Select only names
var names = sorted.Select(p => p.Name);

foreach (var name in names)
{
    Console.WriteLine(name);
}

// output
Keyboard
Monitor
Laptop

```
## **10. Asynchronous Programming**

### **Async and Await**
Asynchronous programming in C# allows executing non-blocking code using `async` and `await` keywords.

#### **Example:**
```csharp
using System;
using System.Threading.Tasks;

class Program
{
    static async Task Main()
    {
        Console.WriteLine("Fetching data...");
        string data = await GetDataAsync();
        Console.WriteLine($"Data received: {data}");
    }

    static async Task<string> GetDataAsync()
    {
        await Task.Delay(3000); // Simulates a delay
        return "Hello, Async World!";
    }
}
```
**Output:**
```
Fetching data...
(Data appears after 3 seconds)
Data received: Hello, Async World!
```

---

### **Task and Task\<T\>**
`Task` represents an asynchronous operation that can return a result (`Task<T>`) or simply execute (`Task`).

#### **Example:**
```csharp
using System;
using System.Threading.Tasks;

class Program
{
    static async Task Main()
    {
        int result = await CalculateSumAsync(10, 20);
        Console.WriteLine($"Sum: {result}");
    }

    static async Task<int> CalculateSumAsync(int a, int b)
    {
        await Task.Delay(2000); // Simulate work
        return a + b;
    }
}
```
**Output:**
```
(Sum appears after 2 seconds)
Sum: 30
```

---

### **Parallel Programming**
Parallel programming enables executing multiple tasks concurrently using `Parallel` class or `Task.WhenAll`.

#### **Example:**
```csharp
using System;
using System.Threading.Tasks;
using System.Threading;

class Program
{
    static async Task Main()
    {
        Task task1 = Task.Run(() => DoWork("Task 1"));
        Task task2 = Task.Run(() => DoWork("Task 2"));
        
        await Task.WhenAll(task1, task2);
        Console.WriteLine("Both tasks completed.");
    }

    static void DoWork(string taskName)
    {
        Thread.Sleep(2000);
        Console.WriteLine($"{taskName} finished execution.");
    }
}
```
**Output:**
```
(Task 1 and Task 2 execute in parallel, completing after ~2 seconds)
Task 1 finished execution.
Task 2 finished execution.
Both tasks completed.
```

---

### **Threading Basics**
Threading allows running multiple threads independently using `Thread` class.

#### **Example:**
```csharp
using System;
using System.Threading;

class Program
{
    static void Main()
    {
        Thread thread1 = new Thread(() => PrintNumbers("Thread 1"));
        Thread thread2 = new Thread(() => PrintNumbers("Thread 2"));
        
        thread1.Start();
        thread2.Start();
    }

    static void PrintNumbers(string threadName)
    {
        for (int i = 1; i <= 5; i++)
        {
            Console.WriteLine($"{threadName}: {i}");
            Thread.Sleep(1000);
        }
    }
}
```
**Output:**
```
Thread 1: 1
Thread 2: 1
Thread 1: 2
Thread 2: 2
...
```

## **11. Advanced Concepts**

###  **Reflection in C#**

**Reflection** allows inspecting and interacting with the metadata of types, methods, properties, and assemblies **at runtime**.


###  Use Case:
- Dynamically invoking methods
- Building plugin architectures
- Custom serialization or logging
- Auto-generating documentation or UI

---

###  Example:
```csharp
using System;
using System.Reflection;

class Program
{
    static void Main()
    {
        Type type = typeof(SampleClass); // Getting metadata of the class
        Console.WriteLine($"Class Name: {type.Name}");

        MethodInfo method = type.GetMethod("SayHello"); // Access method info
        method.Invoke(Activator.CreateInstance(type), null); // Invoke the method
    }
}

class SampleClass
{
    public void SayHello()
    {
        Console.WriteLine("Hello from Reflection!");
    }
}
```

**Output:**
```
Class Name: SampleClass
Hello from Reflection!
```

---

### 🏷️ **Attributes in C#**

**Attributes** are used to add **metadata** to code elements like classes, methods, or properties.  
This metadata can be read at runtime using **Reflection**.

---

### ✅ Use Case:
- Tagging elements for **custom logic**
- **Validation**, **logging**, or **documentation**
- Frameworks (like ASP.NET, NUnit) rely on attributes heavily

---

### 💡 Example:
```csharp
using System;

// Step 1: Create a custom attribute
[AttributeUsage(AttributeTargets.Class)]
class InfoAttribute : Attribute
{
    public string Description { get; }
    public InfoAttribute(string description)
    {
        Description = description;
    }
}

// Step 2: Apply the attribute to a class
[Info("This is a sample class.")]
class SampleClass { }

class Program
{
    static void Main()
    {
        // Step 3: Read the attribute at runtime using reflection
        Type type = typeof(SampleClass);
        var attributes = type.GetCustomAttributes(false);

        foreach (var attr in attributes)
        {
            if (attr is InfoAttribute info)
                Console.WriteLine(info.Description);
        }
    }
}
```
**Output:**
```
This is a sample class.
```

---

### 💉 **Dependency Injection (DI) in C#**

**Dependency Injection** is a design pattern where dependencies (like services) are provided to a class **from the outside**, instead of the class creating them itself.

---

### ✅ Use Case:
- Promote **loose coupling**
- Improve **testability** and **maintainability**
- Commonly used in **ASP.NET Core**, **unit testing**, and **layered architectures**

---

### 💡 Example:
```csharp
// Step 1: Define a service interface
interface IMessageService
{
    void SendMessage(string message);
}

// Step 2: Create an implementation
class EmailService : IMessageService
{
    public void SendMessage(string message)
    {
        Console.WriteLine($"Email sent: {message}");
    }
}

// Step 3: Inject the service into the dependent class
class Notification
{
    private readonly IMessageService _service;

    public Notification(IMessageService service)
    {
        _service = service;
    }

    public void Notify(string message)
    {
        _service.SendMessage(message);
    }
}

// Step 4: Create and inject the dependency
class Program
{
    static void Main()
    {
        IMessageService service = new EmailService(); // Injected here
        Notification notification = new Notification(service);
        notification.Notify("Hello, Dependency Injection!");
    }
}
```
**Output:**
```
Email sent: Hello, Dependency Injection!
```

---

### 🧹 **Memory Management and Garbage Collection in C#**

**Garbage Collection (GC)** in C# is an automatic process that reclaims memory used by objects that are no longer referenced, freeing up memory and preventing memory leaks.

---

### ✅ Key Points:
- **Automatic Memory Management**: The garbage collector runs in the background, cleaning up unused objects.
- **Heap vs. Stack**: Objects are stored in the heap, while local variables are stored on the stack. GC manages memory for heap objects.
- **GC.Collect()**: You can manually trigger garbage collection, but it's usually managed by the runtime.

---

### 💡 Example:
```csharp
using System;

class Program
{
    static void Main()
    {
        CreateObject();
        GC.Collect(); // Request garbage collection
        Console.WriteLine("Garbage collection triggered.");
    }

    static void CreateObject()
    {
        var obj = new object(); // obj is created, but it's not used after this point
    }
}
```
**Output:**
```
Garbage collection triggered.
```

# **ASP.NET Core Web API Developer Concepts**

## **1. Introduction to ASP.NET Core Web API**
ASP.NET Core Web API is a framework for building HTTP services that can be consumed by various clients, such as browsers, mobile apps, and other web applications.

### Key Points:
- Designed for RESTful services.
- Can respond to HTTP requests like GET, POST, PUT, DELETE.
- Supports JSON and XML serialization by default.

### **Real-time Use Case:**
Imagine you are building an **online store**. You'll create APIs for operations like viewing products, adding products to the cart, and checking out.

---

## **2. Building RESTful APIs**
In RESTful services, each URL (endpoint) corresponds to an action or a resource. Each action is typically mapped to one of the HTTP verbs: **GET**, **POST**, **PUT**, **DELETE**.

### Example of Routing in REST API:
```csharp
[Route("api/products")]
public class ProductsController : ControllerBase
{
    // GET: api/products
    [HttpGet]
    public ActionResult<IEnumerable<Product>> GetProducts()
    {
        // Fetch all products
    }

    // POST: api/products
    [HttpPost]
    public ActionResult CreateProduct(Product product)
    {
        // Create new product
    }

    // PUT: api/products/5
    [HttpPut("{id}")]
    public ActionResult UpdateProduct(int id, Product product)
    {
        // Update product details
    }

    // DELETE: api/products/5
    [HttpDelete("{id}")]
    public ActionResult DeleteProduct(int id)
    {
        // Delete product
    }
}
```
## **3. Model Binding and Validation**
ASP.NET Core Web API supports model binding, which automatically maps request data to your action method parameters.

### Key Points:
- Model binding occurs for complex types (like `Product` in the example below).
- You can use **Data Annotations** for validation, such as `[Required]`, `[StringLength]`, etc.
- If model validation fails, ASP.NET Core will return a **400 Bad Request**.

### Example:
```csharp
public class Product
{
    [Required]
    public string Name { get; set; }
    
    [Range(1, 1000)]
    public decimal Price { get; set; }
}
```
## **4. Dependency Injection in Web API**
ASP.NET Core uses Dependency Injection (DI) to manage service lifetimes and promote loose coupling between classes. DI is particularly useful in Web API for injecting services like logging, database context, or any custom services.

### Example:
```csharp
public class ProductsController : ControllerBase
{
    private readonly IProductService _productService;

    public ProductsController(IProductService productService)
    {
        _productService = productService;
    }

    [HttpGet]
    public IActionResult GetProducts()
    {
        var products = _productService.GetAllProducts();
        return Ok(products);
    }
}
```
- In Startup.cs, register the service in the DI container:
```csharp
public void ConfigureServices(IServiceCollection services)
{
    services.AddScoped<IProductService, ProductService>();
}
```
## **5. Entity Framework Core in Web API**
Entity Framework Core (EF Core) is an Object-Relational Mapping (ORM) framework that helps developers interact with a database using C# objects and LINQ queries. It simplifies database operations by automating CRUD operations.

### Key Points:
- **DbContext** represents the session between your application and the database.
- EF Core supports both **Code-First** and **Database-First** approaches.
- **Migrations** help in managing schema changes over time.

### Example of Entity Framework Core in Web API:
#### 1. Define the Model
```csharp
public class Product
{
    public int Id { get; set; }
    public string Name { get; set; }
    public decimal Price { get; set; }
}
```
#### 2. Define the DbContext
```csharp
public class ApplicationDbContext : DbContext
{
    public DbSet<Product> Products { get; set; }

    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
    {
    }
}
```
#### 3. Register DbContext in Startup.cs
```csharp
public void ConfigureServices(IServiceCollection services)
{
    services.AddDbContext<ApplicationDbContext>(options =>
        options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));
}
```
#### 4. Example of CRUD Operations
```csharp
[Route("api/products")]
[ApiController]
public class ProductsController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public ProductsController(ApplicationDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<IActionResult> GetProducts()
    {
        var products = await _context.Products.ToListAsync();
        return Ok(products);
    }

    [HttpPost]
    public async Task<IActionResult> CreateProduct(Product product)
    {
        _context.Products.Add(product);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetProducts), new { id = product.Id }, product);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateProduct(int id, Product product)
    {
        if (id != product.Id)
            return BadRequest();

        _context.Entry(product).State = EntityState.Modified;
        await _context.SaveChangesAsync();
        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteProduct(int id)
    {
        var product = await _context.Products.FindAsync(id);
        if (product == null)
            return NotFound();

        _context.Products.Remove(product);
        await _context.SaveChangesAsync();
        return NoContent();
    }
}
```
## **6. API Routing and Attribute Routing**
In ASP.NET Core, routing is the process of mapping an incoming HTTP request to a specific controller action. You can configure routing in a Web API using **attribute routing** or **conventional routing**.

### Key Points:
- **Attribute Routing**: Routes are defined using attributes placed on controller actions.
- **Conventional Routing**: Routes are defined globally in `Startup.cs` using `MapRoute`.

### Example of Attribute Routing:
```csharp
[Route("api/products")]
[ApiController]
public class ProductsController : ControllerBase
{
    [HttpGet("{id}")]
    public IActionResult GetProduct(int id)
    {
        var product = _context.Products.FirstOrDefault(p => p.Id == id);
        if (product == null) return NotFound();
        return Ok(product);
    }

    [HttpPost]
    public IActionResult CreateProduct(Product product)
    {
        _context.Products.Add(product);
        _context.SaveChanges();
        return CreatedAtAction(nameof(GetProduct), new { id = product.Id }, product);
    }
}
```
- **Route Parameter:** In the `GetProduct` action, the `{id}` in the route indicates that it is a parameter which will be passed as part of the URL (e.g., `GET api/products/1`).
- **HTTP Methods:** Actions can be mapped to specific HTTP methods (GET, POST, PUT, DELETE) by applying the appropriate attributes, like `[HttpGet]`, `[HttpPost]`.

 #### Example of Conventional Routing:
 - In `Startup.cs`, you can set up conventional routing to define a global route pattern.
 ```csharp
public void Configure(IApplicationBuilder app)
{
    app.UseRouting();
    app.UseEndpoints(endpoints =>
    {
        endpoints.MapControllerRoute(
            name: "default",
            pattern: "api/{controller}/{action}/{id?}");
    });
}
```

## **7. Authentication and Authorization**

Authentication and authorization are critical aspects of securing Web APIs. **Authentication** is the process of identifying the user, while **authorization** determines what a user can or cannot do.

### **Authentication**

In ASP.NET Core, authentication is typically done using tokens (JWT, cookies) or OAuth2. Common authentication methods include:
- **JWT (JSON Web Tokens)**: A stateless authentication mechanism.
- **Cookie-based Authentication**: Store authentication information in cookies.

### **JWT Authentication**

JWT is a common authentication method for APIs. It allows users to authenticate using tokens, which can be passed with each request.

#### Example of JWT Authentication Setup:

1. **Install the necessary NuGet package**:
   To use JWT authentication, install the `Microsoft.AspNetCore.Authentication.JwtBearer` package.

2. **Configure JWT in `Startup.cs`**:

```csharp
public void ConfigureServices(IServiceCollection services)
{
    services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
        .AddJwtBearer(options =>
        {
            options.TokenValidationParameters = new TokenValidationParameters
            {
                ValidateIssuer = true,
                ValidateAudience = true,
                ValidateLifetime = true,
                ValidIssuer = "yourIssuer",
                ValidAudience = "yourAudience",
                IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("yourSecretKey"))
            };
        });

    services.AddControllers();
}
```
**3. Use JWT Authentication:**
In the Configure method, enable authentication middleware.
```csharp
public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
{
    app.UseAuthentication();
    app.UseAuthorization();
    
    app.UseEndpoints(endpoints =>
    {
        endpoints.MapControllers();
    });
}
```

**4. Create a Login Endpoint:**
Generate JWT tokens on successful authentication.
```csharp
[HttpPost("login")]
public IActionResult Login([FromBody] UserLogin model)
{
    var user = _userService.Authenticate(model.Username, model.Password);
    if (user == null)
    {
        return Unauthorized();
    }

    var token = _tokenService.GenerateToken(user);
    return Ok(new { token });
}
```
**5. Authorize Actions:** Use the [Authorize] attribute to protect specific controller actions.
```csharp
[Authorize]
[HttpGet("profile")]
public IActionResult GetProfile()
{
    return Ok(new { message = "This is a protected endpoint" });
}
```


### Authorization
Authorization determines if the authenticated user has permission to perform an action. It is commonly managed using roles, policies, or claims.

**Example of Role-Based Authorization:**

**1. Assign Roles:** In the ConfigureServices method, define roles and policies.

```csharp
services.AddAuthorization(options =>
{
    options.AddPolicy("AdminPolicy", policy => policy.RequireRole("Admin"));
});

```

**2. Use Role-Based Authorization:** You can protect actions or controllers using roles.

```csharp
[Authorize(Roles = "Admin")]
[HttpGet("admin")]
public IActionResult GetAdminData()
{
    return Ok(new { message = "This is a protected Admin endpoint" });
}
```

**Example of Policy-Based Authorization:**

**1.  Create a Policy:** In ConfigureServices, create a policy that checks for a specific claim.
```csharp
services.AddAuthorization(options =>
{
    options.AddPolicy("IsOver18", policy => policy.RequireClaim("Age", "18"));
});
```
**2. Use the Policy:** Protect an action based on the policy.
```csharp
[Authorize(Policy = "IsOver18")]
[HttpGet("restricted")]
public IActionResult GetRestrictedData()
{
    return Ok(new { message = "This is a protected data for users over 18" });
}
```

## **8. CORS (Cross-Origin Resource Sharing)**

CORS is a mechanism that allows you to specify which domains are allowed to access resources in your API. This is useful when your API is being consumed by a client hosted on a different domain.

### **Enabling CORS**

CORS is typically configured in the `Startup.cs` file by defining policies. It can be used to allow specific domains to access your Web API, or in more permissive configurations, it can allow all origins.

1. **Configure CORS in `Startup.cs`:**

   In the `ConfigureServices` method, you define the CORS policy to control how different clients can interact with your API.

```csharp
   public void ConfigureServices(IServiceCollection services)
   {
       // Add CORS service with a named policy
       services.AddCors(options =>
       {
           options.AddPolicy("AllowAll",
               builder => builder.AllowAnyOrigin() // Allow all origins
                                 .AllowAnyMethod()  // Allow any HTTP methods
                                 .AllowAnyHeader()); // Allow any headers
       });

       services.AddControllers();
   }
```

**2. Enable CORS Middleware in** `Configure`:
You need to enable the CORS middleware in the HTTP request pipeline to enforce the CORS policy.
```csharp
public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
{
    app.UseCors("AllowAll"); // Use the CORS policy defined above

    app.UseRouting();
    app.UseEndpoints(endpoints =>
    {
        endpoints.MapControllers();
    });
}
```

### Customizing CORS Policy
You can also customize CORS to allow only specific origins, methods, or headers:
```csharp
public void ConfigureServices(IServiceCollection services)
{
    services.AddCors(options =>
    {
        options.AddPolicy("MyCustomPolicy",
            builder => builder.WithOrigins("https://example.com") // Allow only specific domain
                              .AllowMethods("GET", "POST")  // Allow only GET and POST methods
                              .AllowHeaders("Content-Type", "Authorization")); // Allow specific headers
    });

    services.AddControllers();
}
```
In this example, only https://example.com is allowed to make requests to the API, and only GET and POST methods are permitted.
### CORS with Credentials

If you want to allow credentials (cookies, HTTP authentication) with your requests, you can configure it as follows:
```csharp

services.AddCors(options =>
{
    options.AddPolicy("AllowCredentials",
        builder => builder.WithOrigins("https://example.com")
                          .AllowCredentials()  // Allow credentials (cookies, HTTP authentication)
                          .AllowAnyMethod()
                          .AllowAnyHeader());
});
```
CORS issues usually arise when a web browser sends a request to a different origin (e.g., a web page hosted on `example.com` tries to access resources from `api.example.com`). When CORS is not configured properly, the browser will block the request and show an error.

To handle such errors effectively:

- Always check the network tab in browser developer tools for any CORS-related errors.

- Ensure that the correct CORS headers (`Access-Control-Allow-Origin`, etc.) are set.

- When testing locally, make sure both client and server are properly configured to allow cross-origin requests.

## **9. API Pagination**

Pagination is used to split large data sets into smaller, manageable chunks, which is important for improving performance and ensuring that the client receives data in a more efficient way. In Web API, pagination is commonly implemented by using query parameters to define the page size and the page number.

### **Example of API Pagination**

```csharp
[ApiController]
[Route("api/products")]
public class ProductsController : ControllerBase
{
    private readonly List<Product> _products;

    public ProductsController()
    {
        // Sample data for demonstration
        _products = new List<Product>
        {
            new Product { Id = 1, Name = "Product 1" },
            new Product { Id = 2, Name = "Product 2" },
            new Product { Id = 3, Name = "Product 3" },
            new Product { Id = 4, Name = "Product 4" },
            new Product { Id = 5, Name = "Product 5" },
            new Product { Id = 6, Name = "Product 6" },
            new Product { Id = 7, Name = "Product 7" }
        };
    }

    [HttpGet]
    public IActionResult GetProducts(int page = 1, int pageSize = 3)
    {
        var paginatedProducts = _products.Skip((page - 1) * pageSize).Take(pageSize).ToList();
        return Ok(paginatedProducts);
    }
}

public class Product
{
    public int Id { get; set; }
    public string Name { get; set; }
}

// out put
[
  { "Id": 4, "Name": "Product 4" },
  { "Id": 5, "Name": "Product 5" },
  { "Id": 6, "Name": "Product 6" }
]
```
### 10. Versioning of Web API
API versioning is essential when you need to make changes to the API without breaking existing consumers.
**Key Points:**
- Use route parameters, headers, or query parameters to define API versions.

- ASP.NET Core supports API versioning with libraries like **Microsoft.AspNetCore.Mvc.Versioning.**

#### Example of Versioned API:
```csharp
[Route("api/v1/products")]
public class ProductsV1Controller : ControllerBase
{
    [HttpGet]
    public IActionResult GetAllV1()
    {
        return Ok(new { version = "v1", products = new string[] { "Product1", "Product2" } });
    }
}

[Route("api/v2/products")]
public class ProductsV2Controller : ControllerBase
{
    [HttpGet]
    public IActionResult GetAllV2()
    {
        return Ok(new { version = "v2", products = new string[] { "Product1", "Product2", "Product3" } });
    }
}
```
### 11. Caching in Web API
Caching helps improve performance by storing frequently accessed data.
**Key Points:**

- **In-memory caching** stores data in memory on the server.

- **Distributed caching** can be used to store data in an external cache like Redis or SQL Server.
#### Example of In-memory Caching:
```csharp
public class ProductsController : ControllerBase
{
    private readonly IMemoryCache _cache;

    public ProductsController(IMemoryCache cache)
    {
        _cache = cache;
    }

    [HttpGet]
    public IActionResult GetProducts()
    {
        var products = _cache.Get<List<Product>>("products");
        if (products == null)
        {
            products = _productService.GetAllProducts();
            _cache.Set("products", products, TimeSpan.FromMinutes(5));
        }
        return Ok(products);
    }
}
```

12. Exception Handling and Logging
In Web API, proper exception handling and logging are crucial for debugging and tracking errors.
**Key Points:**

- Use **middleware** for global exception handling.

- Use **ILogger** for logging errors.
#### Example of Exception Handling Middleware:
```csharp
public class ErrorHandlingMiddleware
{
    private readonly RequestDelegate _next;

    public ErrorHandlingMiddleware(RequestDelegate next)
    {
        _next = next;
    }

    public async Task InvokeAsync(HttpContext httpContext, ILogger<ErrorHandlingMiddleware> logger)
    {
        try
        {
            await _next(httpContext);
        }
        catch (Exception ex)
        {
            logger.LogError($"Something went wrong: {ex.Message}");
            await HandleExceptionAsync(httpContext);
        }
    }

    private Task HandleExceptionAsync(HttpContext context)
    {
        context.Response.StatusCode = 500;
        return context.Response.WriteAsync("Internal server error");
    }
}
```

13. API Documentation with Swagger
Swagger (OpenAPI) is used to generate interactive API documentation.
**Key Points:**
- Swagger provides a UI to test API endpoints.

- It helps generate client SDKs in various languages

- Example:
In `Startup.cs`, add Swagger services:
```csharp
public void ConfigureServices(IServiceCollection services)
{
    services.AddSwaggerGen(c =>
    {
        c.SwaggerDoc("v1", new OpenApiInfo { Title = "API", Version = "v1" });
    });
}
```
In `Configure` method, enable Swagger:
```csharp
public void Configure(IApplicationBuilder app)
{
    app.UseSwagger();
    app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "API v1"));
}
```
