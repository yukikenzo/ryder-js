import React, { Component } from 'react'

const divstyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  marginBottom: '60px'
}

const imgstyle = {
  objectFit: 'cover',
  overflow: 'hidden',
  marginBottom: '60px',
  width: '500px'
}

const pstyle = {
  margin: '0'
}

export default class ErrorBoundary extends Component {

  constructor(props) {
    super(props)

    this.state = {
      hasError: false
    }
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={divstyle}>
          <img style={imgstyle} src={'https://user-images.githubusercontent.com/73386100/212576328-b8fedebd-888e-4537-96fc-cb2b985414a7.jpg'} alt="Something went wrong :(" />
          <h2>
            Aaaah! Something went wrong
          </h2>
          <p style={pstyle}>
            Brace yourself till we get the error fixed.
          </p>
          <p>
            You may also refresh the page or try again later
          </p>
        </div>

      );
    }
    return this.props.children
  }
}