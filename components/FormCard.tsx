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
};

export function FormCard({ fields, submitLabel, secondary }: FormCardProps) {
  return (
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
  );
}
