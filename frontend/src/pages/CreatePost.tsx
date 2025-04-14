import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { logo } from "../styles/main.css";
import {
  createPostContainer,
  header,
  headerLeft,
  draftText,
  headerRight,
  publishButton,
  moreButton,
  notificationButton,
  profileButton,
  editorContainer,
  titleInput,
  contentInput,
} from "../styles/createPost.css";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <div className={createPostContainer}>
      <header className={header}>
        <div className={headerLeft}>
          <Link to="/" className={logo}>
            Medium
          </Link>
          <span className={draftText}>Draft in Chelly Chilly Cherry</span>
        </div>
        <div className={headerRight}>
          <Link to="/publish" className={publishButton}>
            Publish
          </Link>
          <button className={moreButton}>
            <svg width="24" height="24" viewBox="0 0 24 24">
              <circle cx="6" cy="12" r="2" fill="currentColor" />
              <circle cx="12" cy="12" r="2" fill="currentColor" />
              <circle cx="18" cy="12" r="2" fill="currentColor" />
            </svg>
          </button>
          <button className={notificationButton}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M15 18.5a3 3 0 1 1-6 0"
                stroke="currentColor"
                strokeLinecap="round"
              />
              <path
                d="M5.5 10.53V9a6.5 6.5 0 0 1 13 0v1.53c0 1.42.56 2.78 1.57 3.79l.03.03c.26.26.4.6.4.97v2.93c0 .14-.11.25-.25.25H3.75a.25.25 0 0 1-.25-.25v-2.93c0-.37.14-.71.4-.97l.03-.03c1-1 1.57-2.37 1.57-3.79z"
                stroke="currentColor"
              />
            </svg>
          </button>
          <button className={profileButton}>R</button>
        </div>
      </header>

      <main className={editorContainer}>
        <input
          type="text"
          className={titleInput}
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className={contentInput}
          placeholder="Tell your story..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </main>
    </div>
  );
}
