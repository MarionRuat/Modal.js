import React from 'react';
import {createPortal} from 'react-dom';
import Close from '../assets/img/close.svg';
import Proptypes from 'prop-types'; 


export default class Modal extends React.Component {
    constructor(props){
    
    super(props);
    this.el=document.createElement('div');
    }
            
    static proptypes ={
        active: Proptypes.bool.isRequired,
        focusElem: Proptypes.string,
        handleClose: Proptypes.func.isRequired,
        returnFocusElem: Proptypes.object,
        title: Proptypes.string
    }
    componentDidMount(){
        document.getElementById('modal-root').appendChild(this.el);
        document.body.addEventListener('keydown',(e)=>{if(e.which===27){
            this.props.handleClose()
        }})
    }
handleKeyPress=(e)=>{
    if(e.which===13){
        this.props.handleClose();
    }
}

handleClick=(e)=>{try{if(e.target.classList.contains('c-modal')){this.props.handleClose();}}
catch(error){console.log(error)}}

    modalContent=()=>{
        return (
        <div className='c-modal' onClick={(e)=>this.handleClick(e)}>
            <div className='c-modal_wrapper'>
                <div className='c-modal_title-wrapper'>
                {this.props.title ? <h1 className='t-beta c-modal__title'>{this.props.title}
                </h1> : ''}
                <img src={Close} className='c-modal__close' tabIndex='0' alt='Close Modal' onClick={this.props.handleClose} onKeyPress={(e)=>this.handleKeyPress(e)}/>
                </div>
            <div className='c-modal__box'>
            <div className='c-modal__content'>{this.props.children}
            </div>
        </div>
        </div>
        </div>
        )}

    render() {
        if(this.props.active){
        return createPortal(
            this.modalContent(),
            this.el    
        );
        }
        else return false;
    }
}
