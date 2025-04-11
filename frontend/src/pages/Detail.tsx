import { useState } from "react";
import { useParams, Link } from "@tanstack/react-router";
import {
  pageContainer,
  detailContainer,
  contentWrapper,
  articleWrapper,
  articleHeader,
  memberOnlyBadge,
  articleTitle,
  authorSection,
  authorInfo,
  authorName,
  authorMeta,
  authorNameWrapper,
  authorImage,
  followButton,
  articleContent,
  responsesSection,
  responsesHeader,
  responseCount,
  writeResponseSection,
  responseInput,
  responsesList,
  responseItem,
  responseContent,
  responseAuthor,
  responseText,
  responseActions,
  articleActions,
  actionButtonsLeft,
  actionButtonsRight,
  writeResponseWrapper,
  responseUserInfo,
  responseInputContainer,
  responseControls,
  formatControls,
  formatButton,
  responseActionButtons,
  cancelButton,
  respondButton,
  responseInputExpanded,
  authorBadge,
  authorBadgeIcon,
  responseDate,
  responseActionButton,
  moreButton,
  responseItemWrapper,
  responseInputName,
  replyButton,
  seeAllResponsesButton,
  responseDivider,
} from "../styles/detail.css";

import {
  header,
  topHeader,
  headerLeft,
  logo,
  headerRight,
  searchContainer,
  writeButton,
  notificationButton,
  profileButton,
  navigationBar,
  navLink,
} from "../styles/main.css";

// 임시 응답 데이터
const RESPONSES = [
  {
    id: 1,
    author: {
      name: "Lucas Fernandes",
      image: "https://picsum.photos/48/48",
    },
    date: "Mar 28",
    text: "If you're coding a nested for loop, you're not doing it right! :D",
    likes: 46,
    replies: 2,
  },
  {
    id: 2,
    author: {
      name: "Revathi Balakrishnan",
      image: "https://picsum.photos/48/48",
    },
    date: "5 days ago",
    text: "Good one that we easily ignore in day today tasks",
    likes: 31,
    replies: 2,
  },
  {
    id: 3,
    author: {
      name: "Nestor Martourez",
      image: "https://picsum.photos/48/48",
    },
    date: "5 days ago",
    text: "why not use parallel streams to perform the operation since the record is more than 50,000",
    likes: 36,
    replies: 3,
  },
];

export default function Detail() {
  const { articleId } = useParams({ from: "/detail/$articleId" });
  const [responseText, setResponseText] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  // 실제 구현에서는 articleId를 사용하여 해당 기사의 데이터를 가져와야 합니다
  console.log("Article ID:", articleId);

  return (
    <div className={pageContainer}>
      <header className={header}>
        <div className={topHeader}>
          <div className={headerLeft}>
            <Link to="/" className={logo}>
              Medium
            </Link>
            <button className={searchContainer}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                  fill="currentColor"
                />
              </svg>
              Search
            </button>
          </div>
          <div className={headerRight}>
            <button className={writeButton}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M14 4a.5.5 0 0 0 0-1v1zm7 6a.5.5 0 0 0-1 0h1zm-7-7H4v1h10V3zM3 4v16h1V4H3zm1 17h16v-1H4v1zm17-1V10h-1v10h1zm-1 1a1 1 0 0 0 1-1h-1v1zM3 20a1 1 0 0 0 1 1v-1H3zM4 3a1 1 0 0 0-1 1h1V3z"
                  fill="currentColor"
                />
                <path
                  d="M17.5 4.5l-8.46 8.46a.25.25 0 0 0-.06.1l-.82 2.47c-.07.2.12.38.31.31l2.47-.82a.25.25 0 0 0 .1-.06L19.5 6.5m-2-2l2.32-2.32c.1-.1.26-.1.36 0l1.64 1.64c.1.1.1.26 0 .36L19.5 6.5m-2-2l2 2"
                  stroke="currentColor"
                />
              </svg>
              Write
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
        </div>
      </header>

      <div className={detailContainer}>
        <div className={contentWrapper}>
          <div className={articleWrapper}>
            <article>
              <header className={articleHeader}>
                <div className={memberOnlyBadge}>
                  <span>✨</span> Member-only story
                </div>
                <h1 className={articleTitle}>
                  Java Optimization: 7000ms → 90ms
                </h1>
                <div className={authorSection}>
                  <img
                    src="https://picsum.photos/48/48"
                    alt="Author"
                    className={authorImage}
                  />
                  <div className={authorInfo}>
                    <div className={authorNameWrapper}>
                      <div className={authorName}>Hui</div>
                      <button className={followButton}>Follow</button>
                    </div>
                    <div className={authorMeta}>
                      <span>5 min read</span>
                      <span>·</span>
                      <span>Mar 26</span>
                    </div>
                  </div>
                </div>
              </header>

              <div className={articleActions}>
                <div className={actionButtonsLeft}>
                  <button className={responseActionButton}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      aria-label="clap"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.37.83L12 3.28l.63-2.45h-1.26zM13.92 3.95L12.74 3.56l-.34 2.5 1.52-2.1zM9.76 1.45l-1.19.4 1.53 2.1-.34-2.5zM20.25 11.84l-2.5-4.4c-.2-.38-.53-.63-.93-.64a.96.96 0 0 0-.75.18c-.25.19-.4.42-.45.7l.05.05 2.35 4.13c1.62 2.95 1.1 5.78-1.52 8.4l-.46.41c1-.13 1.93-.6 2.78-1.45 2.7-2.7 2.51-5.59 1.43-7.38zM12.07 9.01c-.13-.69.08-1.3.57-1.77l-2.06-2.07a1.12 1.12 0 0 0-1.56 0c-.15.15-.22.34-.27.53L12.07 9z M14.74 8.3a1.13 1.13 0 0 0-.73-.5.67.67 0 0 0-.53.13c-.15.12-.59.46-.2 1.3l1.18 2.5a.45.45 0 0 1-.23.76.44.44 0 0 1-.48-.25L7.6 6.11a.82.82 0 1 0-1.15 1.15l3.64 3.64a.45.45 0 1 1-.63.63L5.83 7.9 4.8 6.86a.82.82 0 0 0-1.33.9c.04.1.1.18.18.26l1.02 1.03 3.65 3.64a.44.44 0 0 1-.15.73.44.44 0 0 1-.48-.1L4.05 9.68a.82.82 0 0 0-1.4.57.81.81 0 0 0 .24.58l1.53 1.54 2.3 2.28a.45.45 0 0 1-.64.63L3.8 13a.81.81 0 0 0-1.39.57c0 .22.09.43.24.58l4.4 4.4c2.8 2.8 5.5 4.12 8.68.94 2.27-2.28 2.71-4.6 1.34-6.77l-2.32-4.08z"
                      />
                    </svg>
                    415
                  </button>
                  <button className={responseActionButton}>
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M18 16.8a7.14 7.14 0 0 0 2.24-5.32c0-4.12-3.53-7.48-7.86-7.48c-4.33 0-7.86 3.36-7.86 7.48c0 4.13 3.53 7.48 7.86 7.48c1.03 0 2.02-.2 2.93-.57L20 20l-2-3.2z"
                      />
                    </svg>
                    13
                  </button>
                </div>
                <div className={actionButtonsRight}>
                  <button className={responseActionButton}>
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <path
                        d="M4.5 12a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm7.5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm7.5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className={articleContent}>
                <p>
                  When working with two separate lists and trying to match data
                  based on a common id, many developers often default to using a
                  nested for loop. While this approach works, it's far from
                  efficient — especially when dealing with large datasets.
                </p>
                <p>
                  In this article, we'll explore a common performance bottleneck
                  and how to optimize it. Although this technique is relatively
                  basic, my experience with code reviews shows that many
                  developers still overlook it — so it's definitely worth
                  revisiting.
                </p>
                <p>Let's consider the following scenario:</p>
                <p>Assume we have two List collections:</p>
                <ul>
                  <li>One is a User list.</li>
                  <li>The other is a UserMemo list.</li>
                </ul>
              </div>
            </article>
          </div>

          <section className={responsesSection}>
            <div className={responsesHeader}>
              Responses{" "}
              <span className={responseCount}>({RESPONSES.length})</span>
            </div>

            <div className={writeResponseWrapper}>
              <div className={responseUserInfo}>
                <button className={profileButton}>R</button>
                <span className={responseInputName}>Rookedysc</span>
              </div>
              <div className={writeResponseSection}>
                <div className={responseInputContainer}>
                  <textarea
                    className={`${responseInput} ${
                      isExpanded ? responseInputExpanded : ""
                    }`}
                    placeholder="What are your thoughts?"
                    value={responseText}
                    onClick={() => setIsExpanded(true)}
                    onChange={(e) => setResponseText(e.target.value)}
                  />
                  {isExpanded && (
                    <div className={responseControls}>
                      <div className={formatControls}>
                        <button className={formatButton}>B</button>
                        <button
                          className={formatButton}
                          style={{ fontStyle: "italic" }}
                        >
                          i
                        </button>
                      </div>
                      <div className={responseActionButtons}>
                        <button
                          className={cancelButton}
                          onClick={() => {
                            setIsExpanded(false);
                            setResponseText("");
                          }}
                        >
                          Cancel
                        </button>
                        <button
                          className={respondButton}
                          disabled={!responseText.trim()}
                        >
                          Respond
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className={responsesList}>
              {RESPONSES.map((response) => (
                <div key={response.id} className={responseItemWrapper}>
                  <div className={responseItem}>
                    <img
                      src={response.author.image}
                      alt={response.author.name}
                      className={authorImage}
                      style={{ width: "40px", height: "40px" }}
                    />
                    <div className={responseContent}>
                      <div className={responseAuthor}>
                        <div className={authorBadge}>
                          <span style={{ fontWeight: 500 }}>
                            {response.author.name}
                          </span>
                        </div>
                        {response.author.pronouns && (
                          <span>· {response.author.pronouns}</span>
                        )}
                      </div>
                      <span className={responseDate}>{response.date}</span>
                      <div
                        className={responseText}
                        style={{ color: "#000000" }}
                      >
                        {response.text}
                      </div>
                      <div className={responseActions}>
                        <button className={responseActionButton}>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            aria-label="clap"
                          >
                            <path
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M11.37.83L12 3.28l.63-2.45h-1.26zM13.92 3.95L12.74 3.56l-.34 2.5 1.52-2.1zM9.76 1.45l-1.19.4 1.53 2.1-.34-2.5zM20.25 11.84l-2.5-4.4c-.2-.38-.53-.63-.93-.64a.96.96 0 0 0-.75.18c-.25.19-.4.42-.45.7l.05.05 2.35 4.13c1.62 2.95 1.1 5.78-1.52 8.4l-.46.41c1-.13 1.93-.6 2.78-1.45 2.7-2.7 2.51-5.59 1.43-7.38zM12.07 9.01c-.13-.69.08-1.3.57-1.77l-2.06-2.07a1.12 1.12 0 0 0-1.56 0c-.15.15-.22.34-.27.53L12.07 9z M14.74 8.3a1.13 1.13 0 0 0-.73-.5.67.67 0 0 0-.53.13c-.15.12-.59.46-.2 1.3l1.18 2.5a.45.45 0 0 1-.23.76.44.44 0 0 1-.48-.25L7.6 6.11a.82.82 0 1 0-1.15 1.15l3.64 3.64a.45.45 0 1 1-.63.63L5.83 7.9 4.8 6.86a.82.82 0 0 0-1.33.9c.04.1.1.18.18.26l1.02 1.03 3.65 3.64a.44.44 0 0 1-.15.73.44.44 0 0 1-.48-.1L4.05 9.68a.82.82 0 0 0-1.4.57.81.81 0 0 0 .24.58l1.53 1.54 2.3 2.28a.45.45 0 0 1-.64.63L3.8 13a.81.81 0 0 0-1.39.57c0 .22.09.43.24.58l4.4 4.4c2.8 2.8 5.5 4.12 8.68.94 2.27-2.28 2.71-4.6 1.34-6.77l-2.32-4.08z"
                            />
                          </svg>
                          {response.likes}
                        </button>
                        <button className={responseActionButton}>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M18 16.8a7.14 7.14 0 0 0 2.24-5.32c0-4.12-3.53-7.48-7.86-7.48c-4.33 0-7.86 3.36-7.86 7.48c0 4.13 3.53 7.48 7.86 7.48c1.03 0 2.02-.2 2.93-.57L20 20l-2-3.2z"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              fill="none"
                            />
                          </svg>
                          {response.replies}
                        </button>
                        <button className={replyButton}>Reply</button>
                      </div>
                    </div>
                  </div>
                  <button className={moreButton}>
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <path
                        d="M4.5 12a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm7.5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm7.5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </div>
              ))}
              <button className={seeAllResponsesButton}>
                See all responses
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
