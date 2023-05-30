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
                    color: "cyan",
                    marginTop:"-15px"
                  }}
                >
                  Welcome, <span style={{color:"cyan"}}>{userName}</span>
                </h1>
                <h5 className="text-white">
                  Take a quick to your {userType} stats below.
                </h5>
                <div className="row ">
                  <div className="col-xs-12 col-lg-3 col-md-6 my-2">
                    <div
                      className="card"
                      style={{
                        boxShadow: "(0 0 10px)",
                        background: "linear-gradient(180deg,  #FDD819 30%, #E80505 100%)",
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
                                value={statusDetails.pending}
                                text={`${statusDetails.pending}%`}
                                styles={buildStyles({
                                  textColor: "white",
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
                        boxShadow: "0 0 10px",
                        background: "linear-gradient( 180deg, #F5CBFF 20%, #C346C2 100%)",
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
                                value={statusDetails.progress}
                                text={`${statusDetails.progress}%`}
                                styles={buildStyles({
                                  textColor: "white",
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
                        boxShadow: "0 0 10px",
                        background: "linear-gradient(0deg, #3CD500 30%, #92FE9D 60%)",
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
                            <div
                              style={{ color: "aqua", width: 50, height: 60 }}
                            >
                              <CircularProgressbar
                                value={statusDetails.closed}
                                text={`${statusDetails.closed}%`}
                                styles={buildStyles({
                                  textColor: "white",
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
                        boxShadow: "0 0 10px ",
                        background: "linear-gradient(180deg, #00EAFF 30%, #1904E5 100%)",
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
                                value={statusDetails.blocked}
                                text={`${statusDetails.blocked}%`}
                                styles={buildStyles({
                                  textColor: "white",
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
