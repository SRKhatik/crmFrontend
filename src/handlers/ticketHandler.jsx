import React from "react";
export const createTicketsCount = (tickets) => {
  const data = {
    pending: 0,
    closed: 0,
    progress: 0,
    blocked: 0,
  };

  tickets.forEach((ticket) => {
    const status = ticket.status.toUpperCase();
    if (status === "OPEN") data.pending += 1;
    else if (status === "PROGRESS") data.progress += 1;
    else if (status === "BLOCKED") data.blocked += 1;
    else data.closed += 1;
  });

  return data;
};
