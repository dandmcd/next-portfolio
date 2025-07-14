import { createGlobalStyle } from "styled-components";
import wavepattern from "../public/wavepattern6.svg";

export const theme = {
  // Modern 2025 Yellow/Black Palette - WCAG AA Compliant
  appBody: "#FFFBEB", // Subtle warm background
  container: "#FEF3C7", // Light yellow surface
  primary: "#D97706", // Rich amber (primary yellow)
  primaryDark: "#B45309", // Deep amber
  primaryMed: "#F59E0B", // Medium amber
  primaryLightMed: "#FCD34D", // Light amber
  primaryLight: "#FEF3C7", // Very light amber
  text: "#1F2937", // Modern dark gray
  textLight: "#6B7280", // Medium gray
  textOverlay: "#374151", // Overlay text
  neutralLight: "#F9FAFB", // Clean light gray
  secondary: "#D97706", // Amber accent
  secondaryDark: "#B45309", // Deep amber
  secondaryLight: "#FCD34D", // Light amber
  disabled: "#E5E7EB", // Light gray
  error: "#DC2626", // Modern red
  success: "#059669", // Modern green
  link: "#D97706", // Amber links
  hoverLink: "#F59E0B", // Lighter amber on hover
};

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@200;400;600;700;800&display=swap');
  
  body {
    min-height: 100vh;
    z-index: 1;
    font-family: "Barlow Semi Condensed", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
    margin: 0;
    padding: 0;
    color: #1F2937;
    outline: none;
    background-color: #FFFBEB;
  }
  button {
    font-family: "Barlow Semi Condensed", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  }
  a {
    color: #1F2937;
    text-decoration: none;
    transition: color 0.6s ease;
    :hover {
      color: #D97706;
    }
  }
  h1 {
      font-size: 36px;
      color: #1F2937;
  }
    h2 {
      color: #1F2937;
      font-size: 24px;
  }
    h3 {
      font-size: 18px;
      font-weight: 600;
      color: #374151;
  }
    h4 {
      font-size: 14px;
      color: #374151;
  }
    h5 {
      font-size: 12px;
      color: #374151;
  }
    h6 {
      font-size: 8px;
      color: #374151;
  }
`;
