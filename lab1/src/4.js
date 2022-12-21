function Four() {
    const tovar = [
        {
            id: 1,
            head: '1',
            price: 5623,
            img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/xbox-series-x-1616770912.jpeg'},
        {
            id: 2,
            head: '2',
            price: 52364,
            img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/xbox-series-x-1616770912.jpeg'},
        {
            id: 3,
            head: '3',
            price: 15264,
            img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/xbox-series-x-1616770912.jpeg'},
        {
            id: 4,
            head: '4',
            price: 20365,
            img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/xbox-series-x-1616770912.jpeg'},];
    return(
        <div className="Stor">
            {tovar.map((tovar)=>
                <div key={tovar.id} className="Tabl">
                    <p>{tovar.head}</p>
                    <img src={tovar.img}/>
                    <p>{tovar.price}</p>
                </div>)}
        </div>);}
export default Four;