import styled from "styled-components";

export const CardStyle = styled.div`
  padding: 0 0 1rem 0;
  background-color: #fff;
  border-radius: 1rem;
  overflow: hidden;
  max-width: 30rem;

  .lbl_profile {
    font-weight: 800;
    font-size: 2rem;
    padding: 1rem;
    margin-bottom: 1rem;
  }
  img {
    width: 100%;
    height: 40%;
    padding-left: 0px;
  }
`;
export const RowStyle = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  &::after {
    content: "";
    position: absolute;

    left: 1rem;
    right: 1rem;
    bottom: -5px;
    width: 95%;
    height: 0.5px;
    background: orange;
  }
`;

export const Icons = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  svg {
    color: purple;
    width: 3rem;
    height: 3rem;
    cursor: pointer;
  }
  margin: 2rem 0 2rem;
`;
export const Btn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    margin: 20px 0;
    font-size: 14px;
    font-weight: 400;
    padding: 7px 10px;
    border: 1px solid transparent;
    border-radius: 50px;
    outline: none;
    text-decoration: none;
    color: #fff;

    background: linear-gradient(
      111deg,
      rgba(197, 156, 221, 1) 0%,
      rgba(128, 2, 238, 1) 100%
    );
    cursor: pointer;
    transform: translateY(0);
    transition: all 0.5s;
  }

  a:hover {
    transform: translateY(-15px);
  }
`;
