import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  mainContainer,
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
  navLinkActive,
  mainContent,
  articlesSection,
  membershipBanner,
  bannerLink,
  closeIcon,
  article,
  articleContent,
  articleMeta,
  authorImage,
  authorName,
  articleTitle,
  articlePreview,
  articleImage,
  articleFooter,
  readingTime,
  sideSection,
  recommendedTopics,
  sectionTitle,
  topicsList,
  topicButton,
  whoToFollowSection,
  followCard,
  followButton,
  articleLink,
  articleActions,
  actionButton,
  staffPicks,
  staffPickCard,
  staffPickImage,
  staffPickContent,
  staffPickMeta,
  staffPickTitle,
  staffPickDate,
  seeFullList,
  plusButton,
} from "../styles/main.css";
import { PlusIcon } from "@heroicons/react/24/solid";

const NAVIGATION_ITEMS = [
  { label: "For you", to: "#", showPlusButton: true },
  { label: "Following", to: "#" },
  { label: "Featured", to: "#", isNew: true },
  { label: "iOS", to: "#" },
  { label: "Dart", to: "#" },
  { label: "Flutter UI", to: "#" },
  { label: "Flutter App Dev", to: "#" },
];

const TOPICS = [
  "Data Science",
  "Self Improvement",
  "Writing",
  "Technology",
  "Relationships",
  "Politics",
  "Cryptocurrency",
];

const WHO_TO_FOLLOW = [
  {
    name: "Let's Code Future",
    description: "Sachin Maurya | Frontend Developer & Tech Writer",
    image: "https://picsum.photos/32/32",
  },
  {
    name: "TechCrunch",
    description: "Technology News and Analysis",
    image: "https://picsum.photos/32/32",
  },
  {
    name: "JavaScript Weekly",
    description: "Weekly JavaScript Newsletter",
    image: "https://picsum.photos/32/32",
  },
  {
    name: "React Mastery",
    description: "Tips and tricks for React developers",
    image: "https://picsum.photos/32/32",
  },
];

const STAFF_PICKS = [
  {
    image:
      "https://miro.medium.com/v2/resize:fill:40:40/1*sHhtYhaCe2Uc3IU0IgKwIQ.png",
    author: "Medium Staff",
    title:
      "What We're Reading: How AI Could Revolutionize Scientific Discovery",
    date: "Dec 15, 2023",
  },
  {
    image:
      "https://miro.medium.com/v2/resize:fill:40:40/1*sHhtYhaCe2Uc3IU0IgKwIQ.png",
    author: "Medium Staff",
    title: "The Best of Medium: Top Stories That Captured Our Attention",
    date: "Dec 14, 2023",
  },
  {
    image:
      "https://miro.medium.com/v2/resize:fill:40:40/1*sHhtYhaCe2Uc3IU0IgKwIQ.png",
    author: "Medium Staff",
    title: "Emerging Voices: New Writers to Watch in 2024",
    date: "Dec 13, 2023",
  },
];

const ARTICLES = [
  {
    author: {
      name: "Hui",
      image: "https://picsum.photos/20/20",
    },
    title: "Java Optimization: 7000ms → 90ms",
    preview:
      "When working with two separate lists and trying to match data based on a common id, many developers often default to using...",
    image: "https://picsum.photos/112/112",
    date: "Mar 26",
    readTime: "4 min read",
    views: "415",
    comments: "13",
  },
  {
    author: {
      name: "Java Interview",
      image: "https://picsum.photos/20/20",
    },
    title: "Spring Says Goodbye to @Autowired: Here's What to Use Instead",
    preview:
      "Yes, starting with Spring Boot 3 and Spring Framework 6, Spring has been encouraging constructor-based dependency injection...",
    image: "https://picsum.photos/112/112",
    date: "Feb 21",
    readTime: "5 min read",
    views: "471",
    comments: "20",
  },
  {
    author: {
      name: "Java Interview",
      image: "https://picsum.photos/20/20",
    },
    title: "Spring Says Goodbye to @Autowired: Here's What to Use Instead",
    preview:
      "Yes, starting with Spring Boot 3 and Spring Framework 6, Spring has been encouraging constructor-based dependency injection...",
    image: "https://picsum.photos/112/112",
    date: "Feb 21",
    readTime: "5 min read",
    views: "471",
    comments: "20",
  },
  {
    author: {
      name: "Java Interview",
      image: "https://picsum.photos/20/20",
    },
    title: "Spring Says Goodbye to @Autowired: Here's What to Use Instead",
    preview:
      "Yes, starting with Spring Boot 3 and Spring Framework 6, Spring has been encouraging constructor-based dependency injection...",
    image: "https://picsum.photos/112/112",
    date: "Feb 21",
    readTime: "5 min read",
    views: "471",
    comments: "20",
  },
  {
    author: {
      name: "Java Interview",
      image: "https://picsum.photos/20/20",
    },
    title: "Spring Says Goodbye to @Autowired: Here's What to Use Instead",
    preview:
      "Yes, starting with Spring Boot 3 and Spring Framework 6, Spring has been encouraging constructor-based dependency injection...",
    image: "https://picsum.photos/112/112",
    date: "Feb 21",
    readTime: "5 min read",
    views: "471",
    comments: "20",
  },
];

export default function Main() {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <div className={mainContainer}>
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

        {showBanner && (
          <div className={membershipBanner}>
            <span>✨</span>
            Get unlimited access to the best of Medium for less than $1/week.
            <a href="#" className={bannerLink}>
              Become a member
            </a>
            <button className={closeIcon} onClick={() => setShowBanner(false)}>
              ✕
            </button>
          </div>
        )}

        <nav className={navigationBar}>
          {NAVIGATION_ITEMS.map((item) => (
            <a
              key={item.to}
              href="#"
              className={navLink}
              onClick={(e) => e.preventDefault()}
            >
              {item.showPlusButton && (
                <span className={plusButton}>
                  <PlusIcon className={plusButton} width={20} height={20} />
                </span>
              )}
              {item.label}
              {item.isNew && (
                <sup
                  style={{
                    backgroundColor: "rgb(26, 137, 23)",
                    color: "white",
                    padding: "1px 6px",
                    borderRadius: "99em",
                    fontSize: "10px",
                    marginLeft: "4px",
                  }}
                >
                  New
                </sup>
              )}
            </a>
          ))}
        </nav>
      </header>

      <main className={mainContent}>
        <section className={articlesSection}>
          {ARTICLES.map((articleItem, index) => (
            <div key={index} className={article}>
              <div className={articleContent}>
                <div className={articleMeta}>
                  <img
                    src={articleItem.author.image}
                    alt={articleItem.author.name}
                    className={authorImage}
                  />
                  <span className={authorName}>{articleItem.author.name}</span>
                </div>
                <Link to={`/detail/${index + 1}`} className={articleLink}>
                  <h2 className={articleTitle}>{articleItem.title}</h2>
                  <p className={articlePreview}>{articleItem.preview}</p>
                </Link>
                <div className={articleFooter}>
                  <div className={readingTime}>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="none"
                        viewBox="0 0 64 64"
                      >
                        <path
                          fill="#FFC017"
                          d="m39.637 40.831-5.771 15.871a1.99 1.99 0 0 1-3.732 0l-5.771-15.87a2.02 2.02 0 0 0-1.194-1.195L7.298 33.866a1.99 1.99 0 0 1 0-3.732l15.87-5.771a2.02 2.02 0 0 0 1.195-1.194l5.771-15.871a1.99 1.99 0 0 1 3.732 0l5.771 15.871a2.02 2.02 0 0 0 1.194 1.195l15.871 5.771a1.99 1.99 0 0 1 0 3.732l-15.87 5.771a2.02 2.02 0 0 0-1.195 1.194"
                        />
                      </svg>
                      {articleItem.date}
                    </span>
                    <span>·</span>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="none"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill="#6B6B6B"
                          fill-rule="evenodd"
                          d="m3.672 10.167 2.138 2.14h-.002c1.726 1.722 4.337 2.436 5.96.81 1.472-1.45 1.806-3.68.76-5.388l-1.815-3.484c-.353-.524-.849-1.22-1.337-.958-.49.261 0 1.56 0 1.56l.78 1.932L6.43 2.865c-.837-.953-1.487-1.108-1.928-.647-.33.33-.266.856.477 1.598.501.503 1.888 1.957 1.888 1.957.17.174.083.485-.093.655a.56.56 0 0 1-.34.163.43.43 0 0 1-.317-.135s-2.4-2.469-2.803-2.87c-.344-.346-.803-.54-1.194-.15-.408.406-.273 1.065.11 1.447.345.346 2.31 2.297 2.685 2.671.06 2.06c.17.175.269.628.093.8-.193.188-.453.33-.678.273a.9.9 0 0 1-.446-.273s2.501 6.84 1.892 6.23c-.407-.406-.899-.333-1.229 0-.525.524.263 1.28 1.73 2.691.384.368.814.781 1.279 1.246m8.472-7.219c-.372-.29.95-.28 1.303.244v3.191l1.563 3.006.036.074c.885 1.87.346 4.093-.512 5.159l-.035.044c-.211.264-.344.43-.74.61 1.382-1.855.963-3.478-.248-5.456L11.943 3.881l-.002-.037c-.017-.3-.039-.71.203-.895"
                          clip-rule="evenodd"
                        />
                      </svg>
                      {articleItem.views} views
                    </span>
                    <span>·</span>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="#6B6B6B"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill="#6B6B6B"
                          d="M12.344 11.458A5.28 5.28 0 0 0 14 7.526C14 4.483 11.391 2 8.051 2S2 4.483 2 7.527c0 3.051 2.712 5.526 6.059 5.526a6.6 6.6 0 0 0 1.758-.236q.255.223.554.414c.784.51 1.626.768 2.512.768a.37.37 0 0 0 .355-.214.37.37 0 0 0-.03-.384 4.7 4.7 0 0 1-.857-1.958v.014z"
                        />
                      </svg>
                      {articleItem.comments}
                    </span>
                  </div>
                  <div className={articleActions}>
                    <button className={actionButton}>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM8.25 12h7.5"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    <button className={actionButton}>
                      <svg width="24" height="24" viewBox="0 0 24 24">
                        <path
                          d="M17.5 1.25a.5.5 0 0 1 1 0v2.5H21a.5.5 0 0 1 0 1h-2.5v2.5a.5.5 0 0 1-1 0v-2.5H15a.5.5 0 0 1 0-1h2.5v-2.5zm-11 4.5a1 1 0 0 1 1-1H11a.5.5 0 0 0 0-1H7.5a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V5.75z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                    <button className={actionButton}>
                      <svg width="24" height="24" viewBox="0 0 24 24">
                        <circle cx="6" cy="12" r="2" fill="currentColor" />
                        <circle cx="12" cy="12" r="2" fill="currentColor" />
                        <circle cx="18" cy="12" r="2" fill="currentColor" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className={articleLink} role="button" tabIndex={0}>
                <Link to={`/detail/${index + 1}`} className={articleLink}>
                  <img
                    src={articleItem.image}
                    alt={articleItem.title}
                    className={articleImage}
                  />
                </Link>
              </div>
            </div>
          ))}
        </section>

        <aside className={sideSection}>
          <div className={staffPicks}>
            <h3 className={sectionTitle}>Staff Picks</h3>
            {STAFF_PICKS.map((pick, index) => (
              <div key={index} className={staffPickCard}>
                <img src={pick.image} alt="" className={staffPickImage} />
                <div className={staffPickContent}>
                  <div className={staffPickMeta}>
                    <span>{pick.author}</span>
                  </div>
                  <h4 className={staffPickTitle}>{pick.title}</h4>
                  <div className={staffPickDate}>{pick.date}</div>
                </div>
              </div>
            ))}
            <a href="#" className={seeFullList}>
              See the full list
            </a>
          </div>

          <div className={recommendedTopics}>
            <h3 className={sectionTitle}>Recommended topics</h3>
            <div className={topicsList}>
              {TOPICS.map((topic) => (
                <button key={topic} className={topicButton}>
                  {topic}
                </button>
              ))}
            </div>
          </div>

          <div className={whoToFollowSection}>
            <h3 className={sectionTitle}>Who to follow</h3>
            {WHO_TO_FOLLOW.map((person, index) => (
              <div key={index} className={followCard}>
                <img
                  src={person.image}
                  alt={person.name}
                  style={{ width: 32, height: 32, borderRadius: "50%" }}
                />
                <div>
                  <div style={{ fontSize: "14px", fontWeight: 500 }}>
                    {person.name}
                  </div>
                  <div
                    style={{
                      fontSize: "13px",
                      color: "rgb(117, 117, 117)",
                      marginTop: "4px",
                    }}
                  >
                    {person.description}
                  </div>
                </div>
                <button className={followButton}>Follow</button>
              </div>
            ))}
          </div>
        </aside>
      </main>
    </div>
  );
}
