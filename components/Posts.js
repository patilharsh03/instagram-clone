import { db } from "@/firebase";
import { onSnapshot, query, collection, orderBy } from "firebase/firestore";
import { useEffect, useState } from "react";
import Post from "./Post";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [db]
  );

      console.log(posts)

  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.data().username}
          userImg={post.data().profileImg}
          img={post.data().image}
          caption={post.data().caption}
        />
      ))}
    </div>
  );
}

export default Posts;
