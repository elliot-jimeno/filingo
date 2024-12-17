import SurveyQuestion from "@/components/SurveyQuestion";
import { StyleSheet } from "react-native";

export default function Question1() {
  return (
    <SurveyQuestion
      question="Question 1"
      nextRoute="/public/(survey-questions)/question2"
    />
  );
}

const styles = StyleSheet.create({});
