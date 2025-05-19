function getSession() {
  const token = JSON.parse(sessionStorage.getItem("token"));
  const nnid = JSON.parse(sessionStorage.getItem("nnid"));
  return { token, nnid };
}

export async function getUser() {
  const browserData = getSession();

  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${browserData.token}`,
    },
  };

  const response = await fetch(
    `${import.meta.env.VITE_HOST}/600/users/${browserData.nnid}`,
    requestOptions
  );
  if (!response.ok) {
    throw { message: response.statusText, status: response.status };
  }
  const data = await response.json();
  return data;
}

export async function getUserOrders() {
  const browserData = getSession();

  const response = await fetch(
    `${import.meta.env.VITE_HOST}/660/orders?user.id=${browserData.nnid}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${browserData.token}`,
      },
    }
  );
  if (!response.ok) {
    throw { message: response.statusText, status: response.status };
  }
  const data = await response.json();
  return data;
}

export async function createOrder(cartList, total, user) {
  const browserData = getSession();

  const order = {
    cartList: cartList,
    amount_paid: total,
    quantity: cartList.length,
    user: {
      name: user.name,
      email: user.email,
      id: user.id,
    },
  };

  const response = await fetch(`${import.meta.env.VITE_HOST}/660/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${browserData.token}`,
    },
    body: JSON.stringify(order),
  });
  if (!response.ok) {
    throw { message: response.statusText, status: response.status };
  }
  const data = await response.json();
  return data;
}
