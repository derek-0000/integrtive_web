import React, { useState, useEffect, Component } from "react";
import { useParams, Link } from "react-router-dom";
import "./GroupDetails.css";
import SidebarProfessors from "../../components/SidebarProfessors";
import { renderIntoDocument } from "react-dom/test-utils";
const URL = "https://intregrative-api.herokuapp.com/students/";
const dateURL = "https://intregrative-api.herokuapp.com/date";
const positiveDatesURL = "https://intregrative-api.herokuapp.com/dates";

const GroupDetail = () => {
  const { group } = useParams();
  const [groupStud, setGroupStud] = useState([]);
  const [atendances, setAtendances] = useState([]);
  var arrAtendance = [];
  var test = [1, 2, 3];

  // let a = Object.values(groupStud);

  const fetchGroup = async () => {
    try {
      const request = await fetch(`${URL}/${group}/`);
      const response = await request.json();
      setGroupStud(response.results);
 
    } catch (err) {
      throw new Error(err);
    }
  };

  const fetchAtendances = async () => {
    for (let i = 0; i < groupStud.length; i++) {
      console.log("imi");
      let position = groupStud[i].id;
      try {
        const request = await fetch(`${positiveDatesURL}/${position}/`);
        const response = await request.json();
        let studentAtendance = response.results.length;
        console.log(studentAtendance);
        arrAtendance.push(studentAtendance);
      } catch (err) {
        throw new Error();
      }
    }
    setAtendances(arrAtendance)
  };

  useEffect(() => {
    fetchGroup();
    // setTimeout(() => {
    //   fetchAtendances();
    // }, 1000);
  },[]);

  return (
    <React.Fragment>
      <SidebarProfessors></SidebarProfessors>
      <div className="table">
        {Object.values(groupStud).map((groupName) => {
          return (
            <div className="students">
              <div className="names">{groupName.first_name} {groupName.last_names}</div>
              <Link to={`/group/${group}/${groupName.id}`}>
                <div className="text">Clic for more information about {groupName.first_name}</div>
              </Link>
            </div>
          );
        })}
        {/* {fetchAtendances()} */}
        {Object.values(atendances).map((atendance)=>{
            return(
              <div className="atendance">{atendance}</div>
            )
          })}
      </div>
    </React.Fragment>
  );
};

export default GroupDetail;