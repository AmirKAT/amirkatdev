export type CaseStudyFeature = {
  title: string;
  body: string;
};

export type CaseStudyImage = {
  src: string;
  alt: string;
  caption: string;
  layout: "wide" | "offset" | "portrait";
};

export type CaseStudy = {
  overview: string;
  challenge: string;
  built: string;
  features: readonly CaseStudyFeature[];
  technologies: readonly string[];
  technologyNote?: string;
  gallery: readonly CaseStudyImage[];
};

export const caseStudies: Record<string, CaseStudy> = {
  wizume: {
    overview:
      "Wizume is a CV and resume product. You write in the browser, watch the document take shape, and adjust it for the job in front of you before you export.",
    challenge:
      "A job application is rarely one finished document. The CV has to stay readable, and it often needs another version for the next role. Starting from a blank page each time makes the structure fragile, and the cover letter gets written from scratch.",
    built:
      "A web app for writing, tailoring and exporting CVs and cover letters. The profile stays in one place. Suggestions can be reviewed before they are kept, and the file is exported when it is ready to send.",
    features: [
      {
        title: "A CV you can see while you write",
        body: "The editor and a live preview sit together, so the page and the wording stay in view as you work.",
      },
      {
        title: "Suggestions you accept or leave",
        body: "Wizume can propose clearer bullets, a summary and skills. Nothing is applied until you review it.",
      },
      {
        title: "Shaped to a specific job",
        body: "Paste a job description and tailor the CV to it. A keyword check shows how the document lines up with that posting. It is a match against the description, not a verdict from any particular hiring system.",
      },
      {
        title: "A letter from the same CV",
        body: "A cover letter can be drafted from the saved CV and the job, in a professional, concise or enthusiastic tone. You edit it, then keep it with the application.",
      },
      {
        title: "Export when it is ready",
        body: "There is a free plan and a paid plan. CVs can be exported as PDF, with DOCX on the paid plan, from a set of templates.",
      },
      {
        title: "The listing, saved into the flow",
        body: "A browser extension copies the job listing on the current tab into the tailor flow, so it does not have to be pasted by hand.",
      },
    ],
    technologies: ["React", "Supabase"],
    gallery: [
      {
        src: "/work/wizume-letter.jpg",
        alt: "Wizume page explaining the cover letter builder.",
        caption: "Cover letters, written from the same CV",
        layout: "wide",
      },
      {
        src: "/work/wizume-pricing.jpg",
        alt: "Wizume pricing page with a free plan and a paid plan.",
        caption: "A free plan, and a paid plan when more is needed",
        layout: "offset",
      },
    ],
  },
  stepwithserg: {
    overview:
      "StepWithSerg is the website for a sneaker cleaning business in London. It shows the services, the prices and the work, then lets a customer book a clean and follow the order.",
    challenge:
      "A clean is hard to judge from a name alone. People want to see the difference between a standard clean and a restoration, know what it costs, and understand how a pair gets there and back. The site had to answer that, and take the booking, rather than leaving every enquiry to a message.",
    built:
      "A custom website with the services and prices, a gallery of completed work, online booking, and a way to track an order after it is placed.",
    features: [
      {
        title: "Services, with the price on the page",
        body: "Standard cleans, premium cleans, restoration and multi-pair deals are set out so a customer can choose before they book.",
      },
      {
        title: "Booking without an account",
        body: "The booking walks through the service, the pair, an optional express add-on, then drop-off or post, and a confirmation.",
      },
      {
        title: "Payment, then a way to follow the order",
        body: "Checkout takes card payment. The customer gets an order number and can look the order up later with that number and the phone number used at booking.",
      },
      {
        title: "Proof, and another way to ask",
        body: "The site shows before-and-after work. WhatsApp is there for anyone who would rather ask a question first.",
      },
    ],
    technologies: ["React"],
    gallery: [
      {
        src: "/work/stepwithserg-services.jpg",
        alt: "StepWithSerg services page with the cleaning price list.",
        caption: "The services, with prices on the page",
        layout: "wide",
      },
      {
        src: "/work/stepwithserg-book.jpg",
        alt: "StepWithSerg booking page, on the step for choosing a service.",
        caption: "Booking starts with the service",
        layout: "offset",
      },
    ],
  },
  tactiqclub: {
    overview:
      "TactiqClub is a free app for grassroots clubs, introduced on its own site. Fixtures, availability, squads, payments and messages are presented as one product, instead of a group chat.",
    challenge:
      "A club week is a pile of the same questions. Who can play, when is training, who has paid, and which message was the latest. In a chat, those answers get buried. The product is built so the plan, the people and the payments stay with the fixture.",
    built:
      "The public site for TactiqClub. It introduces the app — availability, the schedule, squads, payments and club messages — and points people to the App Store and Google Play.",
    features: [
      {
        title: "Who can play",
        body: "Players mark themselves available, unsure or unavailable. The club can see who is in, and chase anyone who has not replied.",
      },
      {
        title: "One schedule",
        body: "Fixtures and training live in one list. A season can be imported, and people can add the plan to their own calendar.",
      },
      {
        title: "The squad for the day",
        body: "Starters and the bench are picked with positions for the sport, then the lineup is published to the team.",
      },
      {
        title: "Fees without a separate chase",
        body: "The club can request subs, match fees or kit money, take card payments, record cash, and see who still owes.",
      },
      {
        title: "Messages that stay with the plan",
        body: "There is a club broadcast, a message to one team, and a thread on a fixture, with alerts when something changes.",
      },
      {
        title: "After the match",
        body: "Results and appearances can be logged, and duties such as kit and transport can be assigned so the same jobs are not left unspoken.",
      },
    ],
    technologies: ["Wix"],
    technologyNote: "The public website.",
    gallery: [
      {
        src: "/work/tactiqclub-phone.jpg",
        alt: "The TactiqClub app on a phone, showing a club home screen with fixtures and payments.",
        caption: "The app, as the site introduces it",
        layout: "portrait",
      },
    ],
  },
};

export function getCaseStudy(slug: string) {
  return caseStudies[slug];
}
