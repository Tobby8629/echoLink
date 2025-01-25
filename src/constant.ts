import { calenderTwo, collaboration, team } from "../public/svgs"

export const menuLink = [
  {
   name: "product",
   link: "/"
  },
  {
    name: "blog",
    link: "/blog"
   },
   {
    name: "support",
    link: "/support"
   },
]

export const homeSec: HomeSection[] = [
  {
    id: 1,
    image: calenderTwo,
    header:"Your workspace, evolved",
    text: "Your entire team, one screen away. Echolink delivers clarity, productivity, and connection for businesses that need to move fast.",
    btnText: "learn more"
  },

  {
    id: 2,
    image: team,
    header: "Host Global Team Meetings with Ease.",
    text: "All-in-one place for your remote team to chat, collaborate and track project progress. Sign Up now to get early access.",
    btnText: "get early access"
  },

  {
    id: 3,
    image: collaboration,
    header: "Collaborate on Projects Anytime, Anywhere.",
    text: "Work effortlessly on your projects no matter where you are. Sign up now and bring your ideas to life from anywhere in the world.",
    btnText: "learn more"
  }
]