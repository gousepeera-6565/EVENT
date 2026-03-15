import axios from "axios";
import AuthService from "./authService";

const BASE_URL = "http://localhost:8080";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});

// Attach JWT token to every request
axiosInstance.interceptors.request.use(
  (config) => {
    const token = AuthService.getToken();
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Handle 401 — token expired or invalid
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      AuthService.logout();
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

// const HttpService = {
//   get: (url, params = {}) => axiosInstance.get(url, { params }),
//   post: (url, data = {}) => axiosInstance.post(url, data),
//   put: (url, data = {}) => axiosInstance.put(url, data),
//   delete: (url) => axiosInstance.delete(url),
// };

// export default HttpService;



// ── MOCK MODE — All API calls return fake data ──
// To switch to real backend: replace each mock response with real axios calls

// ── MOCK MODE — All API calls return fake data ──
// To switch to real backend: replace each mock response with real axios calls

const delay = (ms = 800) => new Promise((r) => setTimeout(r, ms));

// ── Mock Database ──
const MOCK_EVENTS = [
  {
    eventId: 4,
    title: "Annual Charity Gala 2024",
    description: "A black-tie fundraising gala supporting local education initiatives. Over 500 guests attended.",
    dateTime: "2024-09-10T18:00:00",
    location: "Raffles Hotel Grand Ballroom",
    status: "COMPLETED",
    setupStatus: "COMPLETED",
    allocations: [
      { allocationId: 5, quantity: 2, resource: { resourceId: 5, name: "Projector Screen XL", type: "EQUIPMENT" } },
      { allocationId: 6, quantity: 1, resource: { resourceId: 7, name: "Conference Room B", type: "VENUE" } },
    ],
  },
  {
    eventId: 5,
    title: "Product Launch — NexGen",
    description: "Exclusive launch event for the NexGen enterprise platform, attended by 300 industry leaders.",
    dateTime: "2024-06-20T14:00:00",
    location: "Marina Bay Sands Expo",
    status: "COMPLETED",
    setupStatus: "COMPLETED",
    allocations: [
      { allocationId: 7, quantity: 3, resource: { resourceId: 1, name: "Main Stage Audio System", type: "EQUIPMENT" } },
    ],
  },
  {
    eventId: 1,
    title: "Annual Tech Summit 2025",
    description: "A premier gathering of tech leaders and innovators across Southeast Asia.",
    dateTime: "2025-11-15T09:00:00",
    location: "Marina Bay Convention Centre, Singapore",
    status: "ONGOING",
    setupStatus: "IN_PROGRESS",
    allocations: [
      {
    eventId: 4,
    title: "Annual Charity Gala 2024",
    description: "A black-tie fundraising gala supporting local education initiatives. Over 500 guests attended.",
    dateTime: "2024-09-10T18:00:00",
    location: "Raffles Hotel Grand Ballroom",
    status: "COMPLETED",
    setupStatus: "COMPLETED",
    allocations: [
      { allocationId: 5, quantity: 2, resource: { resourceId: 5, name: "Projector Screen XL", type: "EQUIPMENT" } },
      { allocationId: 6, quantity: 1, resource: { resourceId: 7, name: "Conference Room B", type: "VENUE" } },
    ],
  },
  {
    eventId: 5,
    title: "Product Launch — NexGen",
    description: "Exclusive launch event for the NexGen enterprise platform, attended by 300 industry leaders.",
    dateTime: "2024-06-20T14:00:00",
    location: "Marina Bay Sands Expo",
    status: "COMPLETED",
    setupStatus: "COMPLETED",
    allocations: [
      { allocationId: 7, quantity: 3, resource: { resourceId: 1, name: "Main Stage Audio System", type: "EQUIPMENT" } },
    ],
  },
  { allocationId: 1, quantity: 1, resource: { resourceId: 1, name: "Main Stage Audio System", type: "EQUIPMENT" } },
      {
    eventId: 4,
    title: "Annual Charity Gala 2024",
    description: "A black-tie fundraising gala supporting local education initiatives. Over 500 guests attended.",
    dateTime: "2024-09-10T18:00:00",
    location: "Raffles Hotel Grand Ballroom",
    status: "COMPLETED",
    setupStatus: "COMPLETED",
    allocations: [
      { allocationId: 5, quantity: 2, resource: { resourceId: 5, name: "Projector Screen XL", type: "EQUIPMENT" } },
      { allocationId: 6, quantity: 1, resource: { resourceId: 7, name: "Conference Room B", type: "VENUE" } },
    ],
  },
  {
    eventId: 5,
    title: "Product Launch — NexGen",
    description: "Exclusive launch event for the NexGen enterprise platform, attended by 300 industry leaders.",
    dateTime: "2024-06-20T14:00:00",
    location: "Marina Bay Sands Expo",
    status: "COMPLETED",
    setupStatus: "COMPLETED",
    allocations: [
      { allocationId: 7, quantity: 3, resource: { resourceId: 1, name: "Main Stage Audio System", type: "EQUIPMENT" } },
    ],
  },
  { allocationId: 2, quantity: 1, resource: { resourceId: 2, name: "Jane Reyes — Coordinator", type: "STAFF" } },
      {
    eventId: 4,
    title: "Annual Charity Gala 2024",
    description: "A black-tie fundraising gala supporting local education initiatives. Over 500 guests attended.",
    dateTime: "2024-09-10T18:00:00",
    location: "Raffles Hotel Grand Ballroom",
    status: "COMPLETED",
    setupStatus: "COMPLETED",
    allocations: [
      { allocationId: 5, quantity: 2, resource: { resourceId: 5, name: "Projector Screen XL", type: "EQUIPMENT" } },
      { allocationId: 6, quantity: 1, resource: { resourceId: 7, name: "Conference Room B", type: "VENUE" } },
    ],
  },
  {
    eventId: 5,
    title: "Product Launch — NexGen",
    description: "Exclusive launch event for the NexGen enterprise platform, attended by 300 industry leaders.",
    dateTime: "2024-06-20T14:00:00",
    location: "Marina Bay Sands Expo",
    status: "COMPLETED",
    setupStatus: "COMPLETED",
    allocations: [
      { allocationId: 7, quantity: 3, resource: { resourceId: 1, name: "Main Stage Audio System", type: "EQUIPMENT" } },
    ],
  },
  { allocationId: 3, quantity: 1, resource: { resourceId: 3, name: "Hall A — Grand Ballroom", type: "VENUE" } },
    ],
  },
  {
    eventId: 4,
    title: "Annual Charity Gala 2024",
    description: "A black-tie fundraising gala supporting local education initiatives. Over 500 guests attended.",
    dateTime: "2024-09-10T18:00:00",
    location: "Raffles Hotel Grand Ballroom",
    status: "COMPLETED",
    setupStatus: "COMPLETED",
    allocations: [
      { allocationId: 5, quantity: 2, resource: { resourceId: 5, name: "Projector Screen XL", type: "EQUIPMENT" } },
      { allocationId: 6, quantity: 1, resource: { resourceId: 7, name: "Conference Room B", type: "VENUE" } },
    ],
  },
  {
    eventId: 5,
    title: "Product Launch — NexGen",
    description: "Exclusive launch event for the NexGen enterprise platform, attended by 300 industry leaders.",
    dateTime: "2024-06-20T14:00:00",
    location: "Marina Bay Sands Expo",
    status: "COMPLETED",
    setupStatus: "COMPLETED",
    allocations: [
      { allocationId: 7, quantity: 3, resource: { resourceId: 1, name: "Main Stage Audio System", type: "EQUIPMENT" } },
    ],
  },
  {
    eventId: 2,
    title: "Product Launch — CloudX",
    description: "Exclusive launch event for the new CloudX enterprise platform.",
    dateTime: "2025-12-05T14:00:00",
    location: "Suntec City Convention Centre",
    status: "PLANNED",
    setupStatus: "NOT_STARTED",
    allocations: [
      {
    eventId: 4,
    title: "Annual Charity Gala 2024",
    description: "A black-tie fundraising gala supporting local education initiatives. Over 500 guests attended.",
    dateTime: "2024-09-10T18:00:00",
    location: "Raffles Hotel Grand Ballroom",
    status: "COMPLETED",
    setupStatus: "COMPLETED",
    allocations: [
      { allocationId: 5, quantity: 2, resource: { resourceId: 5, name: "Projector Screen XL", type: "EQUIPMENT" } },
      { allocationId: 6, quantity: 1, resource: { resourceId: 7, name: "Conference Room B", type: "VENUE" } },
    ],
  },
  {
    eventId: 5,
    title: "Product Launch — NexGen",
    description: "Exclusive launch event for the NexGen enterprise platform, attended by 300 industry leaders.",
    dateTime: "2024-06-20T14:00:00",
    location: "Marina Bay Sands Expo",
    status: "COMPLETED",
    setupStatus: "COMPLETED",
    allocations: [
      { allocationId: 7, quantity: 3, resource: { resourceId: 1, name: "Main Stage Audio System", type: "EQUIPMENT" } },
    ],
  },
  { allocationId: 4, quantity: 4, resource: { resourceId: 4, name: "LED Display Panels", type: "EQUIPMENT" } },
    ],
  },
  {
    eventId: 4,
    title: "Annual Charity Gala 2024",
    description: "A black-tie fundraising gala supporting local education initiatives. Over 500 guests attended.",
    dateTime: "2024-09-10T18:00:00",
    location: "Raffles Hotel Grand Ballroom",
    status: "COMPLETED",
    setupStatus: "COMPLETED",
    allocations: [
      { allocationId: 5, quantity: 2, resource: { resourceId: 5, name: "Projector Screen XL", type: "EQUIPMENT" } },
      { allocationId: 6, quantity: 1, resource: { resourceId: 7, name: "Conference Room B", type: "VENUE" } },
    ],
  },
  {
    eventId: 5,
    title: "Product Launch — NexGen",
    description: "Exclusive launch event for the NexGen enterprise platform, attended by 300 industry leaders.",
    dateTime: "2024-06-20T14:00:00",
    location: "Marina Bay Sands Expo",
    status: "COMPLETED",
    setupStatus: "COMPLETED",
    allocations: [
      { allocationId: 7, quantity: 3, resource: { resourceId: 1, name: "Main Stage Audio System", type: "EQUIPMENT" } },
    ],
  },
  {
    eventId: 3,
    title: "Team Building Retreat",
    description: "Annual team building and strategy retreat for all departments.",
    dateTime: "2025-10-20T08:00:00",
    location: "Sentosa Island Resort",
    status: "COMPLETED",
    setupStatus: "COMPLETED",
    allocations: [],
  },
];

const MOCK_RESOURCES = [
  {
    eventId: 4,
    title: "Annual Charity Gala 2024",
    description: "A black-tie fundraising gala supporting local education initiatives. Over 500 guests attended.",
    dateTime: "2024-09-10T18:00:00",
    location: "Raffles Hotel Grand Ballroom",
    status: "COMPLETED",
    setupStatus: "COMPLETED",
    allocations: [
      { allocationId: 5, quantity: 2, resource: { resourceId: 5, name: "Projector Screen XL", type: "EQUIPMENT" } },
      { allocationId: 6, quantity: 1, resource: { resourceId: 7, name: "Conference Room B", type: "VENUE" } },
    ],
  },
  {
    eventId: 5,
    title: "Product Launch — NexGen",
    description: "Exclusive launch event for the NexGen enterprise platform, attended by 300 industry leaders.",
    dateTime: "2024-06-20T14:00:00",
    location: "Marina Bay Sands Expo",
    status: "COMPLETED",
    setupStatus: "COMPLETED",
    allocations: [
      { allocationId: 7, quantity: 3, resource: { resourceId: 1, name: "Main Stage Audio System", type: "EQUIPMENT" } },
    ],
  },
  { resourceId: 1, name: "Main Stage Audio System", type: "EQUIPMENT", availability: false },
  {
    eventId: 4,
    title: "Annual Charity Gala 2024",
    description: "A black-tie fundraising gala supporting local education initiatives. Over 500 guests attended.",
    dateTime: "2024-09-10T18:00:00",
    location: "Raffles Hotel Grand Ballroom",
    status: "COMPLETED",
    setupStatus: "COMPLETED",
    allocations: [
      { allocationId: 5, quantity: 2, resource: { resourceId: 5, name: "Projector Screen XL", type: "EQUIPMENT" } },
      { allocationId: 6, quantity: 1, resource: { resourceId: 7, name: "Conference Room B", type: "VENUE" } },
    ],
  },
  {
    eventId: 5,
    title: "Product Launch — NexGen",
    description: "Exclusive launch event for the NexGen enterprise platform, attended by 300 industry leaders.",
    dateTime: "2024-06-20T14:00:00",
    location: "Marina Bay Sands Expo",
    status: "COMPLETED",
    setupStatus: "COMPLETED",
    allocations: [
      { allocationId: 7, quantity: 3, resource: { resourceId: 1, name: "Main Stage Audio System", type: "EQUIPMENT" } },
    ],
  },
  { resourceId: 2, name: "Jane Reyes — Coordinator", type: "STAFF", availability: false },
  {
    eventId: 4,
    title: "Annual Charity Gala 2024",
    description: "A black-tie fundraising gala supporting local education initiatives. Over 500 guests attended.",
    dateTime: "2024-09-10T18:00:00",
    location: "Raffles Hotel Grand Ballroom",
    status: "COMPLETED",
    setupStatus: "COMPLETED",
    allocations: [
      { allocationId: 5, quantity: 2, resource: { resourceId: 5, name: "Projector Screen XL", type: "EQUIPMENT" } },
      { allocationId: 6, quantity: 1, resource: { resourceId: 7, name: "Conference Room B", type: "VENUE" } },
    ],
  },
  {
    eventId: 5,
    title: "Product Launch — NexGen",
    description: "Exclusive launch event for the NexGen enterprise platform, attended by 300 industry leaders.",
    dateTime: "2024-06-20T14:00:00",
    location: "Marina Bay Sands Expo",
    status: "COMPLETED",
    setupStatus: "COMPLETED",
    allocations: [
      { allocationId: 7, quantity: 3, resource: { resourceId: 1, name: "Main Stage Audio System", type: "EQUIPMENT" } },
    ],
  },
  { resourceId: 3, name: "Hall A — Grand Ballroom", type: "VENUE", availability: false },
  {
    eventId: 4,
    title: "Annual Charity Gala 2024",
    description: "A black-tie fundraising gala supporting local education initiatives. Over 500 guests attended.",
    dateTime: "2024-09-10T18:00:00",
    location: "Raffles Hotel Grand Ballroom",
    status: "COMPLETED",
    setupStatus: "COMPLETED",
    allocations: [
      { allocationId: 5, quantity: 2, resource: { resourceId: 5, name: "Projector Screen XL", type: "EQUIPMENT" } },
      { allocationId: 6, quantity: 1, resource: { resourceId: 7, name: "Conference Room B", type: "VENUE" } },
    ],
  },
  {
    eventId: 5,
    title: "Product Launch — NexGen",
    description: "Exclusive launch event for the NexGen enterprise platform, attended by 300 industry leaders.",
    dateTime: "2024-06-20T14:00:00",
    location: "Marina Bay Sands Expo",
    status: "COMPLETED",
    setupStatus: "COMPLETED",
    allocations: [
      { allocationId: 7, quantity: 3, resource: { resourceId: 1, name: "Main Stage Audio System", type: "EQUIPMENT" } },
    ],
  },
  { resourceId: 4, name: "LED Display Panels", type: "EQUIPMENT", availability: false },
  {
    eventId: 4,
    title: "Annual Charity Gala 2024",
    description: "A black-tie fundraising gala supporting local education initiatives. Over 500 guests attended.",
    dateTime: "2024-09-10T18:00:00",
    location: "Raffles Hotel Grand Ballroom",
    status: "COMPLETED",
    setupStatus: "COMPLETED",
    allocations: [
      { allocationId: 5, quantity: 2, resource: { resourceId: 5, name: "Projector Screen XL", type: "EQUIPMENT" } },
      { allocationId: 6, quantity: 1, resource: { resourceId: 7, name: "Conference Room B", type: "VENUE" } },
    ],
  },
  {
    eventId: 5,
    title: "Product Launch — NexGen",
    description: "Exclusive launch event for the NexGen enterprise platform, attended by 300 industry leaders.",
    dateTime: "2024-06-20T14:00:00",
    location: "Marina Bay Sands Expo",
    status: "COMPLETED",
    setupStatus: "COMPLETED",
    allocations: [
      { allocationId: 7, quantity: 3, resource: { resourceId: 1, name: "Main Stage Audio System", type: "EQUIPMENT" } },
    ],
  },
  { resourceId: 5, name: "Projector Screen XL", type: "EQUIPMENT", availability: true },
  {
    eventId: 4,
    title: "Annual Charity Gala 2024",
    description: "A black-tie fundraising gala supporting local education initiatives. Over 500 guests attended.",
    dateTime: "2024-09-10T18:00:00",
    location: "Raffles Hotel Grand Ballroom",
    status: "COMPLETED",
    setupStatus: "COMPLETED",
    allocations: [
      { allocationId: 5, quantity: 2, resource: { resourceId: 5, name: "Projector Screen XL", type: "EQUIPMENT" } },
      { allocationId: 6, quantity: 1, resource: { resourceId: 7, name: "Conference Room B", type: "VENUE" } },
    ],
  },
  {
    eventId: 5,
    title: "Product Launch — NexGen",
    description: "Exclusive launch event for the NexGen enterprise platform, attended by 300 industry leaders.",
    dateTime: "2024-06-20T14:00:00",
    location: "Marina Bay Sands Expo",
    status: "COMPLETED",
    setupStatus: "COMPLETED",
    allocations: [
      { allocationId: 7, quantity: 3, resource: { resourceId: 1, name: "Main Stage Audio System", type: "EQUIPMENT" } },
    ],
  },
  { resourceId: 6, name: "Mark Santos — AV Tech", type: "STAFF", availability: true },
  {
    eventId: 4,
    title: "Annual Charity Gala 2024",
    description: "A black-tie fundraising gala supporting local education initiatives. Over 500 guests attended.",
    dateTime: "2024-09-10T18:00:00",
    location: "Raffles Hotel Grand Ballroom",
    status: "COMPLETED",
    setupStatus: "COMPLETED",
    allocations: [
      { allocationId: 5, quantity: 2, resource: { resourceId: 5, name: "Projector Screen XL", type: "EQUIPMENT" } },
      { allocationId: 6, quantity: 1, resource: { resourceId: 7, name: "Conference Room B", type: "VENUE" } },
    ],
  },
  {
    eventId: 5,
    title: "Product Launch — NexGen",
    description: "Exclusive launch event for the NexGen enterprise platform, attended by 300 industry leaders.",
    dateTime: "2024-06-20T14:00:00",
    location: "Marina Bay Sands Expo",
    status: "COMPLETED",
    setupStatus: "COMPLETED",
    allocations: [
      { allocationId: 7, quantity: 3, resource: { resourceId: 1, name: "Main Stage Audio System", type: "EQUIPMENT" } },
    ],
  },
  { resourceId: 7, name: "Conference Room B", type: "VENUE", availability: true },
];

// ── Mock API Router ──
const mockGet = async (url) => {
  await delay();
  if (url.includes("/api/planner/completed-events")) return { data: MOCK_EVENTS.filter((e) => e.status === "COMPLETED") };
  if (url.includes("/api/planner/events")) return { data: MOCK_EVENTS };
  if (url.includes("/api/planner/resources/available"))
    return { data: MOCK_RESOURCES.filter((r) => r.availability) };
  if (url.match(/\/api\/staff\/event-details\/(\d+)/)) {
    const id = parseInt(url.split("/").pop());
    const event = MOCK_EVENTS.find((e) => e.eventId === id) || MOCK_EVENTS[0];
    return {
      data: {
        ...event,
        resources: event.allocations.map((a) => ({ ...a.resource, quantity: a.quantity })),
      },
    };
  }
  if (url.match(/\/api\/client\/booking-details\/(\d+)/)) {
    const id = parseInt(url.split("/").pop());
    const event = MOCK_EVENTS.find((e) => e.eventId === id) || MOCK_EVENTS[0];
    return { data: { ...event, allocatedResources: event.allocations.map((a) => ({ ...a.resource, quantity: a.quantity })) } };
  }
  return { data: [] };
};

const mockPost = async (url, data) => {
  await delay();
  console.log(`[MOCK POST] ${url}`, data);
  return { data: { message: "Success", ...data } };
};

const mockPut = async (url, data) => {
  await delay();
  console.log(`[MOCK PUT] ${url}`, data);
  return { data: { message: "Updated successfully", ...data } };
};

const HttpService = {
  get: (url, params = {}) => mockGet(url),
  post: (url, data = {}) => mockPost(url, data),
  put: (url, data = {}) => mockPut(url, data),
  delete: (url) => delay().then(() => ({ data: { message: "Deleted" } })),
};

export default HttpService;