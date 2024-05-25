import { useEffect, useRef } from "react";

import "../../../../node_modules/tabulator-tables/dist/css/tabulator.min.css";

// import { TabulatorFull as Tabulator } from "tabulator-tables";
//  ******* import tabulatorStyles from '../../dist/css/tabulator_midnight.min.css';

// import "tabulator/lib/styles.css";
// import "tabulator/lib/css/semantic-ui/tabulator_semantic-ui.min.css";
import { TabulatorFull as Tabulator } from "tabulator-tables";

const SendSMS = () => {
  const tableRef = useRef(null);

  //Build Tabulator
  // var table = new Tabulator("#example-table", {
  //   height: "311px",
  //   rowHeader: {
  //     headerSort: false,
  //     resizable: false,
  //     frozen: true,
  //     headerHozAlign: "center",
  //     hozAlign: "center",
  //     formatter: "rowSelection",
  //     titleFormatter: "rowSelection",
  //     cellClick: function (e, cell) {
  //       cell.getRow().toggleSelect();
  //     },
  //   },
  //   columns: [
  //     { title: "Name", field: "name", width: 200 },
  //     {
  //       title: "Progress",
  //       field: "progress",
  //       width: 100,
  //       hozAlign: "right",
  //       sorter: "number",
  //     },
  //     { title: "Gender", field: "gender", width: 100 },
  //     { title: "Rating", field: "rating", hozAlign: "center", width: 80 },
  //     { title: "Favourite Color", field: "col" },
  //     {
  //       title: "Date Of Birth",
  //       field: "dob",
  //       hozAlign: "center",
  //       sorter: "date",
  //     },
  //     { title: "Driver", field: "car", hozAlign: "center", width: 100 },
  //   ],
  // });

  // useEffect(() => {
  //   var table = new Tabulator("#data-table", {
  //     data: [
  //       { id: 1, name: "John Doe", age: 30 },
  //       { id: 2, name: "Jane Doe", age: 25 },
  //     ],
  //     layout: "fitColumns",
  //     responsiveLayout: true,
  //     columnHeaderSortMulti: true,
  //     pagination: "local",
  //     paginationSize: 50,
  //     paginationSizeSelector: [10, 20, 50, 100, 200, 500],
  //     movableColumns: true,
  //     layoutColumnsOnNewData: false,
  //     textDirection: "rtl",
  //     autoResize: false,
  //     dataTree: true,
  //     dataTreeStartExpanded: false,
  //     selectable: true,

  //     columns: [
  //       {
  //         editor: true,

  //         titleFormatter: "rowSelection",
  //         hozAlign: "center",
  //         headerSort: false,
  //       },

  //       {
  //         title: "نام",
  //         field: "نام و نام خانوادگی",

  //         hozAlign: "center",
  //         headerHozAlign: "center",
  //         resizable: true,
  //         widthGrow: 2,
  //         headerFilter: "input",
  //       },
  //       {
  //         title: "کد ملی",
  //         field: "کد ملی",

  //         hozAlign: "center",
  //         headerHozAlign: "center",
  //         resizable: true,
  //         widthGrow: 2,
  //         headerFilter: "input",
  //       },
  //       {
  //         title: "شماره تماس",
  //         field: "شماره تماس",
  //         hozAlign: "center",
  //         headerHozAlign: "center",
  //         resizable: true,
  //         widthGrow: 2,
  //         headerFilter: "input",
  //       },
  //     ],
  //   });
  // });

  // return (
  //   <div className="subPage tablePg">
  //     <div id="data-table"></div>
  //   </div>
  // );

  useEffect(() => {
    // var table = new Tabulator("#example-table", {
    //   // data: [
    //   //   { id: 1, name: "John Doe", age: 30 },
    //   //   { id: 2, name: "Jane Doe", age: 25 },
    //   // ],
    //   height: "311px",
    //   layout: "fitColumns",
    //   columns: [
    //     { title: "Name", field: "name", width: 200 },
    //     {
    //       title: "Progress",
    //       field: "progress",
    //       hozAlign: "right",
    //       sorter: "number",
    //     },
    //     { title: "Gender", field: "gender", widthGrow: 2 },
    //     { title: "Rating", field: "rating", hozAlign: "center" },
    //     { title: "Favourite Color", field: "col", widthGrow: 3 },
    //     {
    //       title: "Date Of Birth",
    //       field: "dob",
    //       hozAlign: "center",
    //       sorter: "date",
    //       widthGrow: 2,
    //     },
    //     { title: "Driver", field: "car", hozAlign: "center" },
    //   ],
    // });

    const table = new Tabulator(tableRef.current, {
      height: "100%",
      layout: "fitColumns",
      data: [
        // Your data array
        { id: 1, name: "John Doe", age: 30 },
        { id: 2, name: "Jane Doe", age: 25 },
        { id: 2, name: "Jane Doe", age: 25 },
        { id: 2, name: "Jane Doe", age: 25 },
        { id: 2, name: "Jane Doe", age: 25 },
      ],
      columns: [
        // Your column definitions
        { title: "ID", field: "id" },
        { title: "Name", field: "name" },
        { title: "Age", field: "age" },
      ],
    });

    // Clean up the table on component unmount
    return () => {
      table.destroy();
    };
  }, []);
  // return <div id="example-table"></div>;
  return <div ref={tableRef} className=" w-full h-full" />;
};
export default SendSMS;
