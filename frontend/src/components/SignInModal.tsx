// // src/components/SignInModal.tsx
// import React from 'react';
// import * as styles from '../styles/modal.css';

// interface Props {
//   onClose: () => void;
//   onSwitchToSignUp: () => void;
// }

// export const SignInModal: React.FC<Props> = ({ onClose, onSwitchToSignUp }) => {
//   return (
//     <div className={styles.modalBox}>
//       <button className={styles.closeButton} onClick={onClose}>✕</button>
//       <h2>Sign In</h2>
//       <input type="email" placeholder="Email" style={{ width: '100%', marginBottom: '8px' }} />
//       <input type="password" placeholder="Password" style={{ width: '100%', marginBottom: '16px' }} />
//       <button style={{ width: '100%' }}>Continue</button>
//       <p style={{ marginTop: '16px', fontSize: '14px' }}>
//         Dㅇㅇㅇㅇㅇㅇㄴㅇㄴㅇㄴ{' '}
//         <button onClick={onSwitchToSignUp} style={{ color: '#1a73e8', background: 'none', border: 'none', cursor: 'pointer' }}>
//           Create one
//         </button>
//       </p>
//     </div>
//   );
// };