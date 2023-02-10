import React from 'react'
import img1 from '../images/images.png'
import img2 from '../images/images2.png'
import img3 from '../images/images3.png'
import img4 from '../images/images4.png'

export default function footer() {
  return (
    <footer>
        <p> copyright &copy; www.playwithtext.com|| all rights reserved</p>
        <div className="social gap-2 my-2"> 
        <button type="button" className="button btn btn-danger btn-lg btn-block d-flex"><img src={img1} alt="logo"/><a href="https://www.google.com"target="_blank" className="link">GOOGLE</a></button>
        <button type="button" className="button btn btn-primary btn-lg btn-block d-flex"><img src={img2} alt="logo"/> <a href="https://www.facebook.com"target="_blank" className="link">FACEBOOK</a></button>
        <button type="button" className="button btn btn-info btn-lg btn-block d-flex"><img src={img3} alt="logo"/> <a href="https://in.linkedin.com/"target="_blank" className="link">LINKDIN</a></button>
        <button type="button" className="button btn btn-warning btn-lg btn-block d-flex"><img src={img4} alt="logo"/> <a href="https://github.com"target="_blank" className="link">GITHUB</a></button>
        </div>
    </footer>
  )
}
