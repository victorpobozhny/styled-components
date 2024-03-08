import styled from 'styled-components';
import {theme} from "./styles/Theme.styled";
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Skills} from "./layout/sections/skills/Skills";
import {Works} from "./layout/sections/works/Works";
import {Contacts} from "./layout/sections/contacts/Contacts";
import {Footer} from "./layout/sections/footer/Footer";


function App() {
    return (
        <Box>
            <Header/>
            <Main/>
            <Works/>
            <Skills/>
            <Contacts/>
            <Footer/>
        </Box>
    );
}

export default App;

const Box = styled.div`
 
  


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