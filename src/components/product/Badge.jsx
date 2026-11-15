
function Badge({ children, color = "red" }) {
  const colorClasses = {
    red: "bg-red-100 text-red-600",
    gray: "bg-gray-200 text-gray-600",
    green: "bg-green-100 text-green-600",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-semibold ${colorClasses[color]}`}
    >
      {children}
    </span>
  );
}

export default Badge;
