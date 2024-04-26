"use client";
import React, { useState, useRef } from "react";
import Editor, { OnMount } from "@monaco-editor/react";

type MonacoEditorInstance =
  | import("monaco-editor").editor.IStandaloneCodeEditor
  | null;

const TestEditor = () => {
  const editorRef = useRef<MonacoEditorInstance>();
  const [value, setValue] = useState<string>("");
  const onMount: OnMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };
  return (
    <div className="flex justify-center items-center">
      <div className="w-1/2">
        <Editor
          height="100vh"
          theme="vs-dark"
          defaultLanguage="javascript"
          defaultValue="// some comment"
          onMount={onMount}
          value={value}
          onChange={(v) => setValue(v ?? "")}
        />
      </div>
      <div className="w-1/2"></div>
    </div>
  );
};

export default TestEditor;
