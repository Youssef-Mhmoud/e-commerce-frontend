const CenteredMessage = ({ children, className = "" }) => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className={`text-lg ${className}`}>{children}</div>
    </div>
  );
};

export default CenteredMessage;
