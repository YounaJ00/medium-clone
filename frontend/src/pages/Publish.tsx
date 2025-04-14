import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  publishContainer,
  containerWrapper,
  leftContainer,
  rightContainer,
  storyPreviewTitle,
  previewBox,
  imageUploadSection,
  publishingToText,
  topicSection,
  topicInput,
  publishActions,
  publishNowButton,
  scheduleLaterButton,
  closeButton,
  noteText,
  learnMoreText,
  learnMoreLink,
  publishingName,
  noteHighlight,
  postText,
  postContent,
  imageUploadText,
  topicText,
} from "../styles/publish.css";

export default function Publish() {

  
  return (
    <div className={publishContainer}>
      <div className={containerWrapper}>
        
        <div className={leftContainer}>
          <h2 className={storyPreviewTitle}>Story Preview</h2>
          <div className={previewBox}>
            <div className={imageUploadSection}>
              <p className={imageUploadText}>
                Include a high-quality image in your story to <br/>
                make it more inviting to readers.
              </p>
            </div>
            <div>
              <h3>Title</h3>
              <input type="text" className={postText} placeholder="Ttitle" />
              <input
                type="content"
                className={postContent}
                placeholder="Tell your story"
              />
              <p className={noteText}>
                <span className={noteHighlight}>Note:</span> Changes here will affect how your story appears in public
                places like Medium's homepage and in subscribers' inboxes — not
                the contents of the story itself.
              </p>
            </div>
          </div>
        </div>

        <div className={rightContainer}>  
        <Link to="/createpost" className={closeButton}>
            ×
        </Link>
          <div>
            <p className={publishingToText}>
              Publishing to: <span className={publishingName}>Rookedysc</span>
            </p>
            <div className={topicSection}>
              <p className={topicText}>
                Add or change topics (up to 5) so readers know what your story
                is about
              </p>
              <input
                type="text"
                className={topicInput}
                placeholder="Add a topic..."
              />
            </div>
            <p className={learnMoreText}>
              <a href="#" className={learnMoreLink}>
                Learn more
              </a>{" "}
              about what happens to your post when you publish.
            </p>
            <div className={publishActions}>
              <button className={publishNowButton}>Publish now</button>
              <button className={scheduleLaterButton}>
                Schedule for later
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
