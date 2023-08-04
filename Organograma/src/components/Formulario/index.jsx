import { useState } from "react"
import Botao from "../Botao/Botao"
import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../ListaSuspensa"
import "./Formulario.css"


const Formulario = (props)=>{
  const posicoes = [
  'Pivô',
  'Ala Direito',
  'Ala Esquerdo',
  'Fixo',
  'Goleiro',
  'Comissão Tecnica'
  ]

  const [nome,setNome] = useState('')
  const [imagem,setImagem] = useState('')
  const [posicao,setPosicao] = useState('')
  const [time,setTime] = useState('')

  const aoSalvar = (evento)=> {
    evento.preventDefault()
    props.aoColaboradorCadastrado({
      nome,
      imagem,
      posicao,
      time
    })
    setNome('')
    setImagem('')
    setPosicao('')
    setTime('')
  }

  return(
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar os dados do seu time</h2>
        <CampoTexto 
          obrigatorio='True' 
          placeholder='seu nome' 
          label='Nome'
          valor={nome}
          aoAlterado={(valor=>setNome(valor))}
        >
        </CampoTexto>
        <CampoTexto 
          obrigatorio='True' 
          placeholder='o endereço da imagem' 
          label='Imagem'
          valor={imagem}
          aoAlterado={(valor=>setImagem(valor))}
        >
        </CampoTexto>
        <ListaSuspensa
          valor={posicao}
          aoAlterado={valor => setPosicao(valor)}
          obrigatorio='True' 
          label='Função' 
          itens={posicoes}
        >
        </ListaSuspensa>
        <ListaSuspensa
        valor={time}
        aoAlterado={valor => setTime(valor)}
        obrigatorio='True' 
        label='Time' 
        itens={props.times}
        >
        </ListaSuspensa>
        <Botao>
          Criar Card
        </Botao>
      </form>
    </section>
  )
}

export default Formulario