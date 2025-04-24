import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { apiClient } from "../services/config";
import { ClipboardList, Loader2 } from "lucide-react";

const HealthLogs = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchLogs = async () => {
    try {
      const response = await apiClient.get("/request");
      console.log("Fetched logs:", response.data);
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

  const handleGoBack = () => {
    navigate("/patient-dash");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#f0fdf4] p-6 text-gray-800">
      <h2 className="text-2xl font-bold mb-4 text-center">📝 Health Logs</h2>

      <button
        onClick={handleGoBack}
        className="mb-4 px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600"
      >
        Back to Dashboard
      </button>

      {loading ? (
        <div className="flex justify-center items-center h-40">
          <Loader2 className="animate-spin text-teal-500" size={32} />
        </div>
      ) : logs.length === 0 ? (
        <p className="text-center text-gray-500">No health logs found.</p>
      ) : (
        <div className="space-y-4">
          {logs.map((log) => (
            <div
              key={log._id}
              className="bg-white p-4 rounded-xl shadow-md border border-gray-200"
            >
              <h3 className="font-semibold text-lg mb-1 flex items-center gap-2">
                <ClipboardList size={20} /> {log.title}
              </h3>
              <p className="text-sm text-gray-600 mb-1">{log.description}</p>
              <p className="text-xs text-gray-400">
                Specialty: {log.specialty}
              </p>
              <p className="text-xs text-gray-400">
                Location: {log.location || "N/A"}
              </p>
              <p className="text-xs text-gray-400">
                Contact: {log.followUpContact || "N/A"}
              </p>
              <p className="text-xs text-gray-400">Status: {log.status}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HealthLogs;
