import React from 'react';
import Box from './Box';
import CallToAction from './CallToAction';
import Carousel from './Carousel';

import Photo01 from '../assets/img/photo-01.jpg';
import Photo02 from '../assets/img/photo-02.jpg';
import Photo03 from '../assets/img/photo-03.jpg';
import Photo04 from '../assets/img/photo-04.jpg';
import Photo05 from '../assets/img/photo-05.jpg';

const App = (props) => {
	return (
		<div>
		<div id='modal-root' />
			<div className='o-container'>
				<div className='o-layout o-layout--fit-height'>
					<div className='o-layout__item u-1/2@md3 o-layout__item--2@md3 u-margin-bottom-regular@max-md3 u-display-flex'>
						<Box>
							<Carousel photos={[Photo01, Photo02, Photo03, Photo04, Photo05]} />
						</Box>
					</div>
					<div className='o-layout__item u-1/2@md3 o-layout__item--1@md3'>
						<Box>
							<CallToAction />
						</Box>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App;
