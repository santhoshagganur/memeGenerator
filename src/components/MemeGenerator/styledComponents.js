// Style your components here
import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #ffffff;
  padding: 20px;
`

export const AppName = styled.h1`
  color: #35469c;
  font-size: 30px;
  font-weight: 700;
  font-family: 'Open Sans';
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`

export const Label = styled.label`
  color: #7e858e;
  font-size: 15px;
  margin-bottom: 5px;
`

export const UserInput = styled.input`
  border: 1px #d7dfe9 solid;
  width: 380px;
  padding: 10px;
  margin-bottom: 10px;
`

export const UserSelect = styled.select`
  border: 1px #d7dfe9 solid;
  width: 380px;
  padding: 10px;
  margin-bottom: 10px;
`

export const UserOption = styled.option`
  color: #1e293b;
`

export const UserSubmission = styled.button`
  background: #0b69ff;
  color: #ffffff;
  font-size: 14px;
  border-width: 0;
  border-radius: 5px;
  width: 150px;
  padding: 10px;
  margin-top: 20px;
  margin-left: 20px;
`

export const MemeContainer = styled.div`
  background-image: url(${props => props.backgroundImage});
  height: 300px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-size: cover;
`

export const MemeContainerText = styled.p`
  color: #ffffff;
  font-size: ${props => props.size}px;
`

export const FormMemeGeneratorContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
