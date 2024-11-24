const Button = ({ children, href, label }) => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} The link opens in a new tab`}
      className="bg-darkGray text-white py-[0.3rem] pr-4 pl-2  rounded-full  flex items-center gap-1 w-full h-full transition-colors hover:bg-darkBlue"
      href={href}
    >
      {children}
    </a>
  );
};

export default Button;
