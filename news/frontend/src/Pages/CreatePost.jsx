import { useState } from "react";
import Cookies from "js-cookie";
import RequireAuth from '../Contexts/requireAuth'

function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Get the sessionID from the cookie
      const sessionID = Cookies.get("sessionID");

      // Fetch the user information using the sessionID
      const response = await fetch("http://127.0.0.1:8000/api/currentuser/", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionID}`,
        },
      });
      const data = await response.json();
      const user = data;

      // Create a new post object with the current user as the author
      const post = {
        title_post: title,
        content_post: content,
        image_post: image,
        author_post: user.id, // Set the author_post field to the current user
      };

      // Save the new post to the server
      const responseData = await fetch("http://127.0.0.1:8000/api/posts/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionID}`,
        },
        body: JSON.stringify(post),
      });

      if (!responseData.ok) {
        throw new Error("Network response was not ok");
      }

      // Clear form fields after successful submission
      setTitle("");
      setContent("");
      setImage("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Create New Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            name="content"
            value={content}
            onChange={(event) => setContent(event.target.value)}
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="image">Image URL:</label>
          <input
            type="text"
            id="image"
            name="image"
            value={image}
            onChange={(event) => setImage(event.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default RequireAuth(CreatePost);
// export default CreatePost;