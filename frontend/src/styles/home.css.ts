// src/styles/home.css.ts
import { style } from '@vanilla-extract/css'

// 네비게이션 바 스타일들 추가
export const navBar = style({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  height: '64px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 5vw',
  borderBottom: '1px solid #ddd',
  backgroundColor: '#fefcf9',
})

export const navLeft = style({
  fontSize: '24px',
  fontWeight: 700,
  fontFamily: `'Georgia', serif`,
})

export const logo = style({
  fontSize: '24px',
  fontWeight: 700,
})

export const navRight = style({
  display: 'flex',
  gap: '1rem',
})

export const navButton = style({
  padding: '8px 16px',
  borderRadius: '9999px',
  border: '1px solid #000',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  fontSize: '14px',
  fontWeight: 500,
})

// 기존 메인 화면 스타일
export const homeWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '100vh',
  backgroundColor: '#fefcf9',
  fontFamily: `'Georgia', 'Times New Roman', serif`,
  padding: '64px 5vw 0', // navBar 공간 확보용 padding-top
  position: 'relative',
  flexWrap: 'wrap',
})

export const leftBox = style({
  flex: 1,
  minWidth: '320px',
})

export const title = style({
  fontSize: '64px',
  fontWeight: 700,
  lineHeight: 1.2,
  marginBottom: '1.5rem',
})

export const subtitle = style({
  fontSize: '20px',
  color: '#444',
  marginBottom: '2rem',
  maxWidth: '400px',
})

export const startButton = style({
  backgroundColor: '#000',
  color: '#fff',
  border: 'none',
  borderRadius: '9999px',
  padding: '12px 24px',
  fontSize: '16px',
  cursor: 'pointer',
  transition: 'background-color 0.2s',
  ':hover': {
    backgroundColor: '#333',
  },
})

export const rightBox = style({
  flex: 1,
  textAlign: 'center',
})

export const footer = style({
  position: 'absolute',
  bottom: '1rem',
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex',
  flexWrap: 'wrap',
  gap: '1rem',
  fontSize: '14px',
  color: '#888',
  justifyContent: 'center',
})

export const footerLink = style({
  textDecoration: 'none',
  color: '#888',
  ':hover': {
    textDecoration: 'underline',
  },
})
