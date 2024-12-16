import { useAccountAuthetication } from "../../store";

export const useLogin = () => {
  const setIsAdmin = useAccountAuthetication((state) => state.setIsAdmin);
  const setIsUser = useAccountAuthetication((state) => state.setIsUser);

  // Return a function for logging in
  return (account, password) => {
    // Mock Data for Authentication
    if (account === "john.doe@example.com" && password === "password123") {
      setIsAdmin();
      return { isAdmin: true, isUser: false };
    } else if (
      account === "jane.smith@example.com" &&
      password === "securepass"
    ) {
      setIsUser();
      return { isAdmin: false, isUser: true };
    } else {
      // Invalid credentials
      return { isAdmin: false, isUser: false };
    }
  };
};
