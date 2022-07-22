import React, { Component } from "react";
import "./StudentAtendance.css";
import Cookies from "universal-cookie";

const dateURL = "https://intregrative-api.herokuapp.com/date";
const positiveDatesURL = "https://intregrative-api.herokuapp.com/dates";
const cookies = new Cookies();

class StudentAtendance extends Component {
  state = {
    dates: [],
    positiveDates: [],
  };
  componentDidMount = () => {
    this.dates();
    this.positiveDates();
  };

  dates = async () => {
    try {
      const request = await fetch(`${dateURL}/${cookies.get("id")}/`);
      const response = await request.json();
      this.setState({ dates: response.results });
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
  };

  positiveDates = async () => {
    try {
      const request = await fetch(`${positiveDatesURL}/${cookies.get("id")}/`);
      const response = await request.json();
      this.setState({ positiveDates: response.results });
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
  };
  render() {
    return (
      <div className="main">
        <div className="title">
          {cookies.get("first_name") +
            " " +
            cookies.get("last_names") +
            "'s" +
            " Atendance"}
        </div>
        <div className="c-grid">
          <div className="grid">
            {this.state.dates.map((date) => {
              let i = date.atendance ? 1 : 0;
              var shortDate = `${date.date}`.substring(0, 10);
              return (
                <>
                  <div className="date grid-element">{shortDate}</div>
                  <div className="atendance grid-element">{i}</div>
                </>
              );
            })}
            <div className="date grid-element">Total atendances</div>
            <div className="atendance grid-element">{this.state.positiveDates.length}</div>
          </div>
        </div>
      </div>
    );
}
}


export default StudentAtendance;
