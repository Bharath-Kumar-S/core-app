import { useAppContext } from "@/contexts/AppContext";
import { useLogoutUser } from "@/hooks/api/user/logout/logout-user";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

export const SignOutButton = () => {
  const queryClient = useQueryClient();
  const { showToast } = useAppContext();
  const { mutate, isSuccess, isError } = useLogoutUser();

  useEffect(() => {
    if (isSuccess) {
      queryClient.invalidateQueries({ queryKey: ["validateToken"] });
      showToast({ message: "Logged out successfully", type: "SUCCESS" });
    }
    if (isError) {
      showToast({ message: "Error logging out", type: "ERROR" });
    }
  });

  return (
    <button
      className="text-blue-600 px-3 font-bold bg-white hover:bg-gray-100"
      onClick={() => mutate()}
    >
      Sign Out
    </button>
  );
};
