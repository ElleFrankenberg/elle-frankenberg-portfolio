import Link from "next/link";

const Contact = ({ email, phone, address, country, links }) => {
  return (
    <>
      <div>
        <h3 className="text-reg font-bold text-darkBlue">Contact</h3>
        <ul>
          <li>Email: {email}</li>
          <li>Phone: {phone}</li>
          <li>Address: {address}</li>
          <li>{country}</li>
        </ul>
      </div>
      <div className="md:justify-self-center">
        <h3 className="text-reg font-bold text-darkBlue md:pt-sm ">Links</h3>
        <ul>
          {links.map((link) => (
            <li key={link.linkUrl}>
              <Link
                className="hover:text-darkBlue"
                href={link.linkUrl}
                aria-label={`Link to ${link.linkName}`}
              >
                {link.linkName}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Contact;
