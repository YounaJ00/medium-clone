// src/styles/home.css.ts
import { style } from "@vanilla-extract/css";

// 네비게이션 바 스타일들 추가
export const navBar = style({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  height: "64px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 5vw",
  borderBottom: "1px solid #ddd",
  backgroundColor: "#fefcf9",
});

export const navLeft = style({
  fontSize: "24px",
  fontWeight: 700,
  fontFamily: `'Georgia', serif`,
});

export const logo = style({
  fontSize: "24px",
  fontWeight: 700,
  color: "black",
});

export const navRight = style({
  display: "flex",
  gap: "1rem",
});

export const navButton = style({
  padding: "8px 16px",
  borderRadius: "9999px",
  border: "1px solid #000",
  backgroundColor: "transparent",
  cursor: "pointer",
  fontSize: "14px",
  fontWeight: 500,
  color: "#000",
});

// 기존 메인 화면 스타일
export const homeWrapper = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  minHeight: "100vh", // 변경됨
  backgroundColor: "#fefcf9",
  fontFamily: `'Georgia', 'Times New Roman', serif`,
  padding: "64px 5vw 0",
  position: "relative",
  flexWrap: "nowrap", // 변경됨
});

export const leftBox = style({
  flex: 1,
  minWidth: "320px",
  paddingRight: "2rem",
});

export const rightBox = style({
  flex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const title = style({
  fontSize: "64px",
  fontWeight: 700,
  lineHeight: 1.2,
  marginBottom: "1.5rem",
});

export const subtitle = style({
  fontSize: "20px",
  color: "#444",
  marginBottom: "2rem",
  maxWidth: "400px",
});

export const startButton = style({
  backgroundColor: "#000",
  color: "#fff",
  border: "none",
  borderRadius: "9999px",
  padding: "12px 24px",
  fontSize: "16px",
  cursor: "pointer",
  transition: "background-color 0.2s",
  ":hover": {
    backgroundColor: "#333",
  },
});

export const footer = style({
  position: "absolute",
  bottom: "1rem",
  left: "50%",
  transform: "translateX(-50%)",
  display: "flex",
  flexWrap: "wrap",
  gap: "1rem",
  fontSize: "14px",
  color: "#888",
  justifyContent: "center",
});

export const footerLink = style({
  textDecoration: "none",
  color: "#888",
  ":hover": {
    textDecoration: "underline",
  },
});

// 🔴 모달 관련 스타일 추가
export const modalBackdrop = style({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(255, 255, 255, 0.95)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
});

export const modalContainer = style({
  backgroundColor: "#fff",
  padding: "2rem",
  width: "90vw",
  maxWidth: "800px",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1.5rem",
});

export const modalHeader = style({
  position: "absolute",
  top: "12px",
  right: "12px",
  zIndex: 1,
});

export const closeButton = style({
  background: "none",
  border: "none",
  fontSize: "16px",
  cursor: "pointer",
  color: "#6B6B6B",
  padding: "8px",
  ":hover": {
    color: "#000",
  },
});

export const modalContent = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  maxWidth: "400px",
  gap: "32px",
});

export const modalTitle = style({
  fontSize: "28px",
  lineHeight: "36px",
  fontWeight: 400,
  fontFamily: "gt-super, Georgia, Cambria, Times New Roman, Times, serif",
  color: "rgb(36, 36, 36)",
  textAlign: "center",
  margin: 0,
});

export const socialButton = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  padding: "8px 16px",
  backgroundColor: "#fff",
  border: "1px solid rgb(242, 242, 242)",
  borderRadius: "99em",
  fontSize: "14px",
  fontWeight: 400,
  fontFamily: "sohne, Helvetica Neue, Helvetica, Arial, sans-serif",
  color: "rgb(41, 41, 41)",
  cursor: "pointer",
  transition: "background-color 0.2s, border-color 0.2s",
  boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px",
  ":hover": {
    borderColor: "rgb(168, 168, 168)",
  },
});

export const switchText = style({
  fontSize: "14px",
  color: "rgb(41, 41, 41)",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  alignItems: "center",
  fontFamily: "sohne, Helvetica Neue, Helvetica, Arial, sans-serif",
  selectors: {
    "& a": {
      color: "rgb(26, 137, 23)",
      textDecoration: "none",
    },
    "& a:hover": {
      textDecoration: "underline",
    },
  },
});

export const createOne = style({
  color: "rgb(26, 137, 23)",
  background: "none",
  border: "none",
  padding: 0,
  margin: 0,
  fontSize: "14px",
  fontWeight: 400,
  fontFamily: "sohne, Helvetica Neue, Helvetica, Arial, sans-serif",
  cursor: "pointer",
  ":hover": {
    textDecoration: "underline",
  },
});
