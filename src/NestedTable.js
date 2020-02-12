import React from 'react';
import { tableData } from './tableData';
import { headersConfig } from './headersConfig';

const header = Object.keys(headersConfig);
let dataArray = [];
const tableContent = tableData.map((item, index) => {
  //console.log(1);
  dataArray.push(item);
  if (typeof dataArray[index] === 'object') {
    console.log(1);
  }
  //console.log(dataArray);
  console.log(Object.values(dataArray[index]));
  //console.log(Object.entries(dataArray).length);

  return dataArray[index];
});
//console.log(tableContent);

function Table(props) {
  return (
    <table>
      <thead>
        <tr>
          {header.map(datum => {
            return <th key={datum}>{headersConfig[datum].toUpperCase()}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>A</td>
          <td>Smith</td>
        </tr>
        <tr>
          <td>Eve</td>
          <td>Jackson</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
