import SurveyQuestion from "@/components/SurveyQuestion";
import { StyleSheet } from "react-native";

export default function Question3() {
  return (
    <SurveyQuestion
      question="Question 3"
      nextRoute="/public/(survey-questions)/question4"
    />
  );
}

const styles = StyleSheet.create({});
