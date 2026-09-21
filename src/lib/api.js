// Self-contained mock API — no backend / database required.
// Every function below resolves from static, in-memory data (see
// src/data/mockData.js) after a short simulated delay, so the whole
// client runs standalone with `npm run dev`.

import { directoryRecords, certificates } from "../data/mockData";

const DELAY_MS = 400;

function wait(ms = DELAY_MS) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function ok(data) {
  await wait();
  return { data };
}

async function fail(message) {
  await wait();
  throw new Error(message);
}

export const api = {
  verifyCertificate: async (certificateNumber) => {
    const key = (certificateNumber || "").trim().toUpperCase();
    const record = certificates[key];
    if (!record) return fail("Certificate not found. Please check the number and try again.");
    return ok(record);
  },

  listDirectory: async (type, query = "") => {
    const records = directoryRecords[type] || [];
    const q = query.trim().toLowerCase();
    const filtered = q
      ? records.filter((item) => item.name.toLowerCase().includes(q) || item.subtitle.toLowerCase().includes(q))
      : records;
    return ok(filtered);
  },

  submitEnquiry: async (payload) => {
    console.info("[mock] enquiry submitted", payload);
    return ok({ received: true });
  },

  submitApplication: async (payload) => {
    console.info("[mock] application submitted", payload);
    return ok({ received: true });
  },

  submitAwardNomination: async (payload) => {
    console.info("[mock] award nomination submitted", payload);
    return ok({ received: true });
  },

  listContent: async (type) => {
    console.info("[mock] listContent requested", type);
    return ok([]);
  },
};
