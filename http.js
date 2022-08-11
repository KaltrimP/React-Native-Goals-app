import axios from "axios";

const url =
  "https://react-native-2eb89-default-rtdb.europe-west1.firebasedatabase.app/";

export async function storePosts(postsData) {
  axios.post(url + "posts.json", postsData);
}
