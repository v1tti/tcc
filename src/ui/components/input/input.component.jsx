export function Input({ type, name, label, value, onChange, onBlur, children }) {
  return (
    <div className="input-container">
      <label htmlFor={name}>{label}</label>
      {type === "select" ? (
        <select name={name} id={name} value={value} onChange={onChange} onBlur={onBlur}>
          {children}
        </select>
      ) : (
        <input
          type={type}
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      )}
    </div>
  );
}
