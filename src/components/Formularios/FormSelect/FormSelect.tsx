interface FormSelectProps 
{
  name: string;
  label: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  required?: boolean;
}

export function FormSelect({ name, label, value, options, onChange, required=false }: FormSelectProps) 
{
  return (
    <tr>
      <td>{label}:</td>
      <td>
        <select 
            name={name}
            value={value} 
            onChange={onChange} 
            required={required}>
            <option 
                value="">Seleccione {label.toLowerCase()}
            </option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </td>
    </tr>
  );
}