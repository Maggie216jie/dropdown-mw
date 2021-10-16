import React, { Component } from 'react';

class DropdownSelection extends Component {

    constructor(props) {
        super(props);
       
        this.state = {
            openDropdown: false,
          selected: "test",
          single:{

          }
        };
    }

    toggleDropdown = () =>{
        this.setState({
            openDropdown: !this.state.openDropdown
        })
    }
    renderOptions = () =>{

        let type = this.props.selectType==="single"? "radio": "checkbox"

        return this.props.options.map((item, i) =>{
            return (
           
                <div className="dropdown-item" key={item.value}>
                    <input type={type} id={item.value} name={type==="radio"?"slection":item.value} value={item.value}/>
                    <label htmlFor={item.value}> {item.lable}</label>
                </div>
        
            )

        })

    }


    render() {
        return (
          <div className="dropdown">
            <div
              onClick={() => this.toggleDropdown()}
              className="dropdown-toggle"
            >
              {this.state.selected}
              {this.state.openDropdown?
                <i className="fa fa-angle-up" aria-hidden="true"></i>
                :
                <i className="fa fa-angle-down" aria-hidden="true"></i>
              }
             
            </div>
            {this.state.openDropdown &&
                <div className="dropdown-panel">
                    {this.renderOptions()}
                </div>
            }
            

          </div>
        );
      }
 
}

export default DropdownSelection;