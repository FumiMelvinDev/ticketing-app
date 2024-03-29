export const dateFormatter = (date) => {
  const options = { day: "2-digit", month: "short" };
  return new Date(date).toLocaleDateString("en-ZA", options);
};
