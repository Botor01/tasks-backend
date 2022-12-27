export const getFutureDate = (date: Date): Date => {
  return new Date(
    `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate() + 1}`
  );
};
