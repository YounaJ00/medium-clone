// src/pages/Home.tsx
import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import {
  homeWrapper,
  navBar,
  navLeft,
  navRight,
  logo,
  navButton,
  leftBox,
  title,
  subtitle,
  startButton,
  rightBox,
  footer,
  footerLink,
  modalBackdrop,
  modalContainer,
  modalHeader,
  closeButton,
  modalContent,
  switchText,
  modalTitle,
  socialButton,
  createOne,
} from "../styles/home.css";

const Home = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  const closeModal = () => {
    setModalOpen(false);
    setIsSignUp(false);
  };

  const handleStartReading = () => {
    navigate({ to: "/main" });
  };

  return (
    <div className={homeWrapper}>
      <nav className={navBar}>
        <div className={navLeft}>
          <span className={logo}>Medium</span>
        </div>
        <div className={navRight}>
          <button className={navButton} onClick={() => setModalOpen(true)}>
            {" "}
            Sign in{" "}
          </button>
          <button
            className={navButton}
            style={{ backgroundColor: "#000", color: "#fff" }}
            onClick={handleStartReading}
          >
            Get started
          </button>
        </div>
      </nav>

      <div className={leftBox}>
        <h1 className={title}>
          Human <br />
          stories & ideas
        </h1>
        <p className={subtitle}>
          A place to read, write, and deepen your understanding
        </p>
        <button className={startButton} onClick={handleStartReading}>
          Start reading
        </button>
      </div>

      <div className={rightBox}>
        <img
          src="https://miro.medium.com/v2/format:webp/4*SdjkdS98aKH76I8eD0_qjw.png"
          alt="flower"
          style={{ maxWidth: "100%", height: "auto" }}
          loading="eager"
        />
      </div>

      <div className={footer}>
        {[
          "Help",
          "Status",
          "About",
          "Careers",
          "Press",
          "Blog",
          "Privacy",
          "Rules",
          "Terms",
          "Text to speech",
        ].map((text) => (
          <a key={text} href="#" className={footerLink}>
            {text}
          </a>
        ))}
      </div>

      {isModalOpen && (
        <div className={modalBackdrop} onClick={closeModal}>
          <div className={modalContainer} onClick={(e) => e.stopPropagation()}>
            <div className={modalHeader}>
              <button className={closeButton} onClick={closeModal}>
                ✕
              </button>
            </div>
            <div className={modalContent}>
              <h2 className={modalTitle}>
                {isSignUp ? "Join Medium." : "Welcome back."}
              </h2>
              <button className={socialButton}>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                  alt="Google"
                  width="20"
                  height="20"
                  style={{ marginRight: "8px" }}
                />
                {isSignUp ? "Sign up with Google" : "Sign in with Google"}
              </button>

              <div className={switchText}>
                {isSignUp ? (
                  <>
                    Already have an account?{" "}
                    <button
                      className={createOne}
                      onClick={() => setIsSignUp(false)}
                    >
                      Sign in
                    </button>
                    <div
                      style={{
                        fontSize: "13px",
                        color: "rgb(117, 117, 117)",
                        maxWidth: "320px",
                        lineHeight: "20px",
                      }}
                    >
                      Click "Sign up" to agree to Medium's{" "}
                      <a href="#">Terms of Service</a> and acknowledge that{" "}
                      Medium's <a href="#">Privacy Policy</a> applies to you.
                    </div>
                  </>
                ) : (
                  <>
                    No account?{" "}
                    <button
                      className={createOne}
                      onClick={() => setIsSignUp(true)}
                    >
                      Create one
                    </button>
                    <div
                      style={{
                        fontSize: "13px",
                        color: "rgb(117, 117, 117)",
                        maxWidth: "320px",
                        lineHeight: "20px",
                      }}
                    >
                      Forgot email or trouble signing in?{" "}
                      <a href="#">Get help</a>
                      <br />
                      <br />
                      Click "Sign in" to agree to Medium's{" "}
                      <a href="#">Terms of Service</a> and acknowledge that{" "}
                      Medium's <a href="#">Privacy Policy</a> applies to you.
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
