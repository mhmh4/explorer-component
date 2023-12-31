import { useState } from "react";

function Node({ isDirectory }) {
  const [name, setName] = useState(
    isDirectory ? "Unnamed directory" : "Unnamed file",
  );
  const [children, setChildren] = useState([]);

  return (
    <>
      {!isDirectory && <span className="mr-4">{name}</span>}
      {isDirectory && (
        <details>
          <summary className="mr-4">{name}</summary>
          {isDirectory && (
            <>
              <button
                className="mx-1 rounded border bg-slate-100 px-1 text-sm"
                onClick={() => {
                  setChildren((currentChildren) => {
                    return [...currentChildren, <Node isDirectory={false} />];
                  });
                }}
              >
                + file
              </button>
              <button
                className="mx-1 rounded border bg-slate-100 px-1 text-sm"
                onClick={() => {
                  setChildren((currentChildren) => {
                    return [...currentChildren, <Node isDirectory={true} />];
                  });
                }}
              >
                + directory
              </button>
              <div className="border-l border-black pl-4">
                {children.map((item, index) => {
                  return <div key={index}>{item}</div>;
                })}
              </div>
            </>
          )}
        </details>
      )}
    </>
  );
}

export default function App() {
  return (
    <div className="mx-auto mt-3 h-[90vh] w-[60vw] overflow-y-scroll border p-2">
      <Node isDirectory={true} />
    </div>
  );
}
