import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useTitle } from "../../components/hooks/useTitle";
import { DashboardCard } from "./components/DashboardCard";
import { DashboardEmpty } from "./components/DashboardEmpty";
import { getUserOrders } from "../../services";

export const DashboardPage = () => {
  const [orders, setOrders] = useState([]);
  useTitle("Dashboard");

  useEffect(() => {
    async function fetchOrders() {
      try {
        const data = await getUserOrders();
        setOrders(data);
      } catch (error) {
        toast.error(error.message, { position: "bottom-right" });
      }
    }
    fetchOrders();
  }, []);

  return (
    <main>
      <section>
        <p className="text-3xl text-center font-semibold text-Accent dark:text-white my-10">
          My Dashboard
        </p>
      </section>

      <section>
        {orders.length > 0 &&
          orders.map((order) => <DashboardCard key={order.id} order={order} />)}
      </section>

      <section>{!orders.length && <DashboardEmpty />}</section>
    </main>
  );
};
