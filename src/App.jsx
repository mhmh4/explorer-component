import { useEffect, useState } from "react";

function Node() {
  const [children, setChildren] = useState([]);

  return (
    <>
      <button
        onClick={() => {
          setChildren((currentChildren) => {
            return [
              ...currentChildren,
              "file " + crypto.randomUUID().substring(0, 8),
            ];
          });
        }}
      >
        Add new file
      </button>
      <button
        onClick={() => {
          setChildren((currentChildren) => {
            return [...currentChildren, <Node />];
          });
        }}
      >
        Add new directory
      </button>
      {children.map((item, index) => {
        return <div key={index}>{item}</div>;
      })}
    </>
  );
}

export default function App() {
  return <Node />;
}
