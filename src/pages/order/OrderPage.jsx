import { useLocation } from "react-router";
import { useTitle } from "../../components/hooks/useTitle";
import { OrderSuccess } from "./components/OrderSuccess";
import { OrderFail } from "./components/OrderFail";

export const OrderPage = () => {
  const { state } = useLocation();
  useTitle("Order Summary");

  return (
    <main>
      {state.status ? <OrderSuccess data={state.data} /> : <OrderFail />}
    </main>
  );
};
