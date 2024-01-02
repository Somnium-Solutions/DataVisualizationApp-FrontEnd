import React, { useState } from 'react';
import './DragDropArea.css'; // Import the CSS file

const DragDropArea = ({ onFileDrop }) => {
  const [dragging, setDragging] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);

    const file = e.dataTransfer.files[0];
    onFileDrop(file);
  };

  return (
    <div
      className={dragging ? 'drag-drop-area dragging' : 'drag-drop-area'}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <p>Drag and drop files here</p>
    </div>
  );
};

export default DragDropArea;
