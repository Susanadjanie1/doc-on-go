import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { apiClient } from "../services/config";
import { Loader2 } from "lucide-react";
import RequestCard from "../components/RequestCard";

const MyRequests = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();


  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await apiClient.get("/my-requests");
        const list = Array.isArray(response.data.request)
          ? response.data.request
          : [];
        setRequests(list);
      } catch (err) {
        console.error("Error fetching requests:", err);
        setError("Error fetching requests");
      } finally {
        setLoading(false);
      }
    };
    fetchRequests();
  }, []);

  const updateStatus = (id, newStatus) => {
    setRequests((prev) =>
      prev.map((req) => (req._id === id ? { ...req, status: newStatus } : req))
    );
  };

  const handleRespond = (request) => {
    navigate(`/doctor/respond/${request._id}`);
  };

  const handleView = (id) => {
    navigate(`/doctor/request/${id}`);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader2 className="animate-spin text-[#1A6436]" size={48} />
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 text-center mt-6">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F4FBF4] via-white to-[#F4FBF4] p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-[#1A6436]">
          My Assigned Requests
        </h1>
        <button
          onClick={() => navigate("/dashboard")}
          className="flex items-start text-[#1A6436] hover:text-[#14522A] text-sm font-medium"
        >
          ← Back to Dashboard
        </button>
      </div>

      {requests.length === 0 ? (
        <div className="bg-white shadow-md rounded-xl p-6 text-gray-600 text-center">
          No requests available.
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {requests.map((request) => (
            <RequestCard
              key={request._id}
              request={request}
              onUpdateStatus={updateStatus}
              onRespond={handleRespond}
              onView={handleView}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyRequests;
