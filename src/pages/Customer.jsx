import React from "react";
import Sidebar from "../components/Sidebar";
import StatusDashboard from "../components/StatusDashboard/StatusDashboard";
import useFetchTickets from "../hooks/useFetchTicket";
import useTicketUpdate from "../hooks/useTicketUpdate";
import useCreateTicket from "../hooks/useCreateTicket";
import TicketsUpdateModal from "../components/TicketsUpdateModal/TicketUpdateModal";
import TicketsTable from "../components/Ticketstable/ticketsTable";
import { useState, useEffect } from "react";
import "../stylesCss/addTickets.css";
import TicketCreationModal from "../components/TicketCreationModal/TicketCreationModal";
import { useLocation } from "react-router-dom";

function Customer() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const isCreateTicketTrue = path.split("/")[2] === "createTicket";
    if (isCreateTicketTrue) {
      openCreateTicketModal();
    }
  }, []);

  const [ticketDetails, fetchTickets] = useFetchTickets();
  const {
    selectedCurrTicket,
    ticketUpdateModal,
    editTicket,
    closeTicketUpdateModal,
    updateTicketFn,
    onTicketUpdate,
  } = useTicketUpdate(fetchTickets);
  const { createTicketModal, openCreateTicketModal, closeCreateTicketModal } =
    useCreateTicket();

  return (
    <div className="row d-flex vh-100%">
      <div className="col-1">
        <Sidebar />
      </div>

      <div className="col mt-2">
        <div className="container ">
          <StatusDashboard ticketDetails={ticketDetails} />

          <div>
            <input
              className="button1 mb-4  text-white"
              onClick={openCreateTicketModal}
              type="submit"
              value="ADD TICKET +"
            />

            <TicketCreationModal
              show={createTicketModal}
              onClose={closeCreateTicketModal}
            />
          </div>

          <TicketsTable
            editTicket={editTicket}
            title={"TICKETS RAISED BY YOU"}
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
  );
}

export default Customer;
