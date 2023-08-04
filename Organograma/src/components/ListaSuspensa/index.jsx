import "./ListaSuspensa.css"
const ListaSuspensa = (props)=>{
  return(
    <>
      <div className="lista-suspensa">
        <label >{props.label}</label>
        <select
          value={props.valor}
          required={props.required}
          onChange={evento =>(props.aoAlterado(evento.target.value))}
        >
          <option value=""></option>
          {props.itens.map(item =>{
            return <option key={item}>{item}</option>
          })}
        </select>
      </div>
    </>
  )
}

export default ListaSuspensa
