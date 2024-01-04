import { register } from "@/hooks/api/user/fetcher";
import { useMutation } from "@tanstack/react-query";

export const useRegisterUser = () => {
  return useMutation({ mutationFn: register });
};
