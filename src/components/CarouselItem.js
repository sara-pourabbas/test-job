import React, {Component} from "react";
import {Button} from '@material-ui/core';
import { Carousel } from "./Carousel";
import myJson from "../menu.json";
class CarouselItem extends Component{
    state={
      typeMarker:'delivery',
        freeDelivery:'free Delivery',
        freePickup:'Free Pickup'
    };
    deliveryMarker=()=>{
       let freeDelivery= myJson.filter(a=> a.isAcceptingDelivery===true)
        this.setState({typeMarker:'delivery',freeDelivery});
    };

    pickupMarker=()=>{
        let freePickup= myJson.filter(a=>a.isAcceptingDelivery===false);
        this.setState({typeMarker:'pickup',freePickup})
    }
    ;
    render() {
        console.log(myJson);
        return (
            <div className='item-body'>
                    <div className='body-header'>
                        <div className='body-menu'>
                            <a className='delivery'>
                                <div className='title'>ASAP Delivery</div>
                                <div className='address mt-1'>What's Your Address ?</div>
                            </a>
                            <div className=' d-inline-block '>
                                <Button className='btn-change'> Change </Button>
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
                    <div className='items-container'>

                        <div className='items-contain'>
                            <div className='items-contain-list mt-4'>
                                <div className='header-title'> Happy Hour </div>
                                <div className='scroll-list' />
                                <Carousel  items={myJson} freeDelivery={this.state.freeDelivery} freePickup={this.state.freePickup} />
                            </div>
                            <div className='gift-card py-4'>
                                <div className='gift-image p-4'>
                                    <img src='../assets/images/gift-card.jpg' alt='gift-card'/>
                                </div>
                                <div className='gift-body'>
                                    <div>
                                        <span className='branded'>Branded</span>
                                        <span className='giftCard ml-2'>Gift Card</span>
                                    </div>
                                    <div className='logo-bottom mb-2'>
                                        <img src='../assets/images/logo.png' alt='logo'/>
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
                                    <a className='delivery'>
                                        <div className='title'>ASAP Delivery</div>
                                        <div className='address mt-1'>What's Your Address ?</div>
                                    </a>
                                    <div className=' d-inline-block '>
                                        <Button className='btn-change'> Change </Button>
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

                </div>
        );
    }
}

export default CarouselItem;
