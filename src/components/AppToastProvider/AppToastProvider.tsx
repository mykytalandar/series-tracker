import { ToastContainer, Zoom } from "react-toastify";

export const AppToastProvider: React.FC = () => (
  <ToastContainer
    position="bottom-left"
    autoClose={3000}
    theme="dark"
    transition={Zoom}
    closeOnClick
  />
);
