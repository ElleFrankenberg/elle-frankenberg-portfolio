import { BiSolidErrorAlt } from "react-icons/bi";

const ErrorInformation = ({ errorText }) => {
  return (
    <section
      className="flex flex-col justify-center items-center p-4 text-center"
      aria-labelledby="error-message"
      role="alert"
      aria-live="assertive"
    >
      <BiSolidErrorAlt
        className="w-[87px] h-[87px] text-darkPink"
        aria-hidden="true"
      />
      <h1 className="text-medium md:text-[3.5vw]" id="error-message">
        {errorText}
      </h1>
    </section>
  );
};

export default ErrorInformation;
