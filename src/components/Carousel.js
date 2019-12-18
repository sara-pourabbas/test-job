import React,{Component} from "react";
export class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentImageIndex: 0,
            items: []
        };
    }
    componentDidMount(){
        this.setState({items:this.props.items})
    }

    prevSlide = () => {
        const lastIndex = this.state.items.length - 1;

        const resetIndex = this.state.currentImageIndex === 0;
        const index = resetIndex ? lastIndex : this.state.currentImageIndex - 1;

        this.setState({
            currentImageIndex: index
        });
    };
    nextSlide = () => {
        const lastIndex = this.state.items.length - 1;

        const resetIndex = this.state.currentImageIndex === lastIndex;
        const index = resetIndex ? 0 : this.state.currentImageIndex + 1;

        this.setState({
            currentImageIndex: index
        });
    };


    render(){
        const index = this.state.currentImageIndex;

        let firstFiveVideo = this.state.items.slice(index, index + 3);

        if (firstFiveVideo.length < 3) {
            firstFiveVideo = firstFiveVideo.concat(
                this.state.items.slice(0,3 - firstFiveVideo.length)
            );
        }
        return(
            <div className='container-fluid'>
                <div className='position-relative'>
                    <div className='carousel-inner row flex-nowrap align-items-center'>

                        <div className='arrow-carousel carousel-left' onClick={this.prevSlide}  >
                            <i className='fa fa-chevron-left'/>
                        </div>
                        {firstFiveVideo.map((el, index) => (
                        <div className='carousel-item-custom ' key={index}>
                            <a className='d-inline-block'>
                                <img  src={el.image} alt="" />
                            </a>
                            <div className='carousel-info'>
                                <div className='title'>{el.title}</div>
                                <div className='sub-title'>
                                    <a className='main'>{el.menuType.title}</a>
                                    <a className='sub'>{el.cuisineType.title}</a>
                                    <a className='sub'>{el.courseType.title}</a>
                                </div>
                                <div className='time-info'>
                                <span className='text-left'>
                                  <span className='tag light'>
                                    <i className='fa fa-clock-o'/>
                                  Mins
                                  </span>
                                  <span className='tag dark'>${el.price}</span>
                                </span>
                                    <span className='tag light free green-tag'>{el.isAcceptingDelivery?"freeDelivery":"freePickup"}</span>
                                </div>
                            </div>
                        </div>
                        ))}

                        <div className='arrow-carousel carousel-right'  onClick={this.nextSlide}>
                            <i className='fa fa-chevron-right'/>
                        </div>

                        </div>

                    </div>
                </div>





           /* {/!*<div className='carousel-box'>
                    <div className='arrow-carousel carousel-left' onClick={this.prevSlide}  >
                        <i className='fa fa-chevron-left'/>
                    </div>
                        {firstFiveVideo.map((el, index) => (
                            <div className='carousel-list px-1' key={index}>
                                <div className='image-list'>
                                    <a className='d-inline-block'>
                                        <img  src={el.image} alt="" />
                                    </a>
                                </div>
                                <div className='carousel-info'>
                                    <div className='title'>{el.title}</div>
                                    <div className='sub-title'>
                                        <a className='main'>{el.menuType.title}</a>
                                        <a className='sub'>{el.cuisineType.title}</a>
                                        <a className='sub'>{el.courseType.title}</a>
                                    </div>
                                    <div className='time-info'>
                                <span className='text-left'>
                                  <span className='tag light'>
                                    <i className='fa fa-clock-o'/>
                                  Mins
                                  </span>
                                  <span className='tag dark'>${el.price}</span>
                                </span>
                                        <span className='tag light free green-tag'>{el.isAcceptingDelivery?this.props.freeDelivery:this.props.freePickup}</span>
                                    </div>
                                </div>
                            </div>
                        ))}

                    <div className='arrow-carousel carousel-right'  onClick={this.nextSlide}>
                        <i className='fa fa-chevron-right'/>
                    </div>
            </div>*!/}*/
        )
    }
     }


