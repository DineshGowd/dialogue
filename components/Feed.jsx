"use client";
import { useEffect, useState } from "react";
import PostCard from "./PostCard";

const PostCardList = ({ data, handleTagClick }) => {
  return (
    <div>
      {data?.map((post) => (
        <PostCard key={post._id} post={post} handleTagClick={handleTagClick} />
      ))}
    </div>
  );
};

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [posts, setPost] = useState([]);
  const handleSearchChange = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch("/api/post");
      const data = await response.json();
      setPost(data);
    };
    fetchPost();
  }, []);
  return (
    <section>
      <form>
        <input
          type="text"
          placeholder="Search for Post"
          value={searchText}
          onChange={handleSearchChange}
          required
        />
      </form>
      <PostCardList data={posts} handleTagClick={() => {}} />
    </section>
  );
};

export default Feed;
