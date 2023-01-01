import React from 'react'

export default function Home() {
  return (
    <div className='home'>
      <div className='homeWallpaperContainer'>
        <img className='homeWallpaper1' src="https://cdn.shopify.com/s/files/1/0371/0749/files/000412400005_1100x.jpg?v=1637615010" alt="wallpaper" />
        <img className='homeWallpaper2' src="https://cdn.shopify.com/s/files/1/0371/0749/files/g_day-blue_750x.png?v=1633341228" alt="wallpaper" />
      </div>
      <img className='homeWallpaper3' src="https://cdn.shopify.com/s/files/1/0371/0749/files/000724550009_c150dfca-a09d-431b-98c6-50be83019b74_2000x.jpg?v=1633351843" alt="wallpaper" />

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
        <a href="https://www.instagram.com/p/CmjcNKMrS7a/" target={'_blank'} rel="noreferrer"><img src="https://scontent.cdninstagram.com/v/t51.29350-15/321180785_460802866255144_2598753441753189743_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=pdX4RQg6TqAAX9C9-IT&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfB7hWiU9rwYrzri2NuJc2zUCuxak8SHZy7EtXedaTqAwQ&oe=63B60F68" alt='instagram images' /></a>
        <a href="https://www.instagram.com/p/ClkvwsDBgqr/" target={'_blank'} rel="noreferrer"><img src="https://scontent.cdninstagram.com/v/t51.29350-15/317394851_868873574424949_2279521613769796170_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=nZDb1ETQzoAAX-my9dz&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfBg6QnqcoXOS3o9k-fg53VOw13CnO73jxn4GRq9EHnatQ&oe=63B58A3F" alt='instagram images' /></a>
        <a href="https://www.instagram.com/p/CdM5CL6uqfO/" target={'_blank'} rel="noreferrer"><img src="https://scontent.cdninstagram.com/v/t51.2885-15/279866685_514310067012347_271086022926494014_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=dOeqHpKNmmEAX-OiMKi&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfAse6ewNS1xDjwBPkK42HTQvv6PfKX4IkmkdIWIRZm6vA&oe=63B6793E" alt='instagram images' /></a>
        <a href="https://www.instagram.com/p/CdJww4tryQV/" target={'_blank'} rel="noreferrer"><img src="https://scontent.cdninstagram.com/v/t51.2885-15/279770764_328185902787247_4740105843725735461_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=FiACh8eokx4AX9pVS5S&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfBTwfEk1VsyPUApEXrV6vYo6WHFTWupt-FtSt4FksZTGA&oe=63B51A69" alt='instagram images' /></a>
      </div>

      <p>Sign Up For 10% Off Your First Order</p>
      <div className='input-container'>
        <input className='email-input' placeholder='Your Email' autoComplete='email' type="email" />
        <button className='sub-button'>Subscribe</button>
      </div>
    </div>
  )
}