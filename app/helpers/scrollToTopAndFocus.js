export const scrollToTopAndFocus = (elementToScroll, elementToFocus) => {
  elementToScroll === window
    ? window.scrollTo({ top: 0, behavior: "smooth" })
    : elementToScroll.current?.scrollTo({ top: 0, behavior: "smooth" });

  setTimeout(() => {
    elementToFocus.current?.focus();
  }, 500);
};
