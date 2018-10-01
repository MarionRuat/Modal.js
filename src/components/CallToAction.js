import React from 'react';
import AppForm from './AppForm';
import Button from './Button';
import Modal from './Modal';

export default class CallToAction extends React.Component {
state={
modalActive:false,	
}
showModal=()=>{
	this.setState({
		modalActive:true
	})
}
closeModal=()=>{
	this.setState({modalActive:false})
}
	render() {
		return (
			<div className='c-call-to-action'>
				<div className='c-call-to-action__inner'>
					<div className='o-layout'>
						<div className='o-layout__item u-margin-bottom-small@md'>
							<h1 className='t-alpha u-margin-bottom-regular u-margin-bottom-tiny@md u-align-center'>Congratulations</h1>
						</div>
						<div className='o-layout__item u-1/2@sm2 u-12/12@md3 u-1/2@lg u-margin-bottom-small u-margin-bottom-none@lg'>
							<p>You are our 1 millionth visitor. To celebrate, we're giving you a FREE all expenses paid holiday to New York City.</p>
							<p>Click the button below to claim your prize.</p>
						</div>
						<div className='o-layout__item u-1/2@sm2 u-12/12@md3 u-1/2@lg'>
							<ul className='o-list-bare c-call-to-action__list'>
								<li className='u-italic'>See all the famous landmarks</li>
								<li className='u-italic'>Get &pound;1000 spending money on us</li>
								<li className='u-italic'>Enjoy the holiday of a lifetime</li>
							</ul>
						</div>
					</div>

				</div>
				<div className='c-call-to-action__inner c-call-to-action__inner--grey u-align-center'>
					<Button handleClick={()=>this.showModal()}>Claim Holiday</Button>
				</div>
				<Modal title='New-York Holiday' active={this.state.modalActive} handleClose={this.closeModal}><AppForm /></Modal>
			</div>
		)
	}
}
