import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  TextInput,
} from "react-native";
import GoalItem from "../components/GoalItem";
import GoalInput from "../components/GoalInput";
import ShowPosts from "../components/ShowPosts";
// import { storePosts } from "./http";

export default function ApiShowcase() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [myGoals, setMyGoals] = useState([]);
  const BACKEND_URL = "https://def8-185-171-62-194.eu.ngrok.io";
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

  // const [users, setUsers] = useState([]);
  const [postsDescription, setPostsDescription] = useState();
  const [postsTitle, setPostsTitle] = useState();
  const [postsAuthor, setPostsAuthor] = useState();

  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [postId, setPostId] = useState([]);
  const [postIndex, setPostIndex] = useState();
  // const [user_id, setUserId] = useState("");

  // const callApi = async () => {
  //   await axios
  //     .get(url)
  //     .then((response) => setPosts(response.json()))
  //     .then((res) => console.log(res))
  //     .catch((error) => console.log(error.response.data));
  // };

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     try {
  //       const response = await axios
  //         .get("https://3fd9-185-171-62-131.eu.ngrok.io/api/posts/1")
  //         .then((response) => console.log(response.data))
  //         .finally(() => setLoading(false));
  //       setPosts(response);
  //       console.log(posts);
  //     } catch (error) {
  //       console.log("in the error state");
  //       console.log(error.response.data);
  //       console.log(error.response.header);
  //       console.log(error.response.status);
  //     }
  //   };
  //   fetchPosts();
  // }, []);


  useEffect(()=>{
    axios.get(BACKEND_URL + `/api/posts/`)
      .then(res=>{
        JSON.stringify(res.data.data)
        setPostIndex(res.data.data)
        setLoading(false)
        console.log(postIndex);})
        .catch(err=>console.log(err))
  },[])


  // useEffect(() => {
  //   axios
  //     .get(BACKEND_URL + `/api/posts/`)
  //     .then(
  //       (res) => JSON.stringify(res.data)
  //       // JSON.stringify(res, ["title", "author", "description", "id"])
  //     )
  //     .then((response) => {
  //       setPostIndex(response.replace(/"/g, ''));
  //       // console.log(response);
  //       console.log(postIndex);
  //       setLoading(false);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

  useEffect(() => {
    axios
      .get(BACKEND_URL + `/api/posts/1`)
      .then(
        (res) => JSON.stringify(res.data.title)
        // JSON.stringify(res, ["title", "author", "description", "id"])
      )
      .then((response) => {
        setPostsTitle(response.replace(/"/g, ''));
        // setQuotes(postsTitle.replace(/"/g, ''))
        console.log(response);
        // console.log(postsTitle);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);


  useEffect(() => {
    axios
      .get(BACKEND_URL + `/api/posts/1`)
      .then(
        (res) => JSON.stringify(res.data.author)
        // JSON.stringify(res, ["title", "author", "description", "id"])
      )
      .then((response) => {
        setPostsAuthor(response.replace(/"/g, ''));
        // setQuotes(postsAuthor.replace(/"/g, ''))
        console.log(response);
        // console.log(postsAuthor);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);
  
  useEffect(() => {
    axios
      .get(BACKEND_URL + `/api/posts/1`)
      .then(
        (res) => JSON.stringify(res.data.description) 
        // JSON.stringify(res, ["title", "author", "description", "id"])
      )
      .then((response) => {
        setPostsDescription(response.replace(/"/g, ''));
        // setQuotes(postsDescription.replace(/"/g, ''))
        console.log(response);
        // console.log(postsDescription);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);


  ///////
  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     await axios
  //       .get("https://3fd9-185-171-62-131.eu.ngrok.io/api/posts/1")
  //       .then((response) => console.log(response.data))
  //       .then((response) => setPosts(response))
  //       .catch((error) => console.log(error))
  //       .finally(() => setLoading(false));
  //   };

  //   fetchPosts();
  // }, []);

  // useEffect(() => {
  //   axios
  //     .get("https://3fd9-185-171-62-131.eu.ngrok.io/api/posts/")
  //     .then((result) => {
  //       console.log(result);
  //       setPosts(result);
  //     });
  // }, []);

  // useEffect(() => {
  //   const getPosts = async () => {
  //     let response = await fetch("url");
  //     setPosts(response.json());
  //   };
  //   getPosts();
  // }, []);

  // useEffect(() => {
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((json) => setPosts(json))
  //     .catch((err) => console.error(err))
  //     .finally(() => setLoading(false));
  // }, []);

  // useEffect(() => {
  //   async function fetchPosts() {
  //     let url = "https://dad3-185-171-62-131.eu.ngrok.io/api/posts";
  //     const response = await axios.get(url).then(function (v) {
  //       alert("here");
  //     });
  //     const posts = [];

  //     for (const key in response.data) {
  //       const postObj = {
  //         // id: key,
  //         title: response.title,
  //         author: response.author,
  //         description: response.description,
  //       };
  //       posts.push(postObj);
  //       setPosts(posts);
  //     }
  //   }
  //   fetchPosts();
  // }, []);

  // -------* Storing Api Call *-------
  const callPostApi = async () => {
    await axios
      .post(BACKEND_URL + `/api/posts/create`, {
        author: author,
        title: title,
        description: description,
        user_id: 2,
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  // -------* Updating Api Call *-------
  const updatePost = async () => {
    await axios
      .put(BACKEND_URL + `/api/posts/update/${postId}`, {
        author: author,
        title: title,
        description: description,
        user_id: 2,
      })
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  };

  const deletePost = async() => {
      await axios.delete(BACKEND_URL + `/api/posts/delete/${postId}`)
      .then(response=> console.log(response))
      .catch(error=>console.log(error))
    }
  

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
          postIndex.map((post) => (
            <View>
              <Text key={post.id}>{post.title}</Text>
              <Text>{post.description}</Text>
              <Text>{post.author}</Text>
            </View>
          ))
        )} */}



        <TextInput
          style={styles.textInputStyle}
          placeholder="Enter Author"
          onChangeText={(e) => setAuthor(e)}
        ></TextInput>
        <TextInput
          style={styles.textInputStyle}
          placeholder="Enter Description"
          onChangeText={(e) => setDescription(e)}
        ></TextInput>
        <TextInput
          style={styles.textInputStyle}
          placeholder="Enter Title"
          onChangeText={(e) => setTitle(e)}
        ></TextInput>
        <TextInput
          style={styles.textInputStyle}
          placeholder="Enter Id"
          onChangeText={(e) => setPostId(e)}
        ></TextInput>
{/* 
        <Text>:--- {author}</Text>
        <Text>:--- {title}</Text>
        <Text>:--- {description}</Text> */}
        <Button title="Create" onPress={callPostApi}></Button>
        <Button title="Update" onPress={updatePost}></Button>
        <Button title="Delete" onPress={deletePost}></Button>
        <View style={{ margin: 16 }}>
          <Text style={{ borderBottomColor: 'white', borderBottomWidth: 2, color: 'coral', textAlign: 'center',marginTop: 5 , fontSize: 25}}> {postsTitle}</Text>
          <Text style={{ borderBottomColor: 'white', borderBottomWidth: 2, color: 'coral', textAlign: 'center',marginTop: 5, fontSize: 25 }}> {postsAuthor}</Text>
          <Text style={{ borderBottomColor: 'white', borderBottomWidth: 2, color: 'coral', textAlign: 'center', marginTop: 5, fontSize: 25}}> {postsDescription}</Text>
          {/* <Text>{ postIndex }</Text> */}
        </View>
      </View>
        <View>
          <Text>Here:</Text>
          <FlatList
          data={postIndex}
          renderItem={(post) => { return (
            <ShowPosts 
            title={post.title}
            author={post.author}
            description={post.author} ></ShowPosts>
          )
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
  apiContainer: {
    margin: 5,
    padding: 2,
    backgroundColor: "purple",
  },
  textInputStyle: {
    backgroundColor: "white",
    textAlign: "center",
  },
});
