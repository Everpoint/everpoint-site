// cross-browser
export const getElementWidthAndHeight = element => {
  if (!element) {
    return {
      width: 0,
      height: 0,
    };
  }

  const box = element.getBoundingClientRect();
  const width = box.right - box.left;
  const height = box.bottom - box.top;

  return {
    width,
    height,
  };
};

export const isElementInViewport = ({ el, offsetY = 0, offsetTop = 0 }) => {
  const { top, left, bottom, right } = el.getBoundingClientRect();

  return (
    top + offsetY - offsetTop >= 0 &&
    left >= 0 &&
    bottom - offsetY <= (window.innerHeight || document.documentElement.clientHeight) &&
    right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

export const fillElementsInViewport = ({
  containerElement,
  items,
  offsetY = 0,
  viewportHeight,
  inViewportOff = false,
}) => {
  const { bottom, height } = containerElement.getBoundingClientRect();

  let itemsInViewPort = 0;

  const inViewport = bottom - viewportHeight <= 0;

  if (inViewport || inViewportOff) {
    const totalAmount = inViewportOff ? height : viewportHeight - offsetY - height;

    const scrolled = Math.abs(bottom - viewportHeight);
    const diff = totalAmount - scrolled;
    const percentageOfTotalAmount = Math.max(100 - (diff * 100) / totalAmount);
    const percent = percentageOfTotalAmount > 100 ? 100 : percentageOfTotalAmount;
    itemsInViewPort = inViewportOff
      ? items - Math.round((items * percent) / 100)
      : Math.round((items * percent) / 100);
  } else {
    itemsInViewPort = 0;
  }

  return itemsInViewPort;
};
