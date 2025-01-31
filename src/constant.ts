import { bayo, chloe, david } from "../public/images"
import { calenderTwo, collaboration, facebook, git, insta, linkedIn, team, X } from "../public/svgs"

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

export const teams:team[] = [
  {
    name: "chloe Fisher",
    role: "co-founder",
    image: chloe
  },

  {
    name: "david Bryan",
    role: "ceo & co-founder",
    image: david
  },

  {
    name: "Bayo Adeyemi",
    role: "partner",
    image: bayo
  },
]

export const socials = [
  facebook,
  linkedIn,
  insta,
  X,
  git
]

export const otherLink = [
  {
    header: "company",
    links: [
      "product",
      "blog",
      "support"
    ]
  },
  {
    header: "features",
    links: [
      "screen sharing",
      "ios andriod app",
      "file sharing",
      "user management"
    ]
  },
  {
    header: "contact us",
    links: [
      "info@teaminfo.com",
      "4-500-210-340",
      "1010 budapest, hungary"
    ]
  }

]