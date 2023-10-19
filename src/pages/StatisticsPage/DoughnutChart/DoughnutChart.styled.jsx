import styled from 'styled-components';

export const ChartWrapper = styled.div`
  position: relative;
  display: flex;
  width: 280px;
  height: 280px;
  margin-bottom: 32px;

  span {
    position: absolute;
    display: flex;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    color: var(--white);
  }
  @media only screen and (min-width: 768px) {
    width: 336px;
    height: 336px;
  }
  @media only screen and (min-width: 1280px) {
    width: 288px;
    height: 288px;
  }
`;

export const ImgMoney = styled.img`
  width: 200px;

  @media only screen and (min-width: 768px) {
    width: 250px;
  }
  @media only screen and (min-width: 1280px) {
    width: 288px;
  }
`;
