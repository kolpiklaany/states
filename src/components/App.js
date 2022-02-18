import React from 'react';
import Table from './Table';

class App extends React.Component {
  state={
       characters =[
       
        {
          name:'Jhon',
          job:'Developer'
        },
        {
          name:'Daniel',
          job:'React Developer'
        },
        {
          name:'Makanda',
          job:'CEO'
        },
        {
          name:'Claudia',
          job:'Manager'
        },
      ],
    },
    
};
  removeChracter= index =>{
    const {characters}=this.state;
  }
}


export default App;