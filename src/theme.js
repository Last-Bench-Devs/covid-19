import { createGlobalStyle } from "styled-components"

export const lightTheme = {
    body: '#fff',
    fontColor: '#696969'
}

export const darkTheme = {
    body: '#333333',
    fontColor: '#b0b0ba',
}

export const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${(props) => props.theme.body};
	}
`;
