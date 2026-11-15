function UserProfileCard({
  avatar,
  fullName,
  jobTitle,
  isOnline,
  skills,
}) {
  const handleContact = () => {
    alert(`Đang kết nối với ${fullName}...`);
  };

  return (
    <div className="bg-white shadow-lg p-6 rounded-xl w-full max-w-sm">

      {/* Avatar */}
      <div className="flex justify-center mb-4">
        <img
          src={avatar}
          alt={fullName}
          className="rounded-full w-24 h-24 object-cover"
        />
      </div>

      {/* User information */}
      <h2 className="font-bold text-xl text-center">
        {fullName}
      </h2>

      <p className="mt-1 text-gray-500 text-center">
        {jobTitle}
      </p>

      {/* Online status */}
      <div className="flex justify-center items-center gap-2 mt-4">
        <span
          className={`w-3 h-3 rounded-full ${
            isOnline ? "bg-green-400" : "bg-gray-400"
          }`}
        ></span>

        <span className="text-gray-600 text-sm">
          {isOnline ? "Online" : "Offline"}
        </span>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap justify-center gap-2 mt-5">
        {skills.map((skill) => (
          <span
            key={skill}
            className="bg-blue-100 px-3 py-1 rounded-full text-blue-700 text-sm"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Contact button */}
      <button
        onClick={handleContact}
        className="bg-blue-600 hover:bg-blue-700 mt-6 py-2 rounded-lg w-full text-white transition"
      >
        Liên hệ
      </button>

    </div>
  );
}

export default UserProfileCard;