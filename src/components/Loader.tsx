const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full border-4 border-t-transparent border-emerald-500 animate-spin"></div>
        <div className="absolute inset-2 bg-emerald-100 rounded-full"></div>
      </div>
    </div>
  );
};

export default Loader;
