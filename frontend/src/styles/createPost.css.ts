import { style } from "@vanilla-extract/css";

export const createPostContainer = style({
  width: "100vw",
  minHeight: "100vh",
  backgroundColor: "#FFFFFF",
});

export const header = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "16px 80px",
  maxWidth: "900px",
  margin: "0 auto",
  width: "100%",
});

export const headerLeft = style({
  display: "flex",
  alignItems: "center",
  gap: "12px",
});

export const logo = style({
  fontSize: "28px",
  fontWeight: 700,
  fontFamily: `'Georgia', serif`,
  color: "black",
  textDecoration: "none",
});

export const draftText = style({
  color: "rgb(41, 41, 41)",
  fontSize: "14px",
});

export const headerRight = style({
  display: "flex",
  alignItems: "center",
  gap: "8px",
});

export const publishButton = style({
  backgroundColor: "rgb(26, 137, 23)",
  color: "white",
  border: "none",
  borderRadius: "99em",
  padding: "4px 12px",
  fontSize: "13px",
  fontWeight: 500,
  cursor: "pointer",
  ":hover": {
    backgroundColor: "rgb(21, 112, 19)",
  },
});

export const moreButton = style({
  padding: "8px",
  background: "none",
  border: "none",
  cursor: "pointer",
  color: "rgb(117, 117, 117)",
  borderRadius: "50%",
  ":hover": {
    backgroundColor: "rgba(242, 242, 242, 1)",
  },
});

export const notificationButton = style({
  padding: "8px",
  background: "none",
  border: "none",
  cursor: "pointer",
  color: "rgb(117, 117, 117)",
  borderRadius: "50%",
  ":hover": {
    backgroundColor: "rgba(242, 242, 242, 1)",
  },
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

export const editorContainer = style({
  maxWidth: "740px",
  margin: "0 auto",
  padding: "32px 24px",
  backgroundColor: "#FFFFFF",
});

export const titleInput = style({
  width: "100%",
  fontSize: "42px",
  fontWeight: 700,
  color: "rgb(41, 41, 41)",
  border: "none",
  outline: "none",
  marginBottom: "8px",
  backgroundColor: "#FFFFFF",
  fontFamily: "'Georgia', serif",
  "::placeholder": {
    color: "rgb(117, 117, 117)",
    fontFamily: "'Georgia', serif",
  },
});

export const contentInput = style({
  width: "100%",
  fontSize: "21px",
  lineHeight: 1.5,
  color: "rgb(41, 41, 41)",
  border: "none",
  outline: "none",
  resize: "none",
  minHeight: "calc(100vh - 300px)",
  backgroundColor: "#FFFFFF",
  fontFamily: "'Georgia', serif",
  "::placeholder": {
    color: "rgb(117, 117, 117)",
    fontFamily: "'Georgia', serif",
  },
});
