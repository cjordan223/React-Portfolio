import React from 'react';

const NotebookViewer = () => {
  return (
    <iframe
      src="/html/speedtest_compare.html"
      style={{ width: '100%', height: '100vh', border: 'none' }}
      title="Notebook Viewer"
    ></iframe>
  );
};

export default NotebookViewer;
