export type LocationFaq = {
  question: string;
  answer: string;
};

export function getLocationFaqs(cityName: string): LocationFaq[] {
  return [
    {
      question: `Do you offer soft play rentals in ${cityName}?`,
      answer: `Yes. Little Hands Mobile Soft Play provides luxury soft play rentals in ${cityName} for babies and toddlers, with delivery, setup, and takedown included.`,
    },
    {
      question: "What ages are your soft play rentals best for?",
      answer:
        "Our soft play setups are designed for babies and toddlers, typically ages 0 to 5.",
    },
    {
      question: "What types of events are your soft play rentals good for?",
      answer:
        "Our setups are a great fit for birthdays, baby showers, playdates, and other special events where families want a safe and beautiful play space for little ones.",
    },
    {
      question: "Is delivery, setup, and takedown included?",
      answer:
        "Yes. Delivery, setup, and takedown are included so your event feels simple, polished, and stress-free.",
    },
    {
      question: "How do I choose the right package?",
      answer:
        "You can compare our package options based on your event size, available space, and overall style. If you are unsure, we can help you choose the best fit.",
    },
    {
      question: `Do you serve areas near ${cityName}?`,
      answer:
        "Yes. We serve select nearby areas as well. If you are outside the main service area, contact us and we can let you know if your event location is covered.",
    },
  ];
}