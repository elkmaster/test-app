export default component => (...hocs) => {
  return hocs.reduce((accumulator, currentValue) => {
    return currentValue(accumulator);
  }, component);
};
