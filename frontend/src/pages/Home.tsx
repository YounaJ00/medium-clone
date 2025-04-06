// src/pages/Home.tsx
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
} from '../styles/home.css'

const Home = () => {
  return (
    <div className={homeWrapper}>
       <nav className={navBar}>
        <div className={navLeft}>
          <span className={logo}>Medium</span>
        </div>
        <div className={navRight}>
          <button className={navButton}>Sign in</button>
          <button className={navButton} style={{ backgroundColor: '#000', color: '#fff' }}>
            Get started
          </button>
        </div>
      </nav>

      <div className={leftBox}>
        <h1 className={title}>Human <br />stories & ideas</h1>
        <p className={subtitle}>
          A place to read, write, and deepen your understanding
        </p>
        <button className={startButton}>Start reading</button>
      </div>

      <div className={rightBox}>
        <img
          src="https://miro.medium.com/v2/format:webp/4*SdjkdS98aKH76I8eD0_qjw.png"
          alt="flower"
          width="460" 
          height="600" 
          loading="eager"
        />
      </div>

      <div className={footer}>
        {[
          'Help', 'Status', 'About', 'Careers', 'Press',
          'Blog', 'Privacy', 'Rules', 'Terms', 'Text to speech'
        ].map((text) => (
          <a key={text} href="#" className={footerLink}>{text}</a>
        ))}
      </div>
    </div>
  )
}

export default Home
