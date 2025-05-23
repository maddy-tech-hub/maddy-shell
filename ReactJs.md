# Complete Web Development Guide

## Introduction to Web Development

Before learning React, understanding core web technologies is essential.

### Core Web Technologies

- **HTML (HyperText Markup Language)**  
  Defines the structure of web pages using elements like headings, paragraphs, images, and links.

- **CSS (Cascading Style Sheets)**  
  Styles web pages, making them visually appealing and responsive.

- **JavaScript**  
  Adds interactivity, handles user input, fetches data, and modifies the DOM.

With a strong foundation in these, we move to **React**, a library for building modern web applications with a component-based approach.

---

## HTML (HyperText Markup Language)

This guide provides a comprehensive understanding of HTML, covering its fundamental concepts, advanced features, and best practices with detailed examples.

---

## **1. Introduction to HTML**

### **1.1 What is HTML?**
HTML (HyperText Markup Language) is the standard language for creating web pages. It describes the structure of a web page using elements and tags.

### **1.2 Why Use HTML?**
- Defines the structure of web content
- Supports multimedia elements
- Works with CSS & JavaScript for styling and interactivity
- SEO-friendly structure
- Cross-browser compatibility
- Forms the backbone of web applications

---

## **2. HTML Document Structure**

Every HTML document follows a basic structure:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Web Page</title>
</head>
<body>
    <h1>Welcome to My Web Page</h1>
</body>
</html>
```

- `<!DOCTYPE html>`: Declares the document type
- `<html>`: The root element
- `<head>`: Contains metadata and links
- `<meta charset="UTF-8">`: Defines character encoding
- `<meta name="viewport" content="width=device-width, initial-scale=1.0">`: Ensures responsiveness
- `<body>`: Contains visible page content

---

## **3. Common HTML Elements**

### **3.1 Headings & Paragraphs**
```html
<h1>Main Heading</h1>
<h2>Subheading</h2>
<p>This is a paragraph of text.</p>
```

### **3.2 Links & Anchors**
```html
<a href="https://www.example.com" target="_blank">Visit Example</a>
```

### **3.3 Images**
```html
<img src="image.jpg" alt="Description of image" width="300">
```

### **3.4 Lists**
#### **Unordered List:**
```html
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
</ul>
```
#### **Ordered List:**
```html
<ol>
    <li>First Item</li>
    <li>Second Item</li>
</ol>
```

### **3.5 Tables**
```html
<table border="1">
    <tr>
        <th>Name</th>
        <th>Age</th>
    </tr>
    <tr>
        <td>Alice</td>
        <td>25</td>
    </tr>
</table>
```

---

## **4. Forms & Input Elements**

### **4.1 Basic Form**
```html
<form action="submit.php" method="post">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>
    <button type="submit">Submit</button>
</form>
```

### **4.2 Different Input Types**
```html
<input type="email" placeholder="Enter your email" required>
<input type="password" placeholder="Enter password" required>
<input type="date">
<input type="checkbox"> Accept Terms
```

### **4.3 Radio Buttons & Select Dropdown**
```html
<input type="radio" name="gender" value="male"> Male
<input type="radio" name="gender" value="female"> Female

<select>
    <option value="apple">Apple</option>
    <option value="banana">Banana</option>
</select>
```

---

## 5. Semantic HTML 🏷️

Semantic HTML means using HTML tags that describe their meaning — not just their appearance.

Instead of using `<div>`s everywhere, use **semantic elements** like:

- `<header>` – Top section (logo, title, nav)
- `<nav>` – Navigation links
- `<main>` – Main page content
- `<section>` – Logical group of content
- `<article>` – A full piece of content (blog post, news)
- `<aside>` – Sidebar or extra info
- `<footer>` – Bottom of the page (contact, copyright)

### 💡 Why It Matters:

✅ **Better SEO(Search Engine Optimization)** – Search engines understand your content  
✅ **Better Accessibility** – Screen readers can navigate easily  
✅ **Cleaner Code** – Easier to read and maintain  

---

### 🧪 Real-World Example: A Simple Blog Page

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>My Blog</title>
</head>
<body>

  <header>
    <h1>📝 My Awesome Blog</h1>
    <nav>
      <a href="/">Home</a>
      <a href="/about">About</a>
    </nav>
  </header>

  <main>
    <section>
      <article>
        <h2>Post Title</h2>
        <p>This is my first blog post using semantic HTML!</p>
      </article>
    </section>
    
    <aside>
      <h3>About Me</h3>
      <p>I'm a web developer sharing my journey.</p>
    </aside>
  </main>

  <footer>
    <p>© 2025 My Blog. All rights reserved.</p>
  </footer>

</body>
</html>
```

---

## **6. HTML5 Features**

### **6.1 Multimedia Elements**
#### **Audio**
```html
<audio controls>
    <source src="audio.mp3" type="audio/mpeg">
</audio>
```

#### **Video**
```html
<video width="320" height="240" controls>
    <source src="video.mp4" type="video/mp4">
</video>
```

### **6.2 Canvas for Drawing**
Draw graphics (games, charts, etc.) with JavaScript.
```html
<canvas id="myCanvas" width="200" height="100"></canvas>
```
```js
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "blue";
ctx.fillRect(10, 10, 150, 75);
```

### **6.3 HTML5 Forms Enhancements**
- `required` attribute for mandatory fields
- `pattern` for input validation
- `placeholder` for better user experience

### 6.4 Geolocation API
- Get user’s location (with permission):
```js
navigator.geolocation.getCurrentPosition((position) => {
  console.log(position.coords.latitude, position.coords.longitude);
});
```

### 6.5 Web Workers
```js
const worker = new Worker("worker.js");
worker.postMessage("start");
```

---

## **7. Advanced Concepts**

### **7.1 Responsive Design with HTML & Meta Tags**
```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

### **7.2 HTML & JavaScript Interaction**
```html
<button onclick="alert('Hello!')">Click Me</button>
```

### **7.3 Web Storage (LocalStorage & SessionStorage)**
```html
<script>
localStorage.setItem("username", "Alice");
alert(localStorage.getItem("username"));
</script>
```

### **7.4 Accessibility Best Practices**
- Use `alt` attributes for images
- Ensure proper heading hierarchy
- Use `aria` attributes for better screen reader support

### **7.5 SEO Best Practices**
- Use proper heading structure
- Add meta tags (`description`, `keywords`)
- Optimize images with `alt` attributes
- Use semantic elements (`<article>`, `<section>`, `<nav>`, etc.)

---

## **8. Interview Questions & Answers**

### **8.1 Basic Questions**
1. What is HTML?
2. What are HTML semantic elements?
3. Difference between `<div>` and `<span>`?

### **8.2 Advanced Questions**
1. What are the new features of HTML5?
2. Explain the difference between localStorage and sessionStorage.
3. How do you improve website accessibility using HTML?

---
## CSS (Cascading Style Sheets)

This guide provides a comprehensive understanding of CSS, covering fundamental concepts, advanced features, and best practices with detailed examples.

---

## **1. Introduction to CSS**

### **1.1 What is CSS?**

CSS (Cascading Style Sheets) is a stylesheet language used to control the presentation and layout of web pages.

### **1.2 Why Use CSS?**

- Separates content from design
- Enhances user experience with better visuals
- Enables responsive design
- Supports tions and interactivity
- Improves maintainability and reusability

---

## **2. CSS Basics**

### **2.1 Selectors & Properties**

```css
/* Element Selector */
h1 {
    color: blue;
}

/* Class Selector */
.paragraph {
    font-size: 16px;
}

/* ID Selector */
#main {
    background-color: lightgray;
}
```

### **2.2 Box Model**

CSS Box Model consists of:

- **Content** (Text, images, etc.)
- **Padding** (Space around content)
- **Border** (Encapsulation of padding)
- **Margin** (Space outside the border)

```css
div {
    width: 200px;
    padding: 20px;
    border: 5px solid black;
    margin: 10px;
}
```

---

## **3. CSS Layouts**

### **3.1 Flexbox**

CSS Flexbox is used to create flexible and responsive layouts.

#### **3.1.1 Flexbox Properties**

**Container Properties:**

- `display: flex;` → Enables Flexbox
- `flex-direction: row | column | row-reverse | column-reverse;` → Defines the direction of items
- `justify-content: flex-start | center | space-between | space-around | space-evenly;` → Aligns items horizontally
- `align-items: flex-start | center | flex-end | stretch;` → Aligns items vertically
- `flex-wrap: nowrap | wrap | wrap-reverse;` → Controls wrapping of items

**Item Properties:**

- `flex-grow: 1;` → Defines growth ratio
- `flex-shrink: 1;` → Defines shrink ratio
- `flex-basis: auto;` → Sets initial size
- `align-self: auto | flex-start | center | flex-end;` → Aligns an individual item

```css
.container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.item {
    flex-grow: 1;
}
```

### **3.2 CSS Grid**

CSS Grid is used to create complex and responsive layouts.

#### **3.2.1 Grid Properties**

- `display: grid;` → Enables Grid
- `grid-template-columns: 1fr 2fr 1fr;` → Defines column sizes
- `grid-template-rows: auto;` → Defines row sizes
- `gap: 10px;` → Sets spacing between grid items
- `justify-items: start | center | end;` → Aligns items horizontally
- `align-items: start | center | end;` → Aligns items vertically

```css
.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0px;
}

.grid-item {
    background-color: lightblue;
}
```

---

## **4. Responsive Design**

### **4.1 Media Queries**

```css
@media (max-width: 600px) {
    body {
        background-color: lightgray;
    }
}
```

---

## **5. Advanced CSS**

### **5.1 Animations & Transitions**

```html
<button class="fancy-button">Click Me</button>
```
```css
.fancy-button {
  background-color: #4CAF50;
  color: white;
  padding: 15px 30px;
  font-size: 18px;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  /* 🔄 This is the TRANSITION */
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.fancy-button:hover {
  background-color: #45a049;

  /* 🎯 This is the ANIMATION */
  animation: bounce 0.6s;
}

/* 🎬 Keyframes for the bounce ANIMATION */
@keyframes bounce {
  0%   { transform: translateY(0); }
  30%  { transform: translateY(-10px); }
  60%  { transform: translateY(5px); }
  100% { transform: translateY(0); }
}
```

### **5.2 CSS Variables**

```css
:root {
    --primary-color: blue;
}

h1 {
    color: var(--primary-color);
}
```

---


## JavaScript (JS)

This guide covers all essential JavaScript concepts, including core fundamentals, modern features, and best practices, to help you become proficient in JavaScript development.

---

## **1. JavaScript Basics**

### **1.1 Variables in JavaScript**

JavaScript has three ways to declare variables:

- `var`: Function-scoped, can be redeclared.
- `let`: Block-scoped, can be reassigned.
- `const`: Block-scoped, cannot be reassigned.

#### **Example:**
```js
var a = 10;
let b = 20;
const c = 30;
```

### **1.2 Data Types**

JavaScript has primitive and reference data types:

- **Primitive**: `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`
- **Reference**: `array`, `object`, `function`

#### **Example:**
```js
let name = "John"; // string
let age = 25; // number
let isStudent = false; // boolean
let skills = ["JS", "React"]; // array
let person = { firstName: "John", lastName: "Doe" }; // object
```

---

## **2. Operators**

### **2.1 Arithmetic Operators**
```js
let x = 5;
let y = 2;
console.log(x + y); // 7
console.log(x - y); // 3
console.log(x * y); // 10
console.log(x / y); // 2.5
console.log(x % y); // 1
```

### **2.2 Comparison Operators**
```js
console.log(10 > 5); // true
console.log(10 === "10"); // false (strict comparison)
console.log(10 == "10"); // true (loose comparison)
```

---

## **3. Functions**

### **3.1 Function Declaration**
```js
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Alice"));
```

### **3.2 Arrow Functions**
```js
const greet = (name) => `Hello, ${name}!`;
console.log(greet("Alice"));
```

---

## **4. Control Structures**

### **4.1 Conditional Statements**
```js
let age = 18;
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
```

### **4.2 Loops**
```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}

let j = 0;
while (j < 5) {
  console.log(j);
  j++;
}
```

---

## **5. Event Handling & DOM Manipulation**

### **5.1 Handling Events**
```js
document.getElementById("btn").addEventListener("click", () => {
  alert("Button Clicked!");
});
```

### **5.2 Manipulating the DOM**
```js
let element = document.createElement("p");
element.textContent = "Hello, DOM!";
document.body.appendChild(element);
```

---

## **6. ES6+ Features**

### **6.1 Destructuring**
```js
const person = { name: "Alice", age: 25 };
const { name, age } = person;
console.log(name, age);
```

### **6.2 Spread & Rest Operators**
```js
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];
console.log(newNumbers);
```

### **6.3 Template Literals**
```js
const name = "Alice";
console.log(`Hello, ${name}!`);
```

### 6.4 Promises & Async/Await

#### 📦 What is a Promise?

A **Promise** is an object representing the eventual completion or failure of an asynchronous operation. It can be in one of three states:

- **Pending** – initial state, neither fulfilled nor rejected.
- **Fulfilled** – operation completed successfully.
- **Rejected** – operation failed.

---

### Async/Await Example

Using `async` and `await` makes it easier to work with Promises in a readable way.

```js
const fetchData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  console.log(data);
};

fetchData();
```
- async functions always return a Promise.
- await pauses the execution until the Promise is resolved.
---

## **7. Object-Oriented Programming in JavaScript**

### **7.1 Classes & Objects**
```js
class Car {
  constructor(brand) {
    this.brand = brand;
  }
  showBrand() {
    console.log(this.brand);
  }
}
const myCar = new Car("Tesla");
myCar.showBrand();
```

---

## **8. Modules & Imports**

### **8.1 Exporting & Importing Modules**

#### **file1.js**
```js
export const greet = (name) => `Hello, ${name}!`;
```

#### **file2.js**
```js
import { greet } from "./file1.js";
console.log(greet("Alice"));
```

# JavaScript Advanced Concepts

This section dives deep into some of the most useful and frequently asked JavaScript concepts — used daily in React and real-world apps.

---

## 1. Array Methods Mastery
![image](https://github.com/user-attachments/assets/10d30b84-c826-467a-aea6-35ba133a6119)

# JavaScript Array Methods and Their C# Equivalents

| **JavaScript Method** | **C# Equivalent** | **JavaScript Example** | **JavaScript Output** | **C# Output** | **C# Example** |
|------------------------|-------------------|--------------------------|------------------------|----------------|----------------|
| **map()**              | `Select()`        | `let doubled = [1,2,3].map(n => n * 2);` | `[2, 4, 6]` | `2, 4, 6` | `numbers.Select(n => n * 2).ToArray();` |
| **filter()**           | `Where()`         | `let even = [1,2,3,4,5].filter(n => n % 2 === 0);` | `[2, 4]` | `2, 4` | `numbers.Where(n => n % 2 == 0).ToArray();` |
| **reduce()**           | `Aggregate()`     | `let sum = [1,2,3,4].reduce((a,b) => a + b);` | `10` | `10` | `numbers.Aggregate((a,b) => a + b);` |
| **forEach()**          | `ForEach()`       | `[1,2,3].forEach(n => console.log(n));` | `1, 2, 3` | `1, 2, 3` | `numbers.ToList().ForEach(n => Console.WriteLine(n));` |
| **some()**             | `Any()`           | `[1,2,3].some(n => n % 2 === 0);` | `true` | `True` | `numbers.Any(n => n % 2 == 0);` |
| **every()**            | `All()`           | `[1,2,3].every(n => n < 4);` | `true` | `True` | `numbers.All(n => n < 4);` |
| **indexOf()**          | `IndexOf()`       | `[1,2,3].indexOf(2);` | `1` | `1` | `Array.IndexOf(numbers, 2);` |
| **find()**             | `FirstOrDefault()`| `[1,2,3].find(n => n > 1);` | `2` | `2` | `numbers.FirstOrDefault(n => n > 1);` |
| **findIndex()**        | `FindIndex()`     | `[1,2,3].findIndex(n => n > 1);` | `1` | `1` | `numbers.ToList().FindIndex(n => n > 1);` |
| **concat()**           | `Concat()`        | `[1,2].concat([3,4]);` | `[1, 2, 3, 4]` | `1, 2, 3, 4` | `arr1.Concat(arr2).ToArray();` |
| **slice()**            | `Skip() + Take()` | `[1,2,3,4].slice(1, 3);` | `[2, 3]` | `2, 3` | `numbers.Skip(1).Take(2).ToArray();` |
| **splice()**           | `Insert() / RemoveAt()` | `let a = [1,2,3]; a.splice(1,1);` | `[1, 3]` | `1, 3` | `list.RemoveAt(1);` |
| **sort()**             | `OrderBy()`       | `[3,1,2].sort();` | `[1, 2, 3]` | `1, 2, 3` | `numbers.OrderBy(n => n).ToArray();` |
| **reverse()**          | `Reverse()`       | `[1,2,3].reverse();` | `[3, 2, 1]` | `3, 2, 1` | `Array.Reverse(numbers);` |
| **push()**             | `Add()`           | `let a = [1,2]; a.push(3);` | `[1, 2, 3]` | `1, 2, 3` | `list.Add(3);` |
| **pop()**              | `RemoveAt()`      | `let a = [1,2,3]; a.pop();` | `[1, 2]` | `1, 2` | `list.RemoveAt(list.Count - 1);` |
| **shift()**            | `RemoveAt(0)`     | `let a = [1,2,3]; a.shift();` | `[2, 3]` | `2, 3` | `list.RemoveAt(0);` |
| **unshift()**          | `Insert(0, val)`  | `let a = [1,2]; a.unshift(0);` | `[0, 1, 2]` | `0, 1, 2` | `list.Insert(0, 0);` |

## 🔐 2. Closures

### 👉 What is a Closure?

A **closure** is a function that **remembers variables from its outer scope**, even after the outer function has finished running.

In simple terms:  
> **"A function bundled with its surrounding variables."**

---

### ✨ Why are Closures Powerful?

Closures let you:
- Keep **data private** (like private variables)
- Build **functions that remember state**
- Use **React hooks**, **event listeners**, and **async logic** effectively

---

### Simple Example

```js
function outer() {
  let count = 0;

  return function inner() {
    count++;
    console.log("Count:", count);
  };
}

const counter = outer();
counter(); // Count: 1
counter(); // Count: 2
```
---

## 📦 3. Hoisting

### What is Hoisting?
Hoisting is JavaScript's behavior of moving declarations to the top of their scope before code execution 
— but only the declarations, not the assignments.

### 📌 How It Works

- ✅ `var` declarations are **hoisted** and initialized to `undefined`
- 🚫 `let` and `const` are hoisted too but **not initialized** → Temporal Dead Zone (TDZ)
- ✅ Function **declarations** are hoisted completely
- 🚫 Function **expressions** are NOT hoisted

#### 🔹 `var` is hoisted and initialized with `undefined`

```js
console.log(a); // 👉 undefined
var a = 10;
```
---
- What actually happens behind the scenes:
```js
var a;          // 💡 Hoisted to the top and initialized with undefined
console.log(a); // 👉 Prints undefined
a = 10;         // ✅ Assigned later at runtime
```
 
#### let and const are hoisted but not initialized
  ```js
  console.log(b); // ❌ ReferenceError: Cannot access 'b' before initialization
let b = 20;

console.log(c); // ❌ ReferenceError
const c = 30;
```
**Behind the scenes:**
```
// Temporal Dead Zone (TDZ)
let b;    // 🧨 Hoisted, but not initialized
const c;  // 🧨 Hoisted, but not initialized

// ❌ Accessing `b` or `c` before this point will throw ReferenceError
```

#### 🔹 `function` declarations are **fully hoisted**

```js
sayHi(); // ✅ Works perfectly
function sayHi() {
  console.log("Hello from hoisted function!");
}
```

✅ The entire function is hoisted — both the name and the body.

---

**💡 Behind the Scenes:**

```js
// Function declaration is hoisted completely
function sayHi() {
  console.log("Hello from hoisted function!");
}

sayHi(); // 👉 Can be safely called here
```

#### 🔸 But function expressions are NOT hoisted like declarations

```js
greet(); // ❌ TypeError: greet is not a function
var greet = function () {
  console.log("Hi from function expression!");
};
```

**Behind the scenes:**
```js
var greet;       // ✅ `var` is hoisted and initialized with undefined
greet();         // ❌ Error because `greet` is undefined at this point
greet = function () {
  console.log("Hi from function expression!");
};
```
#### Arrow Functions are NOT Hoisted Like Declarations
```js
sayHello(); // ❌ TypeError: sayHello is not a function

var sayHello = () => {
  console.log("👋 Hello from arrow function!");
};
```
- Behind the Scenes:
```js
var sayHello;      // ✅ `var` is hoisted and initialized to undefined

sayHello();        // ❌ TypeError: sayHello is not a function

sayHello = () => {
  console.log("👋 Hello from arrow function!");
};
```


## 📊 Summary Table – Hoisting of `var`, `let`, `const`, and `function`

| Keyword     | Hoisted | Initialized | Access Before Declaration       | Notes                                      |
|-------------|---------|-------------|----------------------------------|--------------------------------------------|
| `var`       | ✅ Yes  | ✅ `undefined` | ✅ Allowed (prints `undefined`)   | Can be redeclared and updated              |
| `let`       | ✅ Yes  | ❌ No        | ❌ ReferenceError (TDZ)          | Block-scoped, can't be used before init    |
| `const`     | ✅ Yes  | ❌ No        | ❌ ReferenceError (TDZ)          | Block-scoped, must be initialized          |
| `function`  | ✅ Yes  | ✅ Yes       | ✅ Allowed (fully hoisted)       | Function declarations are fully hoisted    |

> 🧠 **TDZ** = Temporal Dead Zone – the time between hoisting and initialization.


### 🧪 Code Example:

```js
console.log(a); // undefined (var is hoisted but not initialized)
var a = 5;

hoisted(); // ✅ Works (function declaration is hoisted)
function hoisted() {
  console.log("Hoisted Function");
}

notHoisted(); // ❌ Error: notHoisted is not a function
var notHoisted = function () {
  console.log("This won't work!");
};
```

## 🧠 4. Scope and Lexical Environment

JavaScript manages variables using **scope**, which defines where variables are accessible. It also uses a concept called **lexical environment**, which is created during code compilation.

---

### 🔍 Types of Scope in JavaScript

| Scope Type       | Description                                                                 |
|------------------|-----------------------------------------------------------------------------|
| 🌍 Global Scope   | Declared outside all functions – accessible anywhere                       |
| 🧭 Function Scope | Variables declared with `var` inside a function – accessible only there     |
| 🧱 Block Scope    | Variables declared with `let` or `const` in `{}` – accessible only inside   |

---

### 🧪 Classic Lexical Scope Example

```js
let x = 5;  // Global variable

function outer() {
  let x = 10;  // Local variable in outer scope
  
  function inner() {
    let x = 20;  // Local variable in inner scope
    console.log(x);  // 20 o/p
  }

  inner();
}

outer();

```
- inner() has access to variables from outer() because of lexical scoping — it remembers the environment in which it was defined, not where it was called


####  Example: Block Scope with let and const
```js
if (true) {
  let blockScoped = "I'm inside a block!";
  const alsoBlockScoped = "Me too!";
  console.log(blockScoped);       // ✅ Works
}

console.log(blockScoped); // ❌ ReferenceError
```

- let and const are block-scoped, meaning they can't be accessed outside the block {}.

####  Lexical Environment = Scope + Variable Environment
Every time a function is created, a lexical environment is attached to it:
- The function knows where it was declared.
- That surrounding environment becomes part of its closure.

## 🌀 5. The `this` Keyword

### 🧠 Definition:
> In JavaScript, `this` refers to the **object that is currently executing the function**.  
Its value depends on **how the function is called**.

---

### 📌 How `this` behaves:

| Context                  | What `this` refers to                       |
|--------------------------|---------------------------------------------|
| In a method              | The object that owns the method             |
| In a regular function    | `undefined` (in strict) or `window` (non-strict) |
| In arrow functions       | Inherits `this` from the outer (lexical) scope |
| In constructor functions | The newly created instance                  |

---

### Example with Object Methods and `this`

```js
const user = {
  name: "Madhava",

  // Method: `this` refers to the user object
  omr() {
    console.log("Hi, I'm", this.name); // 👉 Madhava

    // Arrow function inherits `this`
    const showWelcome = () => {
      console.log("Welcome,", this.name); // 👉 Madhava
    };
    showWelcome();

    // Regular function loses `this`
    function wrongContext() {
      console.log("Who am I?", this.name); // 👉 undefined (or window.name)
    }
    wrongContext();

    // setTimeout with arrow function keeps `this`
    setTimeout(() => {
      console.log("Still me after delay:", this.name); // 👉 Madhava
    }, 1000);
  }
};

user.omr();
```
### Example with Constructor Functions

```js
// Constructor function to create a new user
function User(name) {
  this.name = name;
  console.log("Constructor Name:", this.name); // 👉 New object context
}

const newUser = new User("Reddy"); // Constructor Name: Reddy

```

## 6. Destructuring

### Object Destructuring

```js
const user = { name: "Tom", age: 28 };
const { name, age } = user;
console.log(name, age); // "Tom", 28
```

### Array Destructuring
```js
const [a, b] = [1, 2];
console.log(a, b); // 1, 2
```
## 7. Spread and Rest

### Spread Operator

The **spread operator** (`...`) is used to expand arrays or objects.

#### Example with Arrays
```js
const nums = [1, 2, 3];
const moreNums = [...nums, 4]; 
console.log(moreNums); // [1, 2, 3, 4]
```
### Spread with objects:
- The spread operator can also be used to expand the properties of an object into a new object.
```js
const user = { name: "Madhava" };
const updatedUser = { ...user, age: 25 };
console.log(updatedUser); // { name: "Madhava", age: 25 }
```
### Rest Operator
The rest operator (...) collects multiple elements into a single array or object.
```js
function sum(...args) {
  return args.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3)); // 
```
- The `...args` syntax gathers all arguments into an array, which is then summed using `reduce`.

### Rest in Object Destructuring
```js
const { a, ...rest } = { a: 1, b: 2, c: 3 };
console.log(rest); // { b: 2, c: 3 }
```

## 8. Optional Chaining and Nullish Coalescing

### Optional Chaining (`?.`)

Optional chaining allows you to safely access deeply nested properties in objects without manually checking each level for `null` or `undefined`.

#### Example

```js
const user = { profile: { name: "Madhava" } };

console.log(user?.profile?.name);  // "Madhava"
console.log(user?.address?.city);  // undefined
```
#### Prevents runtime errors from accessing properties of undefined or null.

## 9. Nullish Coalescing (`??`)

The **nullish coalescing operator** (`??`) returns the **right-hand value** only if the **left-hand value** is `null` or `undefined`.

### Example 1: Basic Usage

```js
const value = null ?? "Default";
console.log(value); // "Default"
```
### Example 2: When the Left Value is Not Nullish
```js
const value2 = 0 ?? 100;
console.log(value2); // 0
```

## 9. `typeof` vs `instanceof`

### `typeof`

The `typeof` operator is used to check the **type of a value**, especially useful for **primitive types** and some built-in types.

#### Example:

```js
typeof "hello";        // "string"
typeof 123;            // "number"
typeof true;           // "boolean"
typeof undefined;      // "undefined"
typeof null;           // "object" (this is a well-known JavaScript quirk)
typeof {};             // "object"
typeof [];             // "object" (arrays are objects in JavaScript)
typeof function() {};  // "function"
```
### `instanceof`

The `instanceof` operator is used to check whether an object is an **instance of a specific constructor or class**.

#### Examples

```js
[] instanceof Array;                 // true
{} instanceof Object;               // true
new Date() instanceof Date;         // true

function Person() {}
new Person() instanceof Person;     // true

123 instanceof Number;              // false (primitive)
new Number(123) instanceof Number;  // true (object wrapper)
```
## 10. Shallow vs Deep Copy

### Shallow Copy

A **shallow copy** duplicates only the top-level properties. If the object contains nested objects, the inner objects are still **referenced**, not cloned.

#### Example:

```js
const user = { name: "Madhava", address: { city: "NY" } };
const clone = { ...user };

console.log(clone.name);          // "Madhava"
console.log(clone.address.city);  // "NY"
console.log(user.address.city);   // "NY"

clone.address.city = "LA";        // Modifying the city of the clone's address
console.log(user.address.city);   // "LA" (original is affected)
console.log(user.address.city);   // "LA"
``
### Deep Copy

A deep copy creates a full, independent copy of an object, including all nested objects and arrays. This ensures that modifications to the copied object do not affect the original object.
####  Using JSON

```js
const user = { name: "Madhava", address: { city: "NY" } };

// Create a deep copy using JSON methods
const clone = JSON.parse(JSON.stringify(user));

console.log(clone.name);          // "Madhava"
console.log(clone.address.city);  // "NY"
console.log(user.address.city);   // "NY"

// Modify the deep copy's nested object
clone.address.city = "LA";

console.log(user.address.city);      // "NY"  (original object is unaffected)
console.log(clone.address.city);     // "LA"  (deep copy modified)
```
#### ⚠️ Limitations: JSON.parse(JSON.stringify(...))  only supports objects and arrays

---

## TypeScript (TS)

This guide provides a comprehensive understanding of TypeScript, covering its fundamental concepts, advanced features, and best practices with detailed examples.

---

## **1. TypeScript Basics**

### **1.1 What is TypeScript?**
TypeScript is a **strongly typed** superset of JavaScript that compiles to plain JavaScript. It adds static typing, interfaces, and modern features to improve maintainability and scalability.

### **1.2 Why Use TypeScript?**
- Static type checking
- Better IDE support & autocompletion
- Improved maintainability
- Advanced object-oriented programming features
- Helps catch errors at compile-time instead of runtime
- Supports modern JavaScript features
- Easier collaboration in large codebases
- Enhanced debugging capabilities

---

## **2. Type Annotations**
Type annotations define the data types of variables, function parameters, and return values.

### **2.1 Basic Type Annotations**
```ts
let name: string = "Alice";
let age: number = 30;
let isAdmin: boolean = true;
```

### **2.2 Arrays and Tuples**
```ts
let numbers: number[] = [1, 2, 3, 4];
let user: [string, number] = ["Alice", 30]; // Tuple
```

### **2.3 Type Inference**
TypeScript automatically infers types when they are assigned a value.
```ts
let city = "New York"; // TypeScript infers it as a string
```

### **2.4 Enum Types**
```ts
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT"
}
let move: Direction = Direction.Up;
```

---

## **3. Interfaces & Types**

### **3.1 Interfaces**
Interfaces define the structure of objects.
```ts
interface User {
  name: string;
  age: number;
}
const user: User = { name: "Alice", age: 30 };
```

### **3.2 Extending Interfaces**
```ts
interface Employee extends User {
  role: string;
}
const employee: Employee = { name: "Bob", age: 25, role: "Developer" };
```

### **3.3 Type Aliases**
```ts
type Car = {
  brand: string;
  year: number;
};
const car: Car = { brand: "Tesla", year: 2022 };
```

### **3.4 Union & Intersection Types**
```ts
type SuccessResponse = { success: true; data: string };
type ErrorResponse = { success: false; error: string };
type APIResponse = SuccessResponse | ErrorResponse;
```

---

## **4. Functions & Type Safety**

### **4.1 Function Annotations**
```ts
function greet(name: string): string {
  return `Hello, ${name}!`;
}
```

### **4.2 Optional & Default Parameters**
```ts
function greet(name: string, age?: number): string {
  return age ? `${name} is ${age} years old.` : `Hello, ${name}!`;
}
```

### **4.3 Function Overloading**
```ts
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any) {
  return a + b;
}
console.log(add(5, 10)); // 15
console.log(add("Hello, ", "World!")); // Hello, World!
```

---

## **5. Classes & Objects**

### **5.1 Class & Constructor**
```ts
class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  greet(): void {
    console.log(`Hello, my name is ${this.name}`);
  }
}
const person = new Person("Alice");
person.greet();
```

### **5.2 Access Modifiers**
```ts
class Employee {
  private id: number;
  protected role: string;
  public name: string;

  constructor(id: number, role: string, name: string) {
    this.id = id;
    this.role = role;
    this.name = name;
  }
}
```

### **5.3 Getters & Setters**
```ts
class Car {
  private _speed: number = 0;

  get speed(): number {
    return this._speed;
  }
  set speed(value: number) {
    if (value > 0) this._speed = value;
  }
}
const car = new Car();
car.speed = 50;
console.log(car.speed);
```

---

## **6. Advanced TypeScript Concepts**

### **6.1 Generics**
```ts
function identity<T>(value: T): T {
  return value;
}
console.log(identity<number>(10));
console.log(identity<string>("Hello"));
```

### **6.2 Utility Types**
```ts
type Person = { name: string; age: number; };
type PartialPerson = Partial<Person>;
type ReadOnlyPerson = Readonly<Person>;
```

### **6.3 Mapped Types**
```ts
type User = { name: string; age: number; };
type OptionalUser = { [K in keyof User]?: User[K] };
```

### **6.4 Type Guards**
```ts
function isString(value: unknown): value is string {
  return typeof value === "string";
}
```

### **6.5 Decorators (Experimental Feature)**
```ts
function Log(target: any, key: string) {
  console.log(`Property ${key} was accessed`);
}
class User {
  @Log
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
```

---

## **7. Modules & Namespaces**

### **7.1 Exporting & Importing Modules**
#### **file1.ts**
```ts
export const greet = (name: string) => `Hello, ${name}!`;
```
#### **file2.ts**
```ts
import { greet } from "./file1";
console.log(greet("Alice"));
```

### **7.2 Namespaces**
```ts
namespace MathOperations {
  export function add(x: number, y: number): number {
    return x + y;
  }
}
console.log(MathOperations.add(5, 10));
```
---

## React.js

## **1. Getting Started with React**

### **1.1 What is React?**

React is a **JavaScript library** for building UI components efficiently.

### **1.2 Why React?**

- Component-Based Architecture
- Virtual DOM for efficient rendering
- Reusable UI Components
- Strong Community Support

### **1.3 Setting Up a React Project**

Run the following command to create a React project with TypeScript:

```sh
npx create-react-app my-app --template typescript
cd my-app
npm install
npm start
```

---

## **2. JSX & Components**

### **2.1 JSX (JavaScript XML)**

JSX allows writing HTML inside JavaScript.

```tsx
const element = <h1>Hello, React!</h1>;
```

### **2.2 Components in React**

#### **Functional Component (Modern Approach)**

```tsx
function Greeting() {
  return <h1>Hello, World!</h1>;
}
```

#### **Class Component (Older Approach)**

```tsx
class Greeting extends React.Component {
  render() {
    return <h1>Hello, World!</h1>;
  }
}
```

---

## **3. Props in React**

### **3.1 Passing Data via Props**

```tsx
function Welcome(props: { name: string }) {
  return <h1>Hello, {props.name}!</h1>;
}
```

### **3.2 Default Props & PropTypes**

```tsx
import PropTypes from 'prop-types';
function Greeting({ name = "Guest" }) {
  return <h1>Hello, {name}!</h1>;
}
Greeting.propTypes = {
  name: PropTypes.string,
};
```

---

## **4. State, Hooks & Events**

### **4.1 Managing State with `useState`**

```tsx
import { useState } from 'react';
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

### **4.2 Handling Events**

```tsx
function ButtonClick() {
  function handleClick() {
    alert("Button Clicked!");
  }
  return <button onClick={handleClick}>Click Me</button>;
}
```
### **4.3 React Hooks Overview**

React Hooks allow functional components to manage state and side effects without needing class components.

#### **Common Hooks & Their Use Cases**

1. **`useState`**: Managing component state.
   ```tsx
   const [count, setCount] = useState(0);
   ```

2. **`useEffect`**: Handling side effects (API calls, subscriptions, etc.).
   ```tsx
   useEffect(() => {
     console.log("Component Mounted");
   }, []);
   ```

3. **`useContext`**: Managing global state without props drilling.
   ```tsx
   const ThemeContext = React.createContext("light");
   const theme = useContext(ThemeContext);
   ```

### `useReducer`: Managing Complex State Logic in React

The `useReducer` hook is a powerful tool for managing state in React, especially when the state logic becomes complex. It works similarly to `useState`, but with a reducer function for more complex state transitions.

#### Example:

```tsx
import React, { useReducer } from 'react'

function counterReducer (state:any, action:any)  {
  switch (action.type) {
    case 'inc':
      return { count: state.count + 1 };
    case 'dec':
      return { count: state.count - 1 };
    default:
      return { count: 0 }
  }
}

function Counter() {

  const [state, dispatch] = useReducer(counterReducer, { count: 0 })

  return (
    <>
      <h1> Count : {state.count}</h1>
      <button onClick={() => dispatch({ type: 'inc' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'dec' })}>decrement</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </>
  )
}

export default Counter;
```

5. **`useMemo` & `useCallback`**: Optimizing performance.
   - `useMemo` memoizes a computed value to prevent unnecessary recalculations.
   ```tsx
   const memoizedValue = useMemo(() => computeExpensiveValue(data), [data]);
   ```
   - `useCallback` memoizes the function reference, ensuring that the function does not get recreated on every render. This can prevent unnecessary re-renders of child components that depend on the function as a prop.
   ```tsx
   const memoizedCallback = useCallback(() => {
     handleEvent();
   }, [dependencies]);
   ```
**Example :**
```tsx
import React, { useCallback, useEffect, useMemo, useState } from 'react'
function HookComponent() {
  const [count, setCount] = useState(0);
  const [sec, setSec] = useState(0);

  useEffect(
    () => {
      const value = setInterval(() => {
        setSec(prev => prev + 1)
      }, 1000);
      return () => clearInterval(value);
    }, [])

  const memoValue = useMemo(
    () => {
      let sum = 0;
      for (let i = 0; i <= 100000000; i++) {
        sum = sum + i;
      }
      return sum;
    }
    , []);


  const callback = useCallback(() => setCount((prev) => prev + 1), []);

  return (
    <div>
      <h1>Count : {count}</h1>
      <h2>Timer : {sec} </h2>
      <p> Expensive Value : {memoValue}</p>
      <button onClick={callback}>Click Me</button>;
    </div>
  )
}

export default HookComponent
```

---


## **5. Higher-Order Components (HOC)**

HOCs are functions that take a component and return an enhanced version of it.

```tsx
function HOC(ChildComponent:any) {
  return function Enhanced(props){return <ChildComponent {...props} />;}
}

function ChildComponent({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <h1>Welcome, User!</h1> : <h1>No Access</h1>}
    </div>
  );
}

export default HOC(ChildComponent);

---
<HOC isLoggedIn={true} />
```

---

## **6. Context API (Global State Management)**

```tsx
import React, { createContext, useContext, useState } from 'react'


const countContext = createContext(0);

export const ProviderContext = ({ children }: any) => {
  const [count, setCount] = useState(0);
  return (
    <countContext.Provider value={{ count, setCount }}>
      {children}
    </countContext.Provider>
  )
}

function Context() {
  const { count, setCount } = useContext(countContext);
  const handleClick = () => setCount(count + 1);
  return (
    <>
      <div>Context: {count}</div>
      <button onClick={handleClick}>Click Here</button>
    </>
  )
}

export default Context

---
<ProviderContext> <Context /> </ProviderContext>
```

---

## **7. React Router (Navigation in React)**

### **7.1 Installing React Router**

```sh
npm install react-router-dom
```

### **7.2 Implementing Basic Routing**

```tsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
function Home() { return <h1>Home Page</h1>; }
function About() { return <h1>About Page</h1>; }
function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
```

---
## **8. Fetching Data (API Integration)**

In modern web applications, especially when building with React, it's common to fetch data from external APIs. There are two popular ways to do this:

- Using a library like **Axios**
- Using the native **Fetch API**

---

### **8.1 Using Axios for API Calls**

First, install Axios:

```sh
npm install axios
```
Then use it in your component like this:
```tsx
import axios from 'axios';
import { useEffect, useState } from 'react';

function UsersList() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");

  // POST handler for form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://jsonplaceholder.typicode.com/posts", {
        name
      });
      console.log("Form submitted:", response.data);
      setName(""); // Clear input after submission
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  // GET request on component load
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Submit Name</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
        />
        <button type="submit">Submit</button>
      </form>

      <br /><br /><br />

      <h2>Users List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name} ({user.email})</li>
        ))}
      </ul>
    </div>
  );
}

export default UsersList;
```
### **How it works (Axios):**

- **Axios** is a promise-based HTTP client for the browser and Node.js.
- When the component mounts (`useEffect` with an empty dependency array `[]`), the `axios.get(...)` function is triggered.
- This sends a GET request to the provided API endpoint (`https://jsonplaceholder.typicode.com/posts`).
- Once the response is received, Axios automatically parses the JSON and returns it via `response.data`.
- `setPosts(response.data)` updates the React state with the fetched data.
- The component re-renders, and the list of posts is displayed using `.map()`.

---

### **8.2 Using Fetch API for API Calls**

React also works well with the built-in `fetch()` function:

```tsx
import { useEffect, useState } from 'react';

function UsersListFetch() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");

  // POST handler for form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name })
      });
      const data = await response.json();
      console.log("Form submitted:", data);
      setName(""); // Clear the input after submission
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  // GET request on component load
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Submit Name</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
        />
        <button type="submit">Submit</button>
      </form>

      <br /><br /><br />

      <h2>Users List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name} ({user.email})</li>
        ))}
      </ul>
    </div>
  );
}

export default UsersListFetch;
```
### **How it works (Fetch):**

- `fetch()` is a built-in browser API used to make HTTP requests.
- It returns a Promise that resolves to a `Response` object.
- You need to manually parse the response using `.json()` to convert it into a JavaScript object.
- After parsing, the result is stored in state using `setPosts(data)`.
- The component re-renders and displays the list of posts using `.map()`.

---

### 🆚 **Axios vs Fetch**

| Feature           | Axios                             | Fetch API                      |
|------------------|------------------------------------|--------------------------------|
| Built-in         | ❌ Requires installation           | ✅ Available by default        |
| Request/Response | ✅ Auto JSON parsing               | ❌ Manual `.json()` parsing    |
| Interceptors     | ✅ Supported                       | ❌ Not built-in                |
| Error Handling   | ✅ Simple                          | ❌ More verbose                |
| Request Timeout  | ✅ Built-in                        | ❌ Requires manual setup       |
| File Uploads     | ✅ Easier with FormData            | ⚠️ More boilerplate            |

> **Recommendation:**  
> Use **Axios** for production-grade apps that require robust error handling, request/response interceptors, or need to work with large-scale APIs.  
> Use **Fetch** for small projects or where minimizing dependencies is a priority.

---

## **9. State Management with Redux**

### **9.1 Installing Redux Toolkit**

```sh
npm install @reduxjs/toolkit react-redux
```

### **9.2 Creating a Redux Store**

```tsx
import { configureStore, createSlice } from '@reduxjs/toolkit'
import React from 'react'
import { Provider, useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

const CounterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    inc: (state) => { return state + 1; }
  }
})

const store = configureStore({ reducer: { counter: CounterSlice.reducer } })

function Counter() {
  const dispatch = useDispatch()
  const count = useSelector(state => state.counter);
  
  const handleClick = () => { dispatch(CounterSlice.actions.inc());}
  return (
    <div>
      <h1> Counter :: {count}</h1>
      <button onClick={handleClick}>Click Here</button>
    </div>
  );
}

function Redux() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
    
  )
}

export default Redux;
---
<Redux/>
```

---

## **10. Micro Frontends (MFE) Advanced Concepts**

Micro Frontends allow breaking a monolithic frontend into smaller, independently developed and deployed applications.

---

### **10.1 Module Federation in Webpack**

Module Federation is a feature in Webpack 5 that allows one application to **expose** or **consume** modules from another at runtime — perfect for building micro frontends.

#### **Basic Usage Example (Host/Remote)**

```js
// webpack.config.js in remote app (App1)
new ModuleFederationPlugin({
  name: "app1",
  filename: "remoteEntry.js",
  exposes: {
    "./Component": "./src/Component", // Expose a component
  },
});
```
```tsx
// webpack.config.js in host app (App2)
new ModuleFederationPlugin({
  name: "app2",
  remotes: {
    app1: "app1@http://localhost:3001/remoteEntry.js",
  },
});

```
### How It Works

Module Federation enables multiple Webpack builds to work together. Each build acts as either a **host** (which consumes modules) or a **remote** (which exposes modules).

- **Remote app** exposes internal modules to the outside world.
- **Host app** dynamically loads those modules from the remote app at runtime.

This is ideal for **Micro Frontends**, where different teams or modules can be developed and deployed independently.

---

### Terms Breakdown

| Term         | Description                                                                 |
|--------------|-----------------------------------------------------------------------------|
| `name`       | Unique identifier for the app                                               |
| `filename`   | Entry file that acts as the access point (`remoteEntry.js`)                 |
| `exposes`    | Internal modules (components, utils) made available for others to consume   |
| `remotes`    | Remote modules that this app can load dynamically                           |
| `shared`     | Shared dependencies (like React) to avoid duplication and ensure consistency |

---
## 📌 Author Information  

**👤 Author:** Madhava Reddy Vemireddy  
**🌐 Website:** [maddytech.rf.gd](https://maddytech.rf.gd/)


