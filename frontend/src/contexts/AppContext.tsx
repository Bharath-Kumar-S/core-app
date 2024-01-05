import { Toast } from "@/components/Toast";
import React, { useState } from "react";

type ToastMessage = {
  message: string;
  type: "SUCCESS" | "ERROR";
};

type AppContext = {
  showToast: (toastMessage: ToastMessage) => void;
};

const AppContext = React.createContext<AppContext | undefined>(undefined);

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [toast, setToast] = useState<ToastMessage | undefined>(undefined);

  return (
    <AppContext.Provider
      value={{ showToast: (toastMsg) => setToast(toastMsg) }}
    >
      {toast && <Toast {...toast} onClose={() => setToast(undefined)} />}
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = React.useContext(AppContext);
  return context as AppContext;
};
