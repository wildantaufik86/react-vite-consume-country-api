import Header from './components/Header'
import Primary from './components/Primary-layout'
import icon1 from './assets/ic/icon_1.png'
import Content from './components/Content'
import Country from './components/Country'

function App() {

  return (
    <>
      <Primary>
        <Header>
          <div className='flex justify-center items-center'>
            <img className='w-1/2' src={icon1}/>
          </div>
        </Header>
        <Content>
          <div>
            <Country />
          </div>
        </Content>
      </Primary>
    </>
  )
}

export default App
