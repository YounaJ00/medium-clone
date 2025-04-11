import { style, globalStyle } from "@vanilla-extract/css";

export const pageContainer = style({
  backgroundColor: "rgb(255, 255, 255)",
  minHeight: "100vh",
  width: "100vw",
  top: 0,
  left: 0,
  overflowY: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const detailContainer = style({
  width: "100%",
  padding: "0 400px",
  display: "flex",
  justifyContent: "center",
  marginTop: "64px",
});

export const contentWrapper = style({
  width: "100%",
  maxWidth: "680px",
  margin: "0 auto",
});

export const articleWrapper = style({
  padding: "32px 0",
});

export const articleHeader = style({
  marginBottom: "32px",
});

export const memberOnlyBadge = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "4px",
  fontSize: "14px",
  color: "rgb(117, 117, 117)",
  marginBottom: "24px",
  padding: "4px 8px",
  border: "1px solid rgb(242, 242, 242)",
  borderRadius: "3px",
});

export const articleTitle = style({
  fontSize: "42px",
  fontWeight: 700,
  color: "rgb(41, 41, 41)",
  marginBottom: "32px",
  lineHeight: 1.2,
  letterSpacing: "-0.016em",
});

export const authorSection = style({
  display: "flex",
  alignItems: "center",
  gap: "16px",
  marginBottom: "32px",
});

export const authorInfo = style({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: "4px",
});

export const authorMeta = style({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  fontSize: "14px",
  color: "rgb(117, 117, 117)",
});

export const authorNameWrapper = style({
  display: "flex",
  alignItems: "center",
  gap: "12px",
});

export const authorName = style({
  fontSize: "16px",
  fontWeight: 500,
  color: "rgb(41, 41, 41)",
});

export const followButton = style({
  fontSize: "14px",
  color: "rgb(117, 117, 117)",
  background: "none",
  border: "none",
  padding: 0,
  cursor: "pointer",
  textDecoration: "underline",
  ":hover": {
    color: "rgb(41, 41, 41)",
  },
});

export const articleContent = style({
  fontSize: "20px",
  lineHeight: 1.7,
  color: "rgb(41, 41, 41)",
  marginBottom: "56px",
});

globalStyle(`${articleContent} p`, {
  marginBottom: "12px",
});

globalStyle(`${articleContent} p:last-child`, {
  marginBottom: 0,
});

export const responsesSection = style({
  borderTop: "1px solid rgb(242, 242, 242)",
  paddingTop: "48px",
  marginTop: "48px",
});

export const responsesHeader = style({
  fontSize: "20px",
  fontWeight: 700,
  color: "rgb(41, 41, 41)",
  marginBottom: "24px",
  display: "flex",
  alignItems: "center",
  gap: "4px",
});

export const responseCount = style({
  color: "rgb(117, 117, 117)",
});

export const writeResponseWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  marginBottom: "32px",
});

export const responseUserInfo = style({
  display: "flex",
  alignItems: "center",
  gap: "12px",
});

export const responseInputName = style({
  fontSize: "14px",
  fontWeight: 500,
  color: "rgb(41, 41, 41)",
});

export const writeResponseSection = style({
  display: "flex",
  gap: "12px",
  alignItems: "flex-start",
  backgroundColor: "rgb(242, 242, 242)",
  borderRadius: "4px",
  padding: "12px",
});

export const responseInputContainer = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "12px",
});

export const responseInput = style({
  width: "100%",
  minHeight: "24px",
  maxHeight: "36px",
  padding: "4px 8px",
  border: "none",
  fontSize: "14px",
  lineHeight: 1.4,
  resize: "none",
  backgroundColor: "transparent",
  color: "rgb(41, 41, 41)",
  transition: "all 0.2s ease",
  "::placeholder": {
    color: "rgb(117, 117, 117)",
  },
  ":focus": {
    outline: "none",
  },
});

export const responseInputExpanded = style({
  minHeight: "120px",
  maxHeight: "400px",
});

export const responseControls = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "12px",
  marginTop: "8px",
});

export const formatControls = style({
  display: "flex",
  gap: "16px",
  alignItems: "center",
});

export const formatButton = style({
  padding: "4px 8px",
  background: "none",
  border: "none",
  cursor: "pointer",
  color: "rgb(117, 117, 117)",
  fontSize: "21px",
  fontFamily: "Georgia, serif",
  fontWeight: 500,
  ":hover": {
    color: "rgb(41, 41, 41)",
  },
});

export const responseActionButtons = style({
  display: "flex",
  gap: "12px",
  alignItems: "center",
});

export const cancelButton = style({
  padding: "4px 12px",
  fontSize: "14px",
  color: "rgb(117, 117, 117)",
  background: "none",
  border: "none",
  borderRadius: "99em",
  cursor: "pointer",
  ":hover": {
    color: "rgb(41, 41, 41)",
  },
});

export const respondButton = style({
  padding: "4px 16px",
  fontSize: "14px",
  fontWeight: 500,
  color: "rgb(242, 242, 242)",
  backgroundColor: "rgba(117, 117, 117, 0.8)",
  border: "none",
  borderRadius: "99em",
  cursor: "pointer",
  ":disabled": {
    opacity: 0.5,
    cursor: "not-allowed",
  },
  ":hover": {
    backgroundColor: "rgb(117, 117, 117)",
  },
});

export const responsesList = style({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  borderTop: "1px solid rgb(242, 242, 242)",
  marginTop: "24px",
  paddingTop: "24px",
});

export const responseItem = style({
  display: "flex",
  gap: "12px",
  paddingBottom: "24px",
  borderBottom: "1px solid rgb(242, 242, 242)",
  alignItems: "flex-start",
});

export const responseAuthorSection = style({
  display: "flex",
  alignItems: "center",
  gap: "8px",
});

export const authorBadge = style({
  display: "flex",
  alignItems: "center",
  gap: "4px",
  color: "rgb(41, 41, 41)",
  fontSize: "14px",
});

export const authorBadgeIcon = style({
  color: "rgb(255, 199, 0)",
});

export const responseContent = style({
  flex: 1,
  marginLeft: "0",
});

export const responseAuthor = style({
  display: "flex",
  alignItems: "center",
  gap: "4px",
  marginBottom: "4px",
  fontSize: "14px",
  color: "rgb(117, 117, 117)",
});

export const responseDate = style({
  color: "rgb(117, 117, 117)",
  fontSize: "12px",
  display: "block",
  marginTop: "4px",
  marginBottom: "8px",
});

export const responseText = style({
  fontSize: "16px",
  lineHeight: 1.4,
  color: "#000000",
  marginBottom: "3px",
  marginTop: "4px",
  fontWeight: 400,
  paddingLeft: "0",
  marginLeft: "0",
  width: "100%",
});

export const responseActions = style({
  display: "flex",
  alignItems: "center",
  gap: "16px",
});

export const responseActionButton = style({
  display: "flex",
  alignItems: "center",
  gap: "4px",
  padding: "4px",
  background: "none",
  border: "none",
  cursor: "pointer",
  color: "rgb(117, 117, 117)",
  fontSize: "13px",
  ":hover": {
    color: "rgb(41, 41, 41)",
  },
});

export const moreButton = style({
  position: "absolute",
  right: 0,
  top: 0,
  padding: "4px",
  background: "none",
  border: "none",
  cursor: "pointer",
  color: "rgb(117, 117, 117)",
  ":hover": {
    color: "rgb(41, 41, 41)",
  },
});

export const responseItemWrapper = style({
  position: "relative",
  width: "100%",
});

export const articleActions = style({
  display: "flex",
  alignItems: "center",
  gap: "24px",
  borderTop: "1px solid rgb(242, 242, 242)",
  borderBottom: "1px solid rgb(242, 242, 242)",
  padding: "8px 0",
  margin: "32px 0",
});

export const actionButtonsLeft = style({
  display: "flex",
  alignItems: "center",
  gap: "24px",
});

export const actionButtonsRight = style({
  display: "flex",
  alignItems: "center",
  gap: "24px",
  marginLeft: "auto",
});

export const actionIconButton = style({
  background: "none",
  border: "none",
  padding: "4px",
  cursor: "pointer",
  color: "rgb(117, 117, 117)",
  display: "flex",
  alignItems: "center",
  gap: "4px",
  fontSize: "14px",
  ":hover": {
    color: "rgb(41, 41, 41)",
  },
});

export const authorImage = style({
  width: "48px",
  height: "48px",
  borderRadius: "50%",
  objectFit: "cover",
});

export const replyButton = style({
  color: "rgb(41, 41, 41)",
  fontSize: "14px",
  fontWeight: 400,
  background: "none",
  border: "none",
  cursor: "pointer",
  padding: 0,
  width: "fit-content",
  alignSelf: "flex-start",
  textDecoration: "underline",
  ":hover": {
    color: "rgb(117, 117, 117)",
  },
});

export const seeAllResponsesButton = style({
  display: "inline-block",
  padding: "8px 16px",
  border: "1px solid rgb(242, 242, 242)",
  borderRadius: "99em",
  color: "rgb(41, 41, 41)",
  fontSize: "14px",
  background: "none",
  cursor: "pointer",
  marginTop: "24px",
  marginBottom: "48px",
  width: "fit-content",
  ":hover": {
    border: "1px solid rgb(117, 117, 117)",
  },
});

export const responseDivider = style({
  borderTop: "1px solid rgb(242, 242, 242)",
  margin: "24px 0",
});
