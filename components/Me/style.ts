import Image from "next/image";
import styled from "styled-components";
import { CommonButton, CommonTitle } from "../../styles/styledCommon";
import { HTMLAttributes } from "react";

export const Cta = styled.div`
  background-color: transparent;
  grid-template-columns: 0;
  grid-template-rows: auto auto;
  width: 100%;
`;

export const Header = styled.header`
  text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.5);
`;

interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  subtitle?: boolean;
}

export const Title = styled(CommonTitle)<TitleProps>`
  background-color: white;
  line-height: 1;
  text-align: center;
  font-size: 96px;
  font-weight: ${(props) => (props.subtitle ? 600 : 800)};
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    font-size: 60px;
  }
`;

export const FadeTitle = styled.span`
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    font-size: 60px;
  }
`;

export const FadeTitleB = styled.span`
  font-size: 90px;
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    font-size: 52px;
  }
`;

export const FadeTitleC = styled.span`
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    font-size: 60px;
  }
`;

export const Wrapper = styled.main`
  margin: 2rem auto 2rem auto;
  max-width: 1024px;
  padding: 20px;
  border-radius: 1em;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
  background: linear-gradient(to right, rgba(252, 211, 77, 0.15), rgba(252, 211, 77, 0.25));
  width: 70vw;
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 80vw;
  }
  @media only screen and (min-width: 1824px) {
    width: 50vw;
  }
`;

export const IntroSection = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 1em;
  justify-items: center;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    grid-template-columns: 1fr;
  }
`;


export const Social = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-column: 1 / 2;
  grid-row: 1 / 2;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    grid-column: 1 / 2;
    justify-content: center;
  }
`;

export const MediaIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em 0;
  flex-wrap: wrap;
  gap: 0.2em;
  margin-bottom: 1em;
  button {
    padding: 0 0;
  }

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    justify-content: center;
  }
`;

export const MediaIcon = styled(Image)`
  width: 32px;
  :hover {
    transform: scale(1.1);
  }
`;

export const MeImg = styled(Image)`
  margin: 0 auto;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
  border-radius: 50%;
  object-fit: cover;
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    grid-column: 1 / 3;
  }
`;

export const IntroBox = styled.div`
  grid-column: 2 / 2;
  grid-row: 1 / 2;
  position: relative;
  padding: 1em 1em;
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    grid-row: 2 / 3;
    grid-column: 1 / 2;
  }
`;

export const Intro = styled.h2`
  position: relative;
  color: #374151;
  font-weight: 200;
  text-align: left;
  margin: 0 auto;
  padding-left: 0.3em;
  border-left: 3px solid #B45309;

  @media only screen and (min-width: 1824px) {
    font-size: 28px;
  }
`;

export const CtaBtns = styled.div`
  position: relative;
  text-align: center;
  padding: 2em 2em;
  
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    padding: 1em 1em;
  }
`;

export const BlogEntry = styled.h3`
  padding: 0.3em 0 0 0;
  color: #374151;
  text-align: center;
  font-size: 26px;
  text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.5);
  font-weight: 600;
  a {
    font-size: 24px;
  }
`;

export const BlogSpan = styled.span`
  font-weight: 400;
  text-shadow: none;
  text-indent: 1em;
  a {
    text-decoration: underline;
    text-underline-offset: .4rem;
    color: #374151;
  }
  a:hover {
    color: #D97706;
  }
`;

export const Tools = styled.h2`
  font-weight: 800;
  -webkit-text-stroke: 1px black;
  color: #dfc412;
  text-shadow: 3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000,
    -1px 1px 0 #000, 1px 1px 0 #000;
`;

export const ViewButton = styled(CommonButton)`
  top: 30px;
  font-size: 28px;
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    font-size: 20px;
  }
`;
