import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  Dimensions,
  StatusBar,
} from "react-native";

const { height, width } = Dimensions.get("window");

export default function Profile() {
  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <Text>Profile Screen</Text>
        </ScrollView>
      </SafeAreaView>
      <StatusBar barStyle="dark-content" />
    </>
  );
}

const styles = StyleSheet.create({});
