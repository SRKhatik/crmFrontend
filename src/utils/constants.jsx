const userTypes = {
  customer: "CUSTOMER",
  engineer: "ENGINEER",
  admin: "ADMIN",
};

const userStatus = {
  pending: "PENDING",
  approved: "APPROVED",
  rejected: "REJECTED",
};

const ticketStatus = {
  open: "OPEN",
  inProgress: "INPROGRESS",
  blocked: "BLOCKED",
  closed: "CLOSED",
};

const userAttributeFields = {
  userType: {
    admin:"ADMIN",
    customer:"CUSTOMER",
    engineer:"ENGINEER"
  },
};

export default { userStatus, userTypes, ticketStatus, userAttributeFields };
