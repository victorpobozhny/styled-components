import React from 'react';
import pic from './img/picture.png'
import styled, {css} from "styled-components";


type ButtonType = {
    color?: string
    background?: string
    primary?: boolean
    outlined?: boolean
}

export const Card = () => {
    return (
        <Wrapper>
            <Image/>
            <H>Headline</H>
            <Text>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</Text>
            <ButtonsWrapper>
                <Button primary>See more</Button>
                <Button outlined>Save</Button>
            </ButtonsWrapper>
        </Wrapper>
    );
};
const Wrapper = styled.div`
  width: 300px;
  height: 350px;
  margin: 20px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.1);
  background: rgb(255, 255, 255);
  font-family: Inter, serif;
`

const Image = styled.img.attrs(() => ({
    src: pic,
    alt: 'main image'
}))`
  width: 280px;
  height: 170px;
  border-radius: 10px;
  margin-bottom: 10px;
`

const H = styled.h1`
  margin: 10px;
  color: rgb(0, 0, 0);
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 0;
  text-align: left;
`

const Text = styled.p`
  margin: 10px;
  color: rgb(171, 179, 186);
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0;
  text-align: left;
`

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 12px;
  padding: 9px 0 12px 10px;
`

const Button = styled.button<ButtonType>`
  cursor: pointer;
  width: 86px;
  height: 30px;
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0;
  text-align: left;
  background: transparent;
  color: black;
  &:hover {
    background: #999;
  }

  ${props => props.primary && css<ButtonType>`
    color: rgb(255, 255, 255);
    background: rgb(78, 113, 254);
    border: none;
    &:hover {
      background: rgb(97, 128, 250);
    }
  `
  }
  
  ${props=>props.outlined && css<ButtonType>`
    background: transparent;
    border: 2px solid rgb(78, 113, 254);
    color: rgb(78, 113, 254);
  `
  }  
`