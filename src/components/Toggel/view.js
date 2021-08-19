import styled from "styled-components";

export const CheckBoxWrapper = styled.div`
  position: relative;
`;

// export const ToggelLabel =styled.label`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 42px;
//   height: 26px;
//   border-radius: 15px;
//   background: #bebebe;
//   cursor: pointer;
//   &::after {
//     content: "";
//     display: block;
//     border-radius: 50%;
//     width: 18px;
//     height: 18px;
//     margin: 3px;
//     background: #ffffff;
//     box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
//     transition: 0.2s;
//   }
// `;
// export const ContainerToggel =styled.input`
//   opacity: 0;
//   z-index: 1;
//   border-radius: 15px;
//   width: 42px;
//   height: 26px;
//   &:checked + ${ToggelLabel} {
//     background: #4fbe79;
//     &::after {
//       content: "";
//       display: block;
//       border-radius: 50%;
//       width: 18px;
//       height: 18px;
//       margin-left: 21px;
//       transition: 0.2s;
//     }
//   }
// `;

export const ToggelLabel = styled.label`
  /* position: absolute;
  top: 0;
  left: 0; */
  width: 70px;
  height: 30px;
  border-radius: 50px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    /* margin: 3px; */
    background: #ffffff;
    transform: translateX(5px);
    /* box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2); */
    /* transition: 0.2s; */
  }
`;
export const ContainerToggel = styled.input`
  opacity: 0;
  /* z-index: 1; */
  border-radius: 44px;
  width: 30px;
  height: 30px;
  &:checked + ${ToggelLabel} {
    background: #4fbe79;
    &::after {
      content: "";
      display: block;
      border-radius: 50px;
      width: 30px;
      height: 30px;
      transform: translateX(-3px);
      /* transition: 0.2s; */
    }
  }
`;
