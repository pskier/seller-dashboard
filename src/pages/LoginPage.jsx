import { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { User } from 'lucide-react';

import { Card } from '../components/atoms/Card';
import { Button } from '../components/atoms/Button'; 
import { Input, InputWrapper, IconPosition } from '../components/atoms/Input'; 

import logoFull from '../assets/logo.png'; 

const LoginContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.bg};
  padding: 16px;
`;

const LoginCard = styled(Card)`
  width: 100%;
  max-width: 440px;
  height: auto;
  min-height: 500px;
  padding: 48px;
  align-items: center;
  justify-content: center;
  gap: 32px;
`;

const BigLogo = styled.img`
  width: 120px;
  height: 120px;
  object-fit: contain;
  margin-bottom: 16px;
`;

const Title = styled.h1`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
  font-weight: 600;
`;


const LoginPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [userId, setUserId] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (userId.trim().length > 0) {
      navigate('/dashboard'); 
    } else {
      alert(t('alert_id'));
    }
  };

  return (
    <LoginContainer>
      <LoginCard>
        <BigLogo src={logoFull} alt="Logo" />
        <Title>{t('login_title')}</Title>
        
        <form onSubmit={handleLogin} style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 24 }}>
          
          <InputWrapper>
            <IconPosition><User size={24} /></IconPosition>
            <Input 
              type="text" 
              placeholder={t('login_placeholder')} 
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
          </InputWrapper>

          <Button type="submit">
            {t('login_btn')}
          </Button>
          
        </form>
      </LoginCard>
    </LoginContainer>
  );
};

export default LoginPage;