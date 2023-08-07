import { useState } from "react";
const SearchFilter = (props: any) => {

    const list: string[] = ["Manoj", "Monty", "Siri", "Manu", "Banana", "Apple", "Grapes","Rajeev"]

    const [searchTerm, setSearchTerm] = useState("");

    const onChangeHandler = (event: any) => {
        setSearchTerm(event.target.value);
    }


    return (
        <>
            <div className="container">
                <input type="text" className="form-control m-2 w-50" onChange={(event) => { onChangeHandler(event) }} ></input>

                {list.filter((value) => {
                    if (searchTerm == "") {
                        return value
                    } else if (value.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                        return value
                    }
                })
                .map((value, index) => {
                    return <div key={index}><p>{value}</p></div>
                })}
            </div>
        </>

    );

}
export default SearchFilter;