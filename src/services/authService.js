export async function login(authDetail) {
  const requestOptions = {
    method: "POST",
    headers: { "content-Type": "application/json" },
    body: JSON.stringify(authDetail),
  };

  const response = await fetch(
    `${import.meta.env.VITE_HOST}/login`,
    requestOptions
  );

  const data = await response.json();

  if (data.accessToken) {
    sessionStorage.setItem("token", JSON.stringify(data.accessToken));
    sessionStorage.setItem("nnid", JSON.stringify(data.user.id));
  }

  return data;
}

export async function register(authDetail) {
  const response = await fetch(`${import.meta.env.VITE_HOST}/register`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(authDetail),
  });

  const data = await response.json();

  if (data.accessToken) {
    sessionStorage.setItem("token", JSON.stringify(data.accessToken));
    sessionStorage.setItem("nnid", JSON.stringify(data.user.id));
  }

  return data;
}

export function logout() {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("nnid");
}
