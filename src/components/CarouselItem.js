import React, {Component} from "react";
import {Button} from '@material-ui/core';
import { Carousel } from "./Carousel";
import myJson from "../menu.json";
import giftCard from '../assets/images/gift-card.jpg';
import logo from '../assets/images/logo.png';
import Container from '@material-ui/core/Container';


class CarouselItem extends Component{
    state={
        typeMarker:'delivery',
        free:[],
    };
    deliveryMarker=()=>{
        let freeDelivery= myJson.filter(a=> a.isAcceptingDelivery===true);
        this.setState({typeMarker:'delivery',free:freeDelivery});
    };

    pickupMarker=()=>{
        let freePickup= myJson.filter(a=>a.isAcceptingDelivery===false);
        this.setState({typeMarker:'pickup',free:freePickup})
    };

    componentDidMount(){
        let freeDelivery= myJson.filter(a=> a.isAcceptingDelivery===true);
        this.setState({typeMarker:'delivery',free:freeDelivery},()=>
        {
            console.log('free',this.state.free)
        });

    }
    render() {
        return (
            <Container maxWidth="lg" className='middle-contain px-0'>
                <div className='middle-contain-head'>
                    <div className='middle-contain-head-menu'>
                        <a className='order-options'>
                            <div className='mode'>ASAP Delivery</div>
                            <div className='no-address mt-1'>What's Your Address ?</div>
                        </a>
                        <div className=' d-inline-block '>
                            <Button className='change-button'> Change </Button>
                        </div>
                        <div className='type-select'>
                            <div className={`marker ${this.state.typeMarker==='delivery' ? 'marker-delivery':'marker-pickup'} `} />
                            <div className='type-item' onClick={this.deliveryMarker}>Delivery</div>
                            <span className='sep mx-2'>Or</span>
                            <div className='type-item'onClick={this.pickupMarker}>Pickup</div>
                        </div>
                        <div className='divider' />
                        <a className='catering'>Catering</a>
                    </div>
                </div>
                <div className='carousel-content'>

                    <div className='items-contain'>
                        <div className=' mt-4'>
                            <div className='title-carousel'> Salad </div>
                            <div className='scrolling-carousel' />
                            <Carousel  items={this.state.free} />

                        </div>
                        <div className='gift-card py-4'>
                            <div className='gift-image p-4'>
                                <img src={giftCard} alt='gift-card'/>
                            </div>
                            <div className='gift-body'>
                                <div>
                                    <span className='branded'>Branded</span>
                                    <span className='giftCard ml-2'>Gift Card</span>
                                </div>
                                <div className='logo-bottom mb-2'>
                                    <img src={logo} alt='logo'/>
                                </div>
                                <div className='desc text-justify'>
                                    <p className='mb-0'>
                                        Opeqe provides a wide range of customizable products for reward and incentive programs that can meet your restaurant’s goals.
                                    </p>
                                    <p>
                                        Whether you are looking to drive the addition of new customers, increase the loyalty of existing ones we have a customized solution for you.
                                    </p>
                                </div>
                                <div className='quote text-left'>
                                    <Button className='quote-btn'> GET ONLINE QUOTE </Button>
                                </div>
                            </div>
                        </div>
                        <div className='ready py-4'>
                            <div className='title-ready'> Ready to Order </div>
                            <div className='title-ready-sub mt-2'>Browse our menu for dine-in, delivery or pickup and catering</div>
                            <div className='bottom-menu'>
                                <a className='order-options'>
                                    <div className='mode'>ASAP Delivery</div>
                                    <div className='no-address mt-1'>What's Your Address ?</div>
                                </a>
                                <div className=' d-inline-block '>
                                    <Button className='change-button'> Change </Button>
                                </div>
                                <div className='type-select'>
                                    <div className='marker' />
                                    <div className='type-item'>Delivery</div>
                                    <span className='sep mx-2'>Or</span>
                                    <div className='type-item'>Pickup</div>
                                </div>
                                <div className='divider' />
                                <a className='catering'>Catering</a>
                            </div>
                        </div>

                    </div>
                </div>

            </Container>
        );
    }
}

export default CarouselItem;
