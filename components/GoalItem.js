import { StyleSheet, Text, Pressable, View } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#CF33EB" }}
        onPress={props.deleteItem.bind(this, props.id)}
      >
        <Text style={styles.goalText}>* {props.item} *</Text>
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
