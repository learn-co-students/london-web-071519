import React from 'react'

const Title = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h1>{props.title}</h1>
    </div>
  )
}

const Article = (props) => {
  const imageStyle = { width: '200px' }
  return (
    <div>
      <h2>{props.headline}</h2>
      <img style={imageStyle} src={props.image} />
      <p>{props.content}</p>
    </div>
  )
}

// React.createElement('div', {}, [
//   React.createElement('h2', {}, props.headline),
//   React.createElement('img', { style: { width: '200px' }, src: props.image }),
//   React.createElement('p', {}, props.content)
// ])

const App = () => {
  return (
    <div id='app'>
      <Title id='stuff' title='My newspaper' />
      <Article headline='A Monkey' image='https://s3.amazonaws.com/spectrumnews-web-assets/wp-content/uploads/2018/11/13154625/20181112-SHANK3monkey-844.jpg' content='Ooh ooh, ah ah.' />
      <Article headline='A Sloth' image='https://images2.minutemediacdn.com/image/upload/c_crop,h_1846,w_3286,x_0,y_44/f_auto,q_auto,w_1100/v1554741731/shape/mentalfloss/539787-istock-531256760.jpg' content='Chill dude...' />
    </div>
  )
}

// React.createElement('div', {}, [
//   Title({ title: 'My newspaper' }),
//   Article({ headline: 'A Monkey', image: 'https://s3.amazonaws.com/spectrumnews-web-assets/wp-content/uploads/2018/11/13154625/20181112-SHANK3monkey-844.jpg', content: 'Ooh ooh, ah ah.' }),
//   Article({ headline: 'A Sloth', image: 'https://images2.minutemediacdn.com/image/upload/c_crop,h_1846,w_3286,x_0,y_44/f_auto,q_auto,w_1100/v1554741731/shape/mentalfloss/539787-istock-531256760.jpg', content: 'Chill dude...' })
// ])

export default App
