import Link from "next/link";

const Contact = ({ email, phone, address, country, links }) => {
  return (
    <section aria-labelledby="contact-section">
      <div>
        <h3 id="contact-section" className="text-reg font-bold text-darkBlue">
          Contact
        </h3>
        <ul>
          <li className="flex flex-col">
            <span className="mr-1">Email:</span>
            <a
              href={`mailto:${email}`}
              aria-label={`Send an email to ${email}`}
            >
              {email}
            </a>
          </li>
          <li>
            <span className="mr-1">Phone:</span>
            <a href={`tel:${phone}`} aria-label={`Call ${phone}`}>
              {phone}
            </a>
          </li>
          <li className="flex flex-col">
            <span className="mr-1">Address:</span>
            <span>
              {address}, {country}
            </span>
          </li>
        </ul>
      </div>

      <h3 className="text-reg font-bold text-darkBlue mt-sm ">Links</h3>
      <ul>
        {links.map((link) => (
          <li key={link.linkUrl}>
            <a
              className="lg:hover:text-darkBlue"
              href={link.linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Link to ${link.linkName}. This link opens in a new tab.`}
            >
              {link.linkName}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Contact;
