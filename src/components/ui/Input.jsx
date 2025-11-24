const base = "block w-full rounded border px-4 py-2 text-sm";

const variants = {
  default: "border-gray-300 focus:border-blue-500",
};

function Input({ variant = "default", className = "", ...props }) {
  return (
    <input className={`${base} ${variants[variant]} ${className}`} {...props} />
  );
}

export default Input;
