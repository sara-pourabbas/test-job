import React from "react";

export class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImageIndex: 0,
      items: this.props.items,
    };
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

  render() {
    const index = this.state.currentImageIndex;

    let firstFiveVideo = this.state.items.slice(index, index + 3);

    if (firstFiveVideo.length < 3) {
      firstFiveVideo = firstFiveVideo.concat(
        this.state.items.slice(0,3 - firstFiveVideo.length)
      );
    }
    return (
      <div className='carousel-box '>
        {/* render the left arrow */}
          <div className='arrow-carousel carousel-left' onClick={this.prevSlide} >
            <i className='fa fa-chevron-left'/>
          </div>
        {/* render images */}

        {firstFiveVideo.map((item, index) => (

                        <div className='list-card-in px-1' key={index}>
                            <div className='image-list'>
                                <a className='d-inline-block'>
                                    <img  src={item.image} alt="" />
                                </a>
                            </div>
                            <div className='item-list-detail'>
                              <div className='title'>{item.title}</div>
                                <div className='sub-title'>
                                  <a className='main'>{item.menuType.title}</a>
                                    <a className='sub'>{item.cuisineType.title}</a>
                                    <a className='sub'>{item.courseType.title}</a>
                                </div>
                              <div className='time-detail'>
                                <span className='text-left'>
                                  <span className='tag light'>
                                    <i className='fa fa-clock-o'/>
                                  Mins
                                  </span>
                                  <span className='tag dark'>${item.price}</span>
                                </span>
                                <span className='tag light free'>{item.isAcceptingDelivery?this.props.freeDelivery:this.props.freePickup}</span>
                              </div>
                            </div>
                        </div>
        ))}



        {/* render the right arrow */}
        <div className='arrow-carousel carousel-right' onClick={this.nextSlide} >
            <i className='fa fa-chevron-right'/>
        </div>
      </div>
    );
  }
}
