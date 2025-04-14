import { style } from "@vanilla-extract/css";

export const publishContainer = style({
  width: "100vw",
  height: "100vh",
  display: "flex",
  backgroundColor: "#FFFFFF",
  overflow: "hidden",
});

export const containerWrapper = style({
  display: "flex",
  gap: "24px",
  margin: "0 auto",
  marginTop: "20vh",
  padding: "0 24px",
  maxWidth: "1000px",
  width: "100%",
});

export const leftContainer = style({
  flex: "1",
  width: "390px",
  padding: "32px",
  borderRadius: "4px",
  backgroundColor: "#FFFFFF",
});

export const rightContainer = style({
  width: "420px",
  padding: "12px",
  borderRadius: "4px",
  backgroundColor: "#FFFFFF",
  position: "relative",
});

export const storyPreviewTitle = style({
  fontSize: "18px",
  fontWeight: 700,
  color: "rgb(41, 41, 41)",
  marginBottom: "24px",
});

export const previewBox = style({
  display: "flex",
  flexDirection: "column",
  gap: "2px",
});

export const imageUploadSection = style({
  backgroundColor: "rgb(250, 250, 250)",
  padding: "32px",
  borderRadius: "3px",
  textAlign: "center",
});

export const imageUploadText = style({
  color: "rgb(117, 117, 117)",
  fontSize: "14px",
});

const postTextContent = {
    width: "100%",
    padding: "8px 0",
    border: "none",
    borderBottom: "1px solid rgb(223, 223, 223)",
    backgroundColor: "transparent",
    outline: "none",
};

export const postText = style({
  ...postTextContent,
  fontSize: "18px",
  fontWeight: 700,
});

export const postContent = style({
  ...postTextContent,
  fontSize: "13px",
});

export const publishingToText = style({
  fontSize: "18px",
  color: "rgb(41, 41, 41)",
  marginBottom: "2px",
});

export const publishingName = style({
  fontWeight: 700,
  fontSize: "17px",
});

export const topicSection = style({
  marginBottom: "24px",
});

export const topicText = style({
  color: "rgb(41, 41, 41)",
  fontSize: "14px",
  marginBottom: "16px",
});


export const topicInput = style({
  width: "100%",
  padding: "17px 18px",
  border: "1px solid rgb(216, 216, 216)",
  borderRadius: "3px",
  fontSize: "14px",
  backgroundColor: "rgb(252, 252, 252)",
  color: "rgb(41, 41, 41)",
  "::placeholder": {
    color: "rgb(151, 151, 151)",
  },
});

export const learnMoreText = style({
  color: "rgb(117, 117, 117)",
  fontSize: "14px",
  marginTop: "24px",
});

export const learnMoreLink = style({
  color: "rgb(41, 41, 41)",
  textDecoration: "underline",
});

export const publishActions = style({
  display: "flex",
  gap: "12px",
  marginTop: "24px",
});

export const publishNowButton = style({
  backgroundColor: "rgb(26, 137, 23)",
  color: "white",
  border: "none",
  borderRadius: "99em",
  padding: "7px 16px",
  fontSize: "14px",
  fontWeight: 500,
  cursor: "pointer",
  ":hover": {
    backgroundColor: "rgb(21, 112, 19)",
  },
});

export const scheduleLaterButton = style({
  backgroundColor: "white",
  color: "rgb(151, 151, 151)",
  border: "none",
  borderRadius: "99em",
  padding: "7px 16px",
  fontSize: "14px",
  fontWeight: 500,
  cursor: "pointer",
  ":hover": {
    backgroundColor: "rgba(26, 137, 23, 0.1)",
  },
});

export const closeButton = style({
  position: "absolute",
  top: "1px",
  right: "5px",
  background: "none",
  border: "none",
  fontSize: "29px",
  color: "rgb(145, 145, 145)",
  cursor: "pointer",
  padding: "4px",
  ":hover": {
    color: "rgb(41, 41, 41)",
  },
});

export const noteText = style({
  fontSize: "14px",
  color: "rgb(117, 117, 117)",
  lineHeight: 1.4,
});

export const noteHighlight = style({
  fontWeight: 700,
});
