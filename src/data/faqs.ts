export interface FAQItem {
  question: string;
  answer: string;
  category: 'General' | 'AC' | 'Geyser' | 'RO';
}

export const HOMEPAGE_FAQS: FAQItem[] = [
  {
    question: "Where can I get AC repair services in Indore?",
    answer: "Shri Sanwariya Air Conditioner provides doorstep AC repair services across Indore, covering MR 10, Vijay Nagar, Scheme 54, Nipania, Palasia, Bengali Square, Super Corridor, LIG Colony, Rajendra Nagar, and Bhawarkua. You can contact us at +91 7879649209 for fast assistance.",
    category: "AC"
  },
  {
    question: "Do you provide AC installation services?",
    answer: "Yes, we provide professional split AC and window AC installation and uninstallation services. Our service includes heavy-duty bracket mounting, core drilling, flare connection, deep vacuuming of refrigerant lines, and electrical safety checks.",
    category: "AC"
  },
  {
    question: "Do you provide AC copper piping services?",
    answer: "Yes, we specialize in both concealed under-construction copper piping and exposed pipeline installations using heavy-gauge certified copper tubing, premium insulation, and dry nitrogen leak testing.",
    category: "AC"
  },
  {
    question: "Do you repair split and window AC units?",
    answer: "Yes, we service and repair all types of residential and commercial air conditioners, including modern inverter split ACs, non-inverter split units, window ACs, and cassette systems.",
    category: "AC"
  },
  {
    question: "Do you provide geyser repair services?",
    answer: "Yes, we offer doorstep repair and installation for storage and instant electric geysers in Indore. We resolve problems such as water not heating, tripping MCB switches, thermostat failure, tank leaks, and element descaling.",
    category: "Geyser"
  },
  {
    question: "Do you provide RO water purifier servicing?",
    answer: "Yes, we provide comprehensive RO water purifier maintenance, repair, and filter replacement in Indore. Our services include sediment filter changes, carbon block replacement, RO membrane testing, booster pump repair, and digital TDS calibration.",
    category: "RO"
  },
  {
    question: "Which AC brands do you service?",
    answer: "We service all major brands where technically supported, including Voltas, LG, Daikin, Samsung, Blue Star, Carrier, Hitachi, Panasonic, Whirlpool, Godrej, Haier, and IFB. We do not falsely claim official brand authorization or manufacturer partnerships.",
    category: "General"
  },
  {
    question: "How can I contact Shri Sanwariya Air Conditioner?",
    answer: "You can call us directly or message us on WhatsApp at +91 7879649209. You can also email us at ankushchhapre@gmail.com or submit an inquiry through our website contact form.",
    category: "General"
  },
  {
    question: "Where is Shri Sanwariya Air Conditioner located?",
    answer: "Our business address is 24B, MR 10 Square, Indore, MR10, Madhya Pradesh 452010, India. From this location, our technicians serve customers across Indore.",
    category: "General"
  }
];
