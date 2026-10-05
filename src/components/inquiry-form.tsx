import { useState, type FormEvent } from "react";
import { contacts, whatsappPrefill } from "@/lib/content";
import { useCopy } from "@/lib/use-copy";
import { Button } from "@/components/ui/button";
import { Input, Label, Textarea } from "@/components/ui/field";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "yolda-inquiries";

export function InquiryForm() {
  const { t, tours, inquiryChips } = useCopy();
  const [name, setName] = useState("");
  const [property, setProperty] = useState("");
  const [category, setCategory] = useState(tours[0].id);
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function applyChip(chip: string) {
    setMessage((prev) => (prev ? prev : chip));
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const inquiry = {
      name,
      property,
      category,
      message,
      at: new Date().toISOString(),
    };
    try {
      const prev = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]") as unknown[];
      localStorage.setItem(STORAGE_KEY, JSON.stringify([inquiry, ...prev].slice(0, 20)));
    } catch {
      /* ignore quota */
    }
    setSent(true);
  }

  if (sent) {
    const tour = tours.find((i) => i.id === category);
    const text = encodeURIComponent(
      `${whatsappPrefill} I'm ${name || "a traveller"} writing from ${property || "—"}. Interested in ${tour?.name ?? "a photography expedition"}. ${message}`,
    );
    return (
      <div className="rounded-3xl bg-surface p-8 shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-fg)_10%,transparent)]">
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-accent">
          {t("form.received")}
        </p>
        <h3 className="mt-3 font-display text-3xl font-medium">{t("form.touch")}</h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
          {t("form.saved")}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {contacts.map((c) => (
            <a
              key={c.id}
              href={`${c.wa}?text=${text}`}
              className="inline-flex min-h-11 items-center rounded-full bg-fg px-5 text-sm font-medium text-bg"
            >
              WhatsApp {c.name}
            </a>
          ))}
          <Button type="button" variant="outline" onClick={() => setSent(false)}>
            {t("cta.sendAnother")}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">{t("form.name")}</Label>
          <Input
            id="name"
            required
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Alex Rivera"
          />
        </div>
        <div>
          <Label htmlFor="property">{t("form.property")}</Label>
          <Input
            id="property"
            required
            value={property}
            onChange={(e) => setProperty(e.target.value)}
            placeholder="São Paulo"
          />
        </div>
      </div>

      <div>
        <Label>{t("form.type")}</Label>
        <div className="flex flex-wrap gap-2">
          {tours.map((tour) => (
            <button
              key={tour.id}
              type="button"
              onClick={() => setCategory(tour.id)}
              className={cn(
                "min-h-10 rounded-full px-3.5 text-[12px] font-medium transition-[background-color,color] duration-150",
                category === tour.id
                  ? "bg-fg text-bg"
                  : "text-muted shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-fg)_14%,transparent)] hover:text-fg",
              )}
            >
              {tour.name}
            </button>
          ))}
        </div>
      </div>

      <div>
        <Label htmlFor="message">{t("form.need")}</Label>
        <div className="mb-3 flex flex-wrap gap-2">
          {inquiryChips.map((chip) => (
            <button
              key={chip}
              type="button"
              onClick={() => applyChip(chip)}
              className="rounded-full px-3 py-1.5 text-[11px] text-muted shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-fg)_12%,transparent)] hover:text-fg"
            >
              {chip}
            </button>
          ))}
        </div>
        <Textarea
          id="message"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={t("form.placeholder")}
        />
      </div>

      <Button type="submit" className="w-full sm:w-auto">
        {t("cta.sendInquiry")}
      </Button>
    </form>
  );
}
