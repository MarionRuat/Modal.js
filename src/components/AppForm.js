import React from 'react';
import Button from './Button';
import Input from './Input';

export default class AppForm extends React.Component {

	componentDidMount() {
		setTimeout(() => {
			this.firstInput.focus();
		}, 100)
	}

	render() {
		return (
			<div className='c-app-form'>
				<div className='o-box o-box--spacing-reduced o-box--spacing-regular@sm3 c-app-form__heading'>
					Please complete and submit the following form to book your free holiday to New York*
				</div>
				<div className='o-box o-box--spacing-reduced o-box--spacing-regular@sm3'>
					<div className='o-layout'>
						<div className='o-layout__item u-1/2@sm2 u-margin-bottom-reduced'>
							<Input name='first-name' label='First Name' placeholder='eg: Heather' refName={el => this.firstInput = el} />
						</div>
						<div className='o-layout__item u-1/2@sm2 u-margin-bottom-reduced'>
							<Input name='last-name' label='Last Name' placeholder='eg: Harrison' />
						</div>
						<div className='o-layout__item u-margin-bottom-reduced'>
							<Input name='email-address' label='Email Address' placeholder='eg: heather@testerjester.co.uk' type='email' />
						</div>
						<div className='o-layout__item u-margin-bottom-reduced'>
							<Input name='contact-number' label='Contact Number' placeholder='eg: 0741 234 5678' type='tel' />
						</div>
						<div className='o-layout__item'>
							<label className='c-input__label' htmlFor='dob-day'>Date of Birth</label>
						</div>
						<div className='o-layout__item u-1/3 u-margin-bottom-reduced'>
							<Input name='dob-day' placeholder='DD' type='number' />
						</div>
						<div className='o-layout__item u-1/3 u-margin-bottom-reduced'>
							<Input name='dob-month' placeholder='MM' type='number' />
						</div>
						<div className='o-layout__item u-1/3 u-margin-bottom-reduced'>
							<Input name='dob-year' placeholder='YYYY' type='number' />
						</div>
						<div className='o-layout__item u-1/3@md u-margin-bottom-reduced'>
							<Input name='bank' label='Bank' placeholder='eg: Natwest' />
						</div>
						<div className='o-layout__item u-1/3@md u-margin-bottom-reduced'>
							<Input name='account-number' label='Account #' placeholder='eg: 12367823' />
						</div>
						<div className='o-layout__item u-1/3@md u-margin-bottom-reduced'>
							<Input name='sort-code' label='Sort Code' placeholder='eg: 12-34-56' />
						</div>
						<div className='o-layout__item u-margin-bottom-reduced'>
							<Input name='marvel' label='Favourite Marvel Movie' type='select' options={[
								'Iron Man (2008)',
								'The Incredible Hulk (2008)',
								'Iron Man 2 (2010)',
								'Thor (2011)',
								'Captain America: The First Avenger (2011)',
								'The Avengers (2012)',
								'Iron Man 3 (2013)',
								'Thor: The Dark World (2013)',
								'Captain America: The Winter Soldier (2014)',
								'Guardians of the Galaxy (2014)',
								'Avengers: Age of Ultron (2015)',
								'Ant-Man (2015)',
								'Captain America: Civil War (2016)',
								'Doctor Strange (2016)',
								'Guardians of the Galaxy Vol. 2 (2017)',
								'Spider-Man: Homecoming (2017)',
								'Thor: Ragnarok (2017)',
								'Black Panther (2018)'
							]}/>
						</div>
						<div className='o-layout__item u-margin-bottom-reduced u-align-center'>
							<Button>Submit Form</Button>
						</div>
						<div className='o-layout__item u-align-center@sm2 u-8/12@md u-offset-2/12@md'>
							<p className='t-charlie u-italic'>*Very extensive terms & conditions apply. Very, very expensive. An episode of Black Mirror extensive.</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
