import { CheckCircle, MessageSquare } from "lucide-react";

const RequestCard = ({ request, onStart, onComplete, onRespond }) => {
  return (
    <div className="bg-white p-5 rounded-2xl shadow flex flex-col space-y-3">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-semibold text-md">{request.patientName}</h3>
          <p className="text-sm text-gray-500">{request.issue}</p>
        </div>
        <span className="text-xs text-gray-400">{request.time}</span>
      </div>

      <div className="flex items-center space-x-2">
        <span
          className={`px-2 py-1 text-xs rounded-full ${
            request.status === "Pending"
              ? "bg-yellow-100 text-yellow-600"
              : request.status === "In Progress"
              ? "bg-blue-100 text-blue-600"
              : "bg-green-100 text-green-600"
          }`}
        >
          {request.status}
        </span>

        {request.status !== "Completed" && (
          <>
            {request.status === "Pending" && (
              <button
                onClick={() => onStart(request.id)}
                className="ml-auto text-sm text-blue-600 hover:underline flex items-center"
              >
                <CheckCircle size={16} className="mr-1" /> Start
              </button>
            )}
            {request.status === "In Progress" && (
              <button
                onClick={() => onComplete(request.id)}
                className="ml-auto text-sm text-green-600 hover:underline flex items-center"
              >
                <CheckCircle size={16} className="mr-1" /> Complete
              </button>
            )}
          </>
        )}

        <button
          onClick={() => onRespond(request)}
          className="text-sm text-gray-500 hover:underline flex items-center"
        >
          <MessageSquare size={16} className="mr-1" /> Respond
        </button>
      </div>
    </div>
  );
};

export default RequestCard;
