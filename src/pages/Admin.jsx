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

const Admin = () => {
  //creating status
  const [ticketDetails, fetchTickets] = useFetchTickets();
  const [userDetails, fetchUsers] = useFetchUsers();
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
    closeUsersUpdateModal,
    editUser,
    changeUserDetails,
    updateUserFn,
  } = useUsersUpdate(fetchUsers);

  return (
    <div className="row d-flex vh-100%">
      <div className="col-1">
            <Sidebar /> 
      </div>
      <div className="col my-4">
        <div className="container">
          <StatusDashboard ticketDetails={ticketDetails} />
          <br />

          {/*material table of users and modal*/}
          <div
            style={{
              maxWidth: "100%",
            }}
          >
          
            <MaterialTable
              style={{
                color: "black",
                background: "gainsboro",
                borderWidth: "1px",
                fontFamily: "Lobster, cursive",
              }}
              columns={[
                { title: "USER ID", field: "userId" },
                { title: "NAME", field: "name" },
                { title: "E-MAIL", field: "email" },
                { title: "ROLE", field: "userTypes" },
                { title: "STATUS", field: "userStatus" },
              ]}
              onRowClick={(event, rowData) => editUser(rowData)}
              title="USER RECORDS"
              options={{
                sorting: true,
                exportButton: true,
               Action:true,
                headerStyle: {
                  backgroundColor: "mediumblue",
                  fontSize: "1.2em",
                  alignItems: "center",
                  color: "white",
                },
                rowStyle: {
                  border: "2px solid gray",
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
              <Modal.Header closeButton style={{ backgroundColor: "	blueviolet" }}>
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
                          backgroundColor: "darkslategray",
                          color: "gold",
                          fontSize: "20px",
                          borderColor: "lime",
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
                          backgroundColor: "darkslategray",
                          color: "gold",
                          fontSize: "18px",
                          borderColor: "lime",
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
                          backgroundColor: "darkslategray",
                          color: "gold",
                          fontSize: "18px",
                          borderColor: "lime",
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
            />
            <TicketsUpdateModal
              selectedCurrTicket={selectedCurrTicket}
              onTicketUpdate={onTicketUpdate}
              ticketUpdateModal={ticketUpdateModal}
              closeTicketUpdateModal={closeTicketUpdateModal}
              updateTicketFn={updateTicketFn}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Admin;
