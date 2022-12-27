export const getCurrentDate = (): Date => {
  //Get current date and format to reset time to 0
  const currentDate = new Date();
  return new Date(
    `${currentDate.getFullYear()}-${
      currentDate.getMonth() + 1
    }-${currentDate.getDate()}`
  );
};
