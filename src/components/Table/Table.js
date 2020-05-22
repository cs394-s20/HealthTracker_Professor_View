import React, { useState } from "react";
import { Tooltip } from "@material-ui/core";

const Table = ({course, professor, students}) => {
    // course is info about the current course
    // professor is info about the current professor
    // students is info about all students
    const [heatlhyTemp, setHealthyTemp] = useState(99);

    const getTemp = s => { 
        var i = 0;
        for (i = 0; i < students.length; i++){
            console.log(i);
            if (s === students[i]["Name"]){
                let entries = Object.keys(students[i]["record"])

                // if the student has temperatures recorded, get most recent temp
                if (entries.length !== 0){
                    let max = 0;
                    let dT = "";
                    for (const entry in entries){
                        if (Date.parse(entries[entry]) > max){
                            max = Date.parse(entries[entry]);
                            dT = entries[entry]
                        }
                    }
              
                    return [students[i]["record"][dT]["temp"], dT];
                }
                else {
                    return ("-", "-");
                }
           }
        }
        return ("-", "-")
      }

      return(
        <div id="table-container">
            <caption>{course["Name"]}</caption>
            <table className="course-table">
              <thead>
                <th scope="col">Student Name</th>
                <th scope="col">Latest Temperature</th>
                <th scope="col">Date of Temperature</th>
              </thead> 
              <tbody>
                    {course["Roster"].map((s) => 
                        Number(getTemp(s)[0]) > heatlhyTemp ?
                            <tr>
                                <td class="unhealthy">{s}</td>
                                <Tooltip title="temperature not within healthy range" aria-label="temperature not within healthy range"><td>{getTemp(s)[0]}</td></Tooltip>
                                <td>{getTemp(s)[1]}</td> 
                            </tr>
                        
                        :
                            <tr>
                                <td class="healthy">{s}</td>
                                <Tooltip title="temperature within healthy range" aria-label="temperature within healthy range"><td>{getTemp(s)[0]}</td></Tooltip>
                                <td>{getTemp(s)[1]}</td> 
                            </tr>
                    )}
              </tbody>
            </table>    
          </div>
      );
    }
export default Table;