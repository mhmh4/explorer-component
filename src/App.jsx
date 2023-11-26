import { useEffect, useState } from "react";

function Node() {
  const [children, setChildren] = useState([]);

  return (
    <div className="border-l border-black pl-4">
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
    </div>
  );
}

export default function App() {
  return (
    <div className="m-10">
      <Node />
    </div>
  );
}
