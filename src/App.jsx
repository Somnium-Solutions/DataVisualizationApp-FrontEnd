import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './App.css';
import DragDropArea from './components/DragDropArea';
import DataVisualizer from './components/DataVisualizer';

function App() {
  const [data, setData] = React.useState(null);

  // Handle data change from drag-and-drop

  return (
    <div className="App">
      <h1>Data Visualization App</h1>
      <div className="container">
        <DragDropArea />
        {data && <DataVisualizer data={data} />}
      </div>
    </div>
  );
}

export default App;
