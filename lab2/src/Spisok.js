function Spisok(prop){
    const itemStyle = {
        border: "1px solid",
        borderColor: "blue",
        backgroundColor: "DodgerBlue",
        padding: "5px",
        width: "330px"}
    return(
        <div key = {prop.prod.id} className = "list-prod" style={itemStyle}>
            <td>
            <div style={{color: "white", float: "left"}}><strong>{prop.prod.prod}</strong></div>
            <div className = "delete-prod" onClick = {() => prop.remuveProducts(prop.prod.id)} style={{color: "black", float: "right", textAlign: "right"}}><strong ><a href="#">X</a></strong></div>
            </td>
        </div>);}
export default Spisok;