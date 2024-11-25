import { FaArrowUp } from "react-icons/fa";
import { FaArrowCircleUp } from "react-icons/fa";

const ScrollToTopBtn = ({ handleScrollToTop, showOnLargeScreen }) => {
  return (
    <button
      className={`cursor-pointer text-darkGray transition-colors lg:hover:text-darkBlue ${
        showOnLargeScreen === false ? "lg:sr-only" : ""
      }`}
      aria-label="Scroll to top"
      onClick={handleScrollToTop}
    >
      <FaArrowCircleUp className="w-[30px] h-[30px] " aria-hidden="true" />
    </button>
  );
};

export default ScrollToTopBtn;
