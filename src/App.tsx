import styled from 'styled-components';
import {theme} from "./styles/Theme.styled";
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/Main";
import {Skills} from "./layout/skills/Skills";


function App() {
    return (
        <Box>
            <Header/>
            <Main/>
            <Skills/>
        </Box>
    );
}

export default App;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  


  @media ${theme.media.tablet} {
    flex-direction: column;
  }
`

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  margin-bottom: 32px;

  span {
    color: #e91e63;
  }
`;

const Form = styled.form`
  width: 100%;
  max-width: 500px;
`;

const Field = styled.input.attrs(({placeholder, title}) => ({
    placeholder: placeholder || 'type smth',
    title: title || 'yo'
}))`
  padding: 5px 15px;
  margin: 10px 0;
  width: 100%;
  font-size: 1rem;
`;

const Checkbox = styled.input.attrs(() => ({type: 'checkbox'}))`

`