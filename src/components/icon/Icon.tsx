import React from 'react';import iconsSprite from '../../assets/images/sprite.svg'type IconType = {    iconId: string    width?: string    height?: string    viewBox?: string    small?: boolean}export const Icon = (props: IconType) => {    return (        <svg            width={props.width || props.small? "50" : "120.00000"}            height={props.height || props.small? "50" : "120.000000"}            viewBox={props.viewBox || props.small? "0 0 50 50" : "0 0 120 120"}            fill="none"            xmlns="http://www.w3.org/2000/svg"            xmlnsXlink="http://www.w3.org/1999/xlink">            <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>        </svg>    );};