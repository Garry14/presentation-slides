import React, { useState } from "react";
import Monaco from "@monaco-editor/react";

const CustomEditorTwo = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [tabContent, setTabContent] = useState([
    "// Content of Tab 1",
    "// Content of Tab 2",
  ]);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  const handleContentChange = (index, value) => {
    const newTabContent = [...tabContent];
    newTabContent[index] = value;
    setTabContent(newTabContent);
  };

  return (
    <div>
      <div>
        {tabContent.map((content, index) => (
          <button key={index} onClick={() => handleTabChange(index)}>{`Tab ${
            index + 1
          }`}</button>
        ))}
      </div>
      {tabContent.map((content, index) => (
        <div
          key={index}
          style={{ display: index === activeTab ? "block" : "none" }}
        >
          <Monaco
            height="500px"
            language="javascript"
            value={tabContent[index]}
            onChange={(value) => handleContentChange(index, value)}
          />
        </div>
      ))}
    </div>
  );
};

export default CustomEditorTwo;
