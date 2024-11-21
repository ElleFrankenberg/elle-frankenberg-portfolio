import { FaArrowUp } from "react-icons/fa";

const ScrollToTopBtn = ({ handleScrollToTop, showOnLargeScreen }) => {
  return (
    <button
      className={`ml-auto cursor-pointer flex flex-col items-center ${
        showOnLargeScreen === false ? "lg:sr-only" : ""
      }`}
      aria-label="Scroll to top"
      onClick={handleScrollToTop}
    >
      <FaArrowUp className="w-[20px] h-[20px] text-darkBlue" />
      <span>Scroll to top</span>
    </button>
  );
};

export default ScrollToTopBtn;
