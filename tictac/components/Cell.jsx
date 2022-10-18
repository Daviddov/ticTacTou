function Cell(props) {
    
    
  return ( 
 <button onClick={()=>props.onClick(props.id)} 
 style={{width: '30%', height: 100, }}>
    {props.value}
   
 </button>

   )
}


export default Cell;