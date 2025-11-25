const base = "relative bg-white p-2 rounded shadow-lg";

function Modal({ isOpen, onClose, className = "", children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>
      <div className={`${base} ${className}`}>{children}</div>
    </div>
  );
}

export default Modal;
