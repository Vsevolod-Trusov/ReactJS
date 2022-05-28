import React from "react"

export default class BlockWorksMenu extends React.Component{
    constructor(props) {
        super(props);
        this.state = {value: ''}

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
        this.setState({value: event.target.value})
    }

    handleSubmit(event){
        event.preventDefault()
    }

    render(){
        let name = {
            paddingLeft:'450px'
        }
        let labelStyle = {
            fontFamily:'Verdana, Helvetica, Arial, sans-serif',
            fontSize:'25px',
            fontWeight: 'bold'
        }
        return(
            <form style= {name} onSubmit={this.handleSubmit} >
                <label style={labelStyle}>
                    Select your job:
                    <select value={this.state.value} onChange={this.handleChange} >
                        <option value="Programmer">Programmer</option>
                        <option value="Tester">Tester</option>
                        <option value="Designer">Designer</option>
                        <option value="Manager">Manager</option>
                        <option value="System Administrator">System Administrator</option>
                        <option value="Businessman">Businessman</option>
                        <option value="Policeman">Policeman</option>
                    </select>
                </label>
                <Jobs value = {this.state.value} />
            </form>
        )
    }
}

class Jobs extends React.Component{

    SelectJob() {
        let links = []
        let value = this.props.value
        switch (value) {
            case "Programmer":
                links.push("ProgrammerLink", "Programmer2Link")
                break
            case "Tester":
                links.push("TesterLink", "Tester2Link")
                break
            case "Designer":
                links.push("DesignerLink", "Designer2Link")
                break
            case "Manager":
                links.push("ManagerLink", "Manager2Link")
                break
            case "System Administrator":
                links.push("SystemAdministratorLink", "SystemAdministrator2Link")
                break
            case "Businessman":
                links.push("BusinessmanLink", "Businessman2Link")
                break
            case "Policeman":
                links.push("PolicemanLink", "Policeman2Link")
                break

        }
        console.log(links);

        return (
            <div>
                <ul >
                    {links.map((item) => {
                        return (
                        <li>
                                <a href="#">{item}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }

    render(){

        return(
            <div >{this.SelectJob()}</div>
        )
    }
}