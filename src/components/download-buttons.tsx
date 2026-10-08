import { androidApk, iosApp } from "@/lib/content";
import { useCopy } from "@/lib/use-copy";

export function DownloadButtons({ prominent = false }: { prominent?: boolean }) {
  const { t } = useCopy();
  const solid = prominent
    ? "bg-fg text-bg"
    : "bg-fg text-bg";
  const ghost =
    "text-fg shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-fg)_28%,transparent)]";

  return (
    <div className="flex flex-wrap gap-3">
      <a
        href={androidApk.href}
        download={androidApk.fileName}
        className={`inline-flex min-h-11 items-center rounded-full px-5 text-sm font-medium transition-transform duration-150 active:scale-[0.96] ${solid}`}
      >
        {t("cta.downloadAndroid")}
      </a>
      <a
        href={iosApp.href}
        download={iosApp.fileName}
        className={`inline-flex min-h-11 items-center rounded-full px-5 text-sm font-medium transition-transform duration-150 active:scale-[0.96] ${ghost}`}
      >
        {t("cta.downloadIos")}
      </a>
    </div>
  );
}
