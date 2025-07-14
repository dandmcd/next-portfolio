import styled from "styled-components";

export const ContentfulHeading = styled.h4`
  border-left: 3px solid #1F2937;
  background-color: #FEF3C7;
  border-radius: 0 4px 4px 0;
  padding: 0 0 0 0.2em;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0.2px;
`;

export const ContentfulP = styled.p`
  font-size: 18px;
  font-weight: 300;
  a {
    text-decoration: underline;
  }
`;

export const ContentfulImg = styled.div`
  text-align: center;
`;

export const Img = styled.img`
  width: 80%;
  max-width: 800px;
  border-radius: 1em;
`;

export const ImgCaption = styled.p`
  margin: 0 auto;
  border-radius: 1em;
  backdrop-filter: blur(5px) brightness(55%);
  opacity: 1;
  max-width: 75%;
  padding: 0.3em;
  font-size: 18px;
  color: #FFFFFF;
  font-weight: 400;
  position: relative;
  overflow: hidden;
`;

export const Wrapper = styled.div`
  position: absolute;
  overflow-y: auto;
  left: 50%;
  top: 30%;
  transform: translate(-50%, -30%);
  border-radius: 1em;
  width: 60vw;
  height: 80vh;
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 100vw;
  }
  background-color: #FEF3C7;
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  ::-webkit-scrollbar-button {
    width: 0px;
    height: 0px;
  }
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(to bottom, #D97706, #B45309);
    border: 1px solid #92400E;
    border-radius: 6px;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2);
  }
  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(to bottom, #F59E0B, #D97706);
    border-color: #B45309;
  }
  ::-webkit-scrollbar-thumb:active {
    background: linear-gradient(to bottom, #B45309, #92400E);
    border-color: #78350F;
  }
  ::-webkit-scrollbar-track {
    background: #FEF3C7;
    border: 1px solid #FCD34D;
    border-radius: 6px;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
  }
  ::-webkit-scrollbar-track:hover {
    background: #FCD34D;
    border-color: #F59E0B;
  }
  ::-webkit-scrollbar-track:active {
    background: #F59E0B;
  }
  ::-webkit-scrollbar-corner {
    background: #FEF3C7;
  }
`;

export const BlogTitle = styled.h1`
  margin: 0 auto;
  padding: 0.3em 0.3em;
  letter-spacing: 1px;
  background-color: #FCD34D;
  color: #1F2937;
`;

export const ContentWrapper = styled.div`
  padding: 0 3em 0 3em;
`;

export const UpdatedAt = styled.h4`
  color: #6B7280;
  margin: 0.3em auto 0 1em;
`;

export const Content = styled.div`
  margin-top: 0.3em;
`;

export const GoBackBlock = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 0.2em 0 0 0.8em;
  margin-left: 0.5rem;
`;

export const BlogLink = styled.a`
  text-decoration: underline;
`;

export const GoBack = styled.a`
  font-size: 20px;
  cursor: pointer;
`;

export const Arrow = styled.i`
  border: solid #1F2937;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 5px;
  transform: rotate(135deg);
`;

export const CodeBlock = styled.div`
  padding: 0 2em 0 2em;
`;
