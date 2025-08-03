import React, { useState } from "react";
import "./About.css";
import { useTheme } from "../../contexts/ThemeContext";

const About: React.FC = () => {
  const { theme } = useTheme();
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  return (
    <div className={`about-container ${theme}`}>
      <section className="intro">
        <h1>About ThemeVerse</h1>
        <p>
          Discover the story behind our innovative approach to multi-theme
          design and user experience.
        </p>
      </section>

      <section className="mission">
        <h2>Our Mission</h2>
        <div className="mission-content">
          <div className="mission-text">
            <p>
              At ThemeVerse, we believe that great design shouldn’t be
              one-size-fits-all. Our platform demonstrates how different themes
              can completely transform user experience while maintaining
              functionality and accessibility.
            </p>
            <p>
              From minimalist elegance to professional sophistication, and
              playful creativity—we showcase the power of adaptive design that
              resonates with diverse user preferences.
            </p>

            <button className="learn-button" onClick={handleToggle}>
              {showMore ? "Show Less" : "Learn More About Our Vision"}
            </button>

            {showMore && (
              <div className="extra-vision-content">
                <p>
                  Our vision extends beyond simple aesthetics—we strive to
                  create emotionally resonant experiences for users across
                  various devices and platforms.
                </p>
                <p>
                  Through thoughtful research, user testing, and design
                  iteration, we aim to redefine how people interact with
                  digital products in a personalized way.
                </p>
                <p>
                  Whether you're a developer, designer, or product strategist,
                  ThemeVerse offers a scalable and customizable framework for
                  rapid experimentation and delivery of themed experiences.
                </p>
              </div>
            )}
          </div>

          <div className="theme-cards">
            <div className="theme-card">
              <div className="emoji">🎨</div>
              <h4>Minimalist</h4>
              <p>Clean & Simple</p>
            </div>
            <div className="theme-card">
              <div className="emoji">🌙</div>
              <h4>Professional</h4>
              <p>Dark & Structured</p>
            </div>
            <div className="theme-card">
              <div className="emoji">✨</div>
              <h4>Playful</h4>
              <p>Colorful & Fun</p>
            </div>
          </div>
        </div>
      </section>

      <section className="team">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="team-card">
            <div className="emoji">🎨</div>
            <h4>Alex Designer</h4>
            <p>UI/UX Lead</p>
          </div>
          <div className="team-card">
            <div className="emoji">💻</div>
            <h4>Sam Developer</h4>
            <p>Frontend Engineer</p>
          </div>
          <div className="team-card">
            <div className="emoji">👥</div>
            <h4>Jordan Product</h4>
            <p>Product Manager</p>
          </div>
        </div>
      </section>

      <section className="values">
        <h2>Our Values</h2>
        <div className="values-list">
          <div className="value-card">
            <h4>Innovation First</h4>
            <p>
              We constantly push boundaries to create unique user experiences
              that set new standards in the industry.
            </p>
          </div>
          <div className="value-card">
            <h4>Quality Excellence</h4>
            <p>
              We maintain the highest standards in code quality, design
              consistency, and performance optimization.
            </p>
          </div>
          <div className="value-card">
            <h4>User-Centric Design</h4>
            <p>
              Every decision we make prioritizes the end-user experience,
              ensuring our platforms are intuitive and accessible.
            </p>
          </div>
          <div className="value-card">
            <h4>Inclusive Accessibility</h4>
            <p>
              Our commitment to accessibility ensures that everyone can enjoy
              and benefit from our platform.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
