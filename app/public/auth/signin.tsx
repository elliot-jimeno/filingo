import { useRouter } from "expo-router";
import { StyleSheet, SafeAreaView, ScrollView, Button } from "react-native";
import { useAuth } from "../../../contexts/AuthContext";

export default function SignIn() {
  const router = useRouter();
  const { signIn } = useAuth();

  return (
    <SafeAreaView>
      <ScrollView>
        <Button
          title="Sign in"
          onPress={() => {
            signIn();
            router.push("/main");
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
