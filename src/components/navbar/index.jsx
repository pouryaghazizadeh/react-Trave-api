import Clock from "../clock/index";
import SearchBox from "../searchBox/index";

import { ContainerNav, ContainerTitle, Title } from "./view";
const Navbar = ({ mood }) => {
  return (
    <ContainerNav>
      <ContainerTitle>
        <Title>Travel</Title>
       
      </ContainerTitle>
      <SearchBox />
      <Clock />
    </ContainerNav>
  );
};
export default Navbar;
