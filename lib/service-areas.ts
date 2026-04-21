export type ServiceArea = {
  slug: string;
  name: string;
  county?: string;
  nearby?: string[];
  intro: string;
};

export const serviceAreas: ServiceArea[] = [
  {
    slug: "goldsboro-nc",
    name: "Goldsboro, NC",
    county: "Wayne County",
    nearby: ["Pikeville", "La Grange", "Mount Olive", "Princeton"],
    intro:
      "Beautiful soft play rentals for babies and toddlers in Goldsboro, North Carolina, perfect for birthdays and family celebrations.",
  },
  {
    slug: "wilson-nc",
    name: "Wilson, NC",
    county: "Wilson County",
    nearby: ["Elm City", "Stantonsburg", "Sims", "Lucama"],
    intro:
      "Planning a baby shower, birthday, or special event in Wilson, North Carolina? Our luxury soft play setups help create a beautiful space for little ones.",
  },
  {
    slug: "kinston-nc",
    name: "Kinston, NC",
    county: "Lenoir County",
    nearby: ["Deep Run", "Pink Hill", "La Grange", "Grifton"],
    intro:
      "Families in Kinston, North Carolina can enjoy soft play rentals designed to create fun, safe, and engaging celebrations for babies and toddlers.",
  },
  {
    slug: "smithfield-nc",
    name: "Smithfield, NC",
    county: "Johnston County",
    nearby: ["Selma", "Clayton", "Four Oaks", "Pine Level"],
    intro:
      "Elegant soft play rentals in Smithfield, North Carolina are perfect for birthdays, baby showers, and playdates with little ones.",
  },
  {
    slug: "selma-nc",
    name: "Selma, NC",
    county: "Johnston County",
    nearby: ["Smithfield", "Pine Level", "Princeton", "Micro"],
    intro:
      "Soft play setups in Selma, North Carolina create a safe and stylish event space for toddlers and babies at birthdays and special events.",
  },
  {
    slug: "clayton-nc",
    name: "Clayton, NC",
    county: "Johnston County",
    nearby: ["Smithfield", "Selma", "Garner", "Flowers"],
    intro:
      "Families planning an event in Clayton, North Carolina can choose modern soft play rentals that feel polished, welcoming, and fun for little ones.",
  },
  {
    slug: "mount-olive-nc",
    name: "Mount Olive, NC",
    county: "Wayne County",
    nearby: ["Calypso", "Faison", "Warsaw", "Goldsboro"],
    intro:
      "Soft play rentals in Mount Olive, North Carolina are a beautiful option for birthdays, playdates, and memorable celebrations for toddlers.",
  },
  {
    slug: "princeton-nc",
    name: "Princeton, NC",
    county: "Johnston County",
    nearby: ["Goldsboro", "Selma", "Pine Level", "Smithfield"],
    intro:
      "Luxury soft play setups in Princeton, North Carolina help families create beautiful birthday and family event spaces for babies and toddlers.",
  },
  {
    slug: "lagrange-nc",
    name: "La Grange, NC",
    county: "Lenoir County",
    nearby: ["Goldsboro", "Kinston", "Deep Run", "Snow Hill"],
    intro:
      "Families in La Grange, North Carolina can book soft play rentals designed for safe, fun, and visually beautiful event setups.",
  },
  {
    slug: "four-oaks-nc",
    name: "Four Oaks, NC",
    county: "Johnston County",
    nearby: ["Smithfield", "Selma", "Benson", "Dunn"],
    intro:
      "Soft play rentals in Four Oaks, North Carolina are a great fit for birthdays, baby showers, and special events for little ones.",
  },
];