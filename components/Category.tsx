import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";

const { width } = Dimensions.get("window");

export default function Category({ name }: { name: string }) {
  const router = useRouter();

  const handlePress = (lessonName: string) => {
    // Navigate to a specific route when a lesson is clicked
    // router.push(`/lesson/${lessonName}`);
  };

  return (
    <>
      <Text style={styles.name}>{name}</Text>
      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.lessonCategory}
        >
          <TouchableOpacity
            style={[styles.lessonView, { marginLeft: 16 }]}
            onPress={() => handlePress("lesson-1")} // Replace "lesson-1" with actual lesson data
          >
            <Text style={styles.lessonText}>Lesson 1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.lessonView}
            onPress={() => handlePress("lesson-2")} // Replace "lesson-2" with actual lesson data
          >
            <Text style={styles.lessonText}>Lesson 2</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  name: {
    color: "#BF0D3E",
    padding: 16,
    fontSize: 32,
    fontWeight: "bold",
  },
  lessonView: {
    height: 180,
    width: 210,
    marginRight: 24,
    borderRadius: width * 0.06,
    backgroundColor: "gray",
    // justifyContent: "center",
    // alignItems: "center",
  },
  lessonCategory: {
    flexDirection: "row",
    paddingVertical: 10,
  },
  lessonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },
});
