import municipalities from "@helpers/municipalities";

export const getUserAddress = (address) => {
  if (!address) {
    return;
  }

  const { municipality } = municipalities.find((municipality) =>
    address.includes(municipality.municipality)
  );

  return municipality;
};
