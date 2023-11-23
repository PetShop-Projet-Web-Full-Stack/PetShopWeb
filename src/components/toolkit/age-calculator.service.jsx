export const calculateAge = (dateOfBirth) => {
  const ageInMilliseconds = new Date() - new Date(dateOfBirth);
  const ageInYears = Math.floor(
    ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000)
  );
  return `${ageInYears} ans`;
};
