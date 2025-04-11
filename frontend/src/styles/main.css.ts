import { style } from "@vanilla-extract/css";

export const mainContainer = style({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  backgroundColor: "#fff",
  width: "100%",
  maxWidth: "100%",
  position: "relative",
});

export const header = style({
  position: "sticky",
  top: 0,
  backgroundColor: "#fff",
  borderBottom: "1px solid rgba(242, 242, 242, 1)",
  zIndex: 10,
  width: "100%",
});

export const topHeader = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 24px",
  height: "57px",
});

export const headerLeft = style({
  display: "flex",
  alignItems: "center",
  gap: "24px",
});

export const logo = style({
  fontSize: "24px",
  fontWeight: 700,
  fontFamily: `'Georgia', serif`,
  color: "black",
  textDecoration: "none",
});

export const searchContainer = style({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  padding: "0 12px",
  height: "40px",
  backgroundColor: "rgb(250, 250, 250)",
  border: "none",
  borderRadius: "20px",
  cursor: "pointer",
  color: "#6B6B6B",
  fontSize: "14px",
  width: "240px",
});

export const headerRight = style({
  display: "flex",
  alignItems: "center",
  gap: "24px",
});

export const searchButton = style({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  padding: "8px 16px",
  border: "none",
  backgroundColor: "transparent",
  cursor: "pointer",
  color: "#6B6B6B",
  fontSize: "14px",
});

export const writeButton = style({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  padding: "8px 16px",
  border: "none",
  backgroundColor: "transparent",
  cursor: "pointer",
  color: "#6B6B6B",
  fontSize: "14px",
});

export const notificationButton = style({
  border: "none",
  backgroundColor: "transparent",
  cursor: "pointer",
  color: "#6B6B6B",
  padding: "8px",
});

export const profileButton = style({
  width: "32px",
  height: "32px",
  borderRadius: "50%",
  border: "none",
  backgroundColor: "rgb(92, 51, 134)",
  color: "#fff",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "14px",
});

export const navigationBar = style({
  display: "flex",
  alignItems: "center",
  padding: "0 24px",
  height: "48px",
  overflowX: "auto",
  gap: "32px",
  borderBottom: "1px solid rgba(242, 242, 242, 1)",
  msOverflowStyle: "none",
  scrollbarWidth: "none",
  "::-webkit-scrollbar": {
    display: "none",
  },
});

export const navLink = style({
  color: "rgb(117, 117, 117)",
  fontSize: "14px",
  whiteSpace: "nowrap",
  textDecoration: "none",
  padding: "8px 0",
  borderBottom: "1px solid transparent",
  ":hover": {
    color: "rgb(41, 41, 41)",
  },
});

export const navLinkActive = style({
  color: "rgb(41, 41, 41)",
  borderBottom: "1px solid rgb(41, 41, 41)",
});

export const mainContent = style({
  display: "flex",
  padding: "24px",
  gap: "84px",
  width: "100%",
  justifyContent: "center",
  boxSizing: "border-box",
  position: "relative",
  "@media": {
    "(max-width: 1080px)": {
      flexDirection: "column",
      gap: "40px",
    },
  },
});

export const articlesSection = style({
  flex: "1 1 680px",
  maxWidth: "680px",
  "@media": {
    "(max-width: 1080px)": {
      maxWidth: "100%",
    },
  },
});

export const membershipBanner = style({
  display: "flex",
  alignItems: "center",
  padding: "12px 24px",
  backgroundColor: "rgb(250, 250, 250)",
  fontSize: "14px",
  color: "rgb(41, 41, 41)",
  gap: "8px",
  position: "relative",
});

export const bannerLink = style({
  color: "rgb(26, 137, 23)",
  textDecoration: "none",
  fontWeight: 500,
  ":hover": {
    textDecoration: "underline",
  },
});

export const closeIcon = style({
  border: "none",
  backgroundColor: "transparent",
  cursor: "pointer",
  padding: "8px",
  marginLeft: "auto",
  color: "rgb(117, 117, 117)",
  position: "absolute",
  right: "24px",
  top: "50%",
  transform: "translateY(-50%)",
  fontSize: "16px",
});

export const article = style({
  display: "flex",
  padding: "24px 0",
  borderBottom: "1px solid rgba(242, 242, 242, 1)",
  gap: "20px",
  width: "100%",
  textDecoration: "none",
  color: "inherit",
});

export const articleLink = style({
  textDecoration: "none",
  color: "inherit",
  cursor: "pointer",
});

export const articleContent = style({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: "8px",
});

export const articleMeta = style({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  fontSize: "13px",
  color: "rgb(117, 117, 117)",
});

export const authorImage = style({
  width: "20px",
  height: "20px",
  borderRadius: "4px",
  objectFit: "cover",
});

export const authorName = style({
  fontSize: "13px",
  color: "rgb(41, 41, 41)",
  fontWeight: 400,
});

export const articleTitle = style({
  fontSize: "22px",
  fontWeight: 700,
  color: "rgb(41, 41, 41)",
  lineHeight: 1.2,
  letterSpacing: "-0.03em",
  margin: "4px 0",
});

export const articlePreview = style({
  fontSize: "16px",
  color: "rgb(117, 117, 117)",
  lineHeight: 1.4,
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
});

export const articleImage = style({
  width: "200px",
  height: "134px",
  objectFit: "cover",
  borderRadius: "4px",
});

export const articleFooter = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  fontSize: "13px",
  color: "rgb(117, 117, 117)",
  marginTop: "8px",
});

export const readingTime = style({
  display: "flex",
  alignItems: "center",
  gap: "4px",
  color: "rgb(117, 117, 117)",
  "& span": {
    display: "flex",
    alignItems: "center",
    gap: "4px",
  },
});

export const sideSection = style({
  flex: "0 0 380px",
  padding: "40px 0",
  position: "relative",
  "@media": {
    "(max-width: 1080px)": {
      flex: "1 1 auto",
      width: "100%",
      padding: "0",
      "::before": {
        display: "none",
      },
    },
  },
  "::before": {
    content: '""',
    position: "absolute",
    left: "-42px",
    top: 0,
    bottom: 0,
    width: "1px",
    backgroundColor: "rgb(242, 242, 242)",
  },
});

export const recommendedTopics = style({
  marginBottom: "48px",
});

export const sectionTitle = style({
  fontSize: "16px",
  fontWeight: 700,
  color: "rgb(41, 41, 41)",
  marginBottom: "16px",
});

export const topicsList = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "8px",
});

export const topicButton = style({
  padding: "8px 16px",
  borderRadius: "99em",
  border: "1px solid rgba(242, 242, 242, 1)",
  backgroundColor: "#F2F2F2",
  color: "rgb(41, 41, 41)",
  fontSize: "14px",
  cursor: "pointer",
  ":hover": {
    backgroundColor: "rgba(230, 230, 230, 1)",
  },
});

export const plusButton = style({
  display: "inline-flex",
  alignItems: "center",
  marginRight: "4px",
  color: "rgb(41, 41, 41)",
});

export const staffPicks = style({
  marginBottom: "48px",
});

export const staffPickCard = style({
  display: "flex",
  gap: "12px",
  padding: "12px 0",
  textDecoration: "none",
  color: "inherit",
  cursor: "pointer",
  ":hover": {
    "& h4": {
      color: "rgb(26, 137, 23)",
    },
  },
});

export const staffPickImage = style({
  width: "28px",
  height: "28px",
  borderRadius: "4px",
  objectFit: "cover",
});

export const staffPickContent = style({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: "4px",
});

export const staffPickMeta = style({
  display: "flex",
  alignItems: "center",
  gap: "4px",
  fontSize: "13px",
  color: "rgb(117, 117, 117)",
  "& span": {
    display: "inline",
  },
  "& span:not(:last-child)::after": {
    content: '"·"',
    margin: "0 4px",
  },
});

export const staffPickTitle = style({
  fontSize: "16px",
  fontWeight: 500,
  color: "rgb(41, 41, 41)",
  margin: 0,
  lineHeight: 1.4,
});

export const staffPickDate = style({
  fontSize: "13px",
  color: "rgb(117, 117, 117)",
});

export const seeFullList = style({
  display: "inline-block",
  marginTop: "20px",
  fontSize: "14px",
  color: "rgb(41, 41, 41)",
  textDecoration: "none",
  ":hover": {
    textDecoration: "underline",
  },
});

export const whoToFollowSection = style({
  marginBottom: "48px",
});

export const followCard = style({
  display: "flex",
  alignItems: "center",
  gap: "12px",
  marginBottom: "20px",
});

export const followButton = style({
  padding: "8px 16px",
  borderRadius: "99em",
  border: "1px solid rgb(41, 41, 41)",
  backgroundColor: "#fff",
  color: "rgb(41, 41, 41)",
  fontSize: "14px",
  cursor: "pointer",
  marginLeft: "auto",
  ":hover": {
    backgroundColor: "rgba(41, 41, 41, 0.1)",
  },
});

export const articleActions = style({
  display: "flex",
  alignItems: "center",
  gap: "16px",
});

export const actionButton = style({
  background: "none",
  border: "none",
  padding: "4px",
  cursor: "pointer",
  color: "rgb(117, 117, 117)",
  display: "flex",
  alignItems: "center",
  gap: "4px",
  ":hover": {
    color: "rgb(41, 41, 41)",
  },
});
