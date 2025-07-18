import styled, { keyframes } from "styled-components";

export const Tooltip = styled.div`
  position: fixed;
  display: inline-block;
  width: 40px;
  bottom: 140px;
  right: 65px;
  z-index: 1000;
`;

export const swing = keyframes`

15% {
  -webkit-transform: translateX(4px);
  transform: translateX(4px);
}
30% {
  -webkit-transform: translateX(-4px);
  transform: translateX(-4px);
}
50% {
  -webkit-transform: translateX(2px);
  transform: translateX(2px);
}
65% {
  -webkit-transform: translateX(-2px);
  transform: translateX(-2px);
}
80% {
  -webkit-transform: translateX(1px);
  transform: translateX(1px);
}
100% {
  -webkit-transform: translateX(0);
  transform: translateX(0);
}
`;

export const Float = styled("div")<{ clicked: boolean }>`
  position: fixed;
  width: ${(props) => (props.clicked ? "20px" : "60px")};
  height: ${(props) => (props.clicked ? "20px" : "60px")};
  bottom: ${(props) => (props.clicked ? "60px" : "40px")};
  right: ${(props) => (props.clicked ? "40px" : "20px")};
  background: linear-gradient(135deg, #FFFBEB, #F59E0B, #D97706);
  border-radius: 1em;
  text-align: center;
  cursor: pointer;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.25);
  z-index: 1000;
  animation: ${swing} 0.5s ease;
  animation-delay: 3s;
  animation-iteration-count: 1;
  transition: background-color 0.5s;
  transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4);
  #menu-share + ul {
    visibility: hidden;
  }
`;

export const MyFloat = styled.div`
  display: inline-block;
`;

export const Hamburger = styled("div")<{ clicked: boolean }>`
  width: 35px;
  height: 30px;
  cursor: pointer;
  display: inline-block;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);

  span {
    background-color: #1F2937;
    position: absolute;
    border-radius: 2px;
    transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4);
    opacity: ${(props) => (props.clicked ? "0" : "1")};
  }
  span:nth-child(1) {
    width: 100%;
    height: 3px;
    display: block;
    top: 0px;
    left: 0px;
  }
  span:nth-child(2) {
    width: 100%;
    height: 3px;
    display: block;
    top: 13px;
    left: 0px;
  }
  span:nth-child(3) {
    width: 100%;
    height: 3px;
    display: block;
    bottom: 0px;
    left: 0px;
  }
`;

export const TooltipText = styled.span`
  visibility: hidden;
  width: 100px;
  background-color: #1F2937;
  color: #fdfae5;
  text-align: center;
  padding: 5px 0;
  border-radius: 0.5em;
  position: absolute;
  z-index: 5000;
  ${Tooltip}:hover & {
    visibility: visible;
  }
  ::after {
    content: " ";
    position: absolute;
    top: 100%;
    left: 50%;
    border-width: 5px;
    border-style: solid;
    border-color: black transparent transparent transparent;
  }
`;

export const List = styled.ul`
  position: fixed;
  right: 20px;
  border-radius: 1em;
  padding: 0.4em;
  bottom: 90px;
  z-index: 100;
  text-align: end;
  line-height: 1.5em;
  letter-spacing: 0.2em;
  list-style-type: none;
  margin: 0;
  transition: 0.5s;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(5px) brightness(55%);
  opacity: 1;
  a {
    color: "#fef8f5";
    text-decoration: none;
  }
`;

export const ListItem = styled("li")<{ clicked: boolean }>`
  display: ${(props) => (props.clicked ? "block" : "none")};
  list-style: none;
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 10px;
  color: #fef8ed;
  ::first-letter {
    text-shadow: 1px 1px 2px #FEF3C7;
    color: #F59E0B;
    transition: color 0.5s;
  }
  a {
    color: #fef8ed;
  }
  :hover {
    visibility: visible !important;
    opacity: 1 !important;
    transform: scale(1.1);
  }
`;
