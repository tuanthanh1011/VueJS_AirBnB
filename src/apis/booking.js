import axiosAPI from ".";
export const getAllBookingAPI = async () => {
  return await axiosAPI.get("/bookings");
};

export const createBookingAPI = async (data) => {
  return await axiosAPI.post("/bookings", data);
};

export const deleteBookingAPI = async (bookingId) => {
  return await axiosAPI.delete(`/bookings/${bookingId}`);
};
