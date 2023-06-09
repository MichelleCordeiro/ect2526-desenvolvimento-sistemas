import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: 
    "header"
    "content"
  ;

  > main {
    grid-area: content;
    overflow-y: auto;
  }

  .tags {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    div {
      min-width: 270px;
    }
  }

`

export const Form = styled.form`
  max-width: 550px;
  margin: 3.8rem auto;

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 3.6rem;
    
    h1 {
      font-family: 'Roboto Slab', serif;
    }

    a {
      font-style: 2rem;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }

`