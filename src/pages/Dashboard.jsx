import { useState } from "react";
import Sidebar from "../components/Sidebar";
import DoctorProfileCard from "../components/DoctorProfileCard";
import RequestCard from "../components/RequestCard";
import RespondModal from "../components/RequestModal";

// Sample requests assigned to the doctor
const requests = [
  {
    id: 1,
    patientName: "Kwame Mensah",
    issue: "Blurred vision and headaches",
    status: "Pending",
    time: "10 mins ago",
  },
  {
    id: 2,
    patientName: "Ama Serwaa",
    issue: "Severe eye irritation",
    status: "In Progress",
    time: "1 hour ago",
  },
];

const Dashboard = () => {
  const [assignedRequests, setAssignedRequests] = useState(requests);
  const [selectedRequest, setSelectedRequest] = useState(null); // For modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const updateStatus = (id, newStatus) => {
    setAssignedRequests((prev) =>
      prev.map((req) => (req.id === id ? { ...req, status: newStatus } : req))
    );
  };

  const handleRespond = (request) => {
    setSelectedRequest(request);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedRequest(null);
    setIsModalOpen(false);
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#f0f4f8] to-[#d9e8ec]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 space-y-6 overflow-y-auto">
        {/* Welcome message */}
        <h1 className="text-2xl font-bold mb-4">
          Good day, Dr. Angela Opoku 👩‍⚕️
        </h1>

        {/* Doctor's Profile */}
        <DoctorProfileCard />

        {/* Assigned Patient Requests */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Assigned Requests</h2>
          <div className="space-y-4">
            {assignedRequests.map((request) => (
              <RequestCard
                key={request.id}
                request={request}
                onUpdateStatus={updateStatus}
                onRespond={handleRespond}
              />
            ))}
          </div>
        </section>
      </div>

      {/* Modal to respond to request */}
      {isModalOpen && selectedRequest && (
        <RespondModal request={selectedRequest} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default Dashboard;
