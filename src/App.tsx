import './App.css'
import News from './components/News'
import Quote from './Quote'
import { listNew, listQuote, navBar, panelPogoda, panelRec, panelTV } from './components/Lists'
import NavSearch from './components/NavSearch'
import Banner from './components/Banner'
import Panel from './components/Panel'

function App() {

  return (
    <>
      <News ListNew={listNew} />
      <Quote ListQuote={listQuote} />
      <NavSearch NavBar={navBar} />
      <Banner />
      <div className='Panel'>
        <Panel PanelList={panelPogoda}>
          <h3>Погода</h3>
        </Panel>

        <Panel PanelList={panelRec}>
          <h3>Посещаемое</h3>
        </Panel>

        <Panel PanelList={panelTV}>
          <h3>Телепрограмма</h3>
        </Panel>
      </div>
    </>

  )
}

export default App
