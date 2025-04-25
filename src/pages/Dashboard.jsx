import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Sidebar from "../components/Sidebar";
import DoctorProfileCard from "../components/DoctorProfileCard";
import RequestCard from "../components/RequestCard";
import { apiGetAllRequests } from "../services/request";

const Dashboard = () => {
  const [assignedRequests, setAssignedRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [singleId, setSingleId] = useState("");
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

  const isValidId = singleId && /^[a-zA-Z0-9]{24}$/.test(singleId); // Example regex for MongoDB ObjectId

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

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#F4FBF4] via-white to-[#F4FBF4]">
      <Sidebar />

      <main className="flex-1 px-4 sm:px-6 lg:px-10 py-6 space-y-8 overflow-y-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#1A6436]">
            Welcome, Dr. Angela Opoku 👩‍⚕️
          </h1>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={() => navigate("/doctor/requests")}
              className="px-6 py-2 bg-[#1A6436] hover:bg-[#14522A] text-white rounded-lg shadow-md transition"
              title="View all patient requests"
            >
              View All Requests
            </button>

            <div className="flex items-center gap-4 sm:gap-6 w-full sm:w-auto">
              <input
                type="text"
                placeholder="Enter Request ID"
                value={singleId}
                onChange={(e) => setSingleId(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7ECD26] w-full"
                aria-label="Enter Request ID"
              />
              <button
                onClick={() => handleView(singleId)}
                disabled={!isValidId}
                className={`px-4 py-2 rounded-lg shadow-md transition ${
                  isValidId
                    ? "bg-[#7ECD26] hover:bg-[#6ABF22] text-white"
                    : "bg-gray-300 text-gray-600 cursor-not-allowed"
                }`}
                title="Go to Request Details"
              >
                Go
              </button>
            </div>
          </div>
        </div>

        <DoctorProfileCard />

        <section>
          <h2 className="text-xl font-semibold text-[#1A6436] mb-4">
            Your Assigned Requests
          </h2>

          {assignedRequests.length === 0 ? (
            <div className="bg-white shadow-md rounded-xl p-6 text-gray-600 text-center">
              No requests available at the moment.
            </div>
          ) : (
            <>
              <section>
                <h3 className="text-lg font-semibold text-[#1A6436] mb-4">Pending Requests</h3>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {assignedRequests
                    .filter((request) => request.status === "Pending")
                    .map((request) => (
                      <RequestCard
                        key={request._id}
                        request={request}
                        onUpdateStatus={updateStatus}
                        onRespond={handleRespond}
                        onView={handleView}
                      />
                    ))}
                </div>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-[#1A6436] mb-4">Completed Requests</h3>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {assignedRequests
                    .filter((request) => request.status === "Completed")
                    .map((request) => (
                      <RequestCard
                        key={request._id}
                        request={request}
                        onUpdateStatus={updateStatus}
                        onRespond={handleRespond}
                        onView={handleView}
                      />
                    ))}
                </div>
              </section>
            </>
          )}
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
