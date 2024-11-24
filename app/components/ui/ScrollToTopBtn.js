import { FaArrowUp } from "react-icons/fa";

const ScrollToTopBtn = ({ handleScrollToTop, showOnLargeScreen }) => {
  return (
    <button
      className={`cursor-pointer flex items-center gap-2 py-[0.3rem] px-3 text-darkGray rounded-full touch-none:hover:text-darkGray transition-colors hover:text-darkBlue ${
        showOnLargeScreen === false ? "lg:sr-only" : ""
      }`}
      aria-label="Scroll to top"
      onClick={handleScrollToTop}
    >
      <span>Scroll to top</span>
      <FaArrowUp className="w-[20px] h-[20px] " aria-hidden="true" />
    </button>
  );
};

export default ScrollToTopBtn;
