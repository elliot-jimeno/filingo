import SurveyQuestion from "@/components/SurveyQuestion";
import { StyleSheet } from "react-native";

export default function Question2() {
  return (
    <SurveyQuestion
      question="Question 2"
      nextRoute="/public/(survey-questions)/question3"
    />
  );
}

const styles = StyleSheet.create({});
