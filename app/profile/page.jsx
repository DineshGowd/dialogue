"use client";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import PostCard from "@/components/PostCard";

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => (
  <div>
    <section>
      <h1>{name} Profile</h1>
      <h1>{desc}</h1>
      {data?.map((post) => (
        <PostCard
          key={post._id}
          post={post}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      ))}
    </section>
  </div>
);

const MyProfile = () => {
  const { data: session } = useSession();
  const [post, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();
      setPosts(data);
    };
    if (session?.user.id) fetchPosts();
  }, []);
  const handleEdit = () => {};
  const handleDelete = () => {};
  return (
    <div>
      <Profile
        name="My"
        desc="Welcome to your personalised profile page"
        data={post}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default MyProfile;
