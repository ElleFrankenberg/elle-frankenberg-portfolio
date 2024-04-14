const Contact = ({ email, phone, address, country }) => {
  return (
    <>
      <h3 className="text-reg font-bold text-darkBlue">Contact</h3>
      <ul>
        <li>Email: {email}</li>
        <li>Phone: {phone}</li>
        <li>Address: {address}</li>
        <li>{country}</li>
      </ul>
    </>
  );
};

export default Contact;
