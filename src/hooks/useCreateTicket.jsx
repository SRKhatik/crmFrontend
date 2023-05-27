import { useState } from "react";

const useCreateTicket = () => {
  const [createTicketModal, setCreateTicketModal] = useState(false);

  const closeCreateTicketModal = () => {
    setCreateTicketModal(false);
  };
  const openCreateTicketModal = () => {
    setCreateTicketModal(true);
  };

  return { createTicketModal, closeCreateTicketModal, openCreateTicketModal };
};
export default useCreateTicket;
