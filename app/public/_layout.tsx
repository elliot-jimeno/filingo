import { Stack } from "expo-router";

export default function PublicLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="(survey-questions)"
        options={{ headerShown: false, title: "Survey" }}
      />
      <Stack.Screen
        name="auth/signin"
        options={{ headerShown: false, title: "Sign In" }}
      />
      <Stack.Screen
        name="auth/signup"
        options={{ headerShown: false, title: "Sign Up" }}
      />
    </Stack>
  );
}
