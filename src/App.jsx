import { useEffect, useState } from "react";

export default function App() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    setFiles(["file 1", "file 2", "file 3"]);
  }, []);

  return (
    <>
      {files.map((file, index) => {
        return <div key={index}>{file}</div>;
      })}
    </>
  );
}
