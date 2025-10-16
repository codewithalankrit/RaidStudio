const LoadingSpinner = ({ size = 24, className = "" }: { size?: number; className?: string }) => {
  return (
    <div 
      className={`animate-spin rounded-full border-2 border-gray-300 border-t-black ${className}`}
      style={{ width: size, height: size }}
    />
  );
};

export default LoadingSpinner;