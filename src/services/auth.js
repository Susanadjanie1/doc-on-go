// auth.js
import { apiClient, localClient } from "./config";

// For hosted doctor API
export const registerDoctor = (payload) =>
  apiClient.post("/doctor/register", payload, {
    headers: { "Content-Type": "application/json" },
  });

export const loginDoctor = (payload) =>
  apiClient.post("/doctor/login", payload, {
    headers: { "Content-Type": "application/json" },
  });

// For local patient API
export const registerPatient = (payload) =>
  localClient.post("/patient/register", payload, {
    headers: { "Content-Type": "application/json" },
  });

export const loginPatient = (payload) =>
  localClient.post("/patient/login", payload, {
    headers: { "Content-Type": "application/json" },
  });
