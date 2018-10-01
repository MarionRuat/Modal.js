import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick'
import Arrow from './../assets/img/arrow.svg'

export default class Carousel extends React.Component {
	static propTypes = {
		photos: PropTypes.array.isRequired
	};

	state = {
		activeSlide: 0
	}

	componentDidMount() {
		setTimeout(() => {
			if(this.refs.carousel) {
				this.refs.carousel.classList.add('has-loaded');
			}
		}, 1000)
	}

	updateActive(i) {
		this.setState({
			activeSlide: i
		})
	}

	next = () => {
		if(this.state.activeSlide === (this.props.photos.length - 1)) {
			this.slider.slickGoTo(0)
		}
		else {
			this.slider.slickNext();
		}
	}

	prev = () => {
		if(this.state.activeSlide === 0) {
			this.slider.slickGoTo(this.props.photos.length - 1)
		}
		else {
			this.slider.slickPrev();
		}
	}

	resizeEvent = () => {
		if(typeof(Event) === 'function') {
			return new Event('resize');
		}
		else{
		    var event = document.createEvent('Event');
		    return event.initEvent('resize', true, true);
		}


	}

	handleKeyPress(e, dir) {
		if(e.which === 13) {
			if(dir === 'next') {
				this.next();
			}
			else {
				this.prev();
			}
		}
	}

	render() {
		return (
			<div className='c-carousel' ref='carousel'>
				<Slider ref={c => this.slider = c } infinite={true} arrows={false} beforeChange={(oldIndex, newIndex) => this.updateActive(newIndex)}>
					{this.props.photos.map((photo, i) => {
						return (
							<div key={i}><img src={photo} alt='New York' onLoad={() => window.dispatchEvent(this.resizeEvent())} /></div>
						)
					})}
				</Slider>
				<div className='o-layout o-layout--inline o-layout--center o-layout--middle u-margin-top-small'>
					<div className='o-layout__item'>
						<img src={Arrow} className='c-carousel__arrow c-carousel__arrow--left' tabIndex='0' onClick={this.prev} onKeyPress={(e) => this.handleKeyPress(e, 'prev')} alt='Previous Slide' />
					</div>
					<div className='o-layout__item c-carousel__numbers u-bold'>{this.state.activeSlide + 1}<span className='c-carousel__divider'>/</span>{this.props.photos.length}</div>
					<div className='o-layout__item'>
						<img src={Arrow} className='c-carousel__arrow c-carousel__arrow--right' tabIndex='0' onClick={this.next} onKeyPress={(e) => this.handleKeyPress(e, 'next')} alt='Next Slide' />
					</div>
				</div>
			</div>
		)
	}
}
