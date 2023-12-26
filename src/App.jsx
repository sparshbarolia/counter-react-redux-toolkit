import { useSelector } from 'react-redux'
import './App.css'
import Container from './Components/Container'
import Controls from './Components/Controls'
import DisplayCounter from './Components/DisplayCounter'
import Header from './Components/Header'
import PrivacyMessage from './Components/PrivacyMessage'

function App() {

  //store me se privacy ki value le ao
  const privacyVal = useSelector(store => store.privacy);  

  return (
    <>
      <div className="px-4 py-5 my-5 text-center main-container" >
        <Container>
          <Header />
          <div className="col-lg-6 mx-auto" >
            {privacyVal ? <PrivacyMessage/> : <DisplayCounter />}
            <Controls/>
          </div>
        </Container>
      </div>
    </>
  )
}

export default App
