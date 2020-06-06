import React from "react";

const Table = ({course}) => {
    // make students a list of students with name and temp
    // make course just the name of the course


      return(
        // <div id="table-container">
        //     <h2><u>{c["Name"]}</u></h2>
        //     <table className="course-table">
        //       <thead>
        //         <th>Student Name</th>
        //         <th>Latest Temperature</th>
        //         <th>Date of Temperature</th>
        //       </thead> 
        //       <tbody>
        //         {professor.Courses.map((c) => c["Roster"].map((s) => 
        //           <tr>
        //             <td>{s}</td>
        //             <td>{getTemp(s)[0]["temp"]}</td>
        //             <td>{getTemp(s)[1]}</td> 
        //           </tr>
        //         ))}
        //       </tbody>
        //     </table>
        //   </div>
        <div id="table-container">
            <h2><u>{course["Name"]}</u></h2>
            <table className="course-table">
              <thead>
                <th>Student Name</th>
                <th>Latest Temperature</th>
                <th>Date of Temperature</th>
              </thead> 
              <tbody>
                <tr>
                    <td>{course["Name"]}</td>
                    <td>Temp</td>
                    <td>Date</td>
                </tr>
              </tbody>
            </table>
          </div>
      );
    }
export default Table;