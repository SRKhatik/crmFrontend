import { useState } from "react";
import { updateTicket } from "../api/ticket";

const useTicketUpdate = (fetchTickets) => {
  const [ticketUpdateModal, setTicketUpdateModal] = useState(false);
  const [selectedCurrTicket, setSelectedCurrTicket] = useState({});

  const editTicket = (ticketDetail) => {
    setTicketUpdateModal(true);
    setSelectedCurrTicket(ticketDetail);
  };

  const closeTicketUpdateModal = () => {
    setTicketUpdateModal(false);
  };

  const onTicketUpdate = (e) => {
    const fieldName = e.target.name;

    if (fieldName === "title") selectedCurrTicket.title = e.target.value;
    else if (fieldName === "description")
      selectedCurrTicket.description = e.target.value;
    else if (fieldName === "status") selectedCurrTicket.status = e.target.value;
    else if (fieldName === "assignee")
      selectedCurrTicket.assignee = e.target.value;
    else if (fieldName === "ticketPriority")
      selectedCurrTicket.ticketPriority = e.target.value;

    setSelectedCurrTicket({ ...selectedCurrTicket });
  };

  const updateTicketFn = (e) => {
    e.preventDefault();

    updateTicket(selectedCurrTicket)
      .then((res) => {
        console.log("Ticket update successfully");
        setTicketUpdateModal(false);
        fetchTickets();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return {
    selectedCurrTicket,
    ticketUpdateModal,
    editTicket,
    closeTicketUpdateModal,
    updateTicketFn,
    onTicketUpdate,
  };
};

export default useTicketUpdate;
