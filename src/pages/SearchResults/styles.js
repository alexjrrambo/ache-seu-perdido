import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;  
  background: #FFF;
  margin: 0 5rem;
`

export const Content = styled.div`  
  margin-top: 7rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  > h1 {
    font-size: 2rem;
  }
`

export const SearchItem = styled.div`
  display: flex;
  width: 100%;
  height: 15rem;
  margin-top: 2rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`

export const ObjectInfos = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;  
  justify-content: space-around;

  > h2 {
    font-size: 2rem;
  }

  > span {
    font-size: 1.2  rem;
  }
`

export const ObjectImage = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`
