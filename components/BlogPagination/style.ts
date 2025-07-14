import styled from "styled-components";

export const PageTurner = styled.div`
  display: flex;
  justify-content: center;
`;

export const Prev = styled.div`
  font-size: 20px;
  padding: 1em;
`;
export const Next = styled.div`
  font-size: 20px;
  padding: 1em;
`;

export const ArrowLeft = styled.i`
  border: solid #1F2937;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 5px;
  transform: rotate(135deg);
`;

export const ArrowRight = styled.i`
  border: solid #1F2937;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 5px;
  transform: rotate(-45deg);
`;
