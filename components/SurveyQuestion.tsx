import {
  StyleSheet,
  Text,
  ScrollView,
  Dimensions,
  SafeAreaView,
  Button,
  StatusBar,
} from "react-native";
import { useRouter } from "expo-router";

const { width } = Dimensions.get("window");

export default function SurveyQuestion({
  question,
  nextRoute,
}: {
  question: string;
  nextRoute: any;
}) {
  const router = useRouter();

  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <Text>{question}</Text>
          <Button
            title="Next Question"
            onPress={() => {
              router.push(nextRoute);
            }}
          />
        </ScrollView>
      </SafeAreaView>
      <StatusBar barStyle="dark-content" />
    </>
  );
}

const styles = StyleSheet.create({});
