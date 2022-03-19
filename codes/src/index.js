import React from 'react';
import stylesheets from './stylesheets/style.css'
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state =  {
            status: false,
            address: "",
            code: "",
            city: "",
            country: "",
            baddress: "",
            bcode: "",
            bcity: "",
            bcountry: "",
            errors: {
                address: "",
            }
        }
    }

    handleInput = ({target}) => {
        let {name, value} = target;
        let errors = this.state.errors;
        
        switch (name) {
            case "address": errors.address  = value.length > 7 ? "" : "length must be atLeast eight characters"
                break;

            default:
                break;
        }
        this.setState(() => {
            return {
                [name] : value,
            }
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        alert(this.state.address + this.state.code + this.state.city+ this.state.country)
    }
    handleCheck = (event) => {
        console.log("outside")
        this.setState((prevState) => {
            console.log("inside-1")
            return {
                status: !prevState.status,
            }
        })
        this.setState((prevState) => {
            console.log(this.state.status);
            console.log(prevState.status);
            if(prevState.status){
                return {
                baddress  : this.state.address,
                bcode :  this.state.code,
                bcity  : this.state.city,
                bcountry :   this.state.country
                }
            }else{
                return {
                baddress  : "",
                bcode :  "",
                bcity  : "",
                bcountry :  ""
                }
            }
        })
    }
    render(){
        let {address} = this.state.errors;
        let addValue = this.state.address;
        return (
            <>
                <header className="header">
                    <div>
                        Learning About Forms
                    </div>
                    <p>
                        Controlled Vs Uncontrolled Component
                    </p>
                </header>
                <div className='heading'>Controlled Component</div>
                <main className='main-1'>
                <section>
                    <form onSubmit={this.handleSubmit} >
                    <h1>
                        Shipping Address
                    </h1>
                    {/* address */}
                    <label htmlFor='address' >
                        Address
                    </label >
                    <input type="text" className={ address ? "error" : "" } onChange={this.handleInput} id='address' name='address' value={this.state.address} placeholder="e.g New Delhi, Vasant Vihar" />
                    <span className={ address ? "err" : "" } >{ address ? address : "" }</span>
                    {/* zip/postal code */}
                    <label htmlFor='code' >
                        Zip/ Postal Code
                    </label >
                    <input type="text"  onChange={this.handleInput} id='code' name='code' value={this.state.code} placeholder=" e.g 176057 " />
                    {/* city */}
                    <label htmlFor='city' >
                        City
                    </label >
                    <input type="text"  onChange={this.handleInput} id='city' name='city' value={this.state.city} placeholder="e.g New Delhi" />
                    {/* country */}
                    <label htmlFor='country' >
                        Country
                    </label >
                    <input type="text"  onChange={this.handleInput} id='country' name='country' value={this.state.country} placeholder="e.g India" />
                    {/* Submit Button  */}
                    <input type="submit" className='btn' value="Submit" id={ !addValue || address ? "activ" : ""} />
                    </form>
                    <form onSubmit={this.handleSubmit} >
                    <h1>
                        Billing Address
                    </h1>
                    <div className='checkbox'>
                        <input type="checkbox" value={this.state.status} onChange={this.handleCheck} /> Same as the shipping Address?
                    </div>
                    
                    {/* address */}
                    
                    <label htmlFor='address' >
                        Address
                    </label >
                    <input type="text" id='address' name='baddress' value={this.state.baddress}  placeholder="e.g New Delhi, Vasant Vihar" />
                    
                    {/* zip/postal code */}
                    
                    <label htmlFor='code' >
                        Zip/ Postal Code
                    </label >
                    <input type="text"   id='code' name='bcode' value={this.state.bcode} placeholder=" e.g 176057 " />
                    
                    {/* city */}
                    
                    <label htmlFor='city' >
                        City
                    </label >
                    <input type="text"  id='city' name='bcity' value={this.state.bcity}  placeholder="e.g New Delhi" />
                    
                    {/* country */}
                    
                    <label htmlFor='country' >
                        Country
                    </label >
                    <input type="text"   id='country' name='bcountry' value={this.state.bcountry}  placeholder="e.g India" />
                    {/* Submit Button  */}
                    <input type="submit" className='btn' value="Submit" id={ !addValue || address ? "activ" : ""} />
                    </form>
                </section>
                </main>
            </>
            
        )
    }
}

ReactDOM.render(<App /> , document.getElementById(`root`));