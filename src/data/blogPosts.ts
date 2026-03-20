export type BlogPostData = {
  index: number;
  id: string;
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

export const blogPosts: BlogPostData[] = [
  {
    index: 0,
    id: "climate-change",
    date: "21 DEC 2021",
    title: "Is climate change happening faster than expected?",
    contentTitle: "Rising temperatures and the urgent need for global action",
    description:
      "Scientists around the world are raising alarms as new data suggests climate change is accelerating beyond initial projections.",
    image: "/images/blog/post-1.jpg",
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
    index: 1,
    id: "urban-green-spaces",
    date: "14 JAN 2022",
    title: "The importance of urban green spaces for biodiversity",
    contentTitle: "How city parks and green corridors are saving urban wildlife",
    description:
      "Urban parks and green corridors are becoming critical refuges for wildlife as natural habitats continue to shrink globally.",
    image: "/images/blog/post-2.jpeg",
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
    index: 2,
    id: "ocean-plastic",
    date: "03 MAR 2022",
    title: "Ocean plastic pollution: the silent crisis beneath the waves",
    contentTitle: "Microplastics, marine life, and the path to cleaner oceans",
    description:
      "Every year, millions of tons of plastic enter our oceans, threatening marine ecosystems and entering the human food chain.",
    image: "/images/blog/post-3.jpeg",
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
        text: "A growing movement of innovators, activists, and policymakers is pushing back against the tide of plastic pollution. From beach cleanup initiatives and ocean cleanup technologies to extended producer responsibility legislation and plastic-free community pledges, there is real momentum building toward a cleaner ocean future.",
      },
    ],
  },
  {
    index: 3,
    id: "deforestation",
    date: "18 APR 2022",
    title: "Deforestation and its devastating impact on global ecosystems",
    contentTitle: "Why protecting the world's forests is our most urgent priority",
    description:
      "Every minute, the world loses an area of forest equivalent to 40 football fields. The consequences for wildlife, climate, and communities are catastrophic.",
    image: "/images/blog/post-4.jpeg",
    content: [
      {
        text: "Forests cover about 31% of the world's land surface and are home to more than 80% of terrestrial biodiversity. They regulate our climate, purify our water, and provide livelihoods for over 1.6 billion people. Yet every year, approximately 10 million hectares of forest are cleared — an area roughly the size of South Korea.",
      },
      {
        text: "The primary drivers of deforestation are agricultural expansion, logging, and infrastructure development. Cattle ranching alone accounts for 80% of deforestation in the Amazon, the world's largest tropical rainforest. As trees disappear, so do the thousands of species that depend on them — many before they are even discovered by science.",
      },
      {
        heading: "The Scale of Forest Loss",
        list: [
          "The Amazon has lost 17% of its forest cover in the last 50 years.",
          "Tropical forests store 25% of the world's terrestrial carbon.",
          "Over 135 plant, animal, and insect species are lost every day due to deforestation.",
          "Indigenous communities managing forests see 50% less deforestation than state-protected areas.",
        ],
      },
      {
        heading: "Protecting What Remains",
        text: "Conservation efforts must go hand in hand with sustainable land use practices and the empowerment of indigenous communities who have been the most effective stewards of forest ecosystems. Supporting reforestation initiatives, choosing sustainably sourced products, and advocating for stronger environmental legislation are all ways individuals can contribute to forest protection.",
      },
    ],
  },
  {
    index: 4,
    id: "renewable-energy",
    date: "07 JUN 2022",
    title: "The rise of renewable energy and the future of our planet",
    contentTitle: "How solar, wind, and hydro power are reshaping the global energy landscape",
    description:
      "Renewable energy is no longer the energy of the future — it is the energy of today, and it is growing faster than anyone predicted.",
    image: "/images/blog/post-5.jpeg",
    content: [
      {
        text: "Just a decade ago, renewable energy was considered too expensive and unreliable to replace fossil fuels at scale. Today, solar and wind power are the cheapest sources of electricity in history, and countries around the world are racing to transition their energy systems away from coal, oil, and gas.",
      },
      {
        text: "The transition is accelerating rapidly. In 2023, renewables accounted for 30% of global electricity generation, up from just 20% five years earlier. Countries like Denmark, Portugal, and Uruguay are already generating the majority of their electricity from renewable sources, demonstrating that a clean energy future is not just possible — it is already happening.",
      },
      {
        heading: "Renewable Energy by the Numbers",
        list: [
          "Solar power capacity has grown by 4,000% over the past decade.",
          "Wind energy now powers over 2 billion homes worldwide.",
          "Renewable energy jobs outnumber fossil fuel jobs globally for the first time.",
          "The cost of solar panels has dropped by 90% since 2010.",
        ],
      },
      {
        heading: "The Road Ahead",
        text: "While progress is encouraging, the transition to 100% clean energy requires urgent policy action, significant investment, and international cooperation. Phasing out fossil fuel subsidies, building smarter electricity grids, and ensuring a just transition for workers in carbon-intensive industries are all essential steps on the path to a sustainable energy future.",
      },
    ],
  },
  {
    index: 5,
    id: "soil-degradation",
    date: "22 AUG 2022",
    title: "Soil degradation: the invisible environmental crisis",
    contentTitle: "Why healthy soil is the foundation of all life on Earth",
    description:
      "We walk on it every day without a second thought, but healthy soil is one of our most precious and threatened natural resources.",
    image: "/images/blog/post-6.jpeg",
    content: [
      {
        text: "Soil is far more than just dirt. It is a complex living ecosystem teeming with billions of microorganisms, fungi, and invertebrates that make life on Earth possible. Healthy soil stores carbon, filters water, and provides the nutrients that grow the food we eat. Yet modern agricultural practices, urbanization, and pollution are degrading soil at an alarming rate.",
      },
      {
        text: "According to the United Nations, one third of the world's soil is already degraded, and without urgent action, up to 90% could be degraded by 2050. Soil degradation reduces agricultural productivity, contributes to desertification, and releases stored carbon into the atmosphere — accelerating climate change.",
      },
      {
        heading: "Threats to Soil Health",
        list: [
          "Industrial agriculture depletes soil nutrients faster than they can be replenished.",
          "Pesticides and herbicides disrupt the microbial communities that keep soil healthy.",
          "Urbanization seals soil under concrete, cutting it off from the water cycle.",
          "Erosion from deforestation strips away topsoil that took centuries to form.",
        ],
      },
      {
        heading: "Regenerating Our Soils",
        text: "Regenerative agriculture practices such as crop rotation, cover cropping, composting, and reduced tillage can restore degraded soils and rebuild their carbon-storing capacity. Supporting farmers who adopt these practices, reducing food waste, and choosing organic produce are all meaningful ways to contribute to soil health.",
      },
    ],
  },
  {
    index: 6,
    id: "protecting-pollinators",
    date: "15 NOV 2022",
    title: "Protecting pollinators: why bees matter more than you think",
    contentTitle: "The quiet collapse of pollinator populations and what it means for our food supply",
    description:
      "One third of all the food we eat depends on pollinators. Without bees, butterflies, and other pollinators, our food system would collapse.",
    image: "/images/blog/post-7.jpeg",
    content: [
      {
        text: "Pollinators are responsible for the reproduction of over 75% of flowering plant species and approximately 35% of global food production. Yet populations of bees, butterflies, moths, and other pollinators have been declining sharply over the past several decades, driven by habitat loss, pesticide use, disease, and climate change.",
      },
      {
        text: "The economic value of pollination services provided by wild insects is estimated at over $500 billion per year globally. The loss of pollinators would not only devastate natural ecosystems but would also trigger cascading failures throughout our food system, threatening the availability and affordability of fruits, vegetables, nuts, and seeds.",
      },
      {
        heading: "Why Pollinators Are Disappearing",
        list: [
          "Pesticide use, particularly neonicotinoids, disrupts bee navigation and reproduction.",
          "Habitat loss eliminates the wildflowers that pollinators depend on for food.",
          "Monoculture farming reduces the diversity of food sources available to pollinators.",
          "Climate change shifts the timing of flowering plants out of sync with pollinator activity.",
        ],
      },
      {
        heading: "How to Help Pollinators",
        text: "Creating pollinator-friendly gardens, reducing or eliminating pesticide use, supporting local beekeepers, and advocating for pesticide reform are all powerful ways to help reverse pollinator decline. Even small patches of wildflowers in urban areas can provide vital habitat for bees and butterflies struggling to survive in increasingly hostile landscapes.",
      },
    ],
  },
];