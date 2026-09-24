export type Currency = "GBP" | "EUR" | "USD";

const gbpCountries = new Set(["GB", "GG", "IM", "JE"]);

const europeanCountries = new Set([
  "AD",
  "AL",
  "AT",
  "BA",
  "BE",
  "BG",
  "BY",
  "CH",
  "CY",
  "CZ",
  "DE",
  "DK",
  "EE",
  "ES",
  "FI",
  "FR",
  "GR",
  "HR",
  "HU",
  "IE",
  "IS",
  "IT",
  "LI",
  "LT",
  "LU",
  "LV",
  "MC",
  "MD",
  "ME",
  "MK",
  "MT",
  "NL",
  "NO",
  "PL",
  "PT",
  "RO",
  "RS",
  "SE",
  "SI",
  "SK",
  "SM",
  "UA",
  "VA",
  "XK",
]);

const eurStarting = [1000, 2000, 4000] as const;
const eurBands = [1000, 2500, 5000, 10000] as const;

const rate: Record<Currency, number> = {
  EUR: 1,
  GBP: 0.85,
  USD: 1.15,
};

export function currencyForCountry(country: string | null | undefined): Currency {
  const code = country?.trim().toUpperCase() ?? "";

  if (code === "US") {
    return "USD";
  }

  if (gbpCountries.has(code)) {
    return "GBP";
  }

  if (europeanCountries.has(code)) {
    return "EUR";
  }

  return "EUR";
}

function roundPrice(amount: number) {
  const step = amount >= 2500 ? 100 : 50;
  return Math.round(amount / step) * step;
}

function convert(euros: number, currency: Currency) {
  if (currency === "EUR") {
    return euros;
  }

  return roundPrice(euros * rate[currency]);
}

export function formatMoney(euros: number, currency: Currency) {
  const locale = currency === "USD" ? "en-US" : currency === "GBP" ? "en-GB" : "en-IE";

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(convert(euros, currency));
}

export function startingPrices(currency: Currency) {
  return eurStarting.map((amount) => formatMoney(amount, currency));
}

export function budgetOptions(currency: Currency) {
  const [low, mid, high, top] = eurBands.map((amount) => formatMoney(amount, currency));

  return [
    `Under ${low}`,
    `${low}–${mid}`,
    `${mid}–${high}`,
    `${high}–${top}`,
    `${top}+`,
  ] as const;
}

export function allBudgetOptions() {
  return (["GBP", "EUR", "USD"] as const).flatMap((currency) => budgetOptions(currency));
}
