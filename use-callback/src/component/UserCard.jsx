import React, { useState, useCallback, memo } from "react";

const UserCard = memo(function UserCard({ name, onSelect }) {
  console.log("UserCard rendered:", name);
  return <div onClick={onSelect}>{name}</div>;
});

export default function UserList() {
  const [count, setCount] = useState(0);

  const handleSelect = useCallback((name) => {
    console.log("Selected:", name);
  }, []);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Re-render Parent</button>

      <UserCard name="John" onSelect={() => handleSelect("John")} />
      <UserCard name="Emma" onSelect={() => handleSelect("Emma")} />
    </>
  );
}
