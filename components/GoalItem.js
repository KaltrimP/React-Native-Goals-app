import { StyleSheet, Text, Pressable, View } from "react-native";

function GoalItem({id, item, deleteItem}) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#CF33EB" }}
        onPress={deleteItem.bind(this, id)}
      >
        <Text style={styles.goalText}>* {item} *</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalText: {
    justifyContent: "center",

    padding: 5,
    color: "white",
    textAlign: "center",
  },
  goalItem: {
    marginTop: 5,
    margin: 5,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    borderBottomWidth: 1,
    borderRightWidth: 1,
  },
});
