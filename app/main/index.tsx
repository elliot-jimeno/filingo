import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
  StatusBar,
  Image,
} from "react-native";
import Category from "../../components/Category";

const { width } = Dimensions.get("window");

export default function Index() {
  return (
    <>
      <SafeAreaView>
        <ScrollView
          contentContainerStyle={{ paddingBottom: 16 }}
          showsVerticalScrollIndicator={false}
        >
          <View>
            <View style={styles.container}>
              <View>
                <Text style={styles.heading}>Kumusta,</Text>
                <Text style={styles.name}>Elliot</Text>
              </View>
              <Image
                source={require("../../assets/images/star.png")}
                style={styles.image}
              />
            </View>
            <View style={{ paddingHorizontal: 16 }}>
              <View style={styles.progressView}></View>
            </View>
            <Category name="Bokabularyo" />
            <Category name="Gramatika" />
          </View>
        </ScrollView>
      </SafeAreaView>
      <StatusBar barStyle="dark-content" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  heading: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#0032A0",
  },
  name: {
    fontSize: 24,
  },
  progressView: {
    height: 250,
    borderRadius: width * 0.06,
    backgroundColor: "gray",
  },
  image: {
    width: 55,
    height: 55,
    resizeMode: "contain",
    marginRight: 6,
  },
});
