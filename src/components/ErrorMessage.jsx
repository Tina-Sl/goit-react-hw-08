import toast, { Toaster } from "react-hot-toast";

const ErrorMessage = (message) => {
  const toastOptions = {
    duration: 6000,
    style: {
      background: "#A52A2A",
      color: "#fff",
    },
  };
  toast.error(message);
  <Toaster containerStyle={{ top: 100 }} toastOptions={toastOptions} />;
};

export default ErrorMessage;
