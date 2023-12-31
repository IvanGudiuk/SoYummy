import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import {mediaSizes} from '../constants/media'

const colorChange = keyframes`
  0% {
    fill: #22252a;
  }
  50% {
    fill: #8baa36;
  }
  100% {
    fill: #22252a;
  }
`;

export const LayoutWrapper = styled.div`
  position: relative;
`;

export const Button = styled.button`
  position: fixed;
  bottom: 40px;
  right: 40px;
  border-radius: 50px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;

  & svg {
    fill: #8baa36;
    stroke: red;
    width: 40px;
    height: 40px;
    animation: ${colorChange} 1s infinite alternate;
  }
`;
export const WrapperSection = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  
  @media (min-width: ${mediaSizes.tablet}) {
    min-height: 800px;
  }

  @media (min-width: ${mediaSizes.desktop}) {
    min-height: 800px;
  }
`;
