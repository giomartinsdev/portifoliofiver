import { useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Formulario from './components/Formulario'
import Time from './components/Time'


function App() {
  
  const times = [
    {
      nome: 'Omegas Verdes',
      corPrimaria: '#57c278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'JuzeiroFC',
      corPrimaria: '#82CFFA',
      corSecundaria: '#c7fbfe'
    },
    {
      nome: 'CandangosSC',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'CampinhoCR',
      corPrimaria: '#E06e69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'BanguFC',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    }
  ]

  const [colaboradores, setColaborador] = useState([])

  const aoNovoColoboradorAdicionado = (colaborador)=>{
    console.log( 'O usuario cadastrado foi adicionado e ele é: ' + JSON.stringify(colaborador));
    setColaborador([...colaboradores, colaborador])
  }


  return (
    <>
    <div className='App'>
      <Banner></Banner>
      <Formulario 
      times={times.map(time => time.nome)} 
      aoColaboradorCadastrado={colaborador => aoNovoColoboradorAdicionado(colaborador)}>
      

      </Formulario>
      
      {times.map(time => <Time 
      key={time.nome} 
      nome={time.nome}
      corPrimaria={time.corPrimaria}
      corSecundaria={time.corSecundaria}
      colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      ></Time>)}
    </div>
    </>
  )
}

export default App