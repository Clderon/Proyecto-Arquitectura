import './Select.css';
export default function Select({
    name,
    value,
    options = [],
    placeholder = 'Seleccionar',
    onChange,
    required = false,
    ...props
}) {
    return (
        <select
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            placeholder={placeholder}
            className="select"
            {...props}
        >
            <option value="" disabled selected>
                {placeholder}
            </option>
            {options.map((option, index) => (
                <option key={index} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
}
