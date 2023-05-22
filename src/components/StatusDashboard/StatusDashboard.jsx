import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { createTicketsCount } from "/src/handlers/ticketHandler.jsx";
import '../../stylesCss/buttons.css'

function StatusDashboard(props) {
  const statusDetails = createTicketsCount(props.ticketDetails);
  const userName = localStorage.getItem("name");
  const userType = localStorage.getItem("userType");

  return (
    <div className="row d-flex vh-100%">
      <div className="col my-4">
        <div className="container">
          <div className="col">
              <div>
                <h1
                  className="text-center"
                  style={{
                    backgroundImage: "linear-gradient(to right,red,yellow)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    color: "white",
                    marginTop:"-25px"
                  }}
                >
                  Welcome, {userName}
                </h1>
                <h5 className="text-white">
                  Take a quick at your
                  <span className="text-warning "> {userType} </span> stats
                  below
                </h5>
                <div className="row ">
                  <div className="col-xs-12 col-lg-3 col-md-6 my-2">
                    <div
                      className="card"
                      style={{
                        boxShadow: "0 0 10px )",
                        borderColor: "whitesmoke",
                        borderBottom: "7px solid aqua",
                        background: "rgba(0, 0, 0, 0.1)",
                        backdropFilter: "blur(3px)",
                      }}
                    >
                      <div className="card-body text-white">
                        <h4 style={{ color: "aqua" }}>
                          <i className="bu bi-pencil mx-2"></i>
                          OPEN
                        </h4>
                        <hr style={{ borderWidth: "4px", color: "#fff" }} />
                        <div className="row">
                          <div className="col">
                            <div
                              style={{
                                color: "aqua",
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
                                value={statusDetails.pending}
                                text={`${statusDetails.pending}%`}
                                styles={buildStyles({
                                  textColor: "aqua",
                                  pathColor: "blue",
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
                        boxShadow: "0 0 10px )",
                        borderColor: "whitesmoke",
                        borderBottom: "7px solid orange",
                        background: "rgba(0, 0, 0, 0.1)",
                        backdropFilter: "blur(3px)",
                      }}
                    >
                      <div className="card-body text-white">
                        <h4 style={{ color: "orange" }}>
                          <i className="text-warning bi bi-lightning-charge mx-2"></i>
                          PROGRESS
                        </h4>
                        <hr style={{ borderWidth: "4px", color: "white" }} />
                        <div className="row">
                          <div className="col">
                            <div
                              style={{
                                color: "orange",
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
                                value={statusDetails.progress}
                                text={`${statusDetails.progress}%`}
                                styles={buildStyles({
                                  textColor: "orange",
                                  pathColor: "blue",
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
                        boxShadow: "0 0 10px )",
                        borderColor: "whitesmoke",
                        borderBottom: "7px solid #00FF00",
                        background: "rgba(0, 0, 0, 0.1)",
                        backdropFilter: "blur(3px)",
                      }}
                    >
                      <div className="card-body text-white">
                        <h4 style={{ color: "#00FF00" }}>
                          <i className=" bi bi-check-circle mx-2"></i>
                          CLOSED
                        </h4>
                        <hr style={{ borderWidth: "4px", color: "white" }} />
                        <div className="row">
                          <div className="col">
                            <div
                              style={{
                                color: "#00FF00",
                                fontSize: 4 + "em",
                                marginTop: -25,
                              }}
                            >
                              {statusDetails.closed}
                            </div>
                          </div>
                          <div className="col">
                            <div
                              style={{ color: "aqua", width: 50, height: 60 }}
                            >
                              <CircularProgressbar
                                value={statusDetails.closed}
                                text={`${statusDetails.closed}%`}
                                styles={buildStyles({
                                  textColor: "#00FF00",
                                  pathColor: "blue",
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
                        boxShadow: "0 0 10px )",
                        borderColor: "whitesmoke",
                        borderBottom: "7px solid 	#FF0000",
                        background: "rgba(0, 0, 0, 0.1)",
                        backdropFilter: "blur(3px)",
                      }}
                    >
                      <div className="card-body text-white">
                        <h4 style={{ color: "	#FF0000" }}>
                          <i className="bi bi-slash-circle mx-2"></i>
                          BLOCKED
                        </h4>
                        <hr style={{ borderWidth: "4px", color: "white" }} />
                        <div className="row">
                          <div className="col">
                            <div
                              style={{
                                color: "#FF0000",
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
                                value={statusDetails.blocked}
                                text={`${statusDetails.blocked}%`}
                                styles={buildStyles({
                                  textColor: "#FF0000",
                                  pathColor: "blue",
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
        </div>
      </div>
    
  );
}

export default StatusDashboard;
