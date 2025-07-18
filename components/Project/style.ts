import Image from "next/image";
import styled from "styled-components";

export const Figure = styled.div`
  z-index: 2;
  position: relative;
  float: left;
  overflow: hidden;
  border-radius: 4px;
  min-width: 420px;
  max-width: 420px;
  width: 100%;
  height: 360px;
  text-align: center;
  cursor: pointer;
  background: rgb(31, 41, 55);
  background: linear-gradient(
    90deg,
    rgba(31, 41, 55, 0.95) 20%,
    rgba(217, 119, 6, 0.9) 100%
  );
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    max-width: 100%;
    width: 100vw;
  }
`;

export const FigCaption = styled.div`
  display: grid;
  position: absolute;
  z-index: 2;
  width: 100%;
  font-size: 1.25em;
  text-align: left;
  color: #faf9f8;
  backface-visibility: hidden;

  &:after {
    pointer-events: none;
  }
  ${Figure} > a {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export const ProjectTitle = styled.h2`
  grid-row: 1 / 2;
  margin: 0;
  a {
    color: #1F2937;
  }
  letter-spacing: 2px;
  font-size: 32px;
  padding: 0.5em 0.5em;
  word-spacing: -0.15em;
  font-weight: 600;
  position: relative;
  overflow: hidden;
  background-color: rgba(255, 249, 248, 0.85);
  &:after {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    color: #faf9f8;
    background: #F59E0B;
    content: "";
    -webkit-transition: -webkit-transform 0.35s;
    transition: transform 0.35s;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
  ${Figure}:hover &:after {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
`;

export const ProjectDescription = styled.p`
  grid-row: 2 / 4;
  color: #faf9f8;
  margin: 1em;
  padding: 0.5em;
  opacity: 0;
  font-size: 18px;
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
  -webkit-transform: translate3d(100%, 0, 0);
  transform: translate3d(100%, 0, 0);
  ${Figure}:hover & {
    opacity: 1;
    border-left: 5px solid #B45309;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
`;

export const ProjectViewMore = styled.h2`
  background-color: rgba(255, 255, 255, 0.6);
  a {
    font-weight: 400;
  }
  padding: 0.5em 0.5em;
  word-spacing: -0.1em;
  font-weight: 300;
  position: relative;
  overflow: hidden;
  opacity: 0;
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
  -webkit-transform: translate3d(-100%, 0, 0);
  transform: translate3d(-100%, 0, 0);
  ${Figure}:hover & {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
`;

export const ProjectImg = styled(Image)`
  grid-row: 1 / 4;
  min-height: 100%;
  max-width: 100%;
  opacity: 0.8;
  width: 100%;
  object-fit: cover;
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;

  ${Figure}:hover & {
    opacity: 0.2;
  }
`;
