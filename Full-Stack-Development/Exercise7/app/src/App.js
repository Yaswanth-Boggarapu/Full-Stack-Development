import React from "react";
import marks from './marks.json'
import "./App.css"
import { useTable } from "react-table";
function App() {
  const data = React.useMemo(()=>marks, []);
  const columns = React.useMemo(
    ()=>[
    {
      Headers : "Name",
      accessor: "name"
    },
    {
      Headers : "Deep Learning",
      accessor: "Deep Learning"
    },
    {
      Headers : "Full Stack Development",
      accessor: "Full Stack Development"
    },
    {
      Headers : "Software Engineering",
      accessor: "Software Engineering"
    },
    {
      Headers : "Core Elective",
      accessor: "CE"
    },
    {
      Headers : "Allied Elective",
      accessor: "AE"
    },  
    {
      Headers : "Open Elective",
      accessor: "OE"
    },  
  ],
   []);
 
  const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = useTable({columns, data});
 
  return (
    <div className="App">
      <div className="container">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((columns) => (
                  <th {...columns.getHeaderProps()}>
                    {columns.render("Headers")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );

}

export default App;
