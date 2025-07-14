import styled from "styled-components";

export const CommonTitle = styled.h1`
  line-height: 1.2;
  position: relative;
  color: #1F2937;
  margin: 0 auto;
  padding: 0.1em 0 0.1em 0;
  font-weight: 800;
  text-align: center;
  font-size: 72px;
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    font-size: 60px;
  }
`;

export const CommonButton = styled.button`
  -webkit-tap-highlight-color: transparent;
  -webkit-appearance: button;
  --webkit-mask-image: none;
  width: 75%;
  position: relative;
  background-color: #D97706;
  color: #FFFFFF;
  margin: 0 auto;
  outline: none;
  border-radius: 999px;
  border: 0 solid;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  min-width: 156px;
  line-height: 1.5;
  font-weight: 600;
  font-size: 1.5rem;
  padding: 1rem 0;
  text-decoration: none #0d172a solid;
  text-decoration-thickness: auto;
  text-align: center;
  letter-spacing: 0.1rem;
  cursor: pointer;
  transition: background-color 0.6s ease;
  &:before {
    border: 0 solid;
    box-sizing: border-box;
    --thickness: 4px;
    border: var(--thickness) solid #B45309;
    border-radius: 999px;
    content: "";
    inset: calc(var(--thickness) * -1);
    opacity: 0;
    pointer-events: none;
    position: absolute;
    transform: scale(1.3);
    transition: transform 0.2s, opacity 0.2s;
  }
  &:hover:before {
    opacity: 1;
    transform: scale(1);
  }
  &:hover {
    background-color: #F59E0B;
    color: #1F2937;
  }
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 220px;
  }
`;
