# Top 100 React.js Interview Questions and Answers

This document contains a comprehensive list of 100 React.js interview questions along with answers, tailored for candidates preparing for interviews at MNCs.

## Table of Contents

1. [Basic Concepts](#basic-concepts)
2. [Components](#components)
3. [Props and State](#props-and-state)
4. [Lifecycle Methods](#lifecycle-methods)
5. [Hooks](#hooks)
6. [Routing](#routing)
7. [Context API](#context-api)
8. [Performance Optimization](#performance-optimization)
9. [Testing](#testing)
10. [Miscellaneous](#miscellaneous)

## Basic Concepts

1.  **What is React?**

    - Answer: React is a JavaScript library for building user interfaces and make single page application, developed by Facebook.

2.  **What are the main features of React?**

    - Answer: Virtual DOM, component-based architecture, unidirectional data flow, and JSX.

3.  **What are the advantages of using React?**

    - Reusable components, Virtual DOM for improved performance,One-way data binding, Large community support

4.  **What is JSX?**

    - Answer: JSX (JavaScript XML) is a syntax extension for JavaScript. It allows us to write HTML-like code within JavaScript, which React transforms into React.createElement calls.

5.  **What is the Virtual DOM?**

    - Answer: The Virtual DOM is an in-memory representation of the real DOM. React updates the Virtual DOM first, then efficiently updates the real DOM based on changes, which improves performance.

6.  **What are components in React?**

    - Answer: Components are independent, reusable pieces of UI. They can be functional (stateless) or class-based (stateful).

7.  **Differentiate between functional and class components.**

    Functional: Simplified syntax using functions, can use hooks for state and lifecycle.
    Class: Uses ES6 classes, requires this for state and lifecycle methods.

    Functional: return jsx directly
    class: return jsx using render method

8.  **What is a state in React?**

    - State is an object managed within a component that holds dynamic data that can change over time.

9.  **What are props in React?**

    - Props (short for "properties") are read-only inputs passed from parent to child components, enabling data sharing.

10. **What is the purpose of render() in class components?**

    - The render() method returns the JSX representing the component's UI.

11. **Explain React's one-way data flow.**

    - Data in React flows in one direction, from parent to child via props. This makes debugging easier and the application predictable.

## React Hooks

12. **What are React Hooks?**

    - Hooks are functions that let you use state and other React features in functional components (e.g., useState, useEffect).

13. **Explain useState and provide an example**

    - useState is a Hook that allows you to add state to functional components in React. It returns an array containing the current state and a function to update that state.

    - The useState Hook is commonly used for managing component data like user inputs, toggle values, counters, and more.

    ```useState
    const [state, setState] = useState(initialValue);
    ```

    - state: The current state value.
    - setState: A function used to update the state.
    - initialValue: The initial value of the state (can be a number, string, array, object, or even null).

    ```jsx
    import React, { useState } from "react";

    const Counter = () => {
      // Declare a state variable 'count' with an initial value of 0
      const [count, setCount] = useState(0);

      return (
        <div>
          <h1>Count: {count}</h1>
          {/* Increment count by 1 when the button is clicked */}
          <button onClick={() => setCount(count + 1)}>Increment</button>
          {/* Decrement count by 1 when the button is clicked */}
          <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
      );
    };

    export default Counter;
    ```

14. **How does useEffect work?**

    - useEffect is used for side effects, such as data fetching, subscriptions,DOM manipulation, and updating the document title. It runs after every render or when specified dependencies change.

    ```javascript
    useEffect(() => {
      // Side effect code
      return () => {
        // Cleanup code (optional)
      };
    }, [dependencies]);
    ```

    - The first argument is a function that contains the side-effect logic.
    - The optional cleanup function is returned to handle any necessary cleanup when the component unmounts.
    - The second argument is a dependency array that determines when the effect should run. If omitted, the effect runs after every render.

    > Basic Example – Updating the Document Title

    ```jsx
    import React, { useState, useEffect } from "react";

    const DocumentTitleUpdater = () => {
      const [count, setCount] = useState(0);

      // useEffect to update the document title whenever 'count' changes
      useEffect(() => {
        document.title = `Count: ${count}`;
      }, [count]); // Only re-run the effect if 'count' changes

      return (
        <div>
          <h1>Count: {count}</h1>
          <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
      );
    };
    ```

    - The useEffect hook updates the document title whenever count changes.

    > Cleanup Example – Using useEffect for Subscriptions

    ```jsx
    import React, { useEffect } from "react";
    const WebSocketComponent = () => {
      useEffect(() => {
        const socket = new WebSocket("ws://example.com/socket");

        socket.onopen = () => console.log("Connected");
        socket.onmessage = (event) => console.log("Message:", event.data);

        // Cleanup function to close the socket when the component unmounts
        return () => {
          console.log("Disconnecting");
          socket.close();
        };
      }, []); // Empty dependency array, runs only once when the component mounts

      return <div>WebSocket Connection Example</div>;
    };

    export default WebSocketComponent;
    ```

    - The effect establishes a WebSocket connection when the component mounts.

    - The cleanup function (return () => {...}) closes the connection when the component unmounts.

15. **What's the purpose of the useContext hook?**

    - useContext allows you to access and consume the value of a context without using the Context Consumer wrapper.
    - useContext data transfer perent component to child component without using props drilling

    ```javascript
    const value = useContext(MyContext);
    ```

    > Create a Context

    ```jsx
    import React, { createContext, useContext } from "react";

    // Create a context with a default value
    const UserContext = createContext("Guest");
    ```

    > Provide Context Value

    ```jsx
    const App = () => {
      return (
        <UserContext.Provider value="Parth Dangroshiya">
          <UserProfile />
        </UserContext.Provider>
      );
    };
    ```

    > Consume Context Value with `useContext`

    ```jsx
    const UserProfile = () => {
      // Access the context value using useContext
      const userName = useContext(UserContext);

      return <h1>Welcome, {userName}!</h1>;
    };

    export default App;
    ```

    - `createContext`: Creates the UserContext.
    - `UserContext.Provider`: Provides the value "Parth Dangroshiya" to the UserProfile component.
    - `useContext(UserContext)`: Consumes the context value in UserProfile to display "Welcome, Parth Dangroshiya!"

16. **Explain useReducer and provide a use case.**

    - useReducer is an alternative to useState for handling complex state logic. It's commonly used for managing state with multiple values or actions.

    > Example:

    ```jsx
    import React, { useReducer } from "react";

    const reducer = (state, action) => {
      switch (action.type) {
        case "increment":
          return { count: state.count + 1 };
        case "decrement":
          return { count: state.count - 1 };
        default:
          return state;
      }
    };

    const initialState = { count: 0 };

    const Counter = () => {
      const [state, dispatch] = useReducer(reducer, initialState);

      return (
        <div>
          <p>Count: {state.count}</p>
          <button onClick={() => dispatch({ type: "increment" })}>
            Increment
          </button>
          <button onClick={() => dispatch({ type: "decrement" })}>
            Decrement
          </button>
        </div>
      );
    };

    export default Counter;
    ```

17. **Explain `useCallback` Hook**

    - The useCallback hook returns a memoized version of a callback function that only changes if one of the dependencies has changed.

    - Think of memoization as caching a value so that it does not need to be recalculated.

    > Problem

    - One reason to use useCallback is to prevent a component from re-rendering unless its props have changed.

    - In this example, you might think that the Todos component will not re-render unless the todos change:

    `index.jsx`

    ```jsx
    import { useState } from "react";
    import ReactDOM from "react-dom/client";
    import Todos from "./Todos";

    const App = () => {
      const [count, setCount] = useState(0);
      const [todos, setTodos] = useState([]);

      const increment = () => {
        setCount((c) => c + 1);
      };
      const addTodo = () => {
        setTodos((t) => [...t, "New Todo"]);
      };

      return (
        <>
          <Todos todos={todos} addTodo={addTodo} />
          <hr />
          <div>
            Count: {count}
            <button onClick={increment}>+</button>
          </div>
        </>
      );
    };

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<App />);
    ```

    `todo.jsx`

    ```jsx
    import { memo } from "react";
    const Todos = ({ todos, addTodo }) => {
      console.log("child render");
      return (
        <>
          <h2>My Todos</h2>
          {todos.map((todo, index) => {
            return <p key={index}>{todo}</p>;
          })}
          <button onClick={addTodo}>Add Todo</button>
        </>
      );
    };

    export default memo(Todos);
    ```

    - Try running this and click the count increment button.

    - You will notice that the Todos component re-renders even when the todos do not change.

    - Why does this not work? We are using memo, so the Todos component should not re-render since neither the todos state nor the addTodo function are changing when the count is incremented.

    - This is because of something called "referential equality".

    - Every time a component re-renders, its functions get recreated. Because of this, the addTodo function has actually changed.

    > solution

    - Use the useCallback Hook to prevent the Todos component from re-rendering needlessly:

    `index.jsx`

    ```jsx
    import { useState, useCallback } from "react";
    import ReactDOM from "react-dom/client";
    import Todos from "./Todos";

    const App = () => {
      const [count, setCount] = useState(0);
      const [todos, setTodos] = useState([]);

      const increment = () => {
        setCount((c) => c + 1);
      };
      const addTodo = useCallback(() => {
        setTodos((t) => [...t, "New Todo"]);
      }, [todos]);

      return (
        <>
          <Todos todos={todos} addTodo={addTodo} />
          <hr />
          <div>
            Count: {count}
            <button onClick={increment}>+</button>
          </div>
        </>
      );
    };

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<App />);
    ```

    `todo.jsx`

    ```jsx
    import { memo } from "react";

    const Todos = ({ todos, addTodo }) => {
      console.log("child render");
      return (
        <>
          <h2>My Todos</h2>
          {todos.map((todo, index) => {
            return <p key={index}>{todo}</p>;
          })}
          <button onClick={addTodo}>Add Todo</button>
        </>
      );
    };

    export default memo(Todos);
    ```

    - Now the Todos component will only re-render when the todos prop changes.

18. **Explain `useMemo` Hook**

    - A hook that returns a memoized value. It recomputes the memoized value only when one of the dependencies has changed.
    - Think of memoization as caching a value so that it does not need to be recalculated.
    - This can improve performance.

    > Performance

    - The useMemo Hook can be used to keep expensive, resource intensive functions from needlessly running.
    - In this example, we have an expensive function that runs on every render.
    - When changing the count or adding a todo, you will notice a delay in execution.

    - A poor performing function. The expensiveCalculation function runs on every render:

    ```jsx
    import { useState } from "react";
    import ReactDOM from "react-dom/client";

    const App = () => {
      const [count, setCount] = useState(0);
      const [todos, setTodos] = useState([]);
      const calculation = expensiveCalculation(count);

      const increment = () => {
        setCount((c) => c + 1);
      };
      const addTodo = () => {
        setTodos((t) => [...t, "New Todo"]);
      };

      return (
        <div>
          <div>
            <h2>My Todos</h2>
            {todos.map((todo, index) => {
              return <p key={index}>{todo}</p>;
            })}
            <button onClick={addTodo}>Add Todo</button>
          </div>
          <hr />
          <div>
            Count: {count}
            <button onClick={increment}>+</button>
            <h2>Expensive Calculation</h2>
            {calculation}
          </div>
        </div>
      );
    };

    const expensiveCalculation = (num) => {
      console.log("Calculating...");
      for (let i = 0; i < 1000000000; i++) {
        num += 1;
      }
      return num;
    };

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<App />);
    ```

    > Solution

    - To fix this performance issue, we can use the useMemo Hook to memoize the expensiveCalculation function. This will cause the function to only run when needed.
    - The useMemoHook accepts a second parameter to declare dependencies. The expensive function will only run when its dependencies have changed.

    - In the following example, the expensive function will only run when count is changed and not when todo's are added.

    ```jsx
    import { useState, useMemo } from "react";
    import ReactDOM from "react-dom/client";

    const App = () => {
      const [count, setCount] = useState(0);
      const [todos, setTodos] = useState([]);
      const calculation = useMemo(() => expensiveCalculation(count), [count]);

      const increment = () => {
        setCount((c) => c + 1);
      };
      const addTodo = () => {
        setTodos((t) => [...t, "New Todo"]);
      };

      return (
        <div>
          <div>
            <h2>My Todos</h2>
            {todos.map((todo, index) => {
              return <p key={index}>{todo}</p>;
            })}
            <button onClick={addTodo}>Add Todo</button>
          </div>
          <hr />
          <div>
            Count: {count}
            <button onClick={increment}>+</button>
            <h2>Expensive Calculation</h2>
            {calculation}
          </div>
        </div>
      );
    };

    const expensiveCalculation = (num) => {
      console.log("Calculating...");
      for (let i = 0; i < 1000000000; i++) {
        num += 1;
      }
      return num;
    };

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<App />);
    ```

19. **What is different between `useMemo` and `useCallback` Hook**

    - The useMemo and useCallback Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function.

20. **Explain `useRef` Hook**

    - useRef creates a mutable reference that persists across renders, commonly used to access DOM elements or store mutable values. does not cause a re-render when updated.

    - If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render.

    - To avoid this, we can use the useRef Hook

    ```jsx
    import { useState, useEffect, useRef } from "react";
    import ReactDOM from "react-dom/client";

    function App() {
      const [inputValue, setInputValue] = useState("");
      const count = useRef(0);

      useEffect(() => {
        count.current = count.current + 1;
      });

      return (
        <>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <h1>Render Count: {count.current}</h1>
        </>
      );
    }

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<App />);
    ```

    - In React, we can add a ref attribute to an element to access it directly in the DOM.

    - Use useRef to focus the input:

    ```jsx
    import { useRef } from "react";
    import ReactDOM from "react-dom/client";

    function App() {
      const inputElement = useRef();

      const focusInput = () => {
        inputElement.current.focus();
      };

      return (
        <>
          <input type="text" ref={inputElement} />
          <button onClick={focusInput}>Focus Input</button>
        </>
      );
    }

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<App />);
    ```

    - Use useRef to keep track of previous state values:

    ```jsx
    import { useState, useEffect, useRef } from "react";
    import ReactDOM from "react-dom/client";

    function App() {
      const [inputValue, setInputValue] = useState("");
      const previousInputValue = useRef("");

      useEffect(() => {
        previousInputValue.current = inputValue;
      }, [inputValue]);

      return (
        <>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <h2>Current Value: {inputValue}</h2>
          <h2>Previous Value: {previousInputValue.current}</h2>
        </>
      );
    }

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<App />);
    ```

    - In the useEffect, we are updating the useRef current value each time the inputValue is updated by entering text into the input field.

21. **Explain react Memo**

    - Using memo will cause React to skip rendering a component if its props have not changed. This can improve performance.

    > Problem

    - In this example, the Todos component re-renders even when the todos have not changed.

    `index.jsx`

    ```jsx
    import { useState } from "react";
    import ReactDOM from "react-dom/client";
    import Todos from "./Todos";

    const App = () => {
      const [count, setCount] = useState(0);
      const [todos, setTodos] = useState(["todo 1", "todo 2"]);

      const increment = () => {
        setCount((c) => c + 1);
      };

      return (
        <>
          <Todos todos={todos} />
          <hr />
          <div>
            Count: {count}
            <button onClick={increment}>+</button>
          </div>
        </>
      );
    };

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<App />);
    ```

    `todo.jsx`

    ```jsx
    const Todos = ({ todos }) => {
      console.log("child render");
      return (
        <>
          <h2>My Todos</h2>
          {todos.map((todo, index) => {
            return <p key={index}>{todo}</p>;
          })}
        </>
      );
    };

    export default Todos;
    ```

    > Solution

    - To fix this, we can use memo.

    `index.jsx`

    ```jsx
    import { useState } from "react";
    import ReactDOM from "react-dom/client";
    import Todos from "./Todos";

    const App = () => {
      const [count, setCount] = useState(0);
      const [todos, setTodos] = useState(["todo 1", "todo 2"]);

      const increment = () => {
        setCount((c) => c + 1);
      };

      return (
        <>
          <Todos todos={todos} />
          <hr />
          <div>
            Count: {count}
            <button onClick={increment}>+</button>
          </div>
        </>
      );
    };

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<App />);
    ```

    `Todos.jsx`

    ```jsx
    import { memo } from "react";

    const Todos = ({ todos }) => {
      console.log("child render");
      return (
        <>
          <h2>My Todos</h2>
          {todos.map((todo, index) => {
            return <p key={index}>{todo}</p>;
          })}
        </>
      );
    };

    export default memo(Todos);
    ```

    - Now the Todos component only re-renders when the todos that are passed to it through props are updated.

22. **different between `useEffect` and `useLayoutEffect` Hook**

    - useEffect runs after components rendered.
    - useLayoutEffect runs before components rendered.

    - useEffect Does not block screen updates(asynchronous)
    - useLayoutEffect Blocks screen updates until executed.

    - userEffect Non-UI updates, data fetching, subscriptions.
    - useLayoutEffect Measuring layout, DOM updates affecting the render.

    > useEffect

    ```javascript
    import React, { useState, useLayoutEffect, useRef } from "react";
    const ExampleComponent = () => {
      const [width, setWidth] = useState(0);
      const divRef = useRef();

      useLayoutEffect(() => {
        console.log("useLayoutEffect executed");
        const divWidth = divRef.current.getBoundingClientRect().width;
        setWidth(divWidth);
      }, []);

      return (
        <div>
          <div
            ref={divRef}
            style={{ width: "200px", padding: "20px", background: "lightblue" }}
          >
            Resize this div
          </div>
          <p>The width of the div is: {width}px</p>
        </div>
      );
    };
    export default ExampleComponent;
    ```

    ```javascript
    import React, { useState, useEffect } from "react";
    const ExampleComponent = () => {
      const [data, setData] = useState(null);

      useEffect(() => {
        console.log("useEffect executed");
        fetchData();
      }, []);

      const fetchData = async () => {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos/1"
        );
        const result = await response.json();
        setData(result);
      };

      return (
        <div>
          <h1>Data: {data ? data.title : "Loading..."}</h1>
        </div>
      );
    };

    export default ExampleComponent;
    ```

23. **Can we use multiple hooks in a single component?**

    - Yes, you can use multiple hooks in a component.

24. **Explain React 18 Hook**

    1. `useId`

    - `useId` is a new hook that generates unique IDs on both the client and server.

    ```jsx
    import React, { useId } from "react";
    const ExampleComponent = () => {
      const id = useId();

      return (
        <div>
          <label htmlFor={id}>Username:</label>
          <input id={id} type="text" />
        </div>
      );
    };

    export default ExampleComponent;
    ```

    - Here, `useId` ensures that the label and input are linked by generating a unique ID that remains consistent across the client and server.

    2. `useTransition`

    - `useTransition` is a hook that helps create a transition between different UI.
    - It returns a `startTransition` function and a `isPending` state. The `startTransition` function allows you to wrap non-urgent state updates.

    ```jsx
    import React, { useState, useTransition } from "react";

    const SearchComponent = () => {
      const [input, setInput] = useState("");
      const [results, setResults] = useState([]);
      const [isPending, startTransition] = useTransition();

      const handleSearch = (e) => {
        setInput(e.target.value);

        // Use startTransition for non-urgent updates
        startTransition(() => {
          const filteredResults = performHeavyFiltering(e.target.value);
          setResults(filteredResults);
        });
      };

      return (
        <div>
          <input
            type="text"
            value={input}
            onChange={handleSearch}
            placeholder="Search..."
          />
          {isPending ? (
            <p>Loading...</p>
          ) : (
            <ul>
              {results.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      );
    };

    export default SearchComponent;
    ```

    - `useTransition` enables the "Loading..." state to display. search operation runs in the background, ensuring smooth transitions.

    3. `useDeferredValue`

    - Defer updating of non-urgent values

    - useDeferredValue allows you to defer a state update until there is time to process it, making it useful for preventing lag when handling large computations or rendering complex components.

    ```jsx
    import React, { useState, useDeferredValue } from "react";
    const FilteredList = ({ items }) => {
      const [filter, setFilter] = useState("");
      const deferredFilter = useDeferredValue(filter);

      const filteredItems = items.filter((item) =>
        item.toLowerCase().includes(deferredFilter.toLowerCase())
      );

      return (
        <div>
          <input
            type="text"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Filter items..."
          />
          <ul>
            {filteredItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      );
    };

    export default FilteredList;
    ```

    4. Automatic Batching

    - React 18 introduced automatic batching, allowing multiple state updates in a single event or asynchronous operation to be batched together, resulting in fewer re-renders and improved performance.

    ```jsx
    import React, { useState } from "react";
    const ExampleComponent = () => {
      const [count, setCount] = useState(0);
      const [text, setText] = useState("");

      const handleClick = () => {
        setCount((c) => c + 1);
        setText("Updated");
      };

      return (
        <div>
          <button onClick={handleClick}>Update</button>
          <p>Count: {count}</p>
          <p>Text: {text}</p>
        </div>
      );
    };

    export default ExampleComponent;
    ```

    - In React 18, both setCount and setText are batched together, leading to a single re-render. Previously, these updates would trigger two separate re-renders unless batched manually.

    5. `useInsertionEffect`

    - Inject styles into the DOM before mutation
    - Improves performance automatically
    - This hook runs synchronously before mutations are made to the DOM, making it more appropriate for style management.

    ```jsx
    import React, { useInsertionEffect, useRef } from "react";
    const StyleComponent = () => {
      const divRef = useRef(null);

      useInsertionEffect(() => {
        const style = document.createElement("style");
        style.innerHTML = `.custom { color: red; }`;
        document.head.appendChild(style);
        divRef.current.className = "custom";
      }, []);

      return <div ref={divRef}>Styled with useInsertionEffect</div>;
    };

    export default StyleComponent;
    ```

    - The useInsertionEffect ensures that the style is injected before the DOM is painted.

25. **Can you explain the rules of hooks?**

    - Hooks can only be called inside React function components.
    - Hooks can only be called at the top level of a component.
    - Hooks cannot be conditional

26. **What is Higher Order Components (HOC)?**

    - A higher-order component is a function that takes a component and returns a new component with additional props or functionality.

27. **Why is used Higher Order Components (HOC)?**

    - Code Reusability
    - Separation of Concerns
    - Enhanced Components

28. **When to Use Higher-Order Components?**

    - Share common logic between components (e.g., authentication checks, data fetching, subscriptions).
    - Enhance existing components with additional behavior (e.g., logging, performance measurement).
    - Implement cross-cutting concerns that apply to multiple components.

29. **How to Create and Use Higher-Order Components?**

    1. Create the withDataFetching HOC

    ```jsx
    import React, { useState, useEffect } from "react";

    // Higher-Order Component for data fetching
    function withDataFetching(url) {
      return function (WrappedComponent) {
        return function WithDataFetching(props) {
          const [data, setData] = useState(null);
          const [loading, setLoading] = useState(true);
          const [error, setError] = useState(null);

          useEffect(() => {
            async function fetchData() {
              try {
                const response = await fetch(url);
                if (!response.ok) {
                  throw new Error("Network response was not ok");
                }
                const result = await response.json();
                setData(result);
              } catch (error) {
                setError(error);
              } finally {
                setLoading(false);
              }
            }

            fetchData();
          }, [url]);

          return (
            <WrappedComponent
              data={data}
              loading={loading}
              error={error}
              {...props}
            />
          );
        };
      };
    }
    ```

    2. Create a Component to Use the HOC

    ```jsx
    import React from "react";
    function UserList({ data, loading, error }) {
      if (loading) {
        return <div>Loading...</div>;
      }

      if (error) {
        return <div>Error: {error.message}</div>;
      }

      return (
        <ul>
          {data && data.map((user) => <li key={user.id}>{user.name}</li>)}
        </ul>
      );
    }
    ```

    3. Wrap the Component with the HOC

    ```jsx
    import React from "react";
    import withDataFetching from "./withDataFetching"; // Assuming the HOC is in the same directory
    import UserList from "./UserList"; // Assuming the UserList component is in the same directory

    const UserListWithData = withDataFetching(
      "https://jsonplaceholder.typicode.com/users"
    )(UserList);

    function App() {
      return (
        <div>
          <h1>Users</h1>
          <UserListWithData />
        </div>
      );
    }

    export default App;
    ```

    1. withDataFetching HOC:

    - The withDataFetching function takes a url and returns another function that takes a WrappedComponent.
    - Inside this function, the WithDataFetching component is defined using hooks (useState and useEffect).
    - useEffect fetches data from the provided URL and updates the state (data, loading, and error).
    - The WrappedComponent is rendered with the fetched data, loading state, error state, and any additional props.

    2. UserList Component:

    - A simple component that displays a list of users.
    - It handles different states (loading, error, and data) and displays appropriate messages or the list of users.

    3. Using the HOC:

    - UserList is wrapped with withDataFetching to create UserListWithData.
    - The URL for fetching users is passed to the HOC.
    - UserListWithData is rendered within the App component, which will fetch and display the user data.

30. **Explain the lifecycle methods of a React component?**

    > Mounting

    - Mounting means putting elements into the DOM.

    - `constructor()`: Called before the component is mounted. Used for initializing state and binding event handlers.

    - static `getDerivedStateFromProps(props, state)`: Called right before rendering the element(s) in the DOM. Used to update the state based on the initial props.

    - `render()`: The only required method in a class component. It returns the JSX to be rendered.

    - `componentDidMount()`: Called immediately after the component is mounted. Ideal for initializing side-effects like fetching data from a server.

    > Updating

    - The next phase in the lifecycle is when a component is updated.

    - A component is updated whenever there is a change in the component's state or props.

    - `static getDerivedStateFromProps(props, state)`: Also called during updating. Used to update the state based on changes in props.

    - `shouldComponentUpdate(nextProps, nextState)`: Called before re-rendering when new props or state are received. Used for optimizing performance. Returns true or false.

    - `render()`: Re-render the component.

    - `getSnapshotBeforeUpdate(prevProps, prevState)`: Called right before the DOM updates. Used to capture some information from the DOM before it changes.

    - `componentDidUpdate(prevProps, prevState, snapshot)`: Called after the component updates. Used to perform operations after the DOM has been updated.

    > Unmounting

    - The next phase in the lifecycle is when a component is removed from the DOM,

    - `componentWillUnmount()`: Called right before the component is unmounted and destroyed. Used for cleanup tasks like cancelling network requests or removing event listeners.

    > Error Handling

    - `componentDidCatch(error, info)`: Called when there's an error during rendering, in a lifecycle method, or the constructor of any child component. Used for error logging and displaying fallback UI.

31. **How the Virtual DOM Works in React**

    - React uses a virtual DOM to improve performance. The virtual DOM is a lightweight copy of the actual DOM. When a component's state or props change, React updates the virtual DOM first, calculates the difference between the previous and current virtual DOM (a process called "reconciliation"), and then efficiently updates the real DOM only where changes occurred.

    - Initial Rendering
    - State Changes and Re-rendering
    - Diffing Algorithm
    - Patching the Real DOM

32. **How Lazy Loading Works in ReactJs**

    - React.lazy is used to define the LazyComponent. It accepts a function that dynamically imports the component.

    - Suspense is used to wrap the lazy-loaded component. It requires a fallback prop which is rendered while the lazy-loaded component is being loaded.

    - The fallback prop can be any React element (e.g., a loading spinner or text) that indicates to the user that the component is loading.

    > Define the Lazy Loaded Component

    ```jsx
    import React, { lazy, Suspense } from "react";
    const LazyComponent = lazy(() => import("./LazyComponent"));

    function App() {
      return (
        <div>
          <h1>My App</h1>
          <Suspense fallback={<div>Loading...</div>}>
            <LazyComponent />
          </Suspense>
        </div>
      );
    }

    export default App;
    ```

    > Create the Lazy Loaded Component

    ```jsx
    // LazyComponent.js
    import React from "react";

    function LazyComponent() {
      return <div>This component was loaded lazily!</div>;
    }

    export default LazyComponent;
    ```

33. **What is React Fiber with example**(read first 2 point)

    - React Fiber is a reconciliation engine that improves rendering performance by breaking rendering work into smaller units of work.

    - React Fiber breaks down rendering into small units of work, allowing React to prioritize the button click (urgent) and process the heavy component's rendering (non-urgent) over multiple frames. This ensures smooth interactions and prevents the UI from freezing.

    - React Fiber is the reimplementation of React's core reconciliation algorithm, designed to make rendering more efficient by allowing React to break work into units and prioritize tasks, enabling features like concurrency and better responsiveness.

    - React Fiber allows React to pause, resume, and even abort rendering work

    - Here’s a simplified illustration of how React Fiber helps in handling updates with different priorities:

    ```jsx
    import React, { useState } from "react";

    const ExpensiveComponent = () => {
      // This component simulates heavy processing
      let items = [];
      for (let i = 0; i < 10000; i++) {
        items.push(<div key={i}>Item {i}</div>);
      }
      return <div>{items}</div>;
    };

    const App = () => {
      const [count, setCount] = useState(0);

      return (
        <div>
          <h1>React Fiber Example</h1>
          <button onClick={() => setCount(count + 1)}>Increment Counter</button>
          <p>Count: {count}</p>
          <ExpensiveComponent />
        </div>
      );
    };

    export default App;
    ```

34. **different between state and props**

    - Internal data that a component manages and controls.
    - Data passed from a parent component to a child component.

    - Mutable (can be updated within the component).
    - Immutable (cannot be changed by the child component).

    - Used for managing dynamic data that changes over time.
    - Used for passing data and configurations to child components.

    - Managed within the component itself.
    - Managed and set by the parent component.

    - Accessible only by the component that owns it.
    - Accessible by child components through props object.

    - Can trigger re-renders
    - Doesn't trigger re-renders

    ```jsx
    import React, { useState } from "react";
    const Counter = () => {
      const [count, setCount] = useState(0); // State declared with useState

      const increment = () => setCount(count + 1);

      return (
        <div>
          <p>Count: {count}</p>
          <button onClick={increment}>Increment</button>
        </div>
      );
    };

    export default Counter;
    ```

    - Here, count is state managed and updated within the Counter component.

    ```jsx
    import React from "react";

    const DisplayMessage = ({ message }) => {
      return <h1>{message}</h1>; // Accessing props
    };

    const App = () => {
      return <DisplayMessage message="Hello, World!" />; // Passing props to child
    };

    export default App;
    ```

    - Here, message is props passed from App to the DisplayMessage component.

35. **what is different between function component and class components**

    - Simple JavaScript functions.
    - Uses ES6 classes extending React.Component.

    - Uses React Hooks (e.g., useState, useEffect) for managing state and lifecycle.
    - Uses this.state and lifecycle methods (e.g., componentDidMount, componentDidUpdate).

    - Doesn't have traditional lifecycle methods but can manage effects with useEffect.
    - Has built-in lifecycle methods (e.g., componentDidMount, shouldComponentUpdate).

    - less boilerplate, and easier to read.
    - More boilerplate with constructor, render(), and lifecycle methods.

    - No this keyword; directly access variables and hooks.
    - Requires this to access props, state, and methods.

    - Slightly faster in modern React, especially with optimizations like React Fiber.
    - Slightly slower due to the overhead of class instantiation.

    - Introduced with React 16.8 (Hooks added).
    - Available since early versions of React.

    > Function Component

    ```jsx
    import React, { useState, useEffect } from "react";

    const FunctionComponent = () => {
      const [count, setCount] = useState(0);

      useEffect(() => {
        console.log("Component mounted or updated");
      }, [count]);

      return (
        <div>
          <p>Count: {count}</p>
          <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
      );
    };

    export default FunctionComponent;
    ```

    > Class Component

    ```jsx
    import React, { Component } from "react";

    class ClassComponent extends Component {
      constructor(props) {
        super(props);
        this.state = { count: 0 };
      }

      componentDidMount() {
        console.log("Component mounted");
      }

      componentDidUpdate() {
        console.log("Component updated");
      }

      increment = () => {
        this.setState({ count: this.state.count + 1 });
      };

      render() {
        return (
          <div>
            <p>Count: {this.state.count}</p>
            <button onClick={this.increment}>Increment</button>
          </div>
        );
      }
    }

    export default ClassComponent;
    ```

36. **what is stateless and stateful components**

    > stateless components

    - Definition: Stateless components, also known as presentational components, do not manage or hold any state. They rely entirely on props passed from parent components and render the UI based on this data.

    - Displaying static content or purely presentational elements

    ```jsx
    const Greeting = ({ name }) => {
      return <h1>Hello, {name}!</h1>;
    };

    export default Greeting;
    ```

    - Here, Greeting is a stateless component that simply receives name as a prop and renders it.

    > Stateful Components

    - Definition: Stateful components manage and maintain their own internal state. They have logic to handle dynamic data changes and can render differently based on their state.

    - Handling user interactions, managing data, or handling complex logic.

    ```jsx
    import React, { useState } from "react";

    const Counter = () => {
      const [count, setCount] = useState(0);

      return (
        <div>
          <p>Count: {count}</p>
          <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
      );
    };

    export default Counter;
    ```

    - Here, Counter is a stateful component that manages its count state and updates it when the button is clicked.

37. **different between controlled and uncontrolled components?**

    - Components where form data is managed by React state.
    - Components where form data is handled by the DOM itself.

    - Data is stored in the component's state using useState or state.
    - Data is stored in the DOM, accessed using ref.

    - Values are accessed via React state.
    - Values are accessed via ref.

    - More predictable and easier to manage with React's one-way data flow.
    - Less predictable, harder to manage, especially with complex forms.

    - Ideal for controlled and dynamic form handling, validation, etc.
    - Suitable for simple forms or when you need minimal React integration.

    - Uses value and onChange props to manage inputs.
    - Uses defaultValue and ref for input values.

    > Controlled Component

    ```jsx
    import React, { useState } from "react";

    const ControlledForm = () => {
      const [name, setName] = useState("");

      const handleChange = (event) => {
        setName(event.target.value);
      };

      return (
        <div>
          <input type="text" value={name} onChange={handleChange} />
          <p>Typed Name: {name}</p>
        </div>
      );
    };

    export default ControlledForm;
    ```

    - Here, value is controlled by the React state, and changes are handled via onChange.

    - Controlled Components: Managed by React state, ideal for handling dynamic forms and validations.

    > Uncontrolled Component

    ```jsx
    import React, { useRef } from "react";

    const UncontrolledForm = () => {
      const nameInput = useRef(null);

      const handleSubmit = () => {
        alert(`Typed Name: ${nameInput.current.value}`);
      };

      return (
        <div>
          <input type="text" ref={nameInput} />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      );
    };

    export default UncontrolledForm;
    ```

    - Here, the input value is accessed directly via ref without using React state.

    - Uncontrolled Components: Managed by the DOM using ref, suitable for simple forms where you need less control.

38. **what is pure components?**

    - A Pure Component is an optimized version of a React component that prevents unnecessary renders by using shallow comparisons for props and state.

    - It can be implemented using `React.PureComponent` for class components or `React.memo` for functional components.

    - Shallow Comparison
    - Optimized Rendering

    1. Using React.PureComponent

    - You can create a Pure Component by extending React.PureComponent instead of React.Component.

    ```jsx
    import React, { PureComponent } from "react";

    class ExamplePureComponent extends PureComponent {
      render() {
        console.log("Pure Component Rendered");
        return <div>{this.props.message}</div>;
      }
    }

    export default ExamplePureComponent;
    ```

    2. Functional Component with React.memo

    - For functional components, you can achieve similar behavior using React.memo

    ```jsx
    import React from "react";

    const ExampleMemoComponent = React.memo(({ message }) => {
      console.log("Memoized Component Rendered");
      return <div>{message}</div>;
    });

    export default ExampleMemoComponent;
    ```

    ```jsx
    import React, { useState } from "react";
    import ExamplePureComponent from "./ExamplePureComponent";
    import ExampleMemoComponent from "./ExampleMemoComponent";

    const App = () => {
      const [count, setCount] = useState(0);
      const [message, setMessage] = useState("Hello");

      return (
        <div>
          <button onClick={() => setCount(count + 1)}>Increment Count</button>
          <ExamplePureComponent message={message} />
          <ExampleMemoComponent message={message} />
        </div>
      );
    };

    export default App;
    ```

    - When clicking the "Increment Count" button, neither ExamplePureComponent nor ExampleMemoComponent will re-render since their message prop hasn't changed, demonstrating the benefits of shallow comparison.

    > Benefits of Pure Components

    - Performance Optimization
    - Easy Implementation

39. **how to make custom Hook?**

    > Steps to Create a Custom Hook

    - Start with the use Prefix
    - Utilize Built-in Hooks
    - Extract Reusable Logic

    > Custom Hook for Window Width

    - Create the Custom Hook

    ```jsx
    import { useState, useEffect } from "react";

    const useWindowWidth = () => {
      const [width, setWidth] = useState(window.innerWidth);

      useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);

        window.addEventListener("resize", handleResize);

        // Cleanup function to remove the event listener
        return () => window.removeEventListener("resize", handleResize);
      }, []);

      return width;
    };

    export default useWindowWidth;
    ```

    - Use the Custom Hook in a Component

    ```jsx
    import React from "react";
    import useWindowWidth from "./useWindowWidth";

    const App = () => {
      const width = useWindowWidth();

      return (
        <div>
          <h1>Window Width: {width}px</h1>
        </div>
      );
    };

    export default App;
    ```

    > Advantages of Custom Hooks

    - Reusability
    - Code Organization
    - Testability

    > When to Create Custom Hooks

    - When you find yourself duplicating the same stateful logic in multiple components.
    - When you need to abstract complex logic or side effects, making your component code more maintainable.

40. **Explain React-router-dom?**

    - React Router DOM is a powerful library for managing navigation and routing in React applications. It allows developers to build single-page applications (SPAs) that can navigate between different views or components without reloading the entire page.

    > Features

    1. Dynamic Routing: Routes can be defined dynamically based on the application state or URL.
    2. Nested Routes: You can define routes inside other routes, creating a hierarchy of components.
    3. Route Parameters: Easily extract parameters from the URL to use in your components.
    4. Browser History: Uses the HTML5 history API for navigation, allowing for browser-like navigation.
    5. Customizable: Offers options for lazy loading components, route protection, and more.

    > Basic Concepts

    1. Router: The main component that wraps your application and manages the routing logic. In web applications, you typically use <BrowserRouter>.
    2. Routes: Define the path and the component to render when the path matches. This is done using the <Route> component.
    3. Link: A component used to navigate to different routes without reloading the page. It works similarly to an HTML <a> tag but prevents the default browser behavior.
    4. Switch: Renders the first child <Route> that matches the location, ensuring that only one route is rendered at a time.

    > Basic Example

    ### Step 1: Install React Router DOM

    npm install react-router-dom

    ### Step 2: Set Up Routing

    ```jsx
    import React from "react";
    import ReactDOM from "react-dom/client";
    import {
      BrowserRouter as Router,
      Routes,
      Route,
      Link,
    } from "react-router-dom";

    const Home = () => <h2>Home Page</h2>;
    const About = () => <h2>About Page</h2>;
    const Contact = () => <h2>Contact Page</h2>;

    const App = () => {
      return (
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      );
    };

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<App />);
    ```

    - BrowserRouter: The <Router> component that wraps the entire application to provide routing capabilities.
    - Routes: The <Routes> component contains all the <Route> definitions.
    - Route: Each <Route> defines a path and the component to render when that path is accessed.
    - Link: The <Link> component is used for navigation between different routes without a full page reload.

41. **What is protected router?**

    - securing a React application using protected router. only authorized users can access certain parts of your application.

    > Why Use Protected Routes?

    - Security
    - User Experience
    - Access Control

    > Implementing Protected Routes

    ### Step 1: Create an Authentication Context (Optional)

    ```jsx
    import React, { createContext, useContext, useState } from "react";

    // Create Auth Context
    const AuthContext = createContext();

    export const AuthProvider = ({ children }) => {
      const [isAuthenticated, setIsAuthenticated] = useState(false);

      const login = () => setIsAuthenticated(true);
      const logout = () => setIsAuthenticated(false);

      return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
          {children}
        </AuthContext.Provider>
      );
    };

    // Custom hook to use auth context
    export const useAuth = () => useContext(AuthContext);
    ```

    ### Step 2: Create the Protected Route Component

    ```jsx
    import { Route, Navigate } from "react-router-dom";
    import { useAuth } from "./AuthContext"; // import your Auth context

    const ProtectedRoute = ({ element, ...rest }) => {
      const { isAuthenticated } = useAuth();

      return (
        <Route
          {...rest}
          element={isAuthenticated ? element : <Navigate to="/login" />}
        />
      );
    };

    export default ProtectedRoute;
    ```

    ### Step 3: Use Protected Routes in Your Application

    ```jsx
    import React from "react";
    import ReactDOM from "react-dom/client";
    import { BrowserRouter as Router, Routes } from "react-router-dom";
    import { AuthProvider } from "./AuthContext";
    import Home from "./Home";
    import Login from "./Login";
    import Dashboard from "./Dashboard";
    import ProtectedRoute from "./ProtectedRoute";

    const App = () => {
      return (
        <AuthProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <ProtectedRoute path="/dashboard" element={<Dashboard />} />
            </Routes>
          </Router>
        </AuthProvider>
      );
    };

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<App />);
    ```

    > Explanation of the Code

    - Auth Context: Manages the authentication state and provides login/logout functionality.
    - Protected Route Component: Checks if the user is authenticated and either renders the desired component or redirects to the login page.
    - Using Protected Routes: In the main application, you use ProtectedRoute for any routes that need protection, such as a dashboard or user profile.

42. **explain react-query in ReactJS**

    - React Query is a powerful data-fetching and state management library for React applications. It simplifies the process of fetching, caching, synchronizing, and updating server state in your React applications, making it easier to work with asynchronous data.

    > Key Features of React Query

    1. Data Fetching: Handles the fetching of data from APIs seamlessly, providing hooks to manage data fetching logic.

    2. Caching: Automatically caches the results of API calls to improve performance and reduce unnecessary network requests.

    3. Automatic Refetching: Automatically refetch data when the component mounts, when the window regains focus, or when the user reconnects to the internet.

    4. Synchronization: Provides methods to keep data in sync with the server and updates it automatically based on background fetching.

    5. Query Invalidation: Allows invalidation of cached data to ensure users see the most up-to-date information.

    6. Pagination and Infinite Query Support: Supports efficient handling of paginated or infinite scrolling data.

    > Basic Usage

    ### Step 1: Install React Query

    ```jsx
    npm install @tanstack/react-query
    ```

    ### Step 2: Set Up the Query Client

    - Wrap your application with the QueryClientProvider to provide the React Query client.

    ```jsx
    import React from "react";
    import ReactDOM from "react-dom/client";
    import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
    import App from "./App";

    const queryClient = new QueryClient();

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    );
    ```

    ### Step 3: Fetching Data with useQuery

    Use the useQuery hook to fetch data in your components.

    ```jsx
    import React from "react";
    import { useQuery } from "@tanstack/react-query";

    const fetchTodos = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    };

    const Todos = () => {
      const { data, error, isLoading } = useQuery(["todos"], fetchTodos);

      if (isLoading) return <div>Loading...</div>;
      if (error) return <div>Error: {error.message}</div>;

      return (
        <ul>
          {data.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      );
    };

    export default Todos;
    ```

    > Mutations with useMutation

    - In addition to fetching data, React Query allows you to perform mutations (e.g., POST, PUT, DELETE operations) with the useMutation hook.

    ```jsx
    import { useMutation, useQueryClient } from "@tanstack/react-query";
    const addTodo = async (newTodo) => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos",
        {
          method: "POST",
          body: JSON.stringify(newTodo),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    };

    const AddTodo = () => {
      const queryClient = useQueryClient();
      const mutation = useMutation(addTodo, {
        onSuccess: () => {
          queryClient.invalidateQueries(["todos"]);
        },
      });

      const handleAddTodo = () => {
        mutation.mutate({ title: "New Todo", completed: false });
      };

      return <button onClick={handleAddTodo}>Add Todo</button>;
    };
    ```

43. **Explain redux-toolkit in reactjs**

    - Redux Toolkit is a powerful library that enhances the developer experience when working with Redux. It abstracts much of the boilerplate code associated with Redux, making state management in React applications more intuitive and efficient. By using Redux Toolkit, developers can focus more on building features rather than managing the intricacies of state management.

    > Key Features of Redux Toolkit

    1. Simplified Store Setup: It provides a function called configureStore that simplifies the store configuration process.

    2. Built-in Reducers and Middleware: Redux Toolkit comes with pre-configured reducers and middleware, such as redux-thunk for handling asynchronous actions.

    3. CreateSlice: A utility function to reduce boilerplate by combining actions and reducers in a single slice of state.

    4. Immutability with Immer: Redux Toolkit uses Immer under the hood, which allows you to write "mutative" code that is transformed into immutable updates, simplifying state updates.

    5. DevTools Integration: Built-in support for Redux DevTools to help with debugging and state inspection.

    > Basic Usage of Redux Toolkit

    ### Step 1: Install Redux Toolkit and React-Redux

    ```bash
    npm install @reduxjs/toolkit react-redux
    ```

    ### Step 2: Create a Slice

    - A slice is a piece of Redux state and the logic for managing that state. You can create a slice using createSlice

    ```jsx
    // features/counterSlice.js
    import { createSlice } from "@reduxjs/toolkit";

    const counterSlice = createSlice({
      name: "counter",
      initialState: { value: 0 },
      reducers: {
        increment: (state) => {
          state.value += 1; // Using Immer to mutate the state
        },
        decrement: (state) => {
          state.value -= 1;
        },
        incrementByAmount: (state, action) => {
          state.value += action.payload;
        },
      },
    });

    // Export the actions and the reducer
    export const { increment, decrement, incrementByAmount } =
      counterSlice.actions;
    export default counterSlice.reducer;
    ```

    ### Step 3: Configure the Store

    - You can create and configure the Redux store using configureStore.

    ```jsx
    // app/store.js
    import { configureStore } from "@reduxjs/toolkit";
    import counterReducer from "../features/counterSlice";

    const store = configureStore({
      reducer: {
        counter: counterReducer,
      },
    });

    export default store;
    ```

    ### Step 4: Provide the Store

    - Wrap your application with the Provider component from react-redux, passing in the store.

    ```jsx
    // index.js
    import React from "react";
    import ReactDOM from "react-dom/client";
    import { Provider } from "react-redux";
    import store from "./app/store";
    import App from "./App";

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    ```

    ### Step 5: Using the State and Actions in Components

    - You can use useSelector to access the state and useDispatch to dispatch actions.

    ```jsx
    // components/Counter.js
    import React from "react";
    import { useDispatch, useSelector } from "react-redux";
    import {
      increment,
      decrement,
      incrementByAmount,
    } from "../features/counterSlice";

    const Counter = () => {
      const dispatch = useDispatch();
      const count = useSelector((state) => state.counter.value);

      return (
        <div>
          <h1>{count}</h1>
          <button onClick={() => dispatch(increment())}>Increment</button>
          <button onClick={() => dispatch(decrement())}>Decrement</button>
          <button onClick={() => dispatch(incrementByAmount(5))}>Add 5</button>
        </div>
      );
    };

    export default Counter;
    ```

    > Explanation of the Code

    1. Create a Slice: The createSlice function combines the reducer logic and actions into one structure, reducing boilerplate.

    2. Configure the Store: The configureStore function sets up the Redux store with the specified reducers and includes middleware for handling asynchronous actions.

    3. Provider: The Provider component makes the Redux store available to all nested components, enabling them to access the state.

    4. Using Hooks: The useSelector hook retrieves state values, while the useDispatch hook allows dispatching actions.

    > Benefits of Using Redux Toolkit

    - Reduced Boilerplate
    - Improved Developer Experience
    - Integration with React
    - Efficiency

44. **how to work react-redux with diagram in reactjs**

    > Overview of React-Redux Workflow

    1. Store: A centralized location that holds the application's state.

    2. Actions: Plain JavaScript objects that describe changes in the state. Actions are dispatched to the store.

    3. Reducers: Pure functions that take the current state and an action as arguments and return a new state based on the action.

    4. Components: React components that can access the Redux store through connect() or hooks like useSelector and useDispatch.

    > Key Steps in Using React-Redux

    - Create a Redux Store
    - Define Actions and Reducers
    - Wrap the Application with Provider
    - Connect Components

    > Diagram Explanation

    ````plaintext
        +------------------+
        |    React App     |
        | (Components/UI)  |
        +--------+---------+
                |
                | 1. Dispatch Action
                |
                v
        +------------------+
        |     Actions      |
        +--------+---------+
                |
                | 2. Call Reducer
                |
                v
        +------------------+
        |     Reducers     |
        +--------+---------+
                |
                | 3. Update Store
                |
                v
        +------------------+
        |      Store       |
        +--------+---------+
                |
                | 4. Get Updated State
                |
                v
        +------------------+
        |    React App     |
        | (Components/UI)  |
        +------------------+
        ```
    ````

    > Step-by-Step Implementation

    ### Step 1: Install Redux and React-Redux

    ```bash
    npm install @reduxjs/toolkit react-redux
    ```

    ### Step 2: Create a Redux Store

    ```jsx
    // app/store.js
    import { configureStore } from "@reduxjs/toolkit";
    import counterReducer from "../features/counterSlice";

    const store = configureStore({
      reducer: {
        counter: counterReducer,
      },
    });

    export default store;
    ```

    ### Step 3: Define Actions and Reducers

    ```jsx
    // features/counterSlice.js
    import { createSlice } from "@reduxjs/toolkit";

    const counterSlice = createSlice({
      name: "counter",
      initialState: { value: 0 },
      reducers: {
        increment: (state) => {
          state.value += 1;
        },
        decrement: (state) => {
          state.value -= 1;
        },
      },
    });

    // Export actions and reducer
    export const { increment, decrement } = counterSlice.actions;
    export default counterSlice.reducer;
    ```

    ### Step 4: Wrap the Application with Provider

    ```jsx
    // index.js
    import React from "react";
    import ReactDOM from "react-dom/client";
    import { Provider } from "react-redux";
    import store from "./app/store";
    import App from "./App";

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    ```

    ### Step 5: Connect Components

    ```jsx
    // components/Counter.js
    import React from "react";
    import { useDispatch, useSelector } from "react-redux";
    import { increment, decrement } from "../features/counterSlice";

    const Counter = () => {
      const dispatch = useDispatch();
      const count = useSelector((state) => state.counter.value);

      return (
        <div>
          <h1>{count}</h1>
          <button onClick={() => dispatch(increment())}>Increment</button>
          <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
      );
    };

    export default Counter;
    ```

    ### Step 6: Include the Counter Component in the App

    ```jsx
    // App.js
    import React from "react";
    import Counter from "./components/Counter";

    const App = () => {
      return (
        <div>
          <h1>React-Redux Example</h1>
          <Counter />
        </div>
      );
    };

    export default App;
    ```

45. **Explain restful API in javascript**

    > defination

    - A RESTful API (Representational State Transfer) is an architectural style that defines a set of constraints and principles for creating web services. In simple terms, it allows communication between a client (such as a web browser or mobile app) and a server using standard HTTP methods like GET, POST, PUT, DELETE, etc. REST APIs are widely used for building web applications because they are stateless, scalable, and easy to implement.

    > Key Concepts of RESTful APIs

    1. Resources: These are the objects or entities that the API interacts with. Resources are typically represented by URLs (Uniform Resource Locators). For example:

    - /users might represent all users.
    - /users/1 might represent a specific user with an ID of 1.

    2. HTTP Methods: REST APIs use different HTTP methods to perform actions on resources:

    - GET: Retrieve data from the server (e.g., get user details).
    - POST: Create new data on the server (e.g., add a new user).
    - PUT: Update existing data on the server (e.g., update user information).
    - DELETE: Remove data from the server (e.g., delete a user).

    3. Statelessness: Each API request from the client contains all the information needed to process the request. The server does not store any information about the client's state between requests.

    4. JSON Format: Data is typically sent and received in JSON (JavaScript Object Notation) format, making it easy to read and use in JavaScript.

    > How to Create a RESTful API in JavaScript Using Express

    ### Step 1: Setting Up the Project

    ```jsx
    mkdir rest-api-example
    cd rest-api-example

    npm init -y

    npm install express
    ```

    ### Step 2: Create a Basic RESTful API

    ```javascript
    // Import Express
    const express = require("express");
    const app = express();
    const port = 3000;

    // Middleware to parse JSON bodies
    app.use(express.json());

    // Sample data
    let users = [
      { id: 1, name: "John Doe", email: "john@example.com" },
      { id: 2, name: "Jane Smith", email: "jane@example.com" },
    ];

    // GET all users
    app.get("/users", (req, res) => {
      res.json(users);
    });

    // GET a specific user by ID
    app.get("/users/:id", (req, res) => {
      const user = users.find((u) => u.id === parseInt(req.params.id));
      if (!user) return res.status(404).json({ message: "User not found" });
      res.json(user);
    });

    // POST a new user
    app.post("/users", (req, res) => {
      const newUser = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email,
      };
      users.push(newUser);
      res.status(201).json(newUser);
    });

    // PUT (update) an existing user
    app.put("/users/:id", (req, res) => {
      const user = users.find((u) => u.id === parseInt(req.params.id));
      if (!user) return res.status(404).json({ message: "User not found" });

      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      res.json(user);
    });

    // DELETE a user
    app.delete("/users/:id", (req, res) => {
      const userIndex = users.findIndex(
        (u) => u.id === parseInt(req.params.id)
      );
      if (userIndex === -1)
        return res.status(404).json({ message: "User not found" });

      users.splice(userIndex, 1);
      res.json({ message: "User deleted successfully" });
    });

    // Start the server
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
    ```

    ### Step 3: Running the API

    ```jsx
    node index.js
    ```

    > Testing the API Endpoints

    - GET all users: http://localhost:3000/users
    - GET a specific user: http://localhost:3000/users/1
    - POST a new user: Send a POST request to http://localhost:3000/users with JSON data:

    ```json
    {
      "name": "Alice Johnson",
      "email": "alice@example.com"
    }
    ```

    - PUT (update) a user: Send a PUT request to http://localhost:3000/users/1 with JSON data:

    ```json
    {
      "name": "Alice Cooper",
      "email": "alice.cooper@example.com"
    }
    ```

    - DELETE a user: Send a DELETE request to http://localhost:3000/users/1

    > Conclusion

    - A RESTful API provides a standardized way to interact with resources over the web. Using JavaScript and Express, you can easily create a RESTful API that supports CRUD (Create, Read, Update, Delete) operations. The example demonstrates the fundamental principles of RESTful APIs, such as using HTTP methods, JSON data, and a stateless architecture, making it an ideal starting point for building more complex applications.

## Advanced React Concepts

46. **What is React Fiber?**

    - React Fiber is a reconciliation engine that improves rendering performance by breaking rendering work into smaller units of work.

47. **How does React handle updates to the DOM?**

    - React batches updates and uses the Virtual DOM to minimize direct DOM manipulation, making updates efficient.

48. **What is React Fragment?**

    - <React.Fragment> or shorthand <> lets you group multiple elements without adding an extra DOM node.

49. **Explain higher-order components (HOC).**

    - HOCs are functions that take a component as input and return a new component with enhanced functionality.

50. **What are controlled vs. uncontrolled components?**

    - Controlled: Form elements controlled by React state.
    - Uncontrolled: Form elements managed by the DOM itself.

51. **What is Prop Drilling, and how can we avoid it?**

    - Prop drilling is passing props through multiple levels of components. We can avoid it using context or state management libraries.

52. **What is the Context API?**

    - The Context API allows sharing state across components without passing props manually.

53. **What is code-splitting, and why is it used?**

    - Code-splitting divides your code into smaller chunks, reducing initial load time. It’s implemented using React.lazy and Suspense.

54. **How do you handle errors in React components?**

    - Use error boundaries with componentDidCatch or ErrorBoundary to catch errors in child components.

55. **What are portals in React?**

    - Portals allow rendering components outside the parent DOM hierarchy, typically used for modals or tooltips.

## Performance Optimization

56. **How can you optimize a React application?**

    - Memoizing components with React.memo
    - Using useMemo and useCallback
    - Code-splitting
    - Lazy loading images/components

57. **What is React.memo, and when should you use it?**

    - React.memo is a higher-order component that prevents unnecessary re-renders by comparing previous and next props.

58. **Explain React's reconciliation process.**

    - React compares the new Virtual DOM with the previous version using a diffing algorithm, updating only the changed elements in the real DOM.

59. **How to prevent component re-renders**

    - Use React.memo, useMemo, useCallback, or PureComponent.

60. **What is lazy loading in React?**

    - Lazy loading is a technique to load components or resources only when they are needed, improving the initial load time. React supports lazy loading via React.lazy and Suspense.

61. **How can you avoid prop drilling in React?**

    - You can avoid prop drilling using the Context API, state management libraries (e.g., Redux, MobX), or hooks like useContext.

62. **What is the purpose of React.PureComponent?**

    - React.PureComponent is a base class that performs a shallow comparison of state and props to prevent unnecessary re-renders, improving performance.

63. **Explain the key prop and its importance in React.**

    - The key prop is used to uniquely identify elements in a list. It helps React differentiate between elements, enabling efficient re-renders and updates.

64. **What is React's Profiler?**

    - The Profiler API helps measure the performance of React components, identifying bottlenecks and improving application performance.

## React Router

65. **What is React Router?**

    - React Router is a library used for navigation in React applications. It allows you to create single-page applications with multiple views.

66. **How do you implement routing in a React app?**

    - You implement routing using <BrowserRouter>, <Route>, <Switch>, <Link>, and <NavLink> components from React Router.

67. **What's the difference between <Link> and <NavLink>?**

    - Both create navigational links, but <NavLink> provides additional styling when the link is active.

68. **How can you achieve nested routing in React?**

    - You achieve nested routing by defining routes within the components rendered by parent routes.

69. **What is useHistory, and how is it used?**

    - useHistory is a hook provided by React Router that allows you to access and manipulate the history object, enabling navigation programmatically.

## State Management

70. **What is Redux?**

    - Redux is a state management library for managing the state of an application in a predictable way using a single global store.

71. **Explain the core principles of Redux.**

    - Single source of truth (a single store)
    - State is read-only
    - Changes are made with pure functions (reducers)

72. **How do you connect Redux with a React application?**

    - Use the Provider component from react-redux to wrap your app, and connect components using connect or hooks like useSelector and useDispatch.

73. **What is the purpose of middleware in Redux?**

    - Middleware intercepts actions before they reach the reducer, allowing you to handle asynchronous logic (e.g., redux-thunk or redux-saga).

74. **How do you handle asynchronous actions in Redux?**

    - Use middleware like redux-thunk or redux-saga to manage side effects and handle asynchronous actions.

75. **What is the Context API, and how does it differ from Redux?**

    - The Context API is a built-in React feature for sharing state across components. Unlike Redux, it lacks built-in middlewares, making it suitable for simpler state management needs.

76. **What is reselect in Redux?**

    - reselect is a library used to create memoized selectors that optimize state selection and avoid unnecessary recalculations.

77. **How do you debug a React app with Redux?**

    - Use the Redux DevTools browser extension to inspect the state tree, actions, and dispatched changes.

## React Lifecycle Methods

78. **What are React lifecycle methods?**

    - Lifecycle methods are functions in class components that run during the mounting, updating, and unmounting phases.

79. **Name the phases of the React component lifecycle.**

    - Mounting: constructor, getDerivedStateFromProps, render, componentDidMount
    - Updating: getDerivedStateFromProps, shouldComponentUpdate, render, getSnapshotBeforeUpdate, componentDidUpdate
    - Unmounting: componentWillUnmount

80. **What is componentDidMount used for?**

    - componentDidMount runs after a component is mounted, commonly used for data fetching or DOM manipulations.

81. **When would you use shouldComponentUpdate?**

    - Use shouldComponentUpdate to prevent unnecessary re-renders based on changes in props or state.

82. **What is the difference between componentWillUnmount and componentDidUpdate?**

    - componentWillUnmount is called before a component is removed, while componentDidUpdate runs after an update.

83. **How do hooks replace lifecycle methods in functional components?**

    - useEffect: Replaces componentDidMount, componentDidUpdate, componentWillUnmount
    - useState: Manages state instead of this.state

84. **What is getSnapshotBeforeUpdate?**

    - it captures some information before DOM updated

## React Testing

85. **How do you test React components?**

    - Use libraries like Jest and React Testing Library to write unit, integration, and snapshot tests.

86. **What is the purpose of snapshot testing?**

    - Snapshot testing captures a rendered component’s output and compares it against a saved version to identify unexpected changes.

87. **How do you simulate events in testing?**

    - Use fireEvent from React Testing Library to simulate user interactions like clicks, input changes, etc.

88. **What is the difference between shallow and mount rendering in Enzyme?**

    - Shallow: Renders only the component without children, suitable for unit testing.
    - Mount: Fully renders the component with children, used for integration tests.

89. **How do you mock API calls in React testing?**

    - Use libraries like Jest to mock API calls, e.g., jest.fn() or fetch-mock.

## Miscellaneous React Questions

90. **What is React Fiber architecture?**

    - React Fiber is a complete reimplementation of React's reconciliation algorithm that makes rendering more efficient and interruptible.

91. **Explain the difference between React and React Native.**

    - React is for building web applications, while React Native is for building mobile apps using React concepts.

92. **How do you handle forms in React?**

    - Forms are managed using controlled components (React state) or uncontrolled components (refs).

93. **What is server-side rendering (SSR)?**

    - SSR renders React components on the server, sending HTML to the client, improving performance and SEO.

94. **What are the benefits of SSR?**

    - Faster initial page load, SEO optimization, and improved performance on slow networks/devices.

## React with TypeScript

95. **How does React integrate with TypeScript?**

    - React works with TypeScript by adding types to props, state, and hooks, enabling better type safety.

96. **How do you define props with TypeScript in React?**

    - Define an interface for props and pass it to the component:

    ```tsx
    interface Props {
      name: string;
    }
    const MyComponent: React.FC<Props> = ({ name }) => <div>{name}</div>;
    ```

97. **How do you type state with useState in TypeScript?**

    ```tsx
    const [count, setCount] = useState<number>(0);
    ```

98. **How do you type the useReducer hook in TypeScript?**

    - Define types for state, action, and the reducer function

    ```tsx
    type State = { count: number };
    type Action = { type: 'increment' | 'decrement' };
    const reducer = (state: State, action: Action): State => { ... };
    const [state, dispatch] = useReducer(reducer, { count: 0 });
    ```

99. **How do you handle default props in TypeScript?**

    - Answer: Use Partial for optional props or set defaults within the component.

100.  **How do you type refs using useRef with TypeScript?**

      ```tsx
      const inputRef = useRef<HTMLInputElement>(null);
      ```

101.  **How do you type React event handlers in TypeScript?**

      ```tsx
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => { ... };
      ```

## React Best Practices and Design Patterns

102.  **What is the container-presentational pattern?**

      - Container: Manages state and logic, passes data to presentational components.
      - Presentational: Focuses on UI, receives data via props.

103.  **Explain the atomic design methodology in React.**

      - Atoms (basic elements like buttons)
      - Molecules (groups of atoms)
      - Organisms (complex UI sections)
      - Templates (page structure)
      - Pages (final views)

104.  **How would you implement a Higher-Order Component (HOC) in React?**

      - An HOC is a function that takes a component and returns an enhanced component:

      ```jsx
      const withLogging = (WrappedComponent) => (props) => {
        console.log("Rendering component");
        return <WrappedComponent {...props} />;
      };
      ```

105.  **When would you use a Render Prop pattern?**

      - Use it when you need to share state/logic between components without duplicating code.

106.  **What is the compound component pattern?**

      - This pattern lets you build complex components using smaller, related sub-components, e.g., building a <Tabs> component with <Tab> items.

107.  **What is Next.js, and how does it differ from React?**

      - Next.js is a React framework for
        - server-side rendering (SSR),
        - static site generation (SSG),
        - page routing,
        - and API handling.

108.  **What is Gatsby, and how does it integrate with React?**

      - Gatsby is a static site generator that uses React. It pre-builds pages for faster load times and SEO benefits.

109.  **What are React Native and Expo?**

      - React Native is a framework for building mobile apps with React, while Expo is a set of tools that simplify React Native development.

110.  **How does Storybook work with React?**

      - Storybook is an open-source tool for building isolated UI components, useful for developing, testing, and documenting React components.

111.  **What is Emotion in React?**

      - Emotion is a library for writing CSS styles with JavaScript, offering both inline styles and CSS-in-JS capabilities.

112.  **What is the difference between styled-components and Emotion?**

      - Both libraries allow writing CSS in JavaScript, but Emotion offers more flexibility and performance optimizations.

## React Development and Deployment

113.  **How do you deploy a React application?**

      - You can deploy using platforms like Vercel, Netlify, AWS, GitHub Pages, or using Docker for containerization.

114.  **What is Create React App (CRA)**

      - CRA is an official React toolchain for creating new React applications with a pre-configured setup.

115.  **How can you eject a CRA project, and why would you do it?**

      - Run npm run eject to access underlying configuration files. Use it when you need more control over Webpack, Babel, or other tools.

116.  **How do you set up custom environment variables in a React app?**

      - Create a .env file with variables prefixed by REACT*APP*. Access them using process.env.

117.  **What is the purpose of Webpack in a React app?**

      - Webpack is a module bundler that combines JavaScript, CSS, images, and other assets into a single bundle, optimizing React apps.

## React Interview Problem-Solving Scenarios

118.  **How would you handle a performance issue with a slow-rendering component?**

      - Identify bottlenecks using React DevTools, then optimize using techniques like React.memo, useCallback, useMemo, or code-splitting.

119.  **How would you handle form validation in React?**

      - Use libraries like Formik, React Hook Form, or create custom validation using the onChange or onBlur events.

120.  **How do you handle conditional rendering in React?**

      - Use JavaScript operators like if, &&, ternary ? :, or conditional components to render UI elements based on state/props.

121.  **How do you implement authentication in a React app?**

      - Use tools like Firebase, Auth0, or create custom authentication using JWT, context, and local storage.

122.  **How would you optimize a large list in React?**

      - Use virtualization libraries like react-window or react-virtualized to render only visible items in the viewport.

123.  **What would you do if a React component doesn't update as expected?**

      - Check if the component’s state or props have changed, verify key props, use debugging tools, or implement useEffect correctly.

124.  **How do you manage media queries or responsive design in React?**

      - Use CSS frameworks (e.g., Bootstrap, Tailwind CSS), CSS-in-JS solutions, or libraries like styled-components and emotion with media queries.
