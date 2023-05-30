import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useCreateTicket = () => {

  const navigate =useNavigate();
  const [createTicketModal, setCreateTicketModal] = useState(false);

  const closeCreateTicketModal = () => {
    setCreateTicketModal(false);
    navigate("/customer")
  };
  const openCreateTicketModal= ()=>{
    setCreateTicketModal(true);
    navigate("/customer/createTicket");
  }
  return { createTicketModal, closeCreateTicketModal, openCreateTicketModal };
};
export default useCreateTicket;
