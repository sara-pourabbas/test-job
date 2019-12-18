import React, {Component} from "react";
import Radio from '@material-ui/core/Radio';
import bgSlider from '../assets/images/slider-back.jpg'
class SlideShow extends Component{

    render() {
        return (
            <div className='position-relative w-100'>
            <div className='slideShow'>
              <div className='bg-slider'>
                  <img src={bgSlider} alt='slideShow'/>
              </div>

              <div className='slideShow-text pt-4'>
               <div className='slideShow-title'>
                 <div>
                   <h1 className='m-0 py-1'>code FREEDINE</h1>
                   <div className='py-1'>Enjoy $10 Off When you order two or more of Blueberry Pancake Breakfast</div>
                 </div>
                 <div className='use-button'>Use
                   <a className='use-button-title ml-2'> code FREEDINE </a>
                 </div>
               </div>

               <div className='slideShow-dot'>
                   <Radio className=''
                       // checked={selectedValue === 'a'}
                       // onChange={handleChange}
                       value="a"
                       name="radio-button-demo"
                       inputProps={{ 'aria-label': 'A' }}
                   />
               </div>
              </div>

            </div>
            </div>
        );
    }
}

export default SlideShow;
