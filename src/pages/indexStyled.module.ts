import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Header = styled.div`
  height: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`

export const Body = styled.div`
  background: rgba(0, 173, 181, 0.5);
  display: flex;
  flex-direction: column;
  width: 90%;
  padding: 1rem 2rem;
  h2 {
    margin-bottom: 2rem;
  }
  @media (max-width: 440px) {
    width: 95%;
    padding: 1.2rem;
  }
`
export const Form = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -10px;

  input {
    margin-top: 1rem;
    margin: 10px;
    padding: 0.5rem 1rem;
    border-radius: 1rem;
    text-align-last: center;
    flex: 1 1 160px;
    background: var(--var-color-1-2);
    border-color: var(--var-color-3);
    text-align: center;
    font-size: 1.1rem;
    transition: filter 0.2s;
    transition: font-weight 0.3s;
    &:focus,
    &:hover {
      font-weight: 700;
      outline: none;
    }
    ::placeholder {
      color: var(--var-color-4);
    }
    @media (max-width: 360px) {
      width: 80vw;
      margin: 10px 0;
      font-size: 0.9rem;
      margin: 10px 0;
    }
  }
`

export const Result = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;

  ul {
    padding: 0;
    margin: 0;
    li {
      margin: 1.3rem 1.3rem 0;
      float: left;
      p {
        font-size: 1rem;
        span {
          font-weight: 600;
        }
      }
    }
  }

  div {
    display: flex;
    margin-top: 1rem;
    flex-wrap: wrap;
  }
`
