import { useState } from "react";

function Node({ isDirectory }) {
  const [name, setName] = useState("name");
  const [children, setChildren] = useState([]);

  return (
    <>
      <span className="mr-4">{name}</span>
      {isDirectory && (
        <div>
          <button
            onClick={() => {
              setChildren((currentChildren) => {
                return [...currentChildren, <Node isDirectory={false} />];
              });
            }}
          >
            Add new file
          </button>
          <button
            onClick={() => {
              setChildren((currentChildren) => {
                return [...currentChildren, <Node isDirectory={true} />];
              });
            }}
          >
            Add new directory
          </button>
          <div className="border-l border-black pl-4">
            {children.map((item, index) => {
              return <div key={index}>{item}</div>;
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default function App() {
  return (
    <div className="m-10">
      <Node isDirectory={true} />
    </div>
  );
}
