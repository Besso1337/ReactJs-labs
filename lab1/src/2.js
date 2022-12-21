function Two(prop) {
    return(
        <div>
            <table border = "1" cellPadding = "0" cellSpacing = "0">
                <tr>
                    <td><strong>First name</strong></td>
                    <td>{prop.name}</td>
                </tr>
                <tr>
                    <td><strong>Second name</strong></td>
                    <td>{prop.surname}</td>
                </tr>
                <tr>
                    <td><strong>Occupation</strong></td>
                    <td>{prop.occupation}</td>
                </tr>
            </table>
        </div>);}
export default Two;