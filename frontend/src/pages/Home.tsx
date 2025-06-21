// src/pages/Home.tsx
import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import * as styles from "../styles/home.css";
import { GoogleICon } from "../assets";

const BASE_URL = "http://localhost:8080/oauth2/authorization/google";
const REDIRECT_URI = encodeURIComponent("http://localhost:5173/oauth/callback");

const googleSignIn = `${BASE_URL}?mode=login&redirect_uri=${REDIRECT_URI}`;
const googleSignUp = `${BASE_URL}?mode=register&redirect_uri=${REDIRECT_URI}`;

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
    <div className={styles.homeWrapper}>
      <nav className={styles.navBar}>
        <div className={styles.navLeft}>
          <span className={styles.logo}>Medium</span>
        </div>
        <div className={styles.navRight}>
          <button
            className={styles.navButton}
            onClick={() => setModalOpen(true)}
          >
            {" "}
            Sign in{" "}
          </button>
          <button
            className={styles.navButton}
            style={{ backgroundColor: "#000", color: "#fff" }}
            onClick={handleStartReading}
          >
            Get started
          </button>
        </div>
      </nav>

      <div className={styles.leftBox}>
        <h1 className={styles.title}>
          Human <br />
          stories & ideas
        </h1>
        <p className={styles.subtitle}>
          A place to read, write, and deepen your understanding
        </p>
        <button className={styles.startButton} onClick={handleStartReading}>
          Start reading
        </button>
      </div>

      <div className={styles.rightBox}>
        <img
          src="https://miro.medium.com/v2/format:webp/4*SdjkdS98aKH76I8eD0_qjw.png"
          alt="flower"
          style={{ maxWidth: "100%", height: "auto" }}
          loading="eager"
        />
      </div>

      <div className={styles.footer}>
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
          <a key={text} href="#" className={styles.footerLink}>
            {text}
          </a>
        ))}
      </div>

      {isModalOpen && (
        <div className={styles.modalBackdrop} onClick={closeModal}>
          <div
            className={styles.modalContainer}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.modalHeader}>
              <button className={styles.closeButton} onClick={closeModal}>
                ✕
              </button>
            </div>
            <div className={styles.modalContent}>
              <h2 className={styles.modalTitle}>
                {isSignUp ? "Join Medium." : "Welcome back."}
              </h2>

              <button
                className={styles.socialButton}
                onClick={() =>
                  (window.location.href = isSignUp
                    ? googleSignUp
                    : googleSignIn)
                }
              >
                <GoogleICon className={styles.googleIcon} />
                {isSignUp ? "Sign up with Google" : "Sign in with Google"}
              </button>
              <div className={styles.switchText}>
                {isSignUp ? (
                  <>
                    Already have an account?{" "}
                    <button
                      className={styles.createOne}
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
                      className={styles.createOne}
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
