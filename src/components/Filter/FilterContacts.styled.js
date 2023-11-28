import styled from 'styled-components';

export const FilterLabel = styled.label`
  position: relative;
  bottom: 147px;
  left: 508px;
  font-size: 16px;
  font-weight: bold;
  color: white;

  @media (max-width: 557px) {
    bottom: 172px;
  }
`;

export const InputFilter = styled.input`
  margin-left: 10px;
  height: 18px;
  &::placeholder {
    font-size: 10px;
  }

  @media (max-width: 557px) {
    margin-top: 26px;
    margin-left: 13px;
  }
`;
