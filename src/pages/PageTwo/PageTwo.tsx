import React from 'react'

export class PageTwo extends React.Component {
    constructor(props:any) {
        super(props)
        this.state = this.initialState()
        this.handlePlaceSelect = this.handlePlaceSelect.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        // @ts-ignore
        this.autocomplete = null
        // @ts-ignore
        this.myRef = React.createRef();
    }

    componentDidMount() {debugger
        // @ts-ignore
        this.autocomplete = new google.maps.places.Autocomplete(this.myRef.current, {})
// @ts-ignore
        this.autocomplete.addListener("place_changed", this.handlePlaceSelect)
        debugger
    }

    initialState() {
        return {
            name: '',
            street_address: '',
            city: '',
            state: '',
            zip_code: '',
            googleMapLink: ''
        }
    }

    handleChange(event:any) {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit(event:any) {debugger
        event.preventDefault()
        /* this.props.dispatch(addParlor(this.state))*/
       /* this.clearForm()*/
    }

    handlePlaceSelect() {debugger
        // @ts-ignore
        let addressObject = this.autocomplete.getPlace()
        let address = addressObject.address_components
        debugger
        this.setState({
            name: addressObject.name,
            street_address: `${address[0].long_name} ${address[1].long_name}`,
           /* city: address[4].long_name,
            state: address[6].short_name,
            zip_code: address[8].short_name,
            googleMapLink: addressObject.url*/
        })
    }

    render() {

        return(
            <div>22222222222222222222222222222 CLASS COMPONENT
                <h1>Add New Parlor</h1>
                <form onSubmit={this.handleSubmit}>
                    <input id="autocomplete"
                           className="input-field"
                        // @ts-ignore
                           ref={this.myRef}
                           type="text"/>
                    <input
                        name={"name"}
                        // @ts-ignore
                        value={this.state.name}
                        placeholder={"Name"}
                        onChange={this.handleChange}
                    />
                    <input
                        name={"street_address"}
                        // @ts-ignore
                        value={this.state.street_address}
                        placeholder={"Street Address"}
                        onChange={this.handleChange}
                    />
                    <input
                        name={"city"}
                        // @ts-ignore
                        value={this.state.city}
                        placeholder={"City"}
                        onChange={this.handleChange}
                    />
                    <input
                        name={"state"}
                        // @ts-ignore
                        value={this.state.state}
                        placeholder={"State"}
                        onChange={this.handleChange}
                    />
                    <input
                        name={"zip_code"}
                        // @ts-ignore
                        value={this.state.zip_code}
                        placeholder={"Zipcode"}
                        onChange={this.handleChange}
                    />
                    <button onSubmit={this.handleSubmit}>Submit</button>
                </form>
            </div>
        )
    }

}

