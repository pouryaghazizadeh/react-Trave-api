import SearchBox from "../SearchBox/index"
import {ContainerNav} from "./view"
import Toggel  from "../Toggel/index"
const Navbar = ({mood})=>{
    return(
        <ContainerNav>
        <SearchBox/>
        <Toggel/>

        
        </ContainerNav>
    )
}
export default Navbar