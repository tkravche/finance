import styled from 'styled-components';

export const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
export const customStyles = {
  container: provided => ({
    ...provided,
    width: 'auto',
    border: 'none',
    fontSize: '18px',
  }),
  control: provided => ({
    ...provided,
    backgroundColor: 'transparent',
    minHeight: '20px',
    border: 'none',
    borderBottom: '1px solid rgba(255, 255, 255, 0.6)',
    borderRadius: '0',
    boxShadow: 'none',

    alignItems: 'flex-end',
    cursor: 'pointer',
    '&:hover': { borderBottom: '1px solid rgba(255, 255, 255, 0.6)' },

    '@media only screen and (max-width: 767.9px)': {
      paddingLeft: '20px',
    },
  }),
  option: (provided, { isFocused }) => ({
    ...provided,
    cursor: 'pointer',
    backgroundColor: isFocused ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
    color: isFocused ? ' #ff868d' : '#fbfbfb',
    '&:hover': {
      backgroundColor: isFocused ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
      color: isFocused ? '#ff868d' : '#fbfbfb',
    },
    padding: '10px 20px',
  }),
  menu: provided => ({
    ...provided,
    borderRadius: '8px',
    background: 'rgb(88, 62, 155)',
    boxShadow: '0px 4px 40px 0px rgba(0, 0, 0, 0.25)',
    overflow: 'hidden',
    marginTop: '1px',
  }),
  menuList: provided => ({
    ...provided,

    '&::-webkit-scrollbar': {
      width: '2px',
    },

    '&::-webkit-scrollbar-track': {
      background: 'transparent',
    },

    '&::-webkit-scrollbar-thumb': {
      background: '#bdbdbd',
    },

    '&::-webkit-scrollbar-thumb:hover': {
      background: '#bdbdbd',
    },
  }),
  indicatorSeparator: provided => ({
    ...provided,
    display: 'none',
  }),
  indicatorContainer: provided => ({
    ...provided,
    padding: '0px',
  }),
  dropdownIndicator: provided => ({
    ...provided,
    padding: '0px 5px 0px 0px',
  }),
  valueContainer: provided => ({
    ...provided,
    alignItems: 'flex-end',
    padding: '1px 1px',
  }),
  input: provided => ({
    ...provided,
    paddingLeft: '8px',
    paddingBottom: '0px',

    '@media only screen and (max-width: 767.9px)': {
      paddingLeft: '0px',
    },
  }),
  singleValue: provided => ({
    ...provided,
    paddingLeft: '8px',
    paddingBottom: '2px',
    color: '#fbfbfb',
    '@media only screen and (max-width: 767.9px)': {
      paddingLeft: '0px',
      margin: '0px',
    },
  }),
  placeholder: provided => ({
    ...provided,
    paddingLeft: '8px',
    paddingBottom: '2px',
    color: 'rgba(255, 255, 255, 0.6)',
    '@media only screen and (max-width: 767.9px)': {
      paddingLeft: '0px',
    },
  }),
};
