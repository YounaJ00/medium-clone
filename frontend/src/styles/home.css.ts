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
  backgroundColor: "rgba(0, 0, 0, 0.6)", // 🔴
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
});

export const modalContent = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
  alignItems: "stretch",
});

// 🔴 모달 헤더: 제목과 닫기 버튼 감싸는 영역
export const modalHeader = style({
  position: "absolute",
  top: "16px",
  right: "16px",
});

export const modalContainer = style({
  backgroundColor: "#fff",
  borderRadius: "12px",
  padding: "4rem 2rem", // 좌우 여백 줄이고 반응형 대응
  width: "90vw",         // 화면 너비 90%로 반응형 설정
  maxWidth: "500px",     // 최대 너비 설정
  boxShadow: "0 0 20px rgba(0,0,0,0.25)",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",      
});

export const closeButton = style({
  background: "none",
  border: "none",
  fontSize: "20px",
  cursor: "pointer",
  color: "#666",
  ":hover": {
    color: "#000",
  },
});

export const modalTitle = style({
  fontSize: "1.5rem",
  fontWeight: "bold",
  marginBottom: "1rem",
  textAlign: "center",
  color: "#000",
});

export const modalInput = style({
  display: "block",
  width: "100%",
  padding: "0.75rem",
  marginBottom: "1rem",
  borderRadius: "6px",
  border: "1px solid #ccc",
  fontSize: "1rem",
});


export const switchText = style({
  fontSize: "0.9rem",
  textAlign: "center",
  marginTop: "0.5rem",
  color: "#555",
  // selectors: {
  //   // "& button": {
  //   //   marginLeft: "4px",
  //   //   background: "none",
  //   //   border: "none",
  //   //   color: "#1a8917",
  //   //   cursor: "pointer",
  //   //   fontWeight: "bold",
  //   //   ":hover": {
  //   //     textDecoration: "underline",
  //   //   },
  //   // },
  // },
});


// 🔴 소셜 로그인 버튼 스타일
export const socialButton = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.5rem",
  padding: "0.75rem 1rem",
  backgroundColor: "#fff",
  border: "1px solid #ccc",
  borderRadius: "50px",
  fontSize: "1rem",
  fontWeight: 500,
  color: "black",
  cursor: "pointer",
  transition: "background 0.2s",
});


// 🔴 서브텍스트 스타일
export const subText = style({
  textAlign: "center",
  fontSize: "0.95rem",
  color: "#666",
  marginBottom: "1rem",
  lineHeight: 1.4,
  whiteSpace: "normal",   // 여러 줄 가능하게 하되
  maxWidth: "100%",       // 너비 꽉 채워 한 줄로 보이게
});


export const createOne = style({
  color: "#22c55e", // green-500
  fontWeight: 600,
  cursor: "pointer",
  backgroundColor: "transparent",
  border: "none",
  fontSize: "1rem",
  transition: "background 0.2s",
  selectors: {
    "&:hover": {
      textDecoration: "underline",
    },
  },
});