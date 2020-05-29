import React, { useState } from "react";
import { Tooltip } from "@material-ui/core";

const Table = ({course, professor, students}) => {
    // course is info about the current course
    // professor is info about the current professor
    // students is info about all students
    // const [heatlhyTemp, setHealthyTemp] = useState(99);
    const [heatlhyTemp] = useState(99);


    const getStatus = s => { 
        var i = 0;
        for (i = 0; i < students.length; i++){
            console.log(i);
            if (s === students[i]["Name"]){
                return students[i]["Status"];
           }
        }
        return ("-", "-")
      }

      return(
        <div id="table-container">
            <caption>{course["Name"]}</caption>
            <table className="course-table table-bordered">
              <thead>
                <th scope="col">Student Name</th>
                <th scope="col">Eligable for Class?</th>
              </thead> 
              <tbody>
                    {course["Roster"].map((s) => 
                        getStatus(s) === "unhealthy" || getStatus(s) === "undocumented" ?
                            <tr>
                                <td>{s}</td>
                                <td>Not Eligable</td> 
                            </tr>
                        
                        :
                            <tr>
                                <td>{s}</td>
                                <td>Eligable</td> 
                            </tr>
                    )}
              </tbody>
            </table>    
          </div>
      );
    }
export default Table;