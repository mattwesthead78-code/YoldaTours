import { createFileRoute, Link } from "@tanstack/react-router";
import { PageIntro, SiteShell } from "@/components/site-shell";
import { useCopy } from "@/lib/use-copy";

export const Route = createFileRoute("/tours")({ component: Tours });

function Tours() {
  const { t, tours } = useCopy();

  return (
    <SiteShell>
      <PageIntro
        kicker={t("page.tours.kicker")}
        title={t("page.tours.title")}
        lede={t("page.tours.lede")}
      />

      <section className="mx-auto max-w-6xl px-5 pb-24 md:px-8">
        <div className="grid gap-8">
          {tours.map((tour) => (
            <article
              key={tour.id}
              className="grid overflow-hidden rounded-[1.75rem] bg-surface md:grid-cols-2"
            >
              <img
                src={tour.image}
                alt={tour.imageAlt}
                className="img-frame h-56 w-full object-cover md:h-full"
              />
              <div className="p-7 md:p-10">
                <p className="text-[11px] uppercase tracking-[0.16em] text-accent">
                  {tour.kicker}
                </p>
                <h2 className="mt-2 font-display text-3xl font-medium tracking-tight md:text-4xl">
                  {tour.name}
                </h2>
                <p className="mt-2 text-sm text-muted">{tour.place}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">
                  {tour.description}
                </p>
                <Link
                  to="/contact"
                  className="mt-6 inline-flex min-h-11 items-center text-sm text-fg underline decoration-border underline-offset-4 hover:decoration-fg"
                >
                  {t("cta.talk")}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
