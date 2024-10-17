import "./button.css"

export function Button({ children, onClick, className }) {
  return (
    <button className={`project-button${className}`} onClick={onClick}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  className: "",
};
