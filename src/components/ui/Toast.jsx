function Toast({ message }) {
  return (
    <div className="bg-black bg-opacity-70 text-white px-4 py-2 rounded shadow-lg animate-fade-up">
      {message}
    </div>
  );
}

export default Toast;
