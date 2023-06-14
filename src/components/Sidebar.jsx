import React from "react";
import {
  CSidebar,
  CSidebarNav,
  CNavItem,
  CSidebarToggler,
} from "@coreui/react";
import logo from "../components/images/logo3.png";
import { Link } from "react-scroll";



const Sidebar = () => {
  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  const calendar = () => {
    localStorage.setItem('redirect', '/calendar');
    window.location.href = '/calendar';
  };
  

  return (
    <div>
      <CSidebar
        unfoldable
        className="vh-100"
        style={{
          background: "rgba(0, 0, 0, 0.5)",
          backdropFilter: "blur(3px)",
          borderWidth: "1px",
          borderColor: "rgb(33, 232, 254)",
          fontFamily: "Lobster, cursive",
        }}
      >
        <CSidebarNav>
          <CNavItem className="my-2">
            <img
              src={logo}
              style={{ height: "70px", width: "70px" }}
              alt="logo"
            />
            <div
              className="text-decoration-none"
              style={{ color: "black", background: "#fff" }}
            >
              CRM APP
            </div>
          </CNavItem>
          <CNavItem href="#">
            <i className="bi bi-house text-white m-2 ps-0" />
            <div className="text-decoration-none text-white mx-3">Home</div>
          </CNavItem>

          <Link to="users" spy={true} smooth={true}>
            <CNavItem href="#">
              <i className="bi bi-person-bounding-box text-white m-2 ps-0" />
              <div className="text-decoration-none text-white  mx-3">Users</div>
            </CNavItem>
          </Link>
          
          <Link to="tickets" spy={true} smooth={true}>
            <CNavItem href="#">
              <i className="bi bi-ticket-perforated-fill text-white m-2 ps-0" />
              <div className="text-decoration-none text-white  mx-3">
                Tickets
              </div>
            </CNavItem>
          </Link>

          <Link to="charts" spy={true} smooth={true}>
            <CNavItem href="#">
              <i className="bi bi-bar-chart-fill text-white m-2 ps-0" />
              <div className="text-decoration-none text-white mx-3">Chart</div>
            </CNavItem>
          </Link>

          <div onClick={calendar}>
            <CNavItem href="#">
              <i className="bi bi-calendar2-day text-white m-2 ps-0" />
              <div className="text-decoration-none text-white mx-3">Calendar</div>
            </CNavItem>
          </div>

          <div onClick={logout}>
            <CNavItem href="#">
              <i className="bi bi-box-arrow-left text-white m-2 ps-0" />
              <div className="text-decoration-none text-white mx-3 ">
                Logout
              </div>
            </CNavItem>
          </div>
        </CSidebarNav>
      </CSidebar>
      <CSidebarToggler />
    </div>
  );
};

export default Sidebar;
