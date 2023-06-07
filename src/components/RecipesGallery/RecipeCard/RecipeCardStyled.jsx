import styled from '@emotion/styled';
import { mediaSizes } from '../../constants/media';
import { colors } from 'components/colors';

export const RecipeCardStyled = styled.li`
  position: relative;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  max-width: 343px;
  margin: 0;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    max-width: 336px;
  }

  @media screen and (min-width: ${mediaSizes.desktop}) {
    width: 300px;
  }

  .image {
    object-fit: cover;
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
    -webkit-transition: 0.3s ease-in-out;
    transition: 0.3s ease-in-out;
    &:hover {
      -webkit-transform: scale(1);
      transform: scale(1);
      cursor: pointer;
    }
  }
  /* 11 */
  .name {
    position: absolute;
    bottom: 26px;
    left: 18px;
    background: ${colors.whiteColor};
    border-radius: 8px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.24px;
    color: ${colors.recipeCardText};
    padding: 16px 16px;
    width: 268px;

    @media screen and (min-width: ${mediaSizes.desktop}) {
      bottom: 24px;
      left: 16px;
    }
  }
`;