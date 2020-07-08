import styled, { css } from 'styled-components';

import { LocationOn, Cake } from '../../styles/Icons';
import Button from '../Button';

import jv from '../../assets/jv.jpg';
import jv2 from '../../assets/jv2.jpg';
import jv3 from '../../assets/jv3.jpg';
import tt from '../../assets/tt.png';
import tt2 from '../../assets/tt2.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-height: 100%;
  overflow-y: auto;

  scrollbar-width: none; /** Firefox **/

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Banner = styled.div`
  flex-shrink: 0;

  width: 100%;
  height: min(33vw, 199px);

  background: var(--twitter);

  position: relative;
`;

export const Bird = styled.div`
  width: 88px;
  height: 88px;

  background: url(${tt}) no-repeat;
  position: absolute;
  left: calc(50% - (88px / 2));
  top: calc(50% - (88px / 2));

  @media (max-width: 500px) {
    width: 64px;
    height: 64px;
    background: url(${tt2}) no-repeat;
    left: calc(50% - (64px / 2));
    top: calc(50% - (64px / 2));
  }
`;

export const Avatar = styled.div`
  width: max(45px, min(135px, 22vw));
  height: max(45px, min(135px, 22vw));

  border: 3.75px solid var(--primary);
  /* background: var(--gray); */
  background: url(${jv}) no-repeat;
  border-radius: 50%;

  position: absolute;
  bottom: max(-60px, -10vw);
  left: 15px;

  @media (max-width: 500px) {
    background: url(${jv2}) no-repeat;
  }
  @media (max-width: 400px) {
    background: url(${jv3}) no-repeat;
  }
`;

export const ProfileData = styled.div`
  padding: min(calc(10vw + 7px), 67px) 16px 0;

  display: flex;
  flex-direction: column;

  position: relative;

  > h1 {
    font-weight: bold;
    font-size: 19px;
  }

  > h2 {
    font-weight: normal;
    font-size: 15px;

    color: var(--gray);
  }

  > p {
    font-size: 15px;
    margin-top: 11px;

    > a {
      text-decoration: none;
      color: var(--twitter);
    }
  }

  > ul {
    list-style: none;
    margin-top: 10px;
    margin-bottom: 10px;

    > li {
      display: flex;
      align-items: center;

      font-size: 15px;
      color: var(--gray);

      > svg {
        fill: var(--gray);
        margin-right: 5px;
      }
    }
  }
`;

export const EditButton = styled(Button)`
  position: absolute;
  top: 2vw;
  right: 7px;

  padding: 4px 16px;
  font-size: 13px;

  @media (min-width: 320px) {
    top: 10px;
    padding: 10px 19px;
    font-size: 15px;
  }
`;

const iconCSS = css`
  width: 20px;
  height: 20px;

  color: var(--gray);
`;

export const LocationIcon = styled(LocationOn)`
  ${iconCSS}
`;

export const CakeIcon = styled(Cake)`
  ${iconCSS}
`;

export const Followage = styled.div`
  display: flex;

  > span {
    font-size: 15px;
    color: var(--gray);

    & + span {
      margin-left: 20px;
    }
  }
`;
