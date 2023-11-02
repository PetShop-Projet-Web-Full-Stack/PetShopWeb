export const animalApi = (method, precisePath) => {
  const config = {
    baseUrl: "http://localhost:80/api/animals",
    path: precisePath,
    token: null,
  };

  let url = () => {
    return config.baseUrl + config.path;
  };

  let headers = () => {
    return config.token
      ? {
          Authorization: `Bearer ${config.token}`,
        }
      : {};
  };

  return {
    method,
    url: url(),
    headers: headers(),
  };
};
