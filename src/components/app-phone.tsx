import { useState } from "react";
import { Compass, Images, MessageCircle } from "lucide-react";
import { contacts } from "@/lib/content";
import { useCopy } from "@/lib/use-copy";
import { cn } from "@/lib/utils";

type Tab = "tours" | "gallery" | "contact";

export function AppPhone() {
  const { t, tours, gallery } = useCopy();
  const [tab, setTab] = useState<Tab>("tours");
  const hossein = contacts[0];

  return (
    <div className="mx-auto w-full max-w-[280px]">
      <div className="relative overflow-hidden rounded-[2rem] bg-raised shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-fg)_16%,transparent),0_28px_60px_-28px_rgba(0,0,0,0.7)]">
        <div className="flex items-center justify-between px-4 pt-4">
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-subtle">
            9:41
          </p>
          <div className="h-4 w-20 rounded-full bg-bg" />
          <p className="text-[10px] tabular-nums text-subtle">100%</p>
        </div>

        <div className="flex items-center gap-2 px-4 py-3">
          <img
            src="/images/logo-icon.png"
            alt=""
            className="size-8 rounded-md object-cover"
          />
          <div>
            <p className="font-display text-lg leading-none">Yolda</p>
            <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-subtle">
              {t("chrome.native")}
            </p>
          </div>
        </div>

        <div className="h-[390px] overflow-y-auto px-3 pb-2">
          {tab === "tours" ? (
            <ul className="space-y-2">
              {tours.slice(0, 4).map((tour) => (
                <li
                  key={tour.id}
                  className="overflow-hidden rounded-2xl bg-surface"
                >
                  <img
                    src={tour.image}
                    alt=""
                    className="h-24 w-full object-cover"
                  />
                  <div className="p-3">
                    <p className="text-[10px] uppercase tracking-[0.14em] text-accent">
                      {tour.place}
                    </p>
                    <p className="mt-1 font-display text-base leading-tight">
                      {tour.name}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          ) : null}

          {tab === "gallery" ? (
            <div className="grid grid-cols-2 gap-1.5">
              {gallery.slice(0, 6).map((item) => (
                <img
                  key={item.id}
                  src={item.src}
                  alt={item.title}
                  className="aspect-[3/4] w-full rounded-xl object-cover"
                />
              ))}
            </div>
          ) : null}

          {tab === "contact" ? (
            <div className="rounded-2xl bg-surface p-4">
              <img
                src="/images/logo.png"
                alt="Yolda Tours"
                className="mx-auto h-16 w-16 rounded-2xl object-cover"
              />
              <p className="mt-4 text-center font-display text-xl">
                {hossein.name}
              </p>
              <p className="mt-1 text-center text-[10px] uppercase tracking-[0.16em] text-accent">
                {t("contact.hossein.role")}
              </p>
              <p className="mt-3 text-center text-xs leading-relaxed text-muted">
                {t("page.app.body")}
              </p>
              <a
                href={hossein.wa}
                className="mt-4 flex min-h-10 items-center justify-center rounded-full bg-fg text-xs font-medium text-bg"
              >
                WhatsApp
              </a>
            </div>
          ) : null}
        </div>

        <nav className="grid grid-cols-3 border-t border-border bg-surface/80">
          {(
            [
              ["tours", Compass, t("nav.tours")],
              ["gallery", Images, t("nav.gallery")],
              ["contact", MessageCircle, t("nav.contact")],
            ] as const
          ).map(([id, Icon, label]) => (
            <button
              key={id}
              type="button"
              onClick={() => setTab(id)}
              className={cn(
                "flex min-h-12 flex-col items-center justify-center gap-0.5 text-[10px] uppercase tracking-[0.12em]",
                tab === id ? "text-accent" : "text-subtle",
              )}
            >
              <Icon className="size-4" />
              {label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}
