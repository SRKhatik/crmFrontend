import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { createTicketsCount } from "/src/handlers/ticketHandler.jsx";
import "../../stylesCss/buttons.css";
import { themeContext } from "../../Context";
import { useContext } from "react";
import Toggle from "../Toggle/toggle";
import LogoutButton from "../Logout/Logout";
import TodoList from "../Todo/Todo";


function StatusDashboard(props) {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const statusDetails = createTicketsCount(props.ticketDetails);
  const totalTicktsCount =
    statusDetails.pending +
    statusDetails.progress +
    statusDetails.closed +
    statusDetails.blocked;
  const userName = localStorage.getItem("name");
  const userType = localStorage.getItem("userType");

  return (
    <div className="row d-flex vh-100%">
      <div className="col my-2">
        <div className="d-flex justify-content-between">
          <LogoutButton />
          <Toggle />
        </div>

        <div className="container">
          <div className="col">
            <div>
              <h1
                className="text-center"
                style={{
                  fontFamily: "Lobster, cursive",
                  color: "#FCA61F",
                  marginTop: "-15px",
                }}
              >
                Welcome, {userName}
              </h1>

              <h6
                style={{
                  background: darkMode ? '"#242D49' : "",
                  color: darkMode ? "white" : "",
                }}
              >
                Take a quick to your {userType} stats below.
              </h6>
              <div className="row " style={{ fontFamily: "Lobster, cursive" }}>
                <div className="col-xs-12 col-lg-3 col-md-6 my-2">
                  <div
                    className="card"
                    style={{
                      boxShadow: "(0 0 10px)",
                      background:
                        "linear-gradient(180deg,  #FDD819 10%, #E80505 100%)",
                      backdropFilter: "blur(3px)",
                    }}
                  >
                    <div className="card-body text-BLACK">
                      <h4 style={{ color: "black" }}>
                        <i className="text-BLACK bu bi-pencil mx-2"></i>
                        OPEN
                      </h4>
                      <hr style={{ borderWidth: "4px", color: "black" }} />
                      <div className="row">
                        <div className="col">
                          <div
                            style={{
                              color: "WHITE",
                              fontSize: 4 + "em",
                              marginTop: -25,
                            }}
                          >
                            {statusDetails.pending}
                          </div>
                        </div>
                        <div className="col">
                          <div style={{ width: 50, height: 60 }}>
                            <CircularProgressbar
                              value={parseInt(
                                (statusDetails.pending / totalTicktsCount) * 100
                              )}
                              text={`${parseInt(
                                (statusDetails.pending / totalTicktsCount) * 100
                              )}%`}
                              styles={buildStyles({
                                textColor: "black",
                                pathColor: "black",
                              })}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-lg-3 col-md-6 my-2">
                  <div
                    className="card shadow shadow-white "
                    style={{
                      boxShadow: "0 0 10px",
                      background:
                        "linear-gradient( 180deg, #F5CBFF 10%, #C346C2 100%)",
                      backdropFilter: "blur(3px)",
                    }}
                  >
                    <div className="card-body text-white">
                      <h4 style={{ color: "BLACK" }}>
                        <i className="text-BLACK bi bi-lightning-charge mx-2"></i>
                        PROGRESS
                      </h4>
                      <hr style={{ borderWidth: "4px", color: "BLACK" }} />
                      <div className="row">
                        <div className="col">
                          <div
                            style={{
                              color: "white",
                              fontSize: 4 + "em",
                              marginTop: -25,
                            }}
                          >
                            {statusDetails.progress}
                          </div>
                        </div>
                        <div className="col">
                          <div style={{ width: 50, height: 60 }}>
                            <CircularProgressbar
                              value={parseInt(
                                (statusDetails.progress / totalTicktsCount) *
                                  100
                              )}
                              text={`${parseInt(
                                (statusDetails.progress / totalTicktsCount) *
                                  100
                              )}%`}
                              styles={buildStyles({
                                textColor: "black",
                                pathColor: "black",
                              })}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-lg-3 col-md-6 my-2">
                  <div
                    className="card shadow shadow-white "
                    style={{
                      boxShadow: "0 0 10px",
                      background:
                        "linear-gradient(0deg, #3CD500 10%, #92FE9D 100%)",
                      backdropFilter: "blur(3px)",
                    }}
                  >
                    <div className="card-body text-white">
                      <h4 style={{ color: "BLACK" }}>
                        <i className="text-DARK bi bi-check-circle mx-2"></i>
                        CLOSED
                      </h4>
                      <hr style={{ borderWidth: "4px", color: "BLACK" }} />
                      <div className="row">
                        <div className="col">
                          <div
                            style={{
                              color: "white",
                              fontSize: 4 + "em",
                              marginTop: -25,
                            }}
                          >
                            {statusDetails.closed}
                          </div>
                        </div>
                        <div className="col">
                          <div style={{ width: 50, height: 60 }}>
                            <CircularProgressbar
                              value={parseInt(
                                (statusDetails.closed / totalTicktsCount) * 100
                              )}
                              text={`${parseInt(
                                (statusDetails.closed / totalTicktsCount) * 100
                              )}%`}
                              styles={buildStyles({
                                textColor: "black",
                                pathColor: "black",
                              })}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-lg-3 col-md-6 my-2">
                  <div
                    className="card shadow shadow-white "
                    style={{
                      boxShadow: "0 0 10px ",
                      background:
                        "linear-gradient(180deg, #00EAFF 10%, #1904E5 100%)",
                      backdropFilter: "blur(3px)",
                    }}
                  >
                    <div className="card-body text-white">
                      <h4 style={{ color: "BLACK" }}>
                        <i className=" text-DARK bi bi-slash-circle mx-2"></i>
                        BLOCKED
                      </h4>
                      <hr style={{ borderWidth: "4px", color: "BLACK" }} />
                      <div className="row">
                        <div className="col">
                          <div
                            style={{
                              color: "white",
                              fontSize: 4 + "em",
                              marginTop: -25,
                            }}
                          >
                            {statusDetails.blocked}
                          </div>
                        </div>
                        <div className="col">
                          <div style={{ width: 50, height: 60 }}>
                            <CircularProgressbar
                              value={parseInt(
                                (statusDetails.blocked / totalTicktsCount) * 100
                              )}
                              text={`${parseInt(
                                (statusDetails.blocked / totalTicktsCount) * 100
                              )}%`}
                              styles={buildStyles({
                                textColor: "black",
                                pathColor: "black",
                              })}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
        <TodoList/>
        </div>
      </div>
    </div>
  );
}

export default StatusDashboard;
