import React from 'react'

export default function Home() {
  return (
    <div className='home'>
      <div className='img'>
        <img className='img1' src="https://cdn.shopify.com/s/files/1/0371/0749/files/000412400005_1100x.jpg?v=1637615010"  alt="wallpaper" />
        <img className='img2' src="https://cdn.shopify.com/s/files/1/0371/0749/files/g_day-blue_750x.png?v=1633341228" alt="wallpaper" />
      </div>
      <img className='img3' src="https://cdn.shopify.com/s/files/1/0371/0749/files/000724550009_c150dfca-a09d-431b-98c6-50be83019b74_2000x.jpg?v=1633351843" alt="wallpaper"/>

      <div className='advantages'>
        <div>
          <img src="https://cdn.shopify.com/s/files/1/0371/0749/files/Icons_For_Lexxola_2021_-02_710x.png?v=1629923757" alt="advantage" />
          <p>Be apart of something bigger</p>
        </div>
        <div>
          <img src="https://cdn.shopify.com/s/files/1/0371/0749/files/4370649_275x.png?v=1629924815" alt="advantage" />
          <p>Sustainable materials and packaging</p>
        </div>
        <div>
          <img src="https://cdn.shopify.com/s/files/1/0371/0749/files/delivery-truck_275x.png?v=1630008552" alt="advantage" />
          <p>Free and fast delivery nationwide</p>
        </div>
        <div>
          <img src="https://cdn.shopify.com/s/files/1/0371/0749/files/credit-card_275x.png?v=1630008710" alt="advantage" />
          <p>Buy now and pay later with afterPay or zippay</p>
        </div>
      </div>

      <a href="https://www.instagram.com/ryder_label/" target={'_blank'} rel="noreferrer">@ryder_label</a>

      <div className='instagram-photos'>
        <a href="https://www.instagram.com/p/CYODokjMXdV/" target={'_blank'} rel="noreferrer"><img src="https://www.swedishnomad.com/wp-content/images/2019/04/Facts-about-Colosseum.jpg" alt='instagram images' /></a>
        <a href="https://www.instagram.com/p/CYKfV3WB6S1/" target={'_blank'} rel="noreferrer"><img src="https://www.kevmrc.com/wp-content/uploads/2021/10/30-interesting-facts-about-corsica-france.jpg" alt='instagram images' /></a>
        <a href="https://www.instagram.com/p/CYIJ3uvu-JA/" target={'_blank'} rel="noreferrer"><img src="https://images.unsplash.com/photo-1607427293702-036933bbf746?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cG9sYW5kfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt='instagram images' /></a>
        <a href="https://www.instagram.com/p/CX62jFhs5Ig/" target={'_blank'} rel="noreferrer"><img src="https://www.ephotozine.com/articles/5-easy-ways-to-make-shots-more-interesting-18694/images/lrg_347_1308571221.jpg" alt='instagram images' /></a>
      </div>

      <p>Sign Up For 10% Off Your First Order</p>
      <div className='input-container'>
        <input className='email-input' autoComplete='email' type="email" />
        <button className='sub-button'>Subscribe</button>
      </div>


    </div>
  )
}