import React, { Component } from 'react';

class DropdownSelection extends Component {

    constructor(props) {
        super(props);
       
        this.state = {
            openDropdown: false,
          selected: "test",
          single:{

          },
          checked:{}
        };
    }

    componentDidMount(){

      this.getPreSelected()


    }

    getPreSelected = () =>{
      let preObject ={}
      let allfalse ={}


      if(this.props.selectType==="single"){

        for(const op of this.props.options){
          allfalse[op.value] = false
          if(op.value===this.props.preSelect[0]){
            preObject[this.props.preSelect[0]]=true
          }else{
            preObject[op.value]=false


          }

        }

      

      }else{
        for(const pre of this.props.preSelect){
          preObject[pre]=true
      
        }
  

      }

      this.setState({
        checked:{
          ...this.state.checked,
          ...preObject
        },
        allfalse:allfalse
      })

    }

    toggleDropdown = () =>{
        this.setState({
            openDropdown: !this.state.openDropdown
        })
    }

    onChangeHandler = (e) =>{

      if(this.props.selectType==="single"){
        if(e.target.checked&&this.state.checked[e.target.value]){
          
          this.setState({
            checked:{
             ...this.state.allfalse,
           
            }
          })

        }else{
          this.setState({
            checked:{
              ...this.state.allfalse,
              [e.target.value]: e.target.checked
            }
          })
        }
      }else{
        this.setState({
          checked:{
            ...this.state.checked,
            [e.target.value]: e.target.checked
          }
        })

      }

      setTimeout(()=>{   this.props.onChange(this.getCheckedValue())},100)

  

    }

    getCheckedValue = () =>{

      let result = []

      let original = JSON.parse(JSON.stringify(this.state.checked))
      for(let i in original){
        if(original[i]){

          result.push(i)

        }

      }
      return result


    }
    renderOptions = () =>{

        let type = this.props.selectType==="single"? "radio": "checkbox"

        return this.props.options.map((item, i) =>{

  
            return (
           
                <div className="dropdown-item" key={item.value}>
                    <input 
                      type={type} 
                      id={item.value} 
                    
                      name={item.valye} 
                      value={item.value} 
                      checked={this.state.checked[item.value]}
                      onClick={this.onChangeHandler}
                    />
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
              {this.getCheckedValue().join(", ") || "-- Please Select --"}
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