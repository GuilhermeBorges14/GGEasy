export const URL_API = "http://ggeasy.test/json";

export function TOKEN_POST(body) {
  return {
    url: URL_API + "/jwt-auth/v1/token",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}

export function USER_GET(token) {
  return {
    url: URL_API + "/api/user",
    options: {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  };
}
