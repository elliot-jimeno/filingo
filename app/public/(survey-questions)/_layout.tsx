import { Stack } from "expo-router";

export default function SurveyLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="question1"
        options={{ headerShown: false, title: "Question 1" }}
      />
      <Stack.Screen
        name="question2"
        options={{ headerShown: false, title: "Question 2" }}
      />
      <Stack.Screen
        name="question3"
        options={{ headerShown: false, title: "Question 3" }}
      />
      <Stack.Screen
        name="question4"
        options={{ headerShown: false, title: "Question 4" }}
      />
    </Stack>
  );
}
