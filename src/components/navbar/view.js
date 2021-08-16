import styled from "styled-components"

import {mood}from "../props"
export const H1 = styled.h1`
background: ${props=>props.mood?"red":"green"};
`