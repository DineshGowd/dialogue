import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const PostCard = ({ post, handleTagClick, handleEdit, handleDelete }) => {
  const { data: session } = useSession();
  const pathName = usePathname();
  const handleCopy = () => {
    navigator.clipboard.writeText(post.post);
  };

  return (
    <div>
      <div>
        <Image
          src={post?.creator?.image}
          alt="user_image"
          width={50}
          height={50}
        />
        <p onClick={handleCopy}>{post.post}</p>
        {post.tag}
        <p> {post.tag}</p>
        {post?.creator?.username}
      </div>
      {session?.user.id === post.creator.id && pathName === "/profile" && (
        <div>
          <p onClick={handleEdit}>Edit</p>
          <p onClick={handleDelete}>Delete</p>
        </div>
      )}
    </div>
  );
};

export default PostCard;
