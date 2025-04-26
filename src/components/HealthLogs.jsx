import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { apiClient } from "../services/config";
import {
  ClipboardList,
  Loader2,
  Trash2,
  Pencil,
  Check,
  ArrowLeft,
  Activity,
} from "lucide-react";
import toast from "react-hot-toast";

const HealthLogs = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editId, setEditId] = useState(null);
  const [editForm, setEditForm] = useState({});
  const [showRecommendations, setShowRecommendations] = useState(true);
  const navigate = useNavigate();

  const fetchLogs = async () => {
    try {
      const response = await apiClient.get("/request");
      setLogs(response.data.request || []);
    } catch (error) {
      console.error("Error fetching health logs:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLogs();
  }, []);

  const handleDelete = (id) => {
    
    toast((t) => (
      <div>
        <p>Are you sure you want to delete this health log?</p>
        <div className="flex justify-between mt-2">
          <button
            onClick={() => {
              confirmDelete(id);
              toast.dismiss(t.id); 
            }}
            className="text-red-600 hover:text-red-800"
          >
            Yes
          </button>
          <button
            onClick={() => toast.dismiss(t.id)} 
            className="text-green-600 hover:text-green-800"
          >
            No
          </button>
        </div>
      </div>
    ), {
      duration: Infinity, 
      position: "top-center",
      style: { background: "#fff", boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)" },
      closeButton: false, 
    });
  };

  const confirmDelete = async (id) => {
    try {
      await apiClient.delete(`/request/${id}`);
      setLogs(logs.filter((log) => log._id !== id));
      toast.success("Health log deleted successfully!");
    } catch (error) {
      console.error("Error deleting log:", error);
      toast.error("Failed to delete the health log.");
    }
  };

  const handleEditClick = (log) => {
    setEditId(log._id);
    setEditForm({
      title: log.title,
      description: log.description,
      specialty: log.specialty,
    });
  };

  const handleEditChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const handleEditSave = async () => {
    try {
      await apiClient.patch(`/request/${editId}`, editForm);
      setEditId(null);
      fetchLogs();
      toast.success("Health log updated successfully!");
    } catch (error) {
      console.error("Error updating log:", error);
      toast.error("Failed to update the health log.");
    }
  };

  const handleGoBack = () => {
    navigate("/patient-dash");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f0fdf4] to-[#FFFFFF] p-6 text-gray-800">
      <div className="sticky top-0 bg-white z-10 shadow-md py-4 mb-6">
        <h2 className="text-3xl font-bold text-center text-[#1A6436]">
          <Activity size={32} className="inline mr-2" />
          Health Logs
        </h2>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-40">
          <Loader2 className="animate-spin text-[#7ECD26]" size={48} />
        </div>
      ) : logs.length === 0 ? (
        <p className="text-center text-gray-500">No health logs found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {logs.map((log) => (
            <div
              key={log._id}
              className="bg-white p-6 rounded-2xl shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300"
            >
              {editId === log._id ? (
                <div className="space-y-4">
                  <input
                    name="title"
                    value={editForm.title}
                    onChange={handleEditChange}
                    className="w-full border p-4 rounded-xl text-gray-700 shadow-sm"
                    placeholder="Title"
                  />
                  <input
                    name="description"
                    value={editForm.description}
                    onChange={handleEditChange}
                    className="w-full border p-4 rounded-xl text-gray-700 shadow-sm"
                    placeholder="Description"
                  />
                  <input
                    name="specialty"
                    value={editForm.specialty}
                    onChange={handleEditChange}
                    className="w-full border p-4 rounded-xl text-gray-700 shadow-sm"
                    placeholder="Specialty"
                  />
                  <button
                    onClick={handleEditSave}
                    className="text-white bg-[#7ECD26] hover:bg-[#1A6436] px-6 py-3 rounded-xl transition-all duration-300"
                  >
                    <Check size={18} /> Save
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="font-semibold text-xl mb-2 text-[#1A6436] flex items-center gap-2">
                    <ClipboardList size={22} /> {log.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {log.description}
                  </p>
                  <p className="text-xs text-gray-500">
                    Specialty: {log.specialty}
                  </p>
                  <p className="text-xs text-gray-500">
                    Location: {log.location || "N/A"}
                  </p>
                  <p className="text-xs text-gray-500">
                    Contact: {log.followUpContact || "N/A"}
                  </p>
                  <p className="text-xs text-gray-500">Status: {log.status}</p>

                  <div className="flex gap-6 mt-6">
                    <button
                      onClick={() => handleEditClick(log)}
                      className="text-[#1A6436] hover:text-[#7ECD26] flex items-center gap-1 font-medium"
                    >
                      <Pencil size={16} /> Edit
                    </button>
                    <button
                      onClick={() => handleDelete(log._id)}
                      className="text-red-600 hover:text-red-800 flex items-center gap-1 font-medium"
                    >
                      <Trash2 size={16} /> Delete
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      )}

      <div className="fixed top-4 left-6 z-10">
        <button
          onClick={() => navigate("/patient-dash")}
          className="text-[#7ECD26] text-3xl rounded-full p-2 hover:bg-[#7ECD26] hover:text-white transition duration-300"
        >
          <ArrowLeft size={24} />
        </button>
      </div>

      {showRecommendations && (
        <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-200 mt-8">
          <h3 className="text-xl font-semibold text-[#1A6436] mb-4">
            Health Recommendations
          </h3>
          <ul className="text-sm text-gray-700 list-disc pl-6 space-y-3">
            <li>
              Adhere to prescribed medication and treatment plans for the best
              recovery results.
            </li>
            <li>
              Stay hydrated, rest well, and avoid strenuous activities while
              recovering.
            </li>
            <li>
              Schedule follow-up consultations with your healthcare provider to
              track progress.
            </li>
          </ul>
          <div className="mt-6 text-center">
            <button
              onClick={() => setShowRecommendations(false)}
              className="text-[#7ECD26] hover:text-[#1A6436] font-medium text-sm"
            >
              Hide Recommendations
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HealthLogs;
