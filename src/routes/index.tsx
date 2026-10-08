import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { DownloadButtons } from "@/components/download-buttons";
import { SiteShell } from "@/components/site-shell";
import { useCopy } from "@/lib/use-copy";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const { t, company, tours, process, gallery } = useCopy();

  return (
    <SiteShell>
      <section className="relative min-h-[100svh] overflow-hidden">
        <img
          src="/images/jaguar.jpg"
          alt="A jaguar photographed on a Yolda Amazon expedition"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/55 to-bg/15" />
        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 md:px-8 md:pb-20">
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-fg/80">
            {company.eyebrow}
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-[2.75rem] leading-[0.95] font-medium tracking-tight md:text-7xl lg:text-8xl">
            {company.tagline}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-fg/80 md:text-lg">
            {company.lede}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/contact"
              className="inline-flex min-h-11 items-center rounded-full bg-fg px-5 text-sm font-medium text-bg transition-transform duration-150 active:scale-[0.96]"
            >
              {t("cta.talk")}
            </Link>
            <DownloadButtons />
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
                {t("home.modulesKicker")}
              </p>
              <h2 className="mt-3 max-w-xl font-display text-4xl font-medium tracking-tight md:text-5xl">
                {t("home.modulesTitle")}
              </h2>
            </div>
            <Link
              to="/tours"
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-fg"
            >
              {t("home.modulesLink")} <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tours.map((tour) => (
              <article
                key={tour.id}
                className="overflow-hidden rounded-[1.5rem] bg-surface"
              >
                <img
                  src={tour.image}
                  alt={tour.imageAlt}
                  className="img-frame h-48 w-full object-cover"
                />
                <div className="p-6">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-accent">
                    {tour.place}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-medium">
                    {tour.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {tour.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface/40">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
                {t("page.gallery.kicker")}
              </p>
              <h2 className="mt-3 font-display text-4xl font-medium tracking-tight md:text-5xl">
                {t("page.gallery.title")}
              </h2>
            </div>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-fg"
            >
              {t("cta.gallery")} <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
            {gallery.slice(0, 8).map((item) => (
              <figure
                key={item.id}
                className="overflow-hidden rounded-[1.25rem]"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="img-frame aspect-[4/5] w-full object-cover"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
            {t("home.how")}
          </p>
          <h2 className="mt-3 max-w-xl font-display text-4xl font-medium tracking-tight md:text-5xl">
            {t("home.howTitle")}
          </h2>
          <p className="mt-4 max-w-lg text-sm text-muted">{t("home.rate")}</p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {process.map((step) => (
              <article key={step.number}>
                <p className="text-[12px] tabular-nums text-subtle">{step.number}</p>
                <h3 className="mt-3 font-display text-2xl font-medium">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {step.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <img
          src="/images/uyuni.jpg"
          alt="Salar de Uyuni at dusk"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-bg/75" />
        <div className="relative mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
            {t("home.next")}
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-4xl font-medium tracking-tight md:text-6xl">
            {t("home.nextTitle")}
          </h2>
          <p className="mt-4 max-w-lg text-base text-fg/80">{t("home.nextBody")}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex min-h-11 items-center rounded-full bg-fg px-5 text-sm font-medium text-bg"
            >
              {t("cta.talk")}
            </Link>
            <Link
              to="/tours"
              className="inline-flex min-h-11 items-center rounded-full px-5 text-sm font-medium text-fg shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-fg)_28%,transparent)]"
            >
              {t("cta.tours")}
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
