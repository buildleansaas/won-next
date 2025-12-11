import HomePage from "../components/home/HomePage";

export const dynamic = "force-static";

export const metadata = {
  title: "Home",
};

export default async function Page() {
  const schedule = [
    {
      _id: "dharma-service",
      title: "Won Buddhism Dharma Service",
      time: "Sun 2:00pm - 4:00pm",
      description:
        "Please join us from 2 - 4pm for our Traditional Won Buddhist Dharma Service. Seating is limited to 10 people, please text 804-243-5878 to make a reservation and let us know if you are coming.",
    },
    {
      _id: "meditation-beginners",
      title: "Meditation Class for Beginners",
      time: "Sat 10:30am - 12:00 noon",
      description:
        "Learn how to Meditate according to Won Buddhist doctrine. Join us from 10:30am to 12 noon. Please text 804-243-5878 to make a reservation. We will do 20 Minutes of Qi Gong, 10 minutes of Chanting and a 30 Minute Meditation. The rest will be an open Q&A session.",
    },
    {
      _id: "tai-chi-qigong",
      title: "Tai Chi and Qi Gong",
      time: "Wed 10:30am - 12:00 noon",
      description:
        "Tai Chi is meditation in movement. Its soft movements create flows of energy that cultivate your physical and inner strength. In this class, learn about the energy of Yin and Yang to bring health, stability and vitality into your life. Friendly for all ages! Please text 804-243-5878",
    },
  ];

  // Hard-coded videos
  const videos = [
    {
      _id: "dDastwEKYxA",
      embed: "dDastwEKYxA",
      title:
        "Tai Chi 10 Form Full Version | Yang Style | Beginners Form, Learn Tai Chi at Home",
      description:
        "Beautiful back yard scene creates healing energy, may we use this time to look deeply within and reaching out with hearts of loving care.",
    },
    {
      _id: "UevU5XCkVnw",
      embed: "UevU5XCkVnw",
      title:
        "Seated Tai Chi for Beginners | Tai Chi 10 Form Upper Body Movements | Easy At Home Practice",
      description:
        "Sit on chair  or sofa to follow the 10 sequence to memorize upper body only.\n\nLater on we can combine together.\n\nLet's start little by little and we'll continue to upload.",
    },
    {
      _id: "zXFD2aEMVPw",
      embed: "zXFD2aEMVPw",
      title: "Learn Tai Chi Ten Form / Postures 1,2 and 3. Beginners",
      description:
        "This video offers STEP BY STEP instruction for Postures 1, 2, and 3. Each posture is broken into its upper body and lower body components.",
    },
    {
      _id: "61iIjwIYMec",
      embed: "61iIjwIYMec",
      title: "Learn Tai Chi 10 form Posture 4,5 and 6",
      description:
        "This video offers Step by Step instruction for Posture 4,5 and 6. Each posture is\nbroken into its upper body and lower body components. Learning Sequences is very\nimportant and slow movement leads to balance body and mind in harmony.",
    },
    {
      _id: "E_zj6GqLLyI",
      embed: "E_zj6GqLLyI",
      title: "Tai Chi 10 Form Step by Step/ Posture 7,8,9 and 10",
      description:
        "Let's become a Tai Chi Lover! Learn step by step to promote health and\nwellness during this difficult time.  You'll be thrilled when you complete\nthe 10 postures. Gentle instruction suitable for everyone.\nTry practice one posture every week and if you can put these 10 postures\ntogether you are in the world of Tai Chi. Congratulations!!",
    },
    {
      _id: "GY0oD0D05nw",
      embed: "GY0oD0D05nw",
      title: "The Eight Brocades are one of the most popular forms of Qi gong.",
      description:
        "The Brocades are broken down into eight separate sections. Each focusing on an\ndifferent physical area and Qi meridian.\nThe first eight minutes are a step-by-step explanation of how to do the Brocades.\nA fifteen minute demonstration follows.",
    },
    {
      _id: "mtorkhUPRBw",
      embed: "mtorkhUPRBw",
      title: "Try build up Chi little by little #1",
      description:
        "Flex your body and mind putting 5 minute daily.\nChi exercise is different from regular exercise. \nTry feel the Chi in your palm while you doing it.",
    },
    {
      _id: "Ip_01z4pehw",
      embed: "Ip_01z4pehw",
      title: "16 Form Yang Style Tai Chi - repeats twice",
      description:
        "Feel the soft snowy clear Energy and let all the stress melt away.\n16 Form uses all the steps that we learned in the 8 or 10 Form. \nIt is a simple mindfulness and advanced cultivation of Qi.\nLocation at Won Buddhism of Richmond Virginia Temple. \nPresented by Buddhist priest Rev. Kea-sung Kim.",
    },
    {
      _id: "IouO1gWoz_Y",
      embed: "IouO1gWoz_Y",
      title: "5 minute Qi exercise",
      description:
        "Make sure feet stable on the floor whole time.\nIt circulates your energy and blood flows through.",
    },
    {
      _id: "2tLvGwCSjHc",
      embed: "2tLvGwCSjHc",
      title:
        "7 Minute Tai Chi Warmup | Improve Joint Mobility, Flexibility with Tai Chi for Longevity and Health",
      description:
        "Prior to start any Tai-Chi  you should always do the warming up exercise.\n\nUsually it takes at least  20 minute to do warming up, so please do at least once before  you start Tai-Chi. We will continue to show you Tai-Chi from the basic.\n\nSee you at next one!",
    },
  ];

  // Remove events for now
  const events = [];

  return <HomePage events={events} schedule={schedule} videos={videos} />;
}
