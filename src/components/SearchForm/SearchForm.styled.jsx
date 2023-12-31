import styled from '@emotion/styled';
import { colors } from '../colors';
import {mediaSizes} from '../constants/media'

export const SearchSection = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchLabel = styled.label`
  position: relative;
`;

export const SearchedForm = styled.form`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const SearchInput = styled.input`
  width: 295px;
  height: 52px;
  position: relative;
  background: ${colors.textGreenBtn};
  border: 1px solid ${colors.border};
  outline: none;
  border-radius: 15px 50px;
  padding-top: 17px;
  padding-right: 113px;
  padding-bottom: 17px;
  padding-left: 32px;
  margin-bottom: 28px;
  ::placeholder {
    color: ${colors.placeholder};
  }
  &:not(:placeholder-shown) {
    font-weight: 500;
    font-size: 12px;
    line-height: 1.6;
    color: #898a8daf;
    @media (min-width: 768px) {
      font-size: 16px;
    }
  }
  @media (min-width: 768px) {
    width: 362px;
    height: 57px;
  }
  @media (min-width: 1440px) {
    width: 510px;
    height: 70px;
  }
`;
export const SearchBtn = styled.button`
  position: absolute;
  right: 0;
  width: 113px;
  background-color: #ccc;
  border: none;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  color: ${colors.whiteColor};
  font-weight: bold;
  background: ${colors.greenButton};
  height: 51px;
  border-radius: 15px 50px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  color: ${colors.textGreenBtn};
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: ${colors.darkButton};
  }
  @media (min-width: 768px) {
    width: 161px;
    height: 57px;
    top: 0;
    left: 56%;
    bottom: 0;
  }
  @media (min-width: 1440px) {
    width: 161px;
    height: 70px;
    top: 0;
    left: 69%;
    bottom: 0;
  }
`;

export const StyledTitle = styled.h2`
  display: block;
  margin-left: 0;
  margin-bottom: 50px;
  width: 100%;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: ${mediaSizes.desktop}) {
    margin-top: 100px;
  }
`;