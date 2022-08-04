import { StyleSheet, View, TextInput, Button } from "react-native";

function GoalInput(props) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Enter goals!"
        onChangeText={props.inputHandler}
      ></TextInput>
      <Button onPress={props.goalHandler} title="+ Goal"></Button>
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: "aqua",
    width: "60%",
    alignContent: "center",
    paddingLeft: 20,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
