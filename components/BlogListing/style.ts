import Image from "next/image";
import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 200px 3fr;
  margin-bottom: 1em;
`;

export const ImgCell = styled.div`
  position: relative;
`;

export const BlogImg = styled(Image)`
  grid-column: 1 / 2;
  max-width: 200px;
  object-fit: cover;
`;

export const TextFields = styled.div`
  grid-column: 2 / 3;
  display: grid;
  grid-template-rows: 1fr 1fr 2 29px;
`;
export const Title = styled.h2`
  margin: 0.1em 0 0 0.5em;
  letter-spacing: 1px;
`;

export const UpdatedAt = styled.h5`
  color: #706d57;
  margin: 0.1em 0 0 1em;
`;

export const Preview = styled.h3`
  font-weight: 400;
  padding: 0.3em 0.5em 0.5em 1em;
`;

export const ViewMore = styled.h2`
  padding: 0 3em 0 0;
  font-weight: 400;
  text-align: right;
`;
