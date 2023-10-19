import styled from 'styled-components';

export const TitleStatistics = styled.h2`
  font-size: 30px;
  font-weight: 400;
  margin-top: 40px;
  margin-bottom: 8px;
  color: var(--white);
  @media only screen and (min-width: 768px) {
    margin-top: 0;
    margin-bottom: 20px;
  }
  @media only screen and (min-width: 1280px) {
    margin-top: 32px;
  }
`;

export const StatisticsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  /* padding-left: 20px; */
  /* padding-right: 20px; */

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    -webkit-box-pack: justify;
    justify-content: space-between;
    gap: 32px;
    padding-left: 0;
    padding-right: 0;
  }

  @media only screen and (min-width: 1280px) {
    justify-content: flex-start;
  }
`;

export const TitleChart = styled.div`
  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const WrapTable = styled.div`
  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
  }
  @media only screen and (min-width: 1280px) {
    padding-top: 92px;
  }
`;