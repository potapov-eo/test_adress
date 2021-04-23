import React, {createRef, useEffect, useRef, useState} from 'react'
import style from "./PageTwo.module.css";

export const Page3 = () => {
    const [state, setState] = useState<initStateType>({
        name: '',
        street_address: '',
        city: '',
        state: '',
        zip_code: '',
        googleMapLink: ''
    })
// @ts-ignore
    let autocomplete=null
    let ref = useRef();

    const node = ref.current;
    useEffect(()=> {debugger

        // @ts-ignore
        autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete'), {})

        autocomplete.addListener("place_changed", handlePlaceSelect)
        debugger
    },[])


    const handleChange=(event:any)=> {
        // @ts-ignore
        setState({[event.target.name]: event.target.value})
    }

    const handleSubmit=(event:any)=> {
        event.preventDefault()
        /* this.props.dispatch(addParlor(this.state))*/
        /*  clearForm()*/
    }

    const handlePlaceSelect=()=> { debugger
        // @ts-ignore
        let addressObject =  autocomplete.getPlace()
        let address = addressObject.address_components
        debugger
        setState({
            name: addressObject.name,
            street_address: `${address[0].long_name} ${address[1].long_name}`,
            /* city: address[4].long_name,
             state: address[6].short_name,
             zip_code: address[8].short_name,
             googleMapLink: addressObject.url*/
        })
    }


    return(
        <div>33333333333333333333333333333333333 FUNCTIONAL COMPONENT
            <h1>Add New Adress</h1>
            <form onSubmit={handleSubmit}>
                <input id="autocomplete"
                    /*ref={ref}*/
                       className="input-field"
                       type="text"/>
                <input
                    name={"name"}
                    value={state.name}
                    placeholder={"Name"}
                    onChange={handleChange}
                />
                <input
                    name={"street_address"}
                    value={state.street_address}
                    placeholder={"Street Address"}
                    onChange={handleChange}
                />
                <input
                    name={"city"}
                    value={state.city}
                    placeholder={"City"}
                    onChange={handleChange}
                />
                <input
                    name={"state"}
                    value={state.state}
                    placeholder={"State"}
                    onChange={handleChange}
                />
                <input
                    name={"zip_code"}
                    value={state.zip_code}
                    placeholder={"Zipcode"}
                    onChange={handleChange}
                />
                <button onSubmit={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

type initStateType={
    name?: string,
    street_address?: string,
    city?: string,
    state?: string,
    zip_code?: string,
    googleMapLink?: string
}
