import React from 'react';

import './index.css'

interface BrowserProps { 
  srcDoc?: string 
}

const Browser: React.FC<BrowserProps> = ({ srcDoc }) => {
  return (
    <iframe className="browser" srcDoc={srcDoc || 'No code available!'} title="browser"></iframe>
  );
}

export default Browser;
