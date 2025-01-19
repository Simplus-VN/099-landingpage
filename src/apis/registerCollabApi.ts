import axiosInstance from "../axios/axiosInstance.ts";

export const registerCollabApi = {
    sendTicket: async (data: any) => {
        return axiosInstance.post("/api/v1/tickets", data);
    }
}