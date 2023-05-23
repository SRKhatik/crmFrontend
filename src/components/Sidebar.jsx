import React, { useContext } from 'react';
import { CSidebar, CSidebarNav, CNavItem, CSidebarToggler } from '@coreui/react';
import logo from '../components/images/logo3.png';

const Sidebar = () => {


  const logout = () => {
    localStorage.clear();
    window.location.href = '/';
  };

  return (
    <div>
      <CSidebar
        unfoldable
        className="vh-100"
        style={{
          background: 'rgba(0, 0, 0, 0.3)',
          backdropFilter: 'blur(3px)',
          borderWidth: '1px',
          borderColor: 'rgb(33, 232, 254)',
          fontFamily: 'Lobster, cursive',
        }}
      >
        <CSidebarNav>
          <CNavItem className="my-2">
            <img
              src={logo}
              style={{ height: '70px', width: '70px' }}
              alt="logo"
            />
            <div
              className="text-decoration-none"
              style={{ color: 'black', background: 'aqua' }}
            >
              CRM APP
            </div>
          </CNavItem>
          <CNavItem href="#">
            <i className="bi bi-bar-chart-fill text-white m-2 ps-0" />
            <div className="text-decoration-none text-info mx-3">Chart</div>
          </CNavItem>

          <CNavItem href="#">
            <i className="bi bi-house text-white m-2 ps-0" />
            <div className="text-decoration-none text-info mx-3">Home</div>
          </CNavItem>

          <div onClick={logout}>
            <CNavItem href="#">
              <i className="bi bi-box-arrow-left text-white m-2 ps-0" />
              <div className="text-decoration-none text-info mx-3">Logout</div>
            </CNavItem>
          </div>
        </CSidebarNav>
        <CSidebarToggler />
      </CSidebar>
    </div>
  );
};

export default Sidebar;

