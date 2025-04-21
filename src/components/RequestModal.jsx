const RespondModal = ({ request, onClose }) => {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-2xl shadow-lg max-w-md w-full">
          <h2 className="text-xl font-semibold mb-4">Respond to {request.patientName}</h2>
          <p className="text-gray-600 mb-4">{request.issue}</p>
  
          <textarea
            placeholder="Write your diagnosis and prescription..."
            className="w-full border rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows={4}
          ></textarea>
  
          <div className="flex justify-end space-x-3">
            <button onClick={onClose} className="text-gray-600 hover:underline">Cancel</button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Submit</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default RespondModal;
  