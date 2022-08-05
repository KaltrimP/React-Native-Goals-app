import axios from "axios";
import { useState, useEffect } from "react";
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
  const url = "http://127.0.0.1:8000/api/posts";
  const [loading, setLoading] = useState(true);

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
  ////

  // const axios = require("react-native-axios");

  //   const callApi = async () => {
  //     await axios
  //       .get("http://127.0.0.1:8000/api/users/2")
  //       .then((response) => setUsers(response.json()))
  //       .then((res) => console.log(res))
  //       .catch((error) => console.log(error.response.data));
  //   };

  const [users, setUsers] = useState([]);
  let [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios
          .get("http://127.0.0.1:8000/api/posts")
          .then((r) => console.log("in the stable stat"));
        setPosts(response);
      } catch (error) {
        console.log("in the error stat");
        console.log(error.response.data);
        console.log(error.response.header);
        console.log(error.response.status);
      }
    };
    fetchPosts();
  }, []);

  // useEffect(() => {
  //   const getPosts = async () => {
  //     let response = await fetch("http://127.0.0.1:8000/api/posts");
  //     setUsers(response.json());
  //   };
  //   getPosts();
  // }, []);

  // useEffect(() => {
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((json) => setUsers(json))
  //     .catch((err) => console.error(err))
  //     .finally(() => setLoading(false));
  // }, []);
  // useEffect(() => {
  //   async function fetchPosts() {
  //     let url = "http://127.0.0.1:8000/api/posts";
  //     const response = await axios.get(url).then(function (v) {
  //       alert("here");
  //     });
  //     const posts = [];

  //     for (const key in response.data) {
  //       const postObj = {
  //         // id: key,
  //         title: response.data.title,
  //         author: response.data.author,
  //         description: response.data.description,
  //       };
  //       posts.push(postObj);
  //       setPosts(posts);
  //     }
  //   }
  //   fetchPosts();
  // }, []);

  ////
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
      <View style={styles.apiContainer}>
        {/* <Button title="Click Me" onPress={callApi}></Button> */}
        {/* {loading ? (
          <Text>Loading ...</Text>
        ) : (
          users.map((post) => (
            <View>
              <Text>{post.title}</Text>
              <Text>{post.description}</Text>
              <Text>{post.author}</Text>
            </View>
          ))
        )} */}
        <Text>:--- {posts}</Text>
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
  apiContainer: {
    margin: 5,
    padding: 2,
  },
});
