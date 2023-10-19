import styled from 'styled-components';

export const SelectBox = styled.div`
  display: flex;

  @media screen and (max-width: 767.9px) {
    gap: 20px;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (max-width: 1279.9px) {
    gap: 16px;
  }

  @media screen and (min-width: 1280px) {
    gap: 32px;
    width: 182px;
  }
`;

export const customSelect = {
  container: provided => ({
    ...provided,

    maxHeight: '50px',
    fontFamily: 'Poppins',
    fontSize: '16px',
    border: '1px solid var(--white-60, --transparency-60)',
    borderRadius: '8px',
    '@media screen (max-width: 767.9px)': {
      maxWidth: '440px',
      width: '100%',
    },
    '@media screen  (max-width: 1279.9px)': {
      maxWidth: '150px',
    },
    '@media screen (min-width: 1280px)': {
      maxWidth: '182px',
    },
  }),

  singleValue: provided => ({
    ...provided,
    color: 'var(--white)',
    fontSize: '16px',
  }),
  control: provided => ({
    ...provided,
    background: 'var(--control-background)',
    minHeight: '50px',
    width: '182px',
    border: 'none',
    boxShadow: 'none',
    margin: '0',

    '@media (max-width: 1279.9px)': {
      width: '150px',
    },
    '@media (max-width: 767.9px)': {
      width: '280px',
    },
  }),
  option: (provided, { isFocused }) => ({
    ...provided,
    cursor: 'pointer',
    backgroundColor: isFocused ? 'var(--transparency-10)' : 'transparent',
    color: isFocused ? 'var(--dashboard-text)' : 'var(--white)',
    '&:hover': {
      backgroundColor: isFocused ? 'var(--transparency-10)' : 'transparent',
      color: isFocused ? 'var(--dashboard-text)' : 'var(--white)',
    },
    textAlign: 'left',
    paddingLeft: '20px',
    fontSize: '16px',
  }),
  menu: provided => ({
    ...provided,
    textAlign: 'center',
    borderRadius: '8px',
    margin: '0',
    background: 'var(--menu-background)',
  }),
  menuList: provided => ({
    ...provided,
    borderRadius: '8px',
    boxShadow: 'var(--header-shadow)',
    backdropFilter: 'blur(50px)',
    maxHeight: '157px',
    '&::-webkit-scrollbar': {
      width: '4px',
    },

    '&::-webkit-scrollbar-track': {
      background: 'transparent',
    },

    '&::-webkit-scrollbar-thumb': {
      background: 'var(--menu-list)',
    },

    '&::-webkit-scrollbar-thumb:hover': {
      background: 'var(--menu-list)',
    },
  }),

  placeholder: provided => ({
    ...provided,
    paddingBottom: '2px',
    color: 'var(--white)',
    fontSize: '16px',
  }),
  indicatorSeparator: provided => ({
    ...provided,
    display: 'none',
  }),
};
