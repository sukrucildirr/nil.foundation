import { memo } from 'react'
import { SvgIconComponent } from '../SvgIconComponent'

const Twitter: SvgIconComponent = ({ className }) => (
  <svg className={className} width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M36.9375 9.42801C35.6651 9.99083 34.3158 10.3605 32.9342 10.5247C34.3904 9.65373 35.4803 8.28303 36.0008 6.66801C34.6342 7.48134 33.1358 8.05134 31.5742 8.35968C30.5252 7.23731 29.1348 6.49295 27.6191 6.24232C26.1034 5.99169 24.5474 6.24883 23.1929 6.97376C21.8385 7.6987 20.7615 8.85082 20.1293 10.251C19.4972 11.6512 19.3454 13.221 19.6975 14.7163C16.926 14.5774 14.2147 13.8572 11.7396 12.6024C9.26456 11.3477 7.08103 9.58642 5.33082 7.43301C4.7113 8.49709 4.38575 9.70672 4.38749 10.938C4.38749 13.3547 5.61749 15.4897 7.48749 16.7397C6.38084 16.7048 5.29854 16.406 4.33082 15.868V15.9547C4.33115 17.5642 4.8881 19.124 5.90723 20.3698C6.92636 21.6155 8.34496 22.4705 9.92249 22.7897C8.89518 23.0681 7.818 23.1091 6.77249 22.9097C7.21727 24.2951 8.08417 25.5067 9.25181 26.3749C10.4194 27.243 11.8294 27.7243 13.2842 27.7513C11.8383 28.8869 10.1828 29.7263 8.41229 30.2216C6.64179 30.7169 4.79103 30.8584 2.96582 30.638C6.15198 32.6871 9.86098 33.7749 13.6492 33.7713C26.4708 33.7713 33.4825 23.1497 33.4825 13.938C33.4825 13.638 33.4742 13.3347 33.4608 13.038C34.8256 12.0516 36.0035 10.8297 36.9392 9.42968L36.9375 9.42801Z'
      fill='#212121'
    />
  </svg>
)

export default memo(Twitter)
