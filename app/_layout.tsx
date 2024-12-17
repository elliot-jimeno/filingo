import { Slot, useRouter } from "expo-router";
import { useEffect } from "react";
import { AuthProvider, useAuth } from "../contexts/AuthContext";

export default function RootLayout() {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
}

function App() {
  const router = useRouter();
  const { isSignedIn } = useAuth();

  useEffect(() => {
    if (isSignedIn) {
      router.replace("/main");
    } else {
      router.replace("/public/(survey-questions)/question1");
    }
  }, [isSignedIn]);

  return <Slot />;
}
