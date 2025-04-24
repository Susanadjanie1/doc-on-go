import { apiClient } from "./config";

export const apiCreateRequest = async (payload) =>
  apiClient.post("/request", payload);

export const apiUploadRequestImage = async (payload) => {
  const formData = new FormData();
  formData.append("image", payload.image);
  formData.append("requestId", payload.requestId);

  return apiClient.post("/request-image", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const apiGetAllRequests = async () => apiClient.get("/request");

export const apiGetSingleRequest = async (id) => {
  if (!id || id === "undefined") {
    throw new Error("Invalid or missing request ID");
  }
  return apiClient.get(`/request/${id}`);
};

export const apiUpdateRequest = async (id, payload) =>
  apiClient.patch(`/request/${id}`, payload);

export const apiUpdateRequestImage = async (id, payload) => {
  const formData = new FormData();
  formData.append("image", payload.image);

  return apiClient.patch(`/request-image/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const apiDeleteRequest = async (id) =>
  apiClient.delete(`/request/${id}`);
