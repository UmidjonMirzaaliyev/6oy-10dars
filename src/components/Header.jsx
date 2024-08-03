import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();

  return (
    <HeaderContainer>
      <HeaderContent>
        <h1>{t('header.title')}</h1>
        <p>{t('header.subtitle')}</p>
        <SearchBar>
          <input type="text" placeholder={t('header.searchPlaceholder')} />
          <button>{t('header.searchButton')}</button>
        </SearchBar>
        <Features>
          <FeatureItem>{t('header.features.freshVegetables')}</FeatureItem>
          <FeatureItem>{t('header.features.guarantee')}</FeatureItem>
          <FeatureItem>{t('header.features.cashOnDelivery')}</FeatureItem>
          <FeatureItem>{t('header.features.fastDelivery')}</FeatureItem>
        </Features>
      </HeaderContent>
      <HeaderImage>
        <img src="https://via.placeholder.com/300" alt="Groceries" />
      </HeaderImage>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: ${(props) => props.theme.body};
  color: ${(props)}
`