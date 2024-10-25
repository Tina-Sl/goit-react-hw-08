import toast, { Toaster } from "react-hot-toast";

const ErrorMessage = (message, err = true) => {
  const toastOptions = {
    duration: 6000,
  };
  err ? toast.error(message) : toast.success(message);

  <Toaster containerStyle={{ top: 100 }} toastOptions={toastOptions} />;
};

export default ErrorMessage;
