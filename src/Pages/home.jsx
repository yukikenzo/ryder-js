import React from 'react'
import './style.css';

export default function home() {
  return (
    <div className='home'>
      <div className='img'>
        <img className='img1' src="https://cdn.shopify.com/s/files/1/0371/0749/files/000412400005_1100x.jpg?v=1637615010" />
        <img className='img2' src="https://cdn.shopify.com/s/files/1/0371/0749/files/g_day-blue_750x.png?v=1633341228" />
      </div>
      <img className='img3' src="https://cdn.shopify.com/s/files/1/0371/0749/files/000724550009_c150dfca-a09d-431b-98c6-50be83019b74_2000x.jpg?v=1633351843" />

      <div className='advantages'>
        <div>
          <img src="https://cdn.shopify.com/s/files/1/0371/0749/files/Icons_For_Lexxola_2021_-02_710x.png?v=1629923757" />
          <p>Be apart of something bigger</p>
        </div>
        <div>
          <img src="https://cdn.shopify.com/s/files/1/0371/0749/files/4370649_275x.png?v=1629924815" />
          <p>Sustainable materials and packaging</p>
        </div>
        <div>
          <img src="https://cdn.shopify.com/s/files/1/0371/0749/files/delivery-truck_275x.png?v=1630008552" />
          <p>Free and fast delivery nationwide</p>
        </div>
        <div>
          <img src="https://cdn.shopify.com/s/files/1/0371/0749/files/credit-card_275x.png?v=1630008710" />
          <p>Buy now and pay later with afterPay or zippay</p>
        </div>
      </div>

      <a href="https://www.instagram.com/ryder_label/" target={'_blank'}>@ryder_label</a>

      <div className='instagram-photos'>
        <a href="https://www.instagram.com/p/CYODokjMXdV/" target={'_blank'}><img src="https://scontent.cdninstagram.com/v/t51.2885-15/271112034_503878811029346_3268653201051714208_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=L4ze9rpebtUAX9VVx-k&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT9nLaeXULUPfiPnzh6IGIadV_w2IOdqUNlntNd9AFBXmw&oe=6211DF2C" /></a>
        <a href="https://www.instagram.com/p/CYKfV3WB6S1/" target={'_blank'}><img src="https://scontent.cdninstagram.com/v/t51.2885-15/271038478_502983627713025_3771417741961089029_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=dBXq3t7cQMQAX9e_yGp&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT8suHAqH7_Ebj5xQfYZJZgwQlScWe5FZSK4ML59_wY_sA&oe=62126B66" /></a>
        <a href="https://www.instagram.com/p/CYIJ3uvu-JA/" target={'_blank'}><img src="https://scontent.cdninstagram.com/v/t51.2885-15/270292229_139892935098161_2735430944939008596_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=t8j_FgnTcLsAX_YkP7l&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT8kfA9efDT-GNZwzC5iwp0-1b2OaUr0JdsgMrqBeSY_rg&oe=6212348F" /></a>
        <a href="https://www.instagram.com/p/CX62jFhs5Ig/" target={'_blank'}><img src="https://scontent.cdninstagram.com/v/t51.2885-15/269937463_286758573469217_4941337273818153638_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=-cx9YnMORWcAX8NdYzN&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT8mgohEFvCynLqIwGrwKB_JGA7tG9PdFObaVfMOHxl4iA&oe=62112C69" /></a>
      </div>

      <p>Sign Up For 10% Off Your First Order</p>
      <div className='input-container'>
        <input className='email-input' placeholder='Your email' autoComplete='email' type="email" />
        <button className='sub-button'>Subscribe</button>
      </div>


    </div>
  )
}