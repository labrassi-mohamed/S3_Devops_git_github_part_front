export const handleApiError = (error: any) => {
  if (error.response) {
    // Server error (status code outside 2xx)
    console.error("Server Error:", error.response.status, error.response.data);
  } else if (error.request) {
    // No response received
    console.error("Network Error:", error.request);
  } else {
    // Other errors
    console.error("Error:", error.message);
  }
};
