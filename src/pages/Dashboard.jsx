import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Sidebar from "../components/Sidebar";
import DoctorProfileCard from "../components/DoctorProfileCard";
import { apiGetAllRequests } from "../services/request";

const Dashboard = () => {
  const [assignedRequests, setAssignedRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const res = await apiGetAllRequests();
        const data = res?.data;
        const requests = Array.isArray(data?.requests)
          ? data.requests
          : Array.isArray(data)
          ? data
          : [];
        setAssignedRequests(requests);
      } catch (err) {
        console.error(err);
        setError("Failed to load requests.");
      } finally {
        setLoading(false);
      }
    };
    fetchRequests();
  }, []);

  const updateStatus = (id, newStatus) => {
    setAssignedRequests((prev) =>
      prev.map((req) => (req._id === id ? { ...req, status: newStatus } : req))
    );
  };

  const handleRespond = (request) => {
    navigate(`/doctor/respond/${request._id}`);
  };

  const handleView = (id) => {
    navigate(`/doctor/request/${id}`);
  };

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-white to-[#F4FBF4]">
        <div className="text-lg font-semibold animate-pulse text-[#1A6436]">
          Loading your dashboard...
        </div>
        <div className="ml-4 w-6 h-6 border-4 border-t-[#7ECD26] border-transparent rounded-full animate-spin"></div>
      </div>
    );

  if (error)
    return (
      <div className="text-red-600 text-center mt-10 font-semibold">
        {error}
      </div>
    );

  const renderRequestCard = (request) => (
    <div
      key={request._id}
      className="bg-white shadow rounded-lg p-6 flex flex-col justify-between space-y-4"
    >
      <div>
        <h4 className="text-lg font-semibold text-[#1A6436]">
          {request.patientName || "Unnamed Patient"}
        </h4>
        <p className="text-sm text-gray-600 mt-2">
          Symptoms: {request.symptoms || "Not specified"}
        </p>
        <p className="text-sm text-gray-600 mt-1">
          Status: <span className="font-semibold">{request.status}</span>
        </p>
      </div>
      <div className="flex flex-wrap gap-2 mt-4">
        <button
          onClick={() => handleView(request._id)}
          className="px-4 py-2 bg-[#1A6436] hover:bg-[#14522A] text-white text-sm rounded-md"
        >
          View
        </button>
        <button
          onClick={() => handleRespond(request)}
          className="px-4 py-2 bg-[#7ECD26] hover:bg-[#6ABB1E] text-white text-sm rounded-md"
        >
          Respond
        </button>
        {request.status === "Pending" && (
          <button
            onClick={() => updateStatus(request._id, "In Progress")}
            className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white text-sm rounded-md"
          >
            Start
          </button>
        )}
        {request.status === "In Progress" && (
          <button
            onClick={() => updateStatus(request._id, "Completed")}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm rounded-md"
          >
            Complete
          </button>
        )}
      </div>
    </div>
  );

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#F4FBF4] via-white to-[#F4FBF4]">
      <Sidebar />

      <main className="flex-1 px-4 sm:px-6 lg:px-10 py-6 space-y-8 overflow-y-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 text-center sm:text-left">
          <h1 className="text-2xl font-bold text-[#1A6436]">
            Welcome, <br className="sm:hidden" /> Dr. Angela Opoku
          </h1>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={() => navigate("/doctor/request")}
              className="px-6 py-2 bg-[#1A6436] hover:bg-[#14522A] text-white rounded-lg shadow-md transition"
              title="View all patient requests"
            >
              View All Requests
            </button>
          </div>
        </div>

        <DoctorProfileCard />

        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-[#1A6436]">
              My Assigned Requests
            </h2>
            <button
              onClick={() => navigate("/doctor/request")}
              className="px-4 py-2 bg-[#1A6436] hover:bg-[#14522A] text-white rounded-lg shadow-md text-sm transition"
            >
              View All
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
