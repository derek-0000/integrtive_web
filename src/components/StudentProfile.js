import React from "react";
import "./UserProfile.css";
import { TextFields } from "./data/TextFields";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const StudentProfile = () => {
  return (
    <>
      <div className="c-profile">
        <div className="image">
          <img
            src="photo-1511367461989-f85a21fda167.png"
            alt="pfp"
            width="300px"
            className="student-pic"
          />
        </div>
        {TextFields.map((item, index) => {
          return (
            <div key={index} className={item.containerClassName}>
              <div
                id={index}
                className={item.className}
                placeholder={item.label}
              >
                {item.data}
              </div>
            </div>
          );
        })}
        ,
      </div>
    </>
  );
};
export default StudentProfile;
