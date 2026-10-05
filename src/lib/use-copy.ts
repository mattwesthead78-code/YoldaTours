import {
  contacts,
  gallery,
  nav,
  process,
  tours,
  type GalleryItem,
  type Tour,
} from "@/lib/content";
import { useI18n } from "@/lib/i18n";
import type { MessageKey } from "@/lib/messages";

function key(value: string): MessageKey {
  return value as MessageKey;
}

export function useCopy() {
  const { t, locale, setLocale } = useI18n();

  const localizedNav = nav.map((item) => ({
    ...item,
    label: t(
      key(item.to === "/" ? "nav.home" : `nav.${item.to.slice(1)}`),
    ),
  }));

  const localizedTours: Tour[] = tours.map((tour) => ({
    ...tour,
    name: t(key(`tour.${tour.id}.name`)),
    place: t(key(`tour.${tour.id}.place`)),
    kicker: t(key(`tour.${tour.id}.kicker`)),
    description: t(key(`tour.${tour.id}.description`)),
  }));

  const localizedGallery: GalleryItem[] = gallery.map((item) => ({
    ...item,
    title: t(key(`gal.${item.id}.title`)),
    caption: t(key(`gal.${item.id}.caption`)),
  }));

  const localizedProcess = process.map((step) => ({
    ...step,
    title: t(key(`process.${Number(step.number)}.title`)),
    body: t(key(`process.${Number(step.number)}.body`)),
  }));

  const localizedContacts = contacts.map((c) => ({
    ...c,
    role: t(key(`contact.${c.id}.role`)),
    bio: t(key(`contact.${c.id}.bio`)),
  }));

  const inquiryChips = [0, 1, 2, 3].map((i) => t(key(`chip.${i}`)));

  return {
    t,
    locale,
    setLocale,
    nav: localizedNav,
    tours: localizedTours,
    gallery: localizedGallery,
    process: localizedProcess,
    contacts: localizedContacts,
    inquiryChips,
    company: {
      eyebrow: t("company.eyebrow"),
      tagline: t("company.tagline"),
      lede: t("company.lede"),
      mission: t("company.mission"),
      engineering: t("company.engineering"),
      slogan: t("company.slogan"),
      footer: t("company.footer"),
    },
  };
}
