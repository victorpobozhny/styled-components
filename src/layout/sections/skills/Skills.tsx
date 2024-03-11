import React from 'react';import styled from "styled-components";import {FlexWrapper} from "../../../components/FlexWrapper";import {SectionTitle} from "../../../components/SectionTitle";import {Skill} from "./skill/Skill";import {Container} from "../../../components/Container";export const Skills = () => {    return (        <StyledSkills>            <Container>                <SectionTitle>Skills</SectionTitle>                <FlexWrapper flexWrap={'wrap'} justifyContent={'space-between'}>                    <Skill iconId={'js'} skillTitle={'JavaScript'}/>                    <Skill iconId={'typescript'} skillTitle={'TypeScript'}/>                    <Skill iconId={'redux'} skillTitle={'Redux'}/>                    <Skill iconId={'styledComponents'} skillTitle={'Styled Components'}/>                    <Skill iconId={'storybook'} skillTitle={'Storybook'}/>                    <Skill iconId={'mui'} skillTitle={'Material UI'}/>                    <Skill iconId={'formik'} skillTitle={'Formik'}/>                </FlexWrapper>            </Container>        </StyledSkills>    );};const StyledSkills = styled.section`  min-height: 40vh;  display: flex;  flex-direction: column;  align-items: center;  justify-content: space-around;`