import React, { useState, useEffect, Component } from "react";
import { useParams } from "react-router-dom";
const URL = "https://intregrative-api.herokuapp.com/students/";

const GroupDetail = () => {
  const { group } = useParams();
  const [groupStud, setGroupStud] = useState({});
  useEffect(() => {
    const fetchGroup = async () => {
      const request = await fetch(`${URL}/${group}/`);
      const response = await request.json();
      setGroupStud(response.results);
    };
    fetchGroup();
  }, []);
  // let a = Object.values(groupStud);
  // console.log(a)
  return (
    <React.Fragment>
      <>
        {Object.values(groupStud).map((group) => {
          return (
            <>
                  <div>{group.first_name}</div>
            </>
          );
        })} 
        <div>{}</div>
      </>
    </React.Fragment>
  );
};

export default GroupDetail;
