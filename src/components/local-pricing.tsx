import { headers } from "next/headers";
import { Pricing } from "@/components/pricing";
import { Services } from "@/components/services";
import { StartProjectForm } from "@/components/start-project";
import { budgetOptions, currencyForCountry, startingPrices } from "@/lib/currency";
import { startProject } from "@/lib/site";

async function visitorCurrency() {
  const headerList = await headers();
  return currencyForCountry(headerList.get("x-vercel-ip-country"));
}

export async function LocalPricing({
  titleLevel = 2,
  estimateHref = startProject.href,
  index,
}: {
  titleLevel?: 1 | 2;
  estimateHref?: string;
  index?: string;
}) {
  const currency = await visitorCurrency();

  return (
    <Pricing
      titleLevel={titleLevel}
      estimateHref={estimateHref}
      prices={startingPrices(currency)}
      index={index}
    />
  );
}

export async function LocalServices({
  titleLevel = 2,
  discussHref = startProject.href,
  index,
}: {
  titleLevel?: 1 | 2;
  discussHref?: string;
  index?: string;
}) {
  const currency = await visitorCurrency();

  return (
    <Services
      titleLevel={titleLevel}
      prices={startingPrices(currency)}
      discussHref={discussHref}
      index={index}
    />
  );
}

export async function LocalStartProject({ questionLevel = 3 }: { questionLevel?: 2 | 3 }) {
  const currency = await visitorCurrency();

  return <StartProjectForm questionLevel={questionLevel} budgets={budgetOptions(currency)} />;
}
