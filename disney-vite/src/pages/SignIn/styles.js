import styled from 'styled-components';
import backgroundImg from '../../assets/disney_personagens6.jpg';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
  `

export const Form = styled.form`
  padding: 13.6rem;
  gap: 0.8rem;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  text-align: center;

  box-shadow: 2px 0 15px ${({ theme }) => theme.COLORS.BACKGROUND_700};


  > h1 {
    font-size: 4.8rem;
    line-height: 4.8rem;
    color: ${({ theme }) => theme.COLORS.ORANGE};
    padding-bottom: 1.5rem;
  }

  > h2 {
    font-size: 2.4rem;
    margin-top: 8rem;
    margin-bottom: 2.4rem;
  }

  > p {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100}
  }

  > a {
    margin-top: 12rem;
    color: ${({ theme }) => theme.COLORS.ORANGE}
  }
`

export const Background = styled.div`
  flex: 1;
  /* margin: 15rem; */
  /* min-height: 50%;
  min-width: 50%; */
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
  filter: brightness(0.7);

  justify-content: center;
`