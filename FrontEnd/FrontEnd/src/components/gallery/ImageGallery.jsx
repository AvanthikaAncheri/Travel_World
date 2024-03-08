import React from 'react'
import Masonry, { ResponsiveMasonry} from 'react-responsive-masonry'
import gallery from './Image-gallery'

const ImageGallery = () => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{350:1,768:3,992:4}}>
          <Masonry gutter='1rem'>
             {
                gallery.map((item,index)=>(
                    <img src={item} key={index} alt="" style={{width:"100%",display:"block",padding:"10px",borderRadius:"30px"}} className='masonry'/>
                ))
             }
          </Masonry>
    </ResponsiveMasonry>
  )
}

export default ImageGallery