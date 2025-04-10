// src/styles/auth.css.ts
import { style } from '@vanilla-extract/css';

export const overlay = style({
  position: 'fixed',
  inset: 0,
  background: 'rgba(255,255,255,0.95)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 50,
});

export const modal = style({
  background: '#fff',
  padding: '40px',
  borderRadius: '6px',
  boxShadow: '0 4px 14px rgba(0,0,0,0.1)',
  width: '400px',
  textAlign: 'center',
  position: 'relative',
});

export const closeBtn = style({
  position: 'absolute',
  top: '16px',
  right: '16px',
  fontSize: '20px',
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
});

export const title = style({
  fontSize: '24px',
  marginBottom: '32px',
  fontWeight: 500,
});

export const googleBtn = style({
  width: '100%',
  padding: '12px',
  borderRadius: '9999px',
  border: '1px solid black',
  fontSize: '16px',
  fontWeight: 500,
  backgroundColor: '#fff',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
});

export const googleIcon = style({
  width: '20px',
  height: '20px',
});

export const bottomText = style({
  marginTop: '24px',
  fontSize: '14px',
});

export const link = style({
  color: 'green',
  textDecoration: 'none',
  fontWeight: 600,
});

export const bottomHelp = style({
  marginTop: '24px',
  fontSize: '12px',
  color: '#666',
});
