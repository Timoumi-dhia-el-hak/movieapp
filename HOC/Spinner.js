import React from 'react'
import './../HOC/spinner.css'


function Spiner(Component) {
    return function SpinnerComponent({ isLoading, ...props }) {
      if (isLoading) return (<Component {...props} />);
      else
      return (<div class="lds-ring"><div></div><div></div><div></div><div></div></div>);
    }
  }
  export default  Spiner;