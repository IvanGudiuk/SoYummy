import styled from '@emotion/styled';
import { colors } from 'components/colors';
import { mediaSizes } from 'components/constants';

export const Title = styled.h2`
  display: none;

  @media screen and (min-width: ${mediaSizes.desktop}) {
    display: block;
    font-weight: 600;
    font-size: 24px;
    line-height: 24px;
    letter-spacing: -0.24px;
    margin-bottom: 40px;
    color: ${colors.recipeCardText};
  }
`;

export const List = styled.ul`
  display: none;

  @media screen and (min-width: ${mediaSizes.desktop}) {
    display: flex;
    gap: 20px;
    align-items: center;
    margin-bottom: 102px;
  }
`;

export const Item = styled.li`
  width: 100%;
`;

export const StyledLink = styled.a`
  display: block;
  width: 100%;
  cursor: pointer;
`;
