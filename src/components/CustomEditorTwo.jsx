import React, { useEffect, useRef } from "react";

const CustomEditorTwo = () => {
  const editorRef = useRef(null);

  useEffect(() => {
    console.log("Editor component mounted");
    if (typeof window !== "undefined" && !editorRef.current) {
      console.log("Editor component mounted window");
      const monaco = require("monaco-editor");
      console.log(monaco, "monaco");
      editorRef.current = monaco.editor.create(
        document.getElementById("editor-container"),
        {
          value: "// Type your React code here",
          language: "javascript", // or 'typescript'
          automaticLayout: true,
          minimap: {
            enabled: false, // Disable minimap to improve performance
          },
          scrollbar: {
            alwaysConsumeMouseWheel: false, // Allow page scrolling with mouse wheel
          },
        }
      );
      editorRef.current.dispose();
    }

    // return () => {
    //   if (editorRef.current) {
    //     console.log(editorRef.current, "editorRef.current", editorRef.current.dispose);
    //     editorRef.current.dispose();
    //   }
    // };
  }, [editorRef]);

  return (
    <div id="editor-container" style={{ width: "100%", height: "400px" }} />
  );
};

export default CustomEditorTwo;
