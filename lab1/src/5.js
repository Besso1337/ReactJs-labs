import Select from "react-select";
function Five() {
    const goroda = [
        {id: 1, value: "zhyromir", label: "Zhytomir"},
        {id: 2, value: "kiev", label: "Kiev"},
        {id: 3, value: "odessa", label: "Odessa"}];
    return(
            <Select options={goroda}/>);}
export default Five;