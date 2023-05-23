import {Component} from 'react'
import {
  MainContainer,
  AppName,
  Form,
  Label,
  UserInput,
  UserSelect,
  UserOption,
  UserSubmission,
  MemeContainer,
  MemeContainerText,
  FormMemeGeneratorContainer,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    imageUrl: '',
    topText: '',
    bottomText: '',
    fontSize: fontSizesOptionsList[0].optionId,
  }

  changeImage = event => {
    this.setState({imageUrl: event.target.value})
  }

  changeTopText = event => {
    this.setState({topText: event.target.value})
  }

  changeBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  changeFontSize = event => {
    this.setState({fontSize: event.target.value})
  }

  submitUserInfo = event => {
    event.preventDefault()
  }

  renderImageWithProperties = () => {
    const {topText, bottomText, imageUrl, fontSize} = this.state
    return (
      <MemeContainer backgroundImage={imageUrl} data-testid="meme">
        <MemeContainerText size={fontSize}> {topText} </MemeContainerText>
        <MemeContainerText size={fontSize}> {bottomText} </MemeContainerText>
      </MemeContainer>
    )
  }

  renderForm = () => {
    const {topText, bottomText, imageUrl, fontSize} = this.state
    return (
      <Form onSubmit={this.submitUserInfo}>
        <Label htmlFor="imageLabel"> Image URL </Label>
        <UserInput
          type="text"
          id="imageLabel"
          placeholder="Enter the Image URL"
          onChange={this.changeImage}
          value={imageUrl}
        />
        <Label htmlFor="topLabel"> Top Text </Label>
        <UserInput
          type="text"
          id="topLabel"
          placeholder="Enter the Top Text"
          onChange={this.changeTopText}
          value={topText}
        />
        <Label htmlFor="bottomLabel"> Bottom Text </Label>
        <UserInput
          type="text"
          id="bottomLabel"
          placeholder="Enter the Bottom Text"
          onChange={this.changeBottomText}
          value={bottomText}
        />
        <Label htmlFor="fontLabel"> Font Size </Label>
        <UserSelect
          id="fontLabel"
          onChange={this.changeFontSize}
          value={fontSize}
        >
          {fontSizesOptionsList.map(each => (
            <UserOption key={each.optionId}> {each.displayText} </UserOption>
          ))}
        </UserSelect>
        <UserSubmission type="button"> Generate </UserSubmission>
      </Form>
    )
  }

  render() {
    return (
      <MainContainer>
        <AppName> Meme Generator </AppName>
        <FormMemeGeneratorContainer>
          {this.renderForm()}
          {this.renderImageWithProperties()}
        </FormMemeGeneratorContainer>
      </MainContainer>
    )
  }
}

export default MemeGenerator
