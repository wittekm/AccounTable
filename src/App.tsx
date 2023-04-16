import React, { useCallback, useState } from "react";
import ReactDOM from "react-dom";
import ReactCalendar from "react-calendar";
import "./week.css"

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const currentDayOfWeek = daysOfWeek[(new Date().getDay() - 1 + 7) % 7];

interface DayProps {
    day: string
}

const Day = (props: DayProps) => {
    const classes = ["day-box"]
    if(props.day == currentDayOfWeek) {
        classes.push("today")
    }
    return (
        <div className={classes.join(" ")} key={props.day} >
            {props.day}
        </div>
    )
}

const App = (props: { message: string }) => {
    const [count, setCount] = useState(0);
    const increment = useCallback(() => {
        setCount(count => count + 1);
    }, [count]);
    

    return(<>
    <div className="week-view-container">
        {daysOfWeek.map(day => (
            <Day day={day} />
        ))}
    </div>
        
        <h1>{props.message}</h1>
        <h2>Count: {count}</h2>
        <button onClick={increment}>Increment</button>
    </>)
};

const root = document.getElementById('root');
ReactDOM.render(
  <App message="Hello World! Simple Counter App built on ESBuild + React + Typescript"/>,
  root
);