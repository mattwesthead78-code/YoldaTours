import { createFileRoute, Link } from "@tanstack/react-router";
import { AppPhone } from "@/components/app-phone";
import { DownloadButtons } from "@/components/download-buttons";
import { PageIntro, SiteShell } from "@/components/site-shell";
import { useCopy } from "@/lib/use-copy";

export const Route = createFileRoute("/app")({ component: GuestApp });

function GuestApp() {
  const { t } = useCopy();

  return (
    <SiteShell>
      <PageIntro
        kicker={t("page.app.kicker")}
        title={t("page.app.title")}
        lede={t("page.app.lede")}
      />

      <section className="mx-auto grid max-w-6xl items-start gap-12 px-5 pb-24 md:grid-cols-12 md:px-8">
        <div className="md:col-span-7">
          <p className="max-w-xl text-base leading-relaxed text-muted">
            {t("page.app.body")}
          </p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-subtle">
            {t("page.app.note")}
          </p>
          <div className="mt-8">
            <DownloadButtons prominent />
          </div>
          <p className="mt-3 text-[12px] uppercase tracking-[0.16em] text-subtle">
            {t("page.app.android")} · {t("page.app.ios")} · {t("page.app.version")}
          </p>
          <p className="mt-10 text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
            {t("page.app.also")}
          </p>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
            {t("company.mission")}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex min-h-11 items-center rounded-full bg-fg px-5 text-sm font-medium text-bg"
            >
              {t("cta.talk")}
            </Link>
            <Link
              to="/tours"
              className="inline-flex min-h-11 items-center rounded-full px-5 text-sm font-medium text-fg shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-fg)_14%,transparent)]"
            >
              {t("cta.tours")}
            </Link>
          </div>
        </div>
        <div className="md:col-span-5">
          <AppPhone />
        </div>
      </section>
    </SiteShell>
  );
}
