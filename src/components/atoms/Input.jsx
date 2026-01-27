import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  padding: 14px 14px 14px 48px; /* Padding z lewej na ikonę */
  border: 2px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.text};
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  font-weight: 500;
  transition: border-color 0.2s;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
`;

export const IconPosition = styled.div`
  position: absolute;
  left: 16px;
  color: ${({ theme }) => theme.colors.textSecondary};
  display: flex;
  align-items: center;
`;