import { createFileRoute } from "@tanstack/react-router";
import { PageIntro, SiteShell } from "@/components/site-shell";
import { useCopy } from "@/lib/use-copy";

export const Route = createFileRoute("/gallery")({ component: Gallery });

function Gallery() {
  const { t, gallery } = useCopy();

  return (
    <SiteShell>
      <PageIntro
        kicker={t("page.gallery.kicker")}
        title={t("page.gallery.title")}
        lede={t("page.gallery.lede")}
      />

      <section className="mx-auto max-w-6xl px-5 pb-24 md:px-8">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {gallery.map((item) => (
            <figure
              key={item.id}
              className="group overflow-hidden rounded-[1.35rem] bg-surface"
            >
              <img
                src={item.src}
                alt={item.title}
                className="img-frame aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <figcaption className="px-4 py-3">
                <p className="font-display text-lg font-medium">{item.title}</p>
                <p className="text-[11px] uppercase tracking-[0.14em] text-subtle">
                  {item.caption}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
