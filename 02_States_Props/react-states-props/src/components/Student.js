import { useState } from "react";

function Student(props) {

  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Student Component</h2>

      <p>Name: {props.name}</p>
      <p>Course: {props.course}</p>

      <p>Clicks: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default Student;

