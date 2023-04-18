const PaymentTable = ({ item: { price, title, id, quentity }, index }) => {
  return (
    <>
      <tr>
        <td>{index + 1}</td>
        <td>{id}</td>
        <td>{title.substring(1, 20) + "..."}</td>
        <td>$ {price}</td>
        <td>{quentity}</td>
      </tr>
    </>
  );
};

export default PaymentTable;
