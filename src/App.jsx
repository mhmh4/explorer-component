import { useEffect, useState } from "react";

export default function App() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    setFiles(["file 1", "file 2", "file 3"]);
  }, []);

  return (
    <>
      <button
        onClick={() => {
          setFiles((currentFiles) => {
            return [
              ...currentFiles,
              "file " + crypto.randomUUID().substring(0, 8),
            ];
          });
        }}
      >
        Add new file
      </button>
      {files.map((file, index) => {
        return <div key={index}>{file}</div>;
      })}
    </>
  );
}
