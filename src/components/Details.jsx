

function Detailss({title, content}){
    return(
        
        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', margin:'10px 0px 10px'}}>
            <h1 className="details"  style={{textAlign:'center', fontSize:'12px'}}> {title}</h1>

            <div className="box" style={{backgroundColor:'white', width:'50px', height:'50px', borderRadius:'10px',display:'flex', justifyContent:'center', alignItems:'center', }}>

            <p className="boxtext" style={{textAlign:'center', padding:'auto', fontSize:'15px',textTransform:'capitalize',fontWeight:'bolder'}}>{content}</p>
            </div>
            
        </div>
    )
}

export default Detailss;