import SearchBox from "../SearchBox/index"
import {ContainerNav,Title,ContainerTitle} from "./view"
import Toggel  from "../Toggel/index"
const Navbar = ({mood})=>{
    return(
        <ContainerNav>
            <ContainerTitle>
            <Title>Travel</Title>

        <Toggel/>
        </ContainerTitle>
        <SearchBox/>

        
        </ContainerNav>
    )
}
export default Navbar