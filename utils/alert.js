import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyToast = (message, type) => {
  toast[type](message, {
    position: toast.POSITION?.TOP_RIGHT,
    autoClose: 3000, // 3 seconds
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Bounce,
  });
};

export default MyToast;
