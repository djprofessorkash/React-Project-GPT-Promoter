// General importations for React functionality
import React from "react";
// Local instantiation of custom styles
import "./brand.css";
// Importing branding images locally
import { google, slack, atlassian, dropbox, shopify} from "./imports"

// Major component for branding materials
const Brand = () => {
  return (
    <div className="gpt3__brand section__padding">
      {/* Render image for Google */}
      <div>
        <img src={google} alt="google" />
      </div>

      {/* Render image for Slack */}
      <div>
        <img src={slack} alt="slack" />
      </div>

      {/* Render image for Atlassian */}
      <div>
        <img src={atlassian} alt="atlassian" />
      </div>

      {/* Render image for DropBox */}
      <div>
        <img src={dropbox} alt="dropbox" />
      </div>

      {/* Render image for Shopify */}
      <div>
        <img src={shopify} alt="shopify" />
      </div>
    </div>
  )
}

export default Brand;