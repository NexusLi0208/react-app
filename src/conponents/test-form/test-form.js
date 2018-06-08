import React from 'react'
export default function myForm(Comp){
    return class WrapperComp extends React.Component{
        render(){
            return <Comp props></Comp>
        }
    }
}