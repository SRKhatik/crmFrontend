import React from "react";
import Sidebar from "../components/Sidebar";
import MaterialTable from "material-table";
import { Modal, Button } from "react-bootstrap";
import StatusDashboard from "../components/StatusDashboard/StatusDashboard";
import useFetchTickets from "../hooks/useFetchTicket";
import useFetchUsers from "../hooks/useFetchUser";
import useTicketUpdate from "../hooks/useTicketUpdate";
import useUsersUpdate from "../hooks/useUserUpdate";
import TicketsUpdateModal from "../components/TicketsUpdateModal/TicketUpdateModal";
import TicketsTable from "../components/Ticketstable/ticketsTable";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { deleteUser } from "../api/user";
import Chartsusers from "../components/Chart/ChartAdmin";
import Charts from "../components/Chart/Chart";


const Admin = () => {
  const location = useLocation();
  const [userDetails, fetchUsers] = useFetchUsers();

  const DeleteUserId = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.value) {
        deleteApi(_id);
      }
    });
  };
  const deleteApi = async (_id) => {
    deleteUser({ id: _id })
      .then((res) => {
        Swal.fire("Deleted!", `User ${_id} has been deleted.`, "success");
      })
      .catch((err) => {
        Swal.fire("ERROR!", `OOPS Something went wrong`, "warning");
        console.log(err);
      });
  };

  useEffect(() => {
    const pathName = location.pathname;
    const userId = pathName.split("/")[2];

    if (!userId) {
      return;
    }
    const user = userDetails.find((user) => user.userId === userId);
    if (!user) {
      return;
    }

    setUserAndOpenModal(user);
  }, [userDetails]);

  //creating status
  const [ticketDetails, fetchTickets] = useFetchTickets();

  const {
    selectedCurrTicket,
    ticketUpdateModal,
    editTicket,
    closeTicketUpdateModal,
    updateTicketFn,
    onTicketUpdate,
  } = useTicketUpdate(fetchTickets);
  const {
    usersUpdateModal,
    selectedCurrUser,
    setUserAndOpenModal,
    closeUsersUpdateModal,
    editUser,
    changeUserDetails,
    updateUserFn,
  } = useUsersUpdate();

  return (
    <div className="row d-flex 100%">
      <div className="col-1">
        <Sidebar />
      </div>
      <div className="col my-4">
        <div className="container">
          <StatusDashboard ticketDetails={ticketDetails} />
          <br />

          {/*material table of users and modal*/}
          <div
            id="users"
            style={{
              maxWidth: "100%",
            }}
          >
            <MaterialTable
              style={{
                color: "black",
                background: "white",
                borderWidth: "1px",
              }}
              columns={[
                { title: "USER ID", field: "userId" },
                { title: "NAME", field: "name" },
                { title: "E-MAIL", field: "email" },
                { title: "ROLE", field: "userTypes" },
                { title: "STATUS", field: "userStatus" },
              ]}
              actions={[
                (rowData) => ({
                  icon: "delete",
                  tooltip: "Delete User",
                  onClick: () => {
                    DeleteUserId(rowData._id);
                  },
                }),
              ]}
              onRowClick={(event, rowData) => editUser(rowData)}
              title="USER RECORDS"
              options={{
                sorting: true,
                actionsColumnIndex: -1,
                exportButton: true,
                headerStyle: {
                  backgroundColor: "cyan",
                  fontSize: "1.2em",
                  alignItems: "center",
                  color: "black",
                  textTransform: "uppercase",
                },
                rowStyle: {
                  cursor: "pointer",
                },
              }}
              data={userDetails}
            />

            <Modal
              show={usersUpdateModal}
              onHide={closeUsersUpdateModal}
              style={{
                background: "rgba(0, 0, 0, 0.3)",
                backdropFilter: "blur(3px)",
                borderWidth: "10px",
                fontFamily: "Lobster, cursive",
              }}
            >
              <Modal.Header closeButton style={{ backgroundColor: "cyan" }}>
                <Modal.Title style={{ color: "#000", fontSize: "2rem" }}>
                  Edit Users Details...
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <form onSubmit={updateUserFn}>
                  <div className="p-1">
                    <h4 className="card-subtitle mb-2 text-dark">
                      UserId : {selectedCurrUser.userId}
                    </h4>
                    <h5 className="card-subtitle mb-2 text-dark ">
                      UserType : {selectedCurrUser.userTypes}
                    </h5>
                    <div className="input-group mb-3">
                      <span
                        className="input-group-text "
                        style={{
                          minWidth: "92px",
                          backgroundColor: "cyan",
                          color: "black",
                          fontSize: "20px",
                        }}
                      >
                        Name
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={selectedCurrUser.name}
                      />
                    </div>
                    <div className="input-group mb-3">
                      <span
                        className="input-group-text"
                        style={{
                          minWidth: "90px",
                          backgroundColor: "cyan",
                          color: "black",
                          fontSize: "20px",
                        }}
                      >
                        E-mail
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        name="email"
                        value={selectedCurrUser.email}
                      />
                    </div>

                    <div className="input-group mb-3">
                      <span
                        className="input-group-text"
                        style={{
                          minWidth: "92px",
                          backgroundColor: "cyan",
                          color: "black",
                          fontSize: "20px",
                        }}
                      >
                        Status
                      </span>
                      <select
                        name="status"
                        value={selectedCurrUser.userStatus}
                        onChange={changeUserDetails}
                        className="form-select"
                      >
                        <option value="APPROVED"> APPROVED </option>
                        <option value="PENDING"> PENDING </option>
                        <option value="REJECTED"> REJECTED </option>
                      </select>
                    </div>
                  </div>
                  <div className="buttonContainer">
                    <Button className="button" onClick={closeUsersUpdateModal}>
                      Close
                    </Button>
                    <Button className="button alignItems-center" type="submit">
                      Update
                    </Button>
                  </div>
                </form>
              </Modal.Body>
            </Modal>
          </div>

          <br />
          {/*material table of tickets and modal*/}
          <div style={{ maxWidth: "100%" }}>
            <TicketsTable
              editTicket={editTicket}
              title={"TICKET RECORDS"}
              ticketDetails={ticketDetails}
              fetchTickets={fetchTickets}
            />
            <TicketsUpdateModal
              selectedCurrTicket={selectedCurrTicket}
              onTicketUpdate={onTicketUpdate}
              ticketUpdateModal={ticketUpdateModal}
              closeTicketUpdateModal={closeTicketUpdateModal}
              updateTicketFn={updateTicketFn}
            />
            <br />

            <div className="row my-2 ">
              <div className="col-xs-25 col-lg-6 col-md-10 my-2 ">
                <Charts
                  style={{width:" 100%" , flexGrow: "1"}}
                  ticketDetails={ticketDetails}
                />
              </div>

              <div className="col-xs-25 col-lg-6 col-md-10 my-2 ">
                <Chartsusers
                   style={{width:" 100%" , flexGrow: "1"}}
                  userDetails={userDetails}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Admin;
