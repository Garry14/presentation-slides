"use client";
import React, { useState, useRef } from "react";
import Editor, { OnMount } from "@monaco-editor/react";
import { executeCode } from "@/api";

type MonacoEditorInstance =
  | import("monaco-editor").editor.IStandaloneCodeEditor
  | null;

const TestEditor = () => {
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
  return (
    <div className="flex justify-center items-start">
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

export default TestEditor;
