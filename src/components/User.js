import { useState } from "react";

function User(props) {
  const { name, location } = props;
  const [count] = useState(0);
  const [count2] = useState(1);
  return (
    <div>
      <h2>Count : {count}</h2>
      <h2>Count : {count2}</h2>
      <h1>{name}</h1>
      <h3>{location}</h3>
      <h3>instagram: subodh0611</h3>
    </div>
  );
}

export default User;
