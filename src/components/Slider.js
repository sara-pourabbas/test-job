import React, {Component} from "react";

class Slider extends Component{

    render() {
        return (
            <div className='contain'>
            <div className='slider'>
              <div className='back-slider'>
                  <img src='/img/HomeHeader.jpg' alt='slider'/>
              </div>

              <div className='slider-items pt-4'>
               <div className='slider-text'>
                 <div>
                   <h1 className='m-0 py-1'>Happy Hour</h1>
                   <div className='py-1'>Get %10 Off When You Order Pad Thai</div>
                 </div>
                 <div className='use'>Use
                   <a className='use-in ml-2'> happy Hour </a>
                 </div>
               </div>

               <div className='slider-nav'>
                <div className='btn-out'>
                  <input type='radio' className='input-main' name='radio'/>
                  <span className='input-custom' />
                </div>
                   <div className='btn-out'>
                       <input type='radio' className='input-main' name='radio'/>
                       <span className='input-custom' />
                   </div>
                   <div className='btn-out'>
                       <input type='radio' className='input-main' name='radio'/>
                       <span className='input-custom' />
                   </div>
               </div>
              </div>

            </div>
            </div>
        );
    }
}

export default Slider;
