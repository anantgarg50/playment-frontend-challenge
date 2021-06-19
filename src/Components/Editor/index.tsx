import React from 'react';
import AceEditor from "react-ace";
import "ace-builds/webpack-resolver";
import "ace-builds/src-min-noconflict/ext-language_tools";

interface EditorProps {
  value?: string,
  onChange: (code: string) => void,
}

const Editor: React.FC<EditorProps> = ({ value, onChange }) => {
  return (
    <AceEditor 
      name="editor"
      mode="html"
      theme="monokai"
      height="100%"
      width="100%"
      tabSize={2}
      value={value}
      onChange={onChange}
      enableSnippets={true}
      showPrintMargin={false}
      debounceChangePeriod={200}
      enableBasicAutocompletion={true}
      enableLiveAutocompletion={true}
      editorProps={{
        $blockScrolling: true,
      }}
    />
  );
}

export default Editor;
