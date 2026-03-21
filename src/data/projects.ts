export type ProjectData = {
  id: string;
  index: number;
  title: string;
  description: string;
  image: string;
  intro: string[];
  content: {
    heading: string;
    text: string;
    list: string[];
    conclusion: string;
  };
};

export const projects: ProjectData[] = [
  {
    id: "tree-plantation",
    index: 0,
    title: "Mission 40K: Tree Plantation",
    description:
      "Join our mission to plant 40,000 trees across urban and rural areas to restore biodiversity and fight climate change.",
    image: "/images/projects/project-1.jpeg",
    intro: [
      "Deforestation remains one of the most pressing environmental challenges of our time. Every year, millions of hectares of forest are lost to agricultural expansion, logging, and urban development. Our Mission 40K initiative was born out of a simple but powerful belief: that communities, working together, can reverse this trend one tree at a time.",
      "Since launching in 2020, our volunteer teams have worked tirelessly across more than 15 regions to identify degraded land, source native tree species, and mobilize local communities to take part in large-scale planting events. The response has been overwhelming — thousands of volunteers have joined us, contributing their time, energy, and passion to restore what has been lost.",
      "Our approach goes beyond simply planting trees. We work closely with local ecologists to ensure that the right species are planted in the right places, maximizing biodiversity benefits and long-term survival rates. We also provide ongoing maintenance support and monitoring to ensure that our forests thrive for generations to come.",
    ],
    content: {
      heading: "Our Impact So Far",
      text: "The results of Mission 40K speak for themselves. In just three years, we have transformed thousands of hectares of degraded land into thriving young forests. Biodiversity surveys conducted at our planting sites have recorded significant increases in bird, insect, and small mammal populations. Local communities report improved air quality, reduced soil erosion, and a renewed sense of connection to the natural world.",
      list: [
        "Over 32,000 trees planted across 15 regions to date.",
        "More than 4,500 volunteers have participated in planting events.",
        "Biodiversity increased by an average of 45% at completed sites.",
        "Partnership established with 12 local municipalities and conservation organizations.",
      ],
      conclusion:
        "We are well on our way to reaching our goal of 40,000 trees, but we cannot do it without your support. Whether you join us as a volunteer, make a donation, or simply spread the word, every contribution brings us one step closer to a greener, healthier planet.",
    },
  },
  {
    id: "weekly-cleanliness",
    index: 1,
    title: "Weekly Cleanliness Program in City",
    description:
      "A community-driven initiative to keep our city clean through weekly cleanup events, education, and sustainable waste management.",
    image: "/images/projects/project-2.jpeg",
    intro: [
      "Urban pollution is a growing crisis that affects the health, wellbeing, and quality of life of millions of city residents. Litter, illegal dumping, and inadequate waste management systems leave our streets, parks, and waterways contaminated with plastics, chemicals, and organic waste. The Weekly Cleanliness Program was created to tackle this problem head-on.",
      "Every week, our teams of dedicated volunteers gather at designated locations across the city to collect litter, sort recyclables, and restore public spaces to their natural beauty. What began as a small initiative with a handful of participants has grown into a citywide movement, with hundreds of volunteers joining each week.",
      "Beyond the physical cleanup, we are committed to addressing the root causes of urban pollution through education and advocacy. We run workshops in local schools, community centers, and workplaces to raise awareness about responsible waste disposal, recycling, and the environmental impact of single-use plastics.",
    ],
    content: {
      heading: "Building a Cleaner Future Together",
      text: "The Weekly Cleanliness Program has made a measurable difference in the cleanliness and environmental health of our city. Neighborhoods that once struggled with persistent litter problems have been transformed, and local residents report feeling safer, prouder, and more connected to their communities as a result of our work.",
      list: [
        "Over 500 weekly cleanup events completed since the program launched.",
        "More than 80 tonnes of waste collected and properly disposed of.",
        "35% reduction in litter levels recorded in participating neighborhoods.",
        "Educational workshops delivered to over 3,000 students and community members.",
      ],
      conclusion:
        "A clean city is a healthier, happier city for everyone. By joining the Weekly Cleanliness Program, you become part of a growing community of people who believe that small, consistent actions can create lasting change. Sign up for your nearest cleanup event today and help us build the cleaner future our city deserves.",
    },
  },
  {
    id: "wildlife-safety",
    index: 2,
    title: "Wildlife Safety Program 2021",
    description:
      "Protecting endangered wildlife through habitat restoration, anti-poaching patrols, and community education across vulnerable ecosystems.",
    image: "/images/projects/project-3.jpeg",
    intro: [
      "Wildlife populations around the world are facing unprecedented threats from habitat destruction, poaching, climate change, and human-wildlife conflict. The Wildlife Safety Program was established to provide direct, on-the-ground support to the species and ecosystems most in need of protection.",
      "Working in partnership with local conservation authorities, indigenous communities, and international wildlife organizations, our teams operate in some of the most ecologically sensitive areas in the region. From anti-poaching patrols and wildlife monitoring to habitat restoration and community education, our work spans the full spectrum of conservation action.",
      "Central to our approach is the belief that effective conservation must involve local communities as active participants and beneficiaries. We work to create sustainable livelihoods for communities living alongside wildlife, reducing the economic pressures that can drive poaching and habitat destruction, and fostering a sense of shared ownership over the natural resources they depend on.",
    ],
    content: {
      heading: "Protecting Species, Restoring Ecosystems",
      text: "The Wildlife Safety Program has achieved significant results in its first years of operation. Populations of several key species in our program areas have stabilized or begun to recover, thanks to the combined efforts of our teams and local partners. Habitat restoration work has helped reconnect fragmented ecosystems, allowing wildlife to move more freely and increasing genetic diversity within populations.",
      list: [
        "Population of three endangered species stabilized within program areas.",
        "Over 2,000 hectares of critical habitat restored or protected.",
        "Anti-poaching patrols reduced illegal activity by 60% in monitored zones.",
        "Community conservation education reached over 5,000 people across 20 villages.",
      ],
      conclusion:
        "Wildlife conservation is a long-term commitment that requires sustained effort, resources, and collaboration. Every donation to the Wildlife Safety Program directly funds the patrols, restoration work, and community programs that are making a real difference for endangered species. Together, we can ensure that future generations inherit a world rich in biodiversity and natural wonder.",
    },
  },
];