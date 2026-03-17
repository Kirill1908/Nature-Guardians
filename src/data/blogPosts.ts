export type BlogPostType = {
  id: number;
  date: string;
  title: string;
  contentTitle: string;
  description: string;
  image: string;
  content: {
    heading?: string;
    text?: string;
    list?: string[];
  }[];
};

export const blogPosts: BlogPostType[] = [
  {
    id: 1,
    date: "21 DEC 2021",
    title: "Is climate change happening faster than expected?",
    contentTitle: "Rising temperatures and the urgent need for global action",
    description:
      "Scientists around the world are raising alarms as new data suggests climate change is accelerating beyond initial projections.",
    image: "/blog/post-1.jpg",
    content: [
      {
        text: "Recent studies published by leading environmental research institutes indicate that global temperatures are rising at a rate 40% faster than previously estimated. Arctic ice sheets are melting at record speeds, contributing to rising sea levels that threaten coastal communities worldwide.",
      },
      {
        text: "The consequences of this accelerated change are already visible. Extreme weather events such as hurricanes, droughts, and wildfires have increased in both frequency and intensity over the past decade. Communities that were once considered safe are now facing unprecedented environmental challenges.",
      },
      {
        heading: "Key Indicators of Accelerated Climate Change",
        list: [
          "Global average temperature has risen by 1.2°C since pre-industrial times.",
          "Arctic sea ice has declined by 13% per decade since 1979.",
          "Sea levels are rising at 3.6mm per year, double the rate of the previous century.",
          "Carbon dioxide levels have reached 420 ppm, the highest in 800,000 years.",
        ],
      },
      {
        heading: "What Can We Do?",
        text: "Individual and collective action remains our most powerful tool. Transitioning to renewable energy, reducing meat consumption, and supporting environmental policies are all steps that can make a meaningful difference. Every action counts when it comes to protecting our planet for future generations.",
      },
    ],
  },
  {
    id: 2,
    date: "14 JAN 2022",
    title: "The importance of urban green spaces for biodiversity",
    contentTitle: "How city parks and green corridors are saving urban wildlife",
    description:
      "Urban parks and green corridors are becoming critical refuges for wildlife as natural habitats continue to shrink globally.",
    image: "/blog/post-2.jpeg",
    content: [
      {
        text: "As cities continue to expand, the natural habitats that once surrounded them are disappearing at an alarming rate. Urban green spaces — parks, gardens, green rooftops, and tree-lined streets — are increasingly becoming the last refuges for many species of birds, insects, and small mammals.",
      },
      {
        text: "Research conducted across major European cities has shown that well-connected green corridors can support up to 60% more biodiversity than isolated patches of greenery. The key lies in connectivity — allowing animals to move freely between green areas reduces isolation and supports healthier populations.",
      },
      {
        heading: "Benefits of Urban Green Spaces",
        list: [
          "Provide habitat for pollinators such as bees and butterflies.",
          "Reduce urban heat island effect by up to 8°C.",
          "Improve air quality by absorbing pollutants and CO2.",
          "Support mental health and wellbeing of city residents.",
          "Help manage stormwater and reduce flooding risks.",
        ],
      },
      {
        heading: "How Cities Are Responding",
        text: "Forward-thinking cities like Singapore, Vienna, and Copenhagen are leading the way with ambitious urban greening programs. These initiatives include mandatory green roofs on new buildings, rewilding of riverbanks, and the creation of wildlife corridors connecting fragmented habitats across urban landscapes.",
      },
    ],
  },
  {
    id: 3,
    date: "03 MAR 2022",
    title: "Ocean plastic pollution: the silent crisis beneath the waves",
    contentTitle: "Microplastics, marine life, and the path to cleaner oceans",
    description:
      "Every year, millions of tons of plastic enter our oceans, threatening marine ecosystems and entering the human food chain.",
    image: "/blog/post-3.jpeg",
    content: [
      {
        text: "The scale of ocean plastic pollution has reached crisis proportions. An estimated 8 million metric tons of plastic enter the world's oceans every year, joining the estimated 150 million metric tons already circulating in marine environments. This plastic does not disappear — it breaks down into microplastics that persist for hundreds of years.",
      },
      {
        text: "Marine life is paying a devastating price. Sea turtles mistake plastic bags for jellyfish, seabirds feed plastic fragments to their chicks, and whales wash ashore with stomachs full of debris. The Great Pacific Garbage Patch, a swirling mass of plastic waste twice the size of Texas, is one of five such gyres found in the world's oceans.",
      },
      {
        heading: "Startling Facts About Ocean Plastic",
        list: [
          "By 2050, there could be more plastic in the ocean than fish by weight.",
          "Over 700 marine species are threatened by plastic pollution.",
          "Microplastics have been found in human blood, lungs, and placenta.",
          "Only 9% of all plastic ever produced has been recycled.",
        ],
      },
      {
        heading: "Solutions on the Horizon",
        text: "A growing movement of innovators, activists, and policymakers is pushing back against the tide of plastic pollution. From beach cleanup initiatives and ocean cleanup technologies to extended producer responsibility legislation and plastic-free community pledges, there is real momentum building toward a cleaner ocean future. Supporting these efforts — and reducing our own plastic consumption — is something each of us can do today.",
      },
    ],
  },
];