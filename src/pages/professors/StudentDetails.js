import "./StudentDetails.css";
import SidebarProfessors from "../../components/SidebarProfessors";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { IconContext } from "react-icons";
import * as VscIcons from "react-icons/vsc";
import { type } from "@testing-library/user-event/dist/type";
const dateURL = "https://intregrative-api.herokuapp.com/date";
const positiveDatesURL = "https://intregrative-api.herokuapp.com/dates";
const studURL = "https://intregrative-api.herokuapp.com/student";

function StudentDetails() {
  const { student } = useParams();
  const [dates, setDates] = useState([]);
  const [posDates, setPositiveDates] = useState([]);
  const [studentData, setStudentData] = useState([]);

  const getStudent = async () => {
    try {
      const request = await fetch(`${studURL}/${student}/`);
      const response = await request.json();
      const data = Object.values(response)
      setStudentData(data);
    } catch (err) {
      throw new Error(err);
    }
  }

    const studentAtendance = async () => {
      try {
        const request = await fetch(`${dateURL}/${student}/`);
        const response = await request.json();
        setDates(response.results);
      } catch (err) {
        console.log(err);
        throw new Error(err);
      }
    };

    const positiveDates = async () => {
      try {
        const request = await fetch(`${positiveDatesURL}/${student}/`);
        const response = await request.json();
        setPositiveDates(response.results);
      } catch (err) {
        console.log(err);
        throw new Error(err);
      }
    };

    useEffect(() => {
      studentAtendance();
      positiveDates();
      getStudent();
    }, []);

    return (
      <React.Fragment>
        <SidebarProfessors></SidebarProfessors>

            <>
            <div className="names">{studentData[2]} {studentData[7]} - {studentData[3]}</div>
            <div className="names">Total attendances: {posDates.length}</div>
            </>

        <div className="main">
          {Object.values(dates).map((date) => {
            let o = date.atendance ? 1 : 0;
            var shortDate = `${date.date}`.substring(0, 10);
            return (
              <div className="c-data">
                <div className="names">
                  {date.student_id}
                  <VscIcons.VscCloudUpload className="button" onClick={()=>console.log(date)}/>
                </div>
                <div className="number">
                  {shortDate} : :{" "}
                  <input
                    type="number"
                    min="0"
                    max="1"
                    className="dateIndicator"
                    placeholder={o}
                  ></input>
                </div>
              </div>
            );
          })}
        </div>
      </React.Fragment>
    );
  };


export default StudentDetails;
