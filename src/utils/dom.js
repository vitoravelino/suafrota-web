export default {
  /* eslint no-else-return: "off" */
  closest(el, selector) {
    const matchesSelector = el.matches ||
                            el.webkitMatchesSelector ||
                            el.mozMatchesSelector ||
                            el.msMatchesSelector;

    let current = el;

    while (current) {
      if (matchesSelector.call(current, selector)) {
        return current;
      } else {
        current = current.parentElement;
      }
    }

    return null;
  },
};
