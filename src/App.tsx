import React, { useCallback, useState } from 'react';

import Browser from './Components/Browser';
import Editor from './Components/Editor';

import './App.css'

const placeholderCode = `\
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <title>Code Preview</title>
  </head>
  <body>
    <h1>Hello Playment!</h1>
  </body>
</html>
`;

function App() {
  const [editorCode, setEditorCode] = useState(placeholderCode);
  const [previewCode, setPreviewCode] = useState(editorCode);

  const handleSaveClick = useCallback(() => {
    const anchor = document.createElement("a");
    anchor.href = `data:text/plain;charset=UTF-8,${editorCode}`;
    anchor.setAttribute("download", "download.txt");
    anchor.click();
  }, [editorCode]);

  const handlePreviewClick = useCallback(() => {
    setPreviewCode(editorCode);
  }, [editorCode]);

  return (
    <div className="wrapper">
      <div className="top-toolbar">
        <button type="button" onClick={handleSaveClick}>save</button>
        <button type="button" onClick={handlePreviewClick}>preview</button>
      </div>
      <div className="main">
        <div className="editor-container">
          <Editor value={editorCode} onChange={setEditorCode} />
        </div>
        <div className="browser-container">
          <Browser srcDoc={previewCode} />
        </div>
      </div>
    </div>
  );
}

export default App;
