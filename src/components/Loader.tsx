import preloaderImg from '@/assets/img/logo/preloader.png'
import Image, { StaticImageData } from 'next/image'

type PropsType = {
  icon?: StaticImageData
  classname?: string
}
const Loader = ({ icon, classname }: PropsType) => {
  return (
    <>
      <div className={`preloader ${classname ?? ''}`}>
        <div className="loading-container">
          <div className="loading" />
          <div id="loading-icon">
            <Image src={icon ?? preloaderImg} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Loader
