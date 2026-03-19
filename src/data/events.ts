export type EventData = {
  index: number;
  id: string;
  title: string;
  location: string;
  date: string;
  about: string;
  content: string[];
  mainImage: string;
}

export const eventsData: EventData[] = [
  {
    index: 0,
    id: "plastic-pollution-initiative",
    title: "Say no to using plastic and save Earth",
    location: "8 Brewery Drive, Hudson, NH 03051, USA",
    date: "September 3, 2021 8:30 AM",
    about: "Our mission is to clean the oceans and educate the next generation about sustainable living.",
    content: [
      "Plastic pollution has reached a critical point, affecting every corner of our planet. Every year, millions of tons of plastic end up in our oceans, devastating marine ecosystems and entering the food chain. This event is dedicated to practical steps we can take today to reverse this trend.",
      "During this session, we will demonstrate how small changes in our daily routines—like switching to reusable materials and supporting local zero-waste initiatives—can lead to massive environmental shifts. We believe that collective action is the only way to ensure a green future for our children.",
      "The program includes a hands-on workshop on plastic recycling and a keynote speech from leading environmental activists. Join us in making a statement: the Earth is not a disposable resource, and it’s time we treated it with the respect it deserves."
    ],
    mainImage: "/images/events/plastic-event.jpg",
  },
  {
    index: 1,
    id: "weekly-cleaning-program",
    title: "Weekly cleaning program in our city park",
    location: "Central Park, New York, NY 10024, USA",
    date: "Every Sunday 10:00 AM",
    about: "Keeping our local parks clean is a community responsibility that brings us all closer to nature.",
    content: [
      "Our Weekly Cleaning Program is more than just picking up litter; it's about reclaiming our public spaces. Every weekend, volunteers gather to ensure that our city's green lungs remain healthy and beautiful for everyone to enjoy.",
      "We provide all the necessary equipment, including biodegradable bags, gloves, and pickers. It's a great way to meet neighbors, get some light exercise, and see the immediate positive impact of your hard work on the environment.",
      "Beyond the cleanup, we often hold short educational sessions about local flora and fauna. Whether you have 30 minutes or three hours, your contribution helps maintain a safe haven for wildlife and a clean playground for our children."
    ],
    mainImage: "/images/events/cleaning-event.jpg",
  },
  {
    index: 2,
    id: "plant-a-tree-initiative",
    title: "Join us and plant a tree for the future",
    location: "Green Valley Reserve, CA 90210, USA",
    date: "October 15, 2021 9:00 AM",
    about: "Reforestation is the most effective way to fight climate change and restore biodiversity.",
    content: [
      "Trees are the silent guardians of our ecosystem, providing oxygen, shade, and habitats for countless species. Our 'Plant a Tree' initiative aims to restore areas affected by deforestation and urban expansion.",
      "In this event, professional arborists will guide you through the process of planting native saplings that are best suited for the local soil. We focus on diversity to create a resilient forest that can thrive for decades to come.",
      "By planting a tree today, you are leaving a living legacy for future generations. It’s a powerful act of hope and a practical step toward cooling our planet and beautifying our landscapes. Grab a shovel and let's grow together!"
    ],
    mainImage: "/images/events/tree-event.jpg",
  }
];