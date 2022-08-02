import React, { useState, useEffect, Component } from "react";
import { useParams } from "react-router-dom";
import "./GroupDetails.css";
import SidebarProfessors from "../../components/SidebarProfessors";
const URL = "https://intregrative-api.herokuapp.com/students/";
const dateURL = "https://intregrative-api.herokuapp.com/date";
const positiveDatesURL = "https://intregrative-api.herokuapp.com/dates";

const GroupDetail = () => {
  const { group } = useParams();
  const [groupStud, setGroupStud] = useState([]);
  const [atendances, setAtendances] = useState([]);

  useEffect(() => {
    // let a = Object.values(groupStud);

    const fetchGroup = async () => {
      const request = await fetch(`${URL}/${group}/`);
      const response = await request.json();
      setGroupStud(response.results);
    };
    fetchGroup();

    const fetchAtendances = async () => {
      var arrAtendance = [];
      for (let i = 0; i < groupStud.length; i++) {
        let position = groupStud[i].id;
          try {
            const request = await fetch(`${positiveDatesURL}/${position}/`);
            const response = await request.json();
            let studentAtendance = response.results.length;
            console.log(studentAtendance)
            arrAtendance.push(studentAtendance);
          } catch (err) {
            throw new Error();
          }
      }
      console.log(arrAtendance)
      setAtendances(arrAtendance);
    };
    fetchAtendances();

    console.log(groupStud)
    console.log(atendances)
    // };
  }, []);

  return (
    <React.Fragment>
      <SidebarProfessors></SidebarProfessors>
      <>
      <div className="table">
        {Object.values(groupStud).map((group) => {
          return (
            <>
              <div className="names">{group.first_name}</div>
            </>
          );
        })}
        {atendances.map((asist)=>{
          return(
            <>
            <div className="names">{asist}</div>
            </>
          )
        })}
       </div>
      </>
    </React.Fragment>
  );
};

export default GroupDetail;
