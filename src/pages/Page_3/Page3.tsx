import React, {useEffect, useRef, useState} from 'react'
import {TextField} from "@material-ui/core";
import {InputForm} from "../../components/InputAddressForm/InputAddressForm";

export const Page3 = () => {
    const [isReduct, setisReduct] = useState<boolean>(false)
    const [state, setState] = useState<initStateType>({
        street: "", home: "", district: "", locality: "", area: "", region: "", country: "",
    })
// @ts-ignore
    let autocomplete = null

   /* let ref = useRef(null);
    const node = ref.current;*/

    useEffect(() => {
          // @ts-ignore
        autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete'), {})
        autocomplete.addListener("place_changed", handlePlaceSelect)
    }, [])


    const handleChange = (event: any) => {
        /* // @ts-ignore*/
        setState({[event.target.name]: event.target.value})
    }

    const handleSubmit = (event: any) => {
        event.preventDefault()
        /* this.props.dispatch(addParlor(this.state))*/
        /*  clearForm()*/
    }

    const handlePlaceSelect = () => {

        // @ts-ignore
        let addressObject = autocomplete.getPlace()
        let address = addressObject.address_components
       let  stateWithAddress={ street: "", home: "", district: "", locality: "", area: "", region: "", country: "",}
        for (const component of addressObject.address_components as google.maps.GeocoderAddressComponent[]) {
            // @ts-ignore remove once typings fixed

            const componentType = component.types[0];
debugger
            switch (componentType) {
                case "street_number": {
                   /* setState({home: component.long_name})*/
                    stateWithAddress.home = component.long_name
                    break;
                }

                case "route": {
                  /*  setState({ street: component.long_name})*/
                    stateWithAddress.street = component.long_name
                    break;
                }

                case "sublocality_level_1": {
                    /*setState({ district: component.long_name})*/
                    stateWithAddress.district = component.long_name
                    break;
                }

                case "locality": {
                    /*setState({ locality: component.long_name})*/
                    stateWithAddress.locality = component.long_name
                    break;
                }

                case "administrative_area_level_2": {
                   /* setState({ area: component.long_name})*/
                    stateWithAddress.area = component.long_name
                    break;
                }

                case "administrative_area_level_1": {
                    /*setState({region: component.long_name})*/
                    stateWithAddress.region = component.long_name
                    break;
                }

                case "country": {
                    /*setState({ country: component.long_name})*/
                    stateWithAddress.country = component.long_name
                    break;
                }


            }


        }
        setState(stateWithAddress)
    }
  const  handleRedact = ()=>{setisReduct(!isReduct)}
   const state1 ={
        street: "11", home: "11", district: "11", locality: "11", area: "11", region: "11", country: "11",
    }
    console.log(state)
    return (
        <div>33333333333333333333333333333333333 FUNCTIONAL COMPONENT
            <h1>Add New Adress</h1>
            <form onSubmit={handleSubmit}>
                <TextField  id="autocomplete"
                            variant="outlined"
                    /*ref={ref}*/
                       className="input-field"
                       type="text"/>
                <input
                    name={"street"}
                    value={state.street}
                    placeholder={"Улица"}
                    onChange={handleChange}
                />
                <input
                    name={"street_address"}
                    value={state.home}
                    placeholder={"дом"}
                    onChange={handleChange}
                />
                <input
                    name={"district"}
                    value={state.district}
                    placeholder={"Район"}
                    onChange={handleChange}
                />
                <input
                    name={"locality"}
                    value={state.locality}
                    placeholder={"Город"}
                    onChange={handleChange}
                />
                <input
                    name={"area"}
                    value={state.area}
                    placeholder={"Район"}
                    onChange={handleChange}
                />
                <input
                    name={"region"}
                    value={state.region}
                    placeholder={"Область"}
                    onChange={handleChange}
                />

                <input
                    name={"country"}
                    value={state.country}
                    placeholder={"Стран"}
                    onChange={handleChange}
                />


                <button onSubmit={handleSubmit}>Submit</button>
            </form>
            <div><button onClick={handleRedact}>редактировать</button></div>
            {isReduct && <InputForm state={state}/>}
        </div>
    )
}

export type initStateType = {
    street?: string,
    home?: string,
    district?: string
    locality?: string
    area?: string
    region?: string
    country?: string

}
