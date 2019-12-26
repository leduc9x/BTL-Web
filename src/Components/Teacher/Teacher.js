import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import HeaderElement from '../Header/HeaderElement';
import MenuTeacher from '../MenuTeacher/MenuTeacher';
import ListClass from './ListClass';

class Teacher extends Component {
    constructor(){
        super();
        this.state={
            isLoged:localStorage.getItem('isLoged')
        }
    }
    render() {
        if(this.state.isLoged==="true"){
            return (
                <div>       
                    <HeaderElement></HeaderElement>
                     <MenuTeacher></MenuTeacher> 
                     <ListClass></ListClass>
                </div>
            );
        }
        else if (this.state.isLoged==="false") {
           return <Redirect to = "/"></Redirect>
        }
    }
}
export default Teacher;