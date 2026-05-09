type Option = {
  label: string;
  value?: string;
};

type Field =
  | { label: string; name: string; type?: string; placeholder?: string; autocomplete?: string }
  | { label: string; name: string; kind: "select"; options: Option[] }
  | { label: string; name: string; kind: "textarea"; placeholder?: string };

type FormCardProps = {
  fields: Field[];
  submitLabel: string;
  secondary?: {
    href: string;
    label: string;
  };
  title?: string;
  eyebrow?: string;
  summary?: string;
  note?: string;
};

export function FormCard({ fields, submitLabel, secondary, title, eyebrow, summary, note }: FormCardProps) {
  return (
    <section className="booking-card">
      <div className="booking-left">
        {eyebrow ? <p className="booking-eyebrow">{eyebrow}</p> : null}
        {title ? <h2>{title}</h2> : null}
        {summary ? <p className="booking-summary">{summary}</p> : null}
        <div className="booking-meta">
          <div>
            <span>15 min</span>
            <p>Focused call to align the next step.</p>
          </div>
          <div>
            <span>Web call</span>
            <p>Confirmation includes meeting details.</p>
          </div>
        </div>
        {note ? <p className="booking-note">{note}</p> : null}
      </div>
      <form className="form-card">
        {fields.map((field) => (
          <label key={field.name}>
            {field.label}
            {"kind" in field && field.kind === "select" ? (
              <select name={field.name}>
                {field.options.map((option) => (
                  <option key={option.value ?? option.label} value={option.value ?? option.label}>
                    {option.label}
                  </option>
                ))}
              </select>
            ) : "kind" in field && field.kind === "textarea" ? (
              <textarea name={field.name} placeholder={field.placeholder} />
            ) : (
              <input
                name={field.name}
                type={field.type ?? "text"}
                placeholder={field.placeholder}
                autoComplete={field.autocomplete}
              />
            )}
          </label>
        ))}
        <div className="form-actions">
          <button className="button" type="button">
            {submitLabel}
          </button>
          {secondary ? (
            <a className="button button-ghost" href={secondary.href}>
              {secondary.label}
            </a>
          ) : null}
        </div>
      </form>
    </section>
  );
}
