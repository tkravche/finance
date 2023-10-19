import styled from 'styled-components';

export const StyledTextArea = styled.textarea`
  resize: none;
  transition: all 0.3s ease-in-out;
  border: none;
  background-color: transparent;
  border-bottom: 1px solid var(--transparency-60);
  font-family: Circe;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
  color: #fbfbfb;
  max-width: 100%;
  margin-bottom: 10px;
  width: 280px;
  line-height: 1.33;
  padding-left: 8px;
  height: 30px;

  &::placeholder {
    color: var(--menu-list);
  }

  &:focus {
    outline: none;
  }

  @media (min-width: 768px) {
    min-height: 27px;
    overflow: hidden;
    width: 409.5px;
  }

  @media (max-width: 767.9px) {
    padding-left: 20px;
    padding-right: 20px;

    &::-webkit-scrollbar {
      width: 4px;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background: var(--menu-list);
    }

    &::-webkit-scrollbar-thumb:hover {
      background: var(--menu-list);
    }

    mask-image: linear-gradient(to top, transparent, var(--total-black)),
      linear-gradient(to left, transparent 4px, var(--total-black) 4px);
    mask-size: 100% 20000px;
    mask-position: left bottom;
    -webkit-mask-image: linear-gradient(to top, transparent, var(--total-black)),
      linear-gradient(to left, transparent 4px, var(--total-black) 4px);
    -webkit-mask-size: 100% 20000px;
    -webkit-mask-position: left bottom;
    transition: mask-position 0.3s, -webkit-mask-position 0.3s;

    &:hover {
      -webkit-mask-position: left top;
      mask-position: left top;
    }
  }
`;