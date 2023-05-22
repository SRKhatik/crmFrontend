import Sidebar from "../components/Sidebar";
import StatusDashboard from "../components/StatusDashboard/StatusDashboard";
import useFetchTickets from "../hooks/useFetchTicket";
import useTicketUpdate from "../hooks/useTicketUpdate";
import TicketsUpdateModal from "../components/TicketsUpdateModal/TicketUpdateModal";
import TicketsTable from "../components/Ticketstable/ticketsTable";

function Engineer() {
  const [ticketDetails, fetchTickets] = useFetchTickets();
  const {
    selectedCurrTicket,
    ticketUpdateModal,
    editTicket,
    closeTicketUpdateModal,
    updateTicketFn,
    onTicketUpdate,
  } = useTicketUpdate(fetchTickets);

  return (
    <div className="row d-flex vh-100%">
      <div className="col-1">
        <Sidebar />
      </div>
      <div className="col my-4">
        <div className="container">
          <StatusDashboard ticketDetails={ticketDetails} />
          <TicketsTable
            editTicket={editTicket}
            title={"TICKETS ASSIGNED TO YOU"}
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
export default Engineer;
