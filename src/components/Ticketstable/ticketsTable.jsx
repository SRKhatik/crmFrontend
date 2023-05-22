import MaterialTable from "material-table";
function TicketsTable(props) {
  return (
    <MaterialTable
      style={{
        color: "black",
        background: "	gainsboro",
        borderWidth: "1px",
      }}
      onRowClick={(event, rowData) => props.editTicket(rowData)}
      columns={[
        { title: "TICKET ID", field: "_id" },
        { title: "TITLE", field: "title" },
        { title: "DESCRIPTION", field: "description" },
        { title: "REQUESTOR", field: "requestor" },
        { title: "PRIORITY", field: "ticketPriority" },
        { title: "ASSIGNEE", field: "assignee" },
        { title: "STATUS", field: "status" },
      ]}
      title={props.title}
      options={{
        sorting: true,
        exportButton: true,
        actionsColumnIndex: -1,
        headerStyle: {
          backgroundColor: "gray",
          fontSize: "1.2em",
          alignItems: "center",
          color: "white",
        },
        rowStyle: {
          border: "2px solid gray",
          cursor: "pointer",
        },
      }}
      data={props.ticketDetails}
    />
  );
}

export default TicketsTable;
