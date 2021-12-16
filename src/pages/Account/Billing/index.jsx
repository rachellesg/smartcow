import Table from "../../../elements/Table";

function Billing() {
  const billingHeaders = ["Reference ID", "Date", "Amount", "Invoice"];
  const billingDetails = [
    {
      id: "4571222f6rthswfg9981fr55",
      date: "7/12/2020",
      amount: 28,
      invoice: "#",
    },
    {
      id: "4571222f6rthxwfg9981fr55",
      date: "7/12/2020",
      amount: 36,
      invoice: "#",
    },
    {
      id: "4571222f6rkhswfg9981fr55",
      date: "7/12/2020",
      amount: 14,
      invoice: "#",
    },
  ];
  return (
    <div className="row">
      <div className="col l9">
        <Table headers={billingHeaders} data={billingDetails} />
      </div>
    </div>
  );
}

export default Billing;
