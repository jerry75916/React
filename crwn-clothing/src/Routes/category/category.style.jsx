import styled from "styled-components";
export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 10px;
  row-gap: 20px;
  .title {
    display: flex;
    display: inline-block;
    font-size: 38px;
    margin-bottom: 25px;
    justify-self: center;
    grid-column: 1/5;
  }
`;
export const Title = styled.h2``;
