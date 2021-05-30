import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;  
  background: #FFF;
  margin: 0 5rem;
`

export const InfosContent = styled.div`  
  margin-top: 10rem;
  display: flex;
  flex-direction: column;

  > h1 {
    font-size: 3rem;
  }

  > span {
    font-size: 1.5rem;
  }
`

export const FormContent = styled.div`  
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > input {
    height: 4rem;
    text-indent: 10px;
    border-radius: 5px;
    width: 25rem;
  }

  /* > button {
    height: 4rem;
    width: 25rem;
    border-radius: 5px;
    background: #66B33B;
    color: #fff;
  } */

  > a {      
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.25rem;
    height: 4rem;
    width: 25rem;
    border-radius: 5px;
    background: #66B33B;
    color: #fff;
  }

  * {
    margin-top: 1rem;
  }
`
