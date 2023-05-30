import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { createNewTicket } from "../../api/ticket";

function TicketCreationModal(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("1");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handlePriorityChange = (event) => {
    setPriority(event.target.value);
  };

  const createTicket = (e) => {
    e.preventDefault();

    const ticket = { title, ticketPriority: priority, description };
    console.log(priority);
    createNewTicket(ticket)
      .then((res) => {
        if (res.status === 201) {
          //window.location.href = "/customer";
          props.onClose();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Modal show={props.show} onHide={props.onClose}>
      <Modal.Header closeButton style={{ backgroundColor: "cyan" }}>
        <Modal.Title>Create Ticket</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={createTicket}>
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
              Title
            </span>
            <input
              type="text"
              className="form-control"
              name="title"
              value={title}
              onChange={handleTitleChange}
              required
            />
          </div>
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
              Priority
            </span>
            <select
              className="form-select"
              value={priority}
              onChange={handlePriorityChange}
            >
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
              <option value="4">Four</option>
              <option value="5">Five</option>
            </select>
          </div>
          <div className="input-group mb-3">
            <textarea
              type="text"
              className="md-textarea form-control text-primary"
              name="description"
              rows="5"
              value={description}
              onChange={handleDescriptionChange}
            />
          </div>
          <div className="buttonContainer">
            <Button className="button" onClick={props.onClose}>
              CANCEL
            </Button>
            <Button className="button alignItems-center" type="submit">
              CREATE
            </Button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default TicketCreationModal;
