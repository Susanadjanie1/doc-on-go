import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { apiClient } from "../services/config";
import { Loader2 } from "lucide-react";
import RequestCard from "../components/RequestCard";

const MyRequests = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Fetch doctor's assigned requests
  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await apiClient.get('/my-requests');
        const data = response.data;
        // Normalize data shape
        const list = Array.isArray(data.requests)
          ? data.requests
          : Array.isArray(data)
          ? data
          : [];
        setRequests(list);
      } catch (err) {
        console.error('Error fetching requests:', err);
        setError('Error fetching requests');
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
        <Loader2 className="animate-spin text-teal-500" size={48} />
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 text-center mt-6">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0f4f8] to-[#d9e8ec] p-6">
      <h1 className="text-2xl font-bold mb-6">My Assigned Requests</h1>
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
