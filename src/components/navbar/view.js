import styled from "styled-components"

import {props} from "../props"
export const H1 = styled.h1`
background: ${props=>props.props===true? "":"black"};
`