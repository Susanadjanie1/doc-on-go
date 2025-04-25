import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { apiClient } from "../services/config";

const DoctorRespond = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [request, setRequest] = useState(null);
  const [diagnosis, setDiagnosis] = useState("");
  const [meds, setMeds] = useState([{ medication: "", dosage: "", duration: "" }]);
  const [referral, setReferral] = useState("");
  const [referralReason, setReferralReason] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRequest = async () => {
      try {
        const res = await apiClient.get(`/my-singlerequest/${id}`);
        setRequest(res.data);
      } catch (err) {
        setError("Error fetching request");
        console.error("Error fetching request:", err);
      }
    };
    fetchRequest();
  }, [id]);

  const handleSubmit = async () => {
    if (!diagnosis || meds.some((med) => !med.medication || !med.dosage || !med.duration)) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    try {
      await apiClient.post(`/response/${id}`, {
        diagnosis,
        prescription: meds,
        referral,
        referral_reason: referralReason,
      });
      alert("Response submitted!");
      navigate("/doctor-dash"); 
    } catch (error) {
      console.error("Error submitting response:", error);
      alert("Failed to submit response.");
    }
  };

  if (error) return <div>{error}</div>;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Respond to Request</h2>

      {request ? (
        <div className="space-y-4 bg-white p-6 rounded-xl shadow">
          <p><strong>Patient:</strong> {request.patientName}</p>
          <p><strong>Issue:</strong> {request.issue}</p>

          <textarea
            placeholder="Diagnosis"
            className="w-full border p-2 rounded"
            value={diagnosis}
            onChange={(e) => setDiagnosis(e.target.value)}
          />

          {meds.map((med, i) => (
            <div key={i} className="grid grid-cols-3 gap-2">
              <input
                placeholder="Medication"
                className="border p-2 rounded"
                value={med.medication}
                onChange={(e) => {
                  const updated = [...meds];
                  updated[i].medication = e.target.value;
                  setMeds(updated);
                }}
              />
              <input
                placeholder="Dosage"
                className="border p-2 rounded"
                value={med.dosage}
                onChange={(e) => {
                  const updated = [...meds];
                  updated[i].dosage = e.target.value;
                  setMeds(updated);
                }}
              />
              <input
                placeholder="Duration"
                className="border p-2 rounded"
                value={med.duration}
                onChange={(e) => {
                  const updated = [...meds];
                  updated[i].duration = e.target.value;
                  setMeds(updated);
                }}
              />
            </div>
          ))}

          <button
            onClick={() => setMeds([...meds, { medication: "", dosage: "", duration: "" }])}
            className="text-blue-600 text-sm mt-2"
          >
            + Add Medication
          </button>

          <input
            placeholder="Referral"
            className="w-full border p-2 rounded"
            value={referral}
            onChange={(e) => setReferral(e.target.value)}
          />

          <input
            placeholder="Referral Reason"
            className="w-full border p-2 rounded"
            value={referralReason}
            onChange={(e) => setReferralReason(e.target.value)}
          />

          <button
            onClick={handleSubmit}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Submit Response
          </button>
        </div>
      ) : (
        <p>Loading request...</p>
      )}
    </div>
  );
};

export default DoctorRespond;
