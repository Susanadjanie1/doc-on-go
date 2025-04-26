import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { apiClient } from "../services/config";
import toast from "react-hot-toast";
import { ArrowLeft, ArrowRight } from "lucide-react";

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
      toast.error("Please fill in all fields before submitting.");
      return;
    }

    try {
      await apiClient.post(`/response/${id}`, {
        diagnosis,
        prescription: meds,
        referral,
        referral_reason: referralReason,
      });
      toast.success("Response submitted!");
      navigate("/dashboard");
    } catch (error) {
      console.error("Error submitting response:", error);
      toast.error("Failed to submit response.");
    }
  };

  const handleClearMedication = (index) => {
    const updatedMeds = [...meds];
    updatedMeds[index] = { medication: "", dosage: "", duration: "" };
    setMeds(updatedMeds);
  };

  if (error) return <div>{error}</div>;

  return (
    <div
      className="p-6 bg-cover bg-center min-h-screen"
      style={{ backgroundImage: "url('/path/to/your/image.jpg')" }}
    >
      <div className="flex justify-between items-center mb-8">
        <div
          onClick={() => navigate("/dashboard")}
          className="text-green-600 cursor-pointer flex items-center space-x-2"
        >
          <ArrowLeft className="w-6 h-6" />
          <span>Go to Dashboard</span>
        </div>
        <div
          onClick={() => navigate("/doctor/request")}
          className="text-green-600 cursor-pointer flex items-center space-x-2"
        >
          <ArrowRight className="w-6 h-6" />
          <span>Go to Requests</span>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-[#1A6436] mb-4">Respond to Request</h2>

      {request ? (
        <div className="space-y-4 bg-white p-6 rounded-xl shadow">
          <p className="text-lg font-semibold">
            <span className="font-bold">Patient:</span> {request.patientName}
          </p>
          <p className="text-md">
            <span className="font-bold">Issue:</span> {request.issue}
          </p>

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
            className="text-green-600 text-sm mt-2"
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
            className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
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
