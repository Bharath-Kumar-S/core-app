import { logout } from "@/hooks/api/user/logout/fetcher";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useLogoutUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: logout,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["validateToken"] });
    },
  });
};
