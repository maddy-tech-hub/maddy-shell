# Full React.js Tutorial for Frontend Development

This comprehensive guide covers everything from basic web technologies to advanced React concepts. It ensures students can build fully functional React applications and prepare for frontend development interviews.

---

## **1. Introduction to Web Development**

Before diving into React, it’s crucial to understand fundamental web technologies.

### **1.1 HTML Basics**

- **Document Structure**: `<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`
- **Common Tags**: `<h1> - <h6>`, `<p>`, `<a>`, `<img>`, `<ul>`, `<ol>`, `<li>`
- **Forms & Inputs**: `<input>`, `<button>`, `<textarea>`, `<select>`
- **Semantic HTML**: `<header>`, `<footer>`, `<section>`, `<article>`
- **HTML5 Features**: `<audio>`, `<video>`, `<canvas>`

### **1.2 CSS Basics**

- **Selectors & Properties**: `color`, `font-size`, `margin`, `padding`
- **Box Model**: `content`, `padding`, `border`, `margin`
- **CSS Flexbox & Grid**
- **Media Queries for Responsive Design**
- **Animations & Transitions**

### **1.3 JavaScript Basics**

- **Variables**: `let`, `const`, `var`
- **Data Types**: `string`, `number`, `boolean`, `array`, `object`
- **Functions & Arrow Functions**
- **Loops & Conditional Statements**
- **Event Handling & DOM Manipulation**
- **ES6+ Features**: Destructuring, Spread Operator, Template Literals

### **1.4 TypeScript Basics**

- **Type Annotations** (`string`, `number`, `boolean`)
- **Interfaces & Types**
- **Functions with Type Safety**
- **Classes & Objects**

---

## **2. Getting Started with React**

### **2.1 What is React?**

React is a **JavaScript library** for building UI components efficiently.

### **2.2 Why React?**

- Component-Based Architecture
- Virtual DOM for efficient rendering
- Reusable UI Components
- Strong Community Support

### **2.3 Setting Up a React Project**

Run the following command to create a React project with TypeScript:

```sh
npx create-react-app my-app --template typescript
cd my-app
npm install
npm start
```

---

## **3. JSX & Components**

### **3.1 JSX (JavaScript XML)**

JSX allows writing HTML inside JavaScript.

```tsx
const element = <h1>Hello, React!</h1>;
```

### **3.2 Components in React**

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

## **4. Props in React**

### **4.1 Passing Data via Props**

```tsx
function Welcome(props: { name: string }) {
  return <h1>Hello, {props.name}!</h1>;
}
```

### **4.2 Default Props & PropTypes**

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

## **5. State & Events**

### **5.1 Managing State with `useState`**

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

### **5.2 Handling Events**

```tsx
function ButtonClick() {
  function handleClick() {
    alert("Button Clicked!");
  }
  return <button onClick={handleClick}>Click Me</button>;
}
```

---

## **6. React Router (Navigation in React)**

### **6.1 Installing React Router**

```sh
npm install react-router-dom
```

### **6.2 Implementing Basic Routing**

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

## **7. Fetching Data (API Integration)**

### **7.1 Using Axios for API Calls**

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

## **8. State Management with Redux**

### **8.1 Installing Redux Toolkit**

```sh
npm install @reduxjs/toolkit react-redux
```

### **8.2 Creating a Redux Store**

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

This document provides a structured approach to learning React.js from fundamentals to advanced topics. Let me know if you need additional sections!

