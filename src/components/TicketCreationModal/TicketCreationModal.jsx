import { Modal, Button } from "react-bootstrap";

function TicketCreationModal(props) {
  const createTicket = (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const description = e.target.description.value;
    const priority = e.target.priority.value;

    const ticket = { title, description, priority };

    createTicket(ticket)
      .then((res) => {
        if (res.status === 201) {
          window.location.href = "/customer";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Modal show={props.show} onHide={props.onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create Ticket</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <from>
          <div className="input-group mb-3">
            <span
              className="input-group-text "
              style={{
                minWidth: "92px",
                backgroundColor: "darkslategray",
                color: "gold",
                fontSize: "20px",
                borderColor: "lime",
                name: "title",
              }}
            >
              Title
            </span>
            <input type="text" className="form-control" name="title" required />
          </div>
          <div className="input-group mb-3">
            <span
              className="input-group-text "
              style={{
                minWidth: "92px",
                backgroundColor: "darkslategray",
                color: "gold",
                fontSize: "18px",
                borderColor: "lime",
              }}
            >
              Priority
            </span>
            <select className="form-select">
              <option vlaue="1">One</option>
              <option vlaue="2">Two</option>
              <option vlaue="3">Three</option>
              <option vlaue="4">Four</option>
              <option vlaue="5">Five</option>
            </select>
          </div>
          <div className="input-group mb-3">
            <textarea
              type="text"
              className="md-textarea form-control text-primary"
              name="description"
              rows="5"
            >
              DESCRIPTION :-
            </textarea>
          </div>
          <div className="buttonContainer">
            <Button className="button" onClick={props.onClose}>
              CANCEL
            </Button>
            <Button className="button alignItems-center" type="submit">
              CREATE
            </Button>
          </div>
        </from>
      </Modal.Body>
    </Modal>
  );
}
export default TicketCreationModal;
