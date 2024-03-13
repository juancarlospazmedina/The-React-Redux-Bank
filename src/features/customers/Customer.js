import { useSelector } from "react-redux";

function Customer() {
  const customer = useSelector((store) => store.customer.fullName);
  const n = useSelector((store) => store.customer.nationalID);
  console.log(customer);
  console.log(n);
  return <h2>👋 Welcome, {customer}</h2>;
}

export default Customer;
