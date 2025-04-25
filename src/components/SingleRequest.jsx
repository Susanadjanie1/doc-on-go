import React, { useState, useEffect } from "react";
import { apiGetSingleRequest } from "../services/request";

const SingleRequest = ({ requestId }) => {
  const [request, setRequest] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRequest = async () => {
      try {
        const response = await apiGetSingleRequest(requestId);
        setRequest(response.data);
      } catch (err) {
        setError("Error fetching request");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRequest();
  }, [requestId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>{request.requestName}</h1>
      <p>{request.status}</p>
      <p>{request.patientName}</p>
      <p>{request.time}</p>
    </div>
  );
};

export default SingleRequest;
