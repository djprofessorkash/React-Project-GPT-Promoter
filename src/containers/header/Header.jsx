import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
        <div className="gpt3__header-content">
          {/* Header text */}
          <h1 className="gradient__text">
            Let's Build Something amazing with GPT-3 OpenAI
          </h1>

          {/* Header summary */}
          <p>Technologies like ChatGPT are only the beginning. With the power of OpenAI's GPT-Driven model architectures at your fingertips, the next generation of world-changing technologies is yours to discover and invent. All that's left is to jump in!</p>

          {/* Header input field for email submission */}
          <div className="gpt3__header-content__input">
            <input type="email" placeholder="Your Email Address" />
            <button type="button">Get Started</button>
          </div>

          {/* Header icon content and text blurb */}
          <div className="gpt3__header-content__people">
            <img src={people} alt="people"/>
            <p>1,600 people requested access to the API within the last 24 hours.</p>
          </div>
        </div>

        {/* Header image */}
        <div className="gpt3__header-image">
          <img src={ai} alt="ai"/>
        </div>
    </div>
  )
}

export default Header;