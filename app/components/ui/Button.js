const Button = ({ isLink, children, href, label, ...props }) => {
  if (isLink) {
    return (
      <a
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${label} The link opens in a new tab`}
        className="bg-darkGray text-white py-[0.3rem] pr-4 pl-2 rounded-full flex items-center gap-1  transition-colors hover:bg-darkBlue"
        href={href}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      aria-label={label}
      className="group bg-darkGray text-white py-[0.3rem] pr-4 pl-2 rounded-full flex items-center gap-1 transition-colors hover:bg-darkBlue w-full h-full"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
