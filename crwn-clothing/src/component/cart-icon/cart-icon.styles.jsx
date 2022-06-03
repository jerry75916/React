import styled from "styled-components";
import { ReactComponent as ShoppingBagIcon } from "../../assets/shopping-bag.svg";

export const Cart_icon_Container = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
export const Item_Count = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`;
export const Shopping_Icon = styled(ShoppingBagIcon)`
  width: 24px;
  height: 24px;
`;
