import React from "react";
import { Button, Modal } from "react-bootstrap";
import fetchDisabledFields from "../../utils/fetchDisabledFieldsData";

function TicketsUpdateModal(props) {
  const {
    ticketUpdateModal,
    closeTicketUpdateModal,
    updateTicketFn,
    selectedCurrTicket,
    onTicketUpdate,
  } = props;

  const disabledFields = fetchDisabledFields();
  return (
    <Modal
      show={ticketUpdateModal}
      onHide={closeTicketUpdateModal}
      style={{
        background: "rgba(0, 0, 0, 0.3)",
        backdropFilter: "blur(3px)",
        borderWidth: "10px",
        borderColor: "rgb(33, 232, 254)",
        fontFamily: "Lobster, cursive",
      }}
    >
      <Modal.Header
        closeButton
        style={{ backgroundColor: "cyan" }}
      >
        <Modal.Title style={{ color: "#000", fontSize: "2rem" }}>
          Edit Tickets Details...
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={updateTicketFn}>
          <div className="p-1">
            <h4 className="card-subtitle mb-2 ">
              Ticket_Id : {selectedCurrTicket._id}
            </h4>
            <div className="input-group mb-3">
              <span
                className="input-group-text "
                style={{
                  minWidth: "92px",
                  backgroundColor: "cyan",
                  color: "#000",
                  fontSize: "20px",
                }}
              >
                Title
              </span>
              <input
                disabled={disabledFields.title}
                type="text"
                className="form-control"
                name="title"
                value={selectedCurrTicket.title}
                onChange={onTicketUpdate}
              />
            </div>

            <div className="input-group mb-3">
              <span
                className="input-group-text"
                style={{
                  minWidth: "90px",
                  backgroundColor: "cyan",
                  color: "#000",
                  fontSize: "18px",
                }}
              >
                Assignee
              </span>
              <input
                disabled={disabledFields.assignee}
                type="text"
                className="form-control"
                name="assignee"
                value={selectedCurrTicket.assignee}
                onChange={onTicketUpdate}
              />
            </div>
            <div className="input-group mb-3">
              <span
                className="input-group-text"
                style={{
                  minWidth: "92px",
                  backgroundColor: "cyan",
                  color: "#000",
                  fontSize: "18px",
                }}
              >
                Status
              </span>
              <input
                disabled={disabledFields.status}
                type="text"
                className="form-control"
                name="status"
                value={selectedCurrTicket.status}
                onChange={onTicketUpdate}
              />
            </div>
            <div className="input-group mb-3">
              <span
                className="input-group-text "
                style={{
                  minWidth: "92px",
                  backgroundColor: "cyan",
                  color: "#000",
                  fontSize: "18px",
                }}
              >
                Priority
              </span>
              <input
                disabled={disabledFields.priority}
                type="text"
                className="form-control"
                name="ticketPriority"
                value={selectedCurrTicket.ticketPriority}
                onChange={onTicketUpdate}
              />
            </div>
            <div className="input-group mb-3">
              <textarea
                disabled={disabledFields.description}
                type="text"
                className="md-textarea form-control text-dark"
                name="description"
                rows="3"
                value={selectedCurrTicket.description}
                onChange={onTicketUpdate}
                placeholder="Description :-"
              />
              
              
            </div>
          </div>
          <div className="buttonContainer">
            <Button className="button" onClick={closeTicketUpdateModal}>
              Close
            </Button>
            <Button className="button alignItems-center" type="submit">
              Update
            </Button>
          </div>
        </form>
      </Modal.Body>
      
    </Modal>
  );
}

export default TicketsUpdateModal;
