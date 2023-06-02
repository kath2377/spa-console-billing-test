export const getJwtAuth = (): string => {
  return localStorage.getItem("jwt") || "";
};
