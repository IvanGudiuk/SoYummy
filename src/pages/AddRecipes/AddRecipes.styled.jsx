import styled from '@emotion/styled';
import { mediaSizes } from 'components/constants/media';

export const Container = styled.div`
  width: 375px;
  max-width: 100%;

  padding-top: 50px;
  padding-bottom: 100px;

  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) and (max-width: 1439px) {
    width: 768px;

    padding-top: 72px;
    padding-bottom: 200px;
  }

  @media (min-width: 1440px) {
    width: 1440px;

    padding-top: 100px;
    padding-bottom: 195px;
  }
`;

export const Wrapper = styled.div`
  width: 100%;

  @media screen and (min-width: ${mediaSizes.desktop}) {
    width: 320px;
    margin-left: 102px;
  }
`;
