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
  background: linear-gradient(135deg, #D97706 0%, #F59E0B 100%);
  color: #FFFFFF;
  margin: 0 auto;
  outline: none;
  border-radius: 999px;
  border: 0 solid;
  box-shadow: 
    0 4px 15px rgba(217, 119, 6, 0.4),
    0 2px 4px rgba(0, 0, 0, 0.2);
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
  transition: all 0.3s ease;
  &:before {
    border: 0 solid;
    box-sizing: border-box;
    --thickness: 3px;
    border: var(--thickness) solid #FCD34D;
    border-radius: 999px;
    content: "";
    top: calc(var(--thickness) * -1);
    right: calc(var(--thickness) * -1.5);
    bottom: calc(var(--thickness) * -1);
    left: calc(var(--thickness) * -1.5);
    opacity: 0;
    pointer-events: none;
    position: absolute;
    transform: scale(1.2);
    transition: all 0.3s ease;
    box-shadow: 0 0 20px rgba(252, 211, 77, 0.6);
  }
  &:hover:before {
    opacity: 1;
    transform: scale(1.05);
  }
  &:hover {
    background: linear-gradient(135deg, #F59E0B 0%, #FCD34D 100%);
    color: #1F2937;
    box-shadow: 
      0 8px 25px rgba(245, 158, 11, 0.5),
      0 4px 8px rgba(0, 0, 0, 0.3);
    transform: translateY(-2px);
  }
  &:active {
    transform: translateY(0);
    box-shadow: 
      0 2px 10px rgba(217, 119, 6, 0.4),
      0 1px 3px rgba(0, 0, 0, 0.2);
  }
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 220px;
  }
`;
