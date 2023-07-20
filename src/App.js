import React, { useState, useRef } from "react";
import "../src/styles/App.css";
import PostForm from "./components/PostForm";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import MySelect from "./components/UI/select/MySelect";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript 1", body: "Description" },
    { id: 2, title: "Javascript 2", body: "Description" },
    { id: 3, title: "Javascript 3", body: "Description" },
  ]);

  const [selectedSort, setSelectedSort] = useState('')

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts =(sort) => {
    
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{margin: '15px 0'}}></hr>
      <div>
        <MySelect 
          value={selectedSort}
          onChange={sort => setSelectedSort(sort)}
          defaultValue="Сортировка" 
          options={[
            {value: "title", name: "По названию"},
            {value: "body", name: "По описанию"},
        ]} />
      </div>

      {posts.length
          ? <PostList remove={removePost} posts={posts} title="About JS" />
          :  <h1 style={{textAlign: 'center'}}>Posts not found</h1>
      }
    </div>
  );
}

export default App;
