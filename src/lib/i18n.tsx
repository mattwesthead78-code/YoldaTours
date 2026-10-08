import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { messages, type MessageKey } from "@/lib/messages";
import { cn } from "@/lib/utils";

export const locales = ["en", "es", "pt", "fr", "de", "zh", "fa", "tr"] as const;
export type Locale = (typeof locales)[number];

export const localeMeta: Record<
  Locale,
  { name: string; native: string; html: string }
> = {
  en: { name: "English", native: "English", html: "en" },
  es: { name: "Spanish", native: "Español", html: "es" },
  pt: { name: "Portuguese", native: "Português", html: "pt" },
  fr: { name: "French", native: "Français", html: "fr" },
  de: { name: "German", native: "Deutsch", html: "de" },
  zh: { name: "Chinese", native: "中文", html: "zh-CN" },
  fa: { name: "Persian", native: "فارسی", html: "fa" },
  tr: { name: "Turkish", native: "Türkçe", html: "tr" },
};

const STORAGE_KEY = "yolda-locale";

function isLocale(value: string | null): value is Locale {
  return !!value && (locales as readonly string[]).includes(value);
}

function detectLocale(): Locale {
  if (typeof window === "undefined") return "en";
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (isLocale(saved)) return saved;
  } catch {
    /* ignore */
  }
  const nav = navigator.language.toLowerCase();
  if (nav.startsWith("es")) return "es";
  if (nav.startsWith("pt")) return "pt";
  if (nav.startsWith("fr")) return "fr";
  if (nav.startsWith("de")) return "de";
  if (nav.startsWith("zh")) return "zh";
  if (nav.startsWith("fa")) return "fa";
  if (nav.startsWith("tr")) return "tr";
  return "en";
}

type I18nValue = {
  locale: Locale;
  setLocale: (next: Locale) => void;
  t: (key: MessageKey) => string;
};

const I18nContext = createContext<I18nValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    setLocaleState(detectLocale());
  }, []);

  useEffect(() => {
    document.documentElement.lang = localeMeta[locale].html;
    document.documentElement.dir = locale === "fa" ? "rtl" : "ltr";
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  const t = useCallback(
    (key: MessageKey) => messages[locale][key] ?? messages.en[key] ?? key,
    [locale],
  );

  const value = useMemo(
    () => ({ locale, setLocale, t }),
    [locale, setLocale, t],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}

export function Flag({
  locale,
  className,
}: {
  locale: Locale;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 21 15"
      className={cn("shrink-0 overflow-hidden rounded-[2px]", className)}
      aria-hidden
    >
      {locale === "en" ? (
        <>
          <rect width="21" height="15" fill="#B22234" />
          <path
            d="M0 1.7h21M0 4.3h21M0 6.9h21M0 9.5h21M0 12.1h21"
            stroke="#fff"
            strokeWidth="1.15"
          />
          <rect width="9" height="8" fill="#3C3B6E" />
        </>
      ) : null}
      {locale === "es" ? (
        <>
          <rect width="7" height="15" fill="#006847" />
          <rect x="7" width="7" height="15" fill="#fff" />
          <rect x="14" width="7" height="15" fill="#CE1126" />
          <circle cx="10.5" cy="7.5" r="1.6" fill="#C9A36A" />
        </>
      ) : null}
      {locale === "pt" ? (
        <>
          <rect width="21" height="15" fill="#009B3A" />
          <polygon points="10.5,2.2 18.4,7.5 10.5,12.8 2.6,7.5" fill="#FFDF00" />
          <circle cx="10.5" cy="7.5" r="2.4" fill="#002776" />
        </>
      ) : null}
      {locale === "fr" ? (
        <>
          <rect width="7" height="15" fill="#002395" />
          <rect x="7" width="7" height="15" fill="#fff" />
          <rect x="14" width="7" height="15" fill="#ED2939" />
        </>
      ) : null}
      {locale === "de" ? (
        <>
          <rect width="21" height="5" fill="#000" />
          <rect y="5" width="21" height="5" fill="#DD0000" />
          <rect y="10" width="21" height="5" fill="#FFCE00" />
        </>
      ) : null}
      {locale === "zh" ? (
        <>
          <rect width="21" height="15" fill="#DE2910" />
          <polygon
            points="4.2,3.2 4.9,5.4 2.8,4.1 5.6,4.1 3.5,5.4"
            fill="#FFDE00"
          />
        </>
      ) : null}
      {locale === "fa" ? (
        <>
          <rect width="21" height="5" fill="#239F40" />
          <rect y="5" width="21" height="5" fill="#fff" />
          <rect y="10" width="21" height="5" fill="#DA0000" />
          <circle cx="10.5" cy="7.5" r="1.35" fill="#DA0000" />
        </>
      ) : null}
      {locale === "tr" ? (
        <>
          <rect width="21" height="15" fill="#E30A17" />
          <circle cx="8.4" cy="7.5" r="3.1" fill="#fff" />
          <circle cx="9.25" cy="7.5" r="2.45" fill="#E30A17" />
          <polygon
            points="12.1,7.5 11.35,7.05 11.55,7.9 10.85,7.35 11.7,7.35 11,7.9 11.2,7.05"
            fill="#fff"
          />
        </>
      ) : null}
    </svg>
  );
}
