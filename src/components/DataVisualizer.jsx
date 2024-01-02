import React from 'react';
import './DataVisualizer.css'; // Import the CSS file

const DataVisualizer = ({ data }) => {
  const renderTableHeader = () => {
    if (!data || data.length === 0) return null;

    const header = Object.keys(data[0]);
    return (
      <tr>
        {header.map((key, index) => (
          <th key={index}>{key}</th>
        ))}
      </tr>
    );
  };

  const renderTableData = () => {
    if (!data || data.length === 0) return null;

    return data.map((rowData, index) => {
      return (
        <tr key={index}>
          {Object.values(rowData).map((value, index) => (
            <td key={index}>{value}</td>
          ))}
        </tr>
      );
    });
  };

  return (
    <div className="data-visualizer">
      {data ? (
        <table>
          <thead>
            {renderTableHeader()}
          </thead>
          <tbody>
            {renderTableData()}
          </tbody>
        </table>
      ) : (
        <p>No data to visualize</p>
      )}
    </div>
  );
};

export default DataVisualizer;
