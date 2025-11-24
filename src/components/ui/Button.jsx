const base = "inline-flex justify-center items-center px-4 py-2 min-w-28 font-base rounded";

const variants = {
  primary: "bg-primary text-white",
  secondary: "bg-seconday border border-border",
  disabled: "bg-gray-400 text-white",
};

function Button({ variant = "primary", className = "", children, ...props }) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

export default Button;
