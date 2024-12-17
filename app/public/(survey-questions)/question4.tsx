import SurveyQuestion from "@/components/SurveyQuestion";
import { StyleSheet } from "react-native";

export default function Question4() {
  return (
    <SurveyQuestion question="Question 4" nextRoute="/public/auth/signup" />
  );
}

const styles = StyleSheet.create({});
