import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

class Table extends React.Component {
    render(){
        //destrupting
        const{characters} = this.state;

        return(
        <div className="container"> 
            <Table  characterData={characters}
            removeChracter={this.removeCharacters}  />         
           
        </div>  

        );
    }
}

export default Table;

