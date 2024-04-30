"use client";
import React, { useState, useRef } from "react";
import Editor, { OnMount } from "@monaco-editor/react";
import { executeCode } from "@/api";

type MonacoEditorInstance =
  | import("monaco-editor").editor.IStandaloneCodeEditor
  | null;

const CustomEditor = () => {
  const editorRef = useRef<MonacoEditorInstance>();
  const [value, setValue] = useState<string>("");
  const [output, setOutput] = useState<Array<string> | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const onMount: OnMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };
  const runCode = async () => {
    const sourceCode = editorRef.current?.getValue();
    if (!sourceCode) return;
    try {
      setIsLoading(true);
      const { run: result } = await executeCode(sourceCode);
      setOutput(result.output.split("\n"));
      result.stderr ? setIsError(true) : setIsError(false);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const defaultJSXCode = `
  import React from 'react';
  import ReactDOM from 'react-dom';

  function App() {
      return (
          <div>
              <h1>Hello, world!</h1>
              <p>This is a JSX component.</p>
          </div>
      );
  }

  ReactDOM.render(<App />, document.getElementById('root'));
  `;

  return (
    <div className="flex justify-center items-start">
      <div className="w-1/2">
        <Editor
          height="100vh"
          theme="vs-dark"
          defaultLanguage="javascript"
          defaultValue={defaultJSXCode}
          onMount={onMount}
          value={value}
          onChange={(v) => setValue(v ?? "")}
          options={{
            wordWrap: "on",
            minimap: { enabled: false },
            automaticLayout: true,
            suggest: {
              showClasses: false,
              showColors: true,
              showConstants: true,
              showConstructors: true,
              showEnums: true,
              showEvents: true,
              showFields: true,
              showFiles: true,
              showFolders: true,
              showFunctions: true,
              showInterfaces: true,
              showKeywords: true,
              showMethods: true,
              showModules: true,
              showOperators: true,
              showProperties: true,
              showReferences: true,
              showSnippets: true,
              showStructs: true,
              showTypeParameters: true,
              showUnits: true,
              showUsers: true,
              showValues: true,
              showVariables: true,
            },
          }}
        />
      </div>
      <div className="w-1/2 p-4">
        <div className="mb-[14px]">
          <button
            className="h-[45px] w-[100px] bg-blue-500 rounded-sm"
            onClick={runCode}
          >
            Run Code
          </button>
        </div>
        <div className="mb-[14px]">Output</div>
        <div>
          {output
            ? output?.map((line, i) => <p key={i}>{line}</p>)
            : 'Click "Run Code" to see the output here'}
        </div>
      </div>
    </div>
  );
};

export default CustomEditor;
