import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
} from "react-native";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [myGoals, setMyGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    setMyGoals((currentGoals) => [...currentGoals, enteredGoalText]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter goals!"
          onChangeText={goalInputHandler}
        ></TextInput>
        <Button onPress={addGoalHandler} title="+ Goal"></Button>
      </View>
      <View>
        <ScrollView>
          {myGoals.map((goal) => (
            <Text style={styles.goalItemStyle} key={goal}>
              * {goal} *
            </Text>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 20,
    marginTop: 15,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "aqua",
    width: "60%",
    alignContent: "center",
    paddingLeft: 20,
  },
  goalItemStyle: {
    borderColor: "lightgreen",
    borderBottomWidth: 1,
    borderRightWidth: 1,
    justifyContent: "center",
    marginTop: 5,
    margin: 5,
    padding: 5,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    color: "white",
    textAlign: "center",
  },
});
