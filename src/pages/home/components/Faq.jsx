import { Accordion } from "./Accordion";

export const Faq = () => {
  const faqs = [
    {
      id: 1,
      question: "How can I purchase a novel from your website?",
      answer:
        "To purchase a novel, simply browse our collection, add your chosen book to the cart, and proceed to checkout. You can make payments using credit/debit cards, PayPal, or other available payment methods. Once the payment is confirmed, you will receive an order confirmation via email.",
    },
    {
      id: 2,
      question: "Do you offer digital (eBook) versions of the novels?",
      answer:
        "Yes, we offer both physical and digital versions of many novels. If an eBook is available, you will see an option to select the format before purchasing. Once purchased, digital books can be downloaded instantly from your account.",
    },
    {
      id: 3,
      question: "How long does shipping take?",
      answer:
        "Shipping times vary based on your location and the shipping method selected at checkout. Standard shipping typically takes 5-10 business days, while express shipping takes 2-5 business days. International orders may take longer. You will receive a tracking number once your order has been shipped.",
    },
    {
      id: 4,
      question: "What is your return policy?",
      answer:
        "We accept returns for physical books within 14 days of delivery, provided the book is in its original condition. Digital books (eBooks) are non-refundable due to their instant delivery. If you receive a damaged or incorrect item, please contact our support team for assistance.",
    },
  ];

  return (
    <section className="my-10 p-7 border border-neutral-400 rounded dark:border-neutral-500 shadow-sm">
      <h1 className="text-3xl text-center font-semibold text-Accent dark:text-white mb-3 underline-offset-8">
        Frequently Asked Questions
      </h1>
      <div
        className=""
        id="accordion-flush"
        data-accordion="collapse"
        data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
        data-inactive-classes="text-gray-500 dark:text-gray-400"
      >
        {faqs.map(({ id, question, answer }) => (
          <Accordion key={id} id={id} question={question} answer={answer} />
        ))}
      </div>
    </section>
  );
};
