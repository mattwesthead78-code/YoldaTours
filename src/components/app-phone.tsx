import { useState } from "react";
import { contacts } from "@/lib/content";
import { useCopy } from "@/lib/use-copy";
import { cn } from "@/lib/utils";

type Tab = "home" | "packages" | "gallery" | "contact";

const frames = [
  {
    src: "/images/jaguar.jpg",
    title: "Wild Jaguar",
    place: "Amazon Rainforest & Pantanal",
  },
  {
    src: "/images/macaw.jpg",
    title: "Wild Scarlet Macaw",
    place: "Amazon jungle canopy",
  },
  {
    src: "/images/iguazu.jpg",
    title: "Iguazú Falls",
    place: "Devil's Throat, aerial",
  },
  {
    src: "/images/uyuni.jpg",
    title: "Salar de Uyuni Mirror",
    place: "Bolivia salt flats",
  },
  {
    src: "/images/carnival.jpg",
    title: "Rio Carnival",
    place: "Sambadrome",
  },
  {
    src: "/images/canoe.jpg",
    title: "Flooded Forest",
    place: "Igapó by canoe",
  },
] as const;

export function AppPhone() {
  const { t } = useCopy();
  const [tab, setTab] = useState<Tab>("home");
  const hossein = contacts[0];

  return (
    <div className="mx-auto w-full max-w-[300px]">
      <div className="overflow-hidden rounded-[2rem] bg-[#07110f] text-[#f4efe4] shadow-[0_0_0_1px_rgba(212,160,23,0.35),0_28px_60px_-28px_rgba(0,0,0,0.75)]">
        <div className="flex items-center justify-between px-5 pt-3 text-[10px] text-[#cbbd8a]">
          <span>9:41</span>
          <span className="tracking-[0.18em]">YOLDA</span>
          <span>5G</span>
        </div>
        <div className="mx-5 mt-2 h-px bg-[#d4a017]" />

        <div className="h-[430px] overflow-y-auto">
          {tab === "home" ? (
            <div>
              <div className="relative h-52">
                <img
                  src="/images/jaguar.jpg"
                  alt="Wild jaguar from the current Yolda Tours app"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07110f] via-transparent to-transparent" />
              </div>
              <div className="px-4 pb-4">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#d4a017]">
                  {t("phone.kicker")}
                </p>
                <p className="mt-2 font-display text-[1.65rem] leading-none">
                  {t("phone.line")}
                </p>
                <div className="my-3 h-px w-10 bg-[#d4a017]" />
                <p className="text-xs text-[#c9c2b0]">{t("phone.led")}</p>
                <p className="mt-1 text-[11px] text-[#8f978f]">Manaus, Brazil</p>
                <p className="mt-4 rounded-full bg-[#d4a017] py-2.5 text-center text-[11px] font-medium text-[#07110f]">
                  {t("phone.book")}
                </p>
              </div>
            </div>
          ) : null}

          {tab === "packages" ? (
            <div className="px-3 py-3">
              <p className="px-1 text-[10px] uppercase tracking-[0.2em] text-[#d4a017]">
                {t("phone.packages")}
              </p>
              <ul className="mt-2 space-y-2">
                {frames.slice(0, 4).map((frame) => (
                  <li
                    key={frame.title}
                    className="overflow-hidden rounded-2xl bg-[#12211c]"
                  >
                    <img
                      src={frame.src}
                      alt=""
                      className="h-24 w-full object-cover"
                    />
                    <div className="px-3 py-2.5">
                      <p className="text-[13px] leading-tight">{frame.title}</p>
                      <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-[#d4a017]">
                        {t("phone.included")}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {tab === "gallery" ? (
            <div className="px-3 py-3">
              <p className="px-1 text-[10px] uppercase tracking-[0.2em] text-[#d4a017]">
                {t("phone.gallery")}
              </p>
              <p className="mt-1 px-1 text-[11px] text-[#8f978f]">
                {t("phone.galleryLede")}
              </p>
              <div className="mt-2 grid grid-cols-2 gap-1.5">
                {frames.map((frame) => (
                  <figure
                    key={frame.title}
                    className="relative overflow-hidden rounded-xl"
                  >
                    <img
                      src={frame.src}
                      alt={frame.title}
                      className="aspect-[3/4] w-full object-cover"
                    />
                    <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-2 pb-2 pt-6 text-[10px] leading-tight">
                      {frame.title}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          ) : null}

          {tab === "contact" ? (
            <div className="px-4 py-4">
              <img
                src="/images/hossein.jpg"
                alt="Hossein Amini"
                className="mx-auto h-24 w-24 rounded-full object-cover"
              />
              <p className="mt-3 text-center text-[10px] uppercase tracking-[0.18em] text-[#d4a017]">
                {t("phone.about")}
              </p>
              <p className="mt-2 text-center font-display text-2xl">
                {hossein.name}
              </p>
              <p className="mt-1 text-center text-[11px] text-[#c9c2b0]">
                {t("phone.led")}
              </p>
              <a
                href={hossein.wa}
                className="mt-5 flex min-h-10 items-center justify-center rounded-full bg-[#25D366] text-xs font-medium text-[#07110f]"
              >
                {t("phone.inquire")}
              </a>
            </div>
          ) : null}
        </div>

        <nav className="grid grid-cols-4 border-t border-[#d4a017]/40 bg-[#0c1916]">
          {(
            [
              ["home", t("phone.home")],
              ["packages", t("phone.packages")],
              ["gallery", t("phone.gallery")],
              ["contact", t("phone.contact")],
            ] as const
          ).map(([id, label]) => (
            <button
              key={id}
              type="button"
              onClick={() => setTab(id)}
              className={cn(
                "min-h-12 px-1 text-[9px] uppercase tracking-[0.08em]",
                tab === id ? "text-[#d4a017]" : "text-[#8f978f]",
              )}
            >
              {label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}
