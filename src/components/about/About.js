import React from 'react'

import about1 from '../../image/about1.png'
import about2 from '../../image/about2.png'
import about4 from '../../image/about4.png'

import { ReactComponent as About3 } from '../../icons/About3.svg'

import './about.css'

const About = () => {
  return (
    <div className='componentFirst aboutBC'>
      <div className='componentSecond'>
        <div className='about'>
          <div className='aboutLeft'>
            <div className='aboutBox'>
              <img src={about1} alt='' className='aboutBoxIMG' />
            </div>
          </div>
          <div className='aboutRight'>
            <div className='aboutRightTop'>
              <div className='aboutBox'>
                <img src={about2} alt='' className='aboutBoxIMG' />
              </div>
            </div>
            <div className='aboutRightBottom'>
              <div className='aboutRightBottomLeft'>
                <div className='aboutBox'>
                  <About3 style={{ width: '100%', height: 'auto' }} />
                </div>
              </div>
              <div className='aboutRightBottomRight'>
                <div className='aboutBox aboutBoxLast'>
                  <img src={about4} alt='' className='aboutBoxIMG' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='aboutTextContainer'>
          <div className='aboutText'>
            The town of Hinamizawa, a fictional place from Higurashi no naku koro ni
          </div>
          <div className='aboutText'>
            Visit Hinamizawa, see the collection of Hinamizawa Robot NFTs 
            which gives you access to our community. Mint today and join us!
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
