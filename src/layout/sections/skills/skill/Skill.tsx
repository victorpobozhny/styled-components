import React from 'react';import styled from "styled-components";import {Icon} from "../../../../components/icon/Icon";type SkillType = {    iconId: string    skillTitle: string    small?: boolean}export const Skill = (props: SkillType) => {    return (        <StyledSkill>            <Icon small={props.small} iconId={props.iconId}/>            <SkillTitle>{props.skillTitle}</SkillTitle>        </StyledSkill>    );};const StyledSkill = styled.div`  display: flex;  flex-direction: column;  align-items: center;  min-height: 164px;  min-width: 120px;`const SkillTitle = styled.h4`padding-top: 22px;  font-size: 16px;  font-weight: 400;  letter-spacing: 1px;  text-transform: uppercase;  width: 120px;`