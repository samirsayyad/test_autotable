import React, { useState } from "react";
import "../styles/table.css";

const TableGenerator = ({data}) =>{
  const [tableData, setTableData] = useState(data);
  let lengthSortedData = data.sort((a, b)=> Object.keys(b).length -  Object.keys(a).length );
  const [tableHeader, setTableHeader] = useState(lengthSortedData[0]);
  const [sortElement, setSortElement] = useState("");

  const renderTableHeaderHtml = () => {
      return Object.entries(tableHeader).map((key, index) => {
        return (
          <th onClick={()=>sortData(key[0])} className="table-header" key={index}>
            {key[0]}
          </th>
        );
      });
  };

  const renderTableDataHtml = () => {
      return tableData.map((value,key) => {
        return (
          <tr key={key}>
            {Object.entries(value).map((field,fieldKey) => {
                return <td key={fieldKey}>{field[1]}</td>
            })}
          </tr>
           
        );
      });
  };



  const sortData = (index) => {
    if(sortElement === (index+"-ASC")){
      setSortElement(index+"-DEC")

      setTableData(data => {
        const dataToSort = [...data];
        dataToSort.sort((a, b) =>  (b[index] || "").toString().localeCompare((a[index] || "").toString()));
        return dataToSort;
      })
    }else{
      setSortElement(index+"-ASC")
      setTableData(data => {
        const dataToSort = [...data];
        dataToSort.sort((a, b) =>  (a[index] || "").toString().localeCompare((b[index] || "").toString()));
        return dataToSort;
      })
    }
    
  };

  return (
      <div>
        <title>Dynamic Table for Kaloom</title>
        <table className="dynamic-table">
          <tbody>
            <tr>
              {renderTableHeaderHtml()}
            </tr>
            {renderTableDataHtml()}
          </tbody>
        </table>

        <h3>{(sortElement) ? "Sorted by: "+sortElement : "" }</h3>

      </div>
    );

}

export default TableGenerator
