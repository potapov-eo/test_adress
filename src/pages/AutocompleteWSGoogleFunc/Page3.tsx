import React, {useEffect, useState} from 'react'
import {TextField} from "@material-ui/core";
import {InputForm} from "../../components/InputAddressForm/InputAddressForm";
import styled from "styled-components";

const StyledTextField = styled(TextField)`
  width: 500px;
`
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

    const handlePlaceSelect = () => {
        // @ts-ignore
        let addressObject = autocomplete.getPlace()
        let stateWithAddress = {street: "", home: "", district: "", locality: "", area: "", region: "", country: "",}
        for (const component of addressObject.address_components as google.maps.GeocoderAddressComponent[]) {
            const componentType = component.types[0];
            switch (componentType) {
                case "street_number": {
                    stateWithAddress.home = component.long_name
                    break;
                }
                case "route": {

                    stateWithAddress.street = component.long_name
                    break;
                }
                case "sublocality_level_1": {
                    stateWithAddress.district = component.long_name
                    break;
                }
                case "locality": {
                    stateWithAddress.locality = component.long_name
                    break;
                }
                case "administrative_area_level_2": {
                    stateWithAddress.area = component.long_name
                    break;
                }

                case "administrative_area_level_1": {
                    stateWithAddress.region = component.long_name
                    break;
                }

                case "country": {
                    stateWithAddress.country = component.long_name
                    break;
                }
            }
        }
        setState({...state, ...stateWithAddress})
    }
    const handleRedact = () => {
        setisReduct(!isReduct)
        // @ts-ignore

    }

    return (
        <div>33333333333333333333333333333333333 FUNCTIONAL COMPONENT
            <h1>Add New Adress</h1>
            <StyledTextField id="autocomplete"
                             variant="outlined"
                             className="input-field"
                             type="text"/>

            <div>
                <button onClick={handleRedact}>редактировать</button>
            </div>
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
