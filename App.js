import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [myGoals, setMyGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    setMyGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  }

  function deleteGoalHandler(id) {
    setMyGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <View style={styles.appContainer}>
      <View>
        <GoalInput
          inputHandler={goalInputHandler}
          goalHandler={addGoalHandler}
        ></GoalInput>
        <FlatList
          data={myGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                deleteItem={deleteGoalHandler}
                item={itemData.item.text}
                id={itemData.item.id}
              ></GoalItem>
              // <Text style={styles.goalItemStyle}>* {itemData.item} *</Text>
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        ></FlatList>
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
});
