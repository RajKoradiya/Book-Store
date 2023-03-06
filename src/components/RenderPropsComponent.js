import { Component } from 'react'

class RenderPropsComponent extends Component {
  render() {
    return (
      this.props.render()
    )
  }
}

export default RenderPropsComponent
