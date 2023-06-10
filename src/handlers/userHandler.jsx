export const createUserCount = (users) => {
  const data = {
    approved: 0,
    pending: 0,
    rejected: 0,
  };
  console.log(users);
  users.forEach((user) => {
    console.log(user);
    const status = user.userStatus;
    if (status === "APPROVED") data.approved += 1;
    else if (status === "PENDING") data.pending += 1;
    else data.rejected += 1;
  });
  return data;
};
