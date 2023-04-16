import React, { useCallback, useState } from "react";
import ReactDOM from "react-dom";
import "./week.css"
import { Week } from "./week";

const App = (props: { message: string }) => {
    const [count, setCount] = useState(0);
    const increment = useCallback(() => {
        setCount(count => count + 1);
    }, [count]);
    

    return(<>
        <Week />
        
        <h1>{props.message}</h1>
        <h2>Count: {count}</h2>
        <button onClick={increment}>Increment</button>
    </>)
};

const root = document.getElementById('root');
ReactDOM.render(
      <React.StrictMode>
        <App message="Hello World! Simple Counter App built on ESBuild + React + Typescript"/>
      </React.StrictMode>,
  root
);