import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section>
      <h1>{type} Post</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Your AI Post</label>
        <textarea
          name="post"
          id="post"
          cols="30"
          rows="10"
          value={post.post}
          onChange={(e) => {
            setPost({ ...post, post: e.target.value });
          }}
          placeholder="Write your post"
        ></textarea>
        <label htmlFor="">#psot </label>
        <input
          type="text"
          name="tag"
          id="tag"
          value={post.tag}
          onChange={(e) => {
            setPost({ ...post, tag: e.target.value });
          }}
          required
          placeholder="#tag"
        />
        <button type="submit">{submitting ? `${type}...` : type}</button>
      </form>
    </section>
  );
};

export default Form;
