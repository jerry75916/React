import styled from "styled-components";

export const DropDownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
`;
export const EmptyMessage = styled.span`
  font-size: 16px;
  margin: 100px auto;
`;
export const Cart_items = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;
export const CartItemLink = styled.a`
  display: inline-block;
  position: absolute;
  margin-left: 20px;
  display: flex;
  padding: 10px;
  background-color: #339af0;
  color: #fff;
  border-radius: 100px;
  top: 280px;
  font-family: "Open Sans Condensed";
  &:hover {
    border: 1px solid #339af0;
    background-color: #fff;
    color: #339af0;
  }
`;
