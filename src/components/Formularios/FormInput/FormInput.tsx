interface FormInputProps 
{
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

export function FormInput({ name, label, type = "text", placeholder, value, onChange, required = false,}: FormInputProps) 
{
  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "5px" }}>
      {label && <p>{label}:</p>}
      <input
        className="forminput"
        name={name}
        value={value}
        type={type}
        placeholder={placeholder || label}
        onChange={onChange}
        required={required}
      />
    </div>
  );
}