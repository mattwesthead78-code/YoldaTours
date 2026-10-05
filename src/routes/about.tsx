import { createFileRoute } from "@tanstack/react-router";
import { PageIntro, SiteShell } from "@/components/site-shell";
import { contacts } from "@/lib/content";
import { useCopy } from "@/lib/use-copy";

export const Route = createFileRoute("/about")({ component: About });

function About() {
  const { t, company, contacts: people, process } = useCopy();
  const hossein = contacts[0];

  return (
    <SiteShell>
      <PageIntro
        kicker={t("page.about.kicker")}
        title={t("page.about.title")}
        lede={t("page.about.lede")}
      />

      <section className="mx-auto max-w-6xl px-5 pb-8 md:px-8">
        <div className="overflow-hidden rounded-[1.75rem]">
          <img
            src="/images/canopy.jpg"
            alt="Rainforest canopy photographed on a Yolda expedition"
            className="img-frame h-[260px] w-full object-cover md:h-[420px]"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          <h2 className="font-display text-3xl font-medium tracking-tight md:col-span-4 md:text-4xl">
            {company.slogan}
          </h2>
          <p className="text-base leading-relaxed text-muted md:col-span-8 md:text-lg">
            {company.engineering} {t("page.about.close")}
          </p>
        </div>
      </section>

      <section className="border-y border-border">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
            {t("page.about.founders")}
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {people.map((c) => (
              <article
                key={c.id}
                className="rounded-[1.5rem] bg-surface p-7 md:p-8"
              >
                <img
                  src="/images/logo.png"
                  alt=""
                  className="size-16 rounded-2xl object-cover"
                />
                <h3 className="mt-5 font-display text-3xl font-medium">{c.name}</h3>
                <p className="mt-1 text-[12px] uppercase tracking-[0.16em] text-accent">
                  {c.role}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted">{c.bio}</p>
                <a
                  href={c.wa}
                  className="mt-6 inline-block text-sm text-fg underline decoration-border underline-offset-4 hover:decoration-fg"
                >
                  WhatsApp {c.phone}
                </a>
                <a
                  href={hossein.instagram}
                  className="mt-2 block text-sm text-muted underline decoration-border underline-offset-4 hover:text-fg hover:decoration-fg"
                >
                  Instagram @yoldaaaaa
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
          {t("page.about.approach")}
        </p>
        <div className="mt-8 grid gap-10 md:grid-cols-3">
          {process.map((step) => (
            <article key={step.number}>
              <p className="text-[12px] tabular-nums text-subtle">{step.number}</p>
              <h3 className="mt-3 font-display text-2xl font-medium">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{step.body}</p>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
