import React from "react";
import Sidebar from "../components/Sidebar";
import StatusDashboard from "../components/StatusDashboard/StatusDashboard";
import useFetchTickets from "../hooks/useFetchTicket";
import useTicketUpdate from "../hooks/useTicketUpdate";
import useCreateTicket from "../hooks/useCreateTicket";
import TicketsUpdateModal from "../components/TicketsUpdateModal/TicketUpdateModal";
import TicketsTable from "../components/Ticketstable/ticketsTable";
import { useState } from "react";
import "../stylesCss/addTickets.css";
import TicketCreationModal from "../components/TicketCreationModal/TicketCreationModal";

function Customer() {
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
              className="button1 m-4  text-white"
              onClick={openCreateTicketModal}
              type="submit"
              value="ADD TICKET"
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
