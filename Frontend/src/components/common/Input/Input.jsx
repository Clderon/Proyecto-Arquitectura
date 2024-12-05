import './Input.css';

export default function Input({
    type = 'text',
    name = '',
    placeholder,
    value,
    variant = 'default',
    onChange,
    ...props
}) {
    return (
        <input
            className={`${type}`}
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            {...props}
        />
    );
}
