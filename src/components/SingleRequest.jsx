import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { apiClient } from "../services/config";
import { Loader2 } from "lucide-react";
import backgroundImage from "../assets/images/doc-1.png";

const SingleRequest = () => {
  const { id } = useParams();
  const [request, setRequest] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchRequest = async () => {
      try {
        const response = await apiClient.get(`/my-singlerequest/${id}`);
        console.log("Fetched Single Request:", response.data);
        setRequest(response.data);
      } catch (err) {
        console.error("Error fetching single request:", err);
        setError("Failed to load request details");
      } finally {
        setLoading(false);
      }
    };

    fetchRequest();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader2 className="animate-spin text-[#7ECD26]" size={48} />
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 text-center mt-6">{error}</div>;
  }

  if (!request) {
    return <div className="text-gray-500 text-center mt-6">Request not found.</div>;
  }

  return (
    <div className="min-h-screen p-6 bg-gradient-to-b from-[#F4FBF4] to-white">
      <h1 className="text-2xl font-bold mb-6 text-[#1A6436] text-center">
        Request Details
      </h1>

      <div className="bg-white shadow-lg rounded-xl p-6 border border-[#E0F5E1]">
        <p className="mb-2"><strong className="text-[#1A6436]">Title:</strong> {request.title}</p>
        <p className="mb-2"><strong className="text-[#1A6436]">Description:</strong> {request.description}</p>
        <p className="mb-2"><strong className="text-[#1A6436]">Specialty:</strong> {request.specialty}</p>
        <p className="mb-2"><strong className="text-[#1A6436]">Status:</strong> {request.status}</p>
        <p className="mb-4"><strong className="text-[#1A6436]">Created At:</strong> {new Date(request.createdAt).toLocaleString()}</p>
        
        <button 
          onClick={() => navigate(-1)} 
          className="text-[#7ECD26] hover:underline mt-4"
        >
          ← Back
        </button>
      </div>

      <div
        className="h-[70vh] mt-8 rounded-xl overflow-hidden shadow-lg flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundColor: "[#7ECD26]",
          backgroundBlendMode: "overlay",
        }}
      ></div>
    </div>
  );
};

export default SingleRequest;
