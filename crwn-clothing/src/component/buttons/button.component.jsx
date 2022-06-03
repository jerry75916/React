import {
  BaseButtom,
  Google_sign_inButtom,
  invertedButtom,
} from "./button.style";
export const BUTTON_TYPE_CLASSES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};
const getButton = (buttomType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButtom,
    [BUTTON_TYPE_CLASSES.google]: Google_sign_inButtom,
    [BUTTON_TYPE_CLASSES.inverted]: invertedButtom,
  }[buttomType]); //{ x: 1 }["x"] 將物件內的x設為1後再return x值出來，
//故這個可以想成將某個按鈕設成某個className後return buttomType相同名的值出來

//有可能有click 或 submit 事件，故用...來傳
const Button = ({ childern, buttonType, ...otherProps }) => {
  const CustomButtom = getButton(buttonType);
  return <CustomButtom {...otherProps}>{childern}</CustomButtom>;
};

export default Button;
