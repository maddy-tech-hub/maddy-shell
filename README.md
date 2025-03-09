# Complete Web Development Guide

## **Introduction to Web Development**

Before diving into React, it’s crucial to understand fundamental web technologies.

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

## **5. Semantic HTML**

Semantic elements improve accessibility and SEO.
```html
<header>Site Header</header>
<nav>Main Navigation</nav>
<section>Main Content</section>
<article>Blog Post</article>
<footer>Site Footer</footer>
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
```html
<canvas id="myCanvas" width="200" height="100"></canvas>
```

### **6.3 HTML5 Forms Enhancements**
- `required` attribute for mandatory fields
- `pattern` for input validation
- `placeholder` for better user experience

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
- Supports animations and interactivity
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

```css
.box {
    width: 100px;
    height: 100px;
    background-color: red;
    transition: background-color 0.5s ease;
}
.box:hover {
    background-color: blue;
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

### **6.4 Promises & Async/Await**
```js
const fetchData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  console.log(data);
};
fetchData();
```

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

4. **`useReducer`**: Managing complex state logic.
   ```tsx
   const reducer = (state, action) => {
     switch (action.type) {
       case "increment": return { count: state.count + 1 };
       default: return state;
     }
   };
   const [state, dispatch] = useReducer(reducer, { count: 0 });
   ```

5. **`useMemo` & `useCallback`**: Optimizing performance.
   - `useMemo` memoizes a computed value to prevent unnecessary recalculations.
   ```tsx
   const memoizedValue = useMemo(() => computeExpensiveValue(data), [data]);
   ```
   - `useCallback` memoizes a function reference to prevent unnecessary re-renders.
   ```tsx
   const memoizedCallback = useCallback(() => {
     handleEvent();
   }, [dependencies]);
   ```

---


## **5. Higher-Order Components (HOC)**

HOCs are functions that take a component and return an enhanced version of it.

```tsx
function withLogger(WrappedComponent) {
  return function EnhancedComponent(props) {
    console.log("Rendering", WrappedComponent.name);
    return <WrappedComponent {...props} />;
  };
}
```

---

## **6. Context API (Global State Management)**

```tsx
const ThemeContext = React.createContext("light");
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
function ThemedComponent() {
  const { theme } = useContext(ThemeContext);
  return <p>Current Theme: {theme}</p>;
}
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

### **8.1 Using Axios for API Calls**

```sh
npm install axios
```

```tsx
import axios from 'axios';
import { useEffect, useState } from 'react';
function FetchPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(response => setPosts(response.data));
  }, []);
  return <ul>{posts.map(post => <li key={post.id}>{post.title}</li>)}</ul>;
}
```

---

## **9. State Management with Redux**

### **9.1 Installing Redux Toolkit**

```sh
npm install @reduxjs/toolkit react-redux
```

### **9.2 Creating a Redux Store**

```tsx
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Provider, useDispatch, useSelector } from 'react-redux';
const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0 },
  reducers: {
    increment: (state) => { state.count += 1; }
  }
});
const store = configureStore({ reducer: { counter: counterSlice.reducer } });
function Counter() {
  const dispatch = useDispatch();
  const count = useSelector(state => state.counter.count);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(counterSlice.actions.increment())}>Increment</button>
    </div>
  );
}
function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
```

---

## **10. Micro Frontends (MFE) Advanced Concepts**

Micro Frontends allow breaking a monolithic frontend into smaller, independent apps.

### **10.1 Module Federation in Webpack**

```js
new ModuleFederationPlugin({
  name: "app1",
  filename: "remoteEntry.js",
  exposes: {
    "./Component": "./src/Component",
  },
});
```

---
