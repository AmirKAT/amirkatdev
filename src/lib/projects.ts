export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  url: string;
  image: {
    src: string;
    alt: string;
    /** Where the screenshot should stay put when the frame crops it. */
    focal: "left" | "center" | "top";
  };
  technologies?: readonly string[];
  /** Internal case-study route. The live site stays on `url`. */
  caseStudyHref?: string;
};

export const projects: readonly Project[] = [
  {
    slug: "wizume",
    title: "Wizume",
    category: "AI product",
    summary:
      "An AI-powered CV and resume product. You write in the browser, tailor the document to a job, and export it when it is ready to send.",
    url: "https://wizume.ai",
    image: {
      src: "/work/wizume.jpg",
      alt: "Wizume homepage, with the CV builder preview below the headline.",
      focal: "top",
    },
    caseStudyHref: "/work/wizume",
  },
  {
    slug: "stepwithserg",
    title: "StepWithSerg",
    category: "Business website",
    summary:
      "A website for a London sneaker cleaning business. Services, prices and finished work are on the page, and customers can book, pay and follow an order.",
    url: "https://stepwithserg.com",
    image: {
      src: "/work/stepwithserg.jpg",
      alt: "StepWithSerg homepage for a sneaker cleaning service.",
      focal: "top",
    },
    caseStudyHref: "/work/stepwithserg",
  },
  {
    slug: "tactiqclub",
    title: "TactiqClub",
    category: "Digital product",
    summary:
      "The site for a free app used by grassroots clubs. It sets out fixtures, availability, squads, payments and messages in one product, instead of a group chat.",
    url: "https://tactiqclub.com",
    image: {
      src: "/work/tactiqclub.jpg",
      alt: "TactiqClub homepage, with the product shown on a phone.",
      focal: "top",
    },
    caseStudyHref: "/work/tactiqclub",
  },
  {
    slug: "katalyst-media",
    title: "Katalyst Media",
    category: "Business website",
    summary:
      "A website for a London music marketing studio. It shows how a release moves from the song to the audience, then gives artists a way to enquire.",
    url: "https://www.katalystmedia.co.uk",
    image: {
      src: "/work/katalyst.jpg",
      alt: "Katalyst Media homepage, with the headline about putting music in front of the right people.",
      focal: "top",
    },
    caseStudyHref: "/work/katalyst-media",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getNextProject(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) {
    return undefined;
  }

  return projects[(index + 1) % projects.length];
}
