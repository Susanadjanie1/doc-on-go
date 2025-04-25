import DocImg from "../assets/images/f-doc.png";

const DoctorProfileCard = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 flex items-center space-x-4">
      <img
        src={DocImg}
        alt="Doctor"
        className="w-20 h-20 rounded-full object-cover shadow-md"
      />
      <div>
        <h2 className="text-xl font-semibold">Dr. Angela Opoku</h2>
        <p className="text-gray-500 text-sm">Pedetrician</p>
        <p className="text-green-500 text-sm">Online</p>
      </div>
    </div>
  );
};

export default DoctorProfileCard;
