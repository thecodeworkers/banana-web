import { fallbackRestUrl } from '@utils/path'

const Fonts = ({ normal, bold, light, medium }) => (
  <style global jsx>{`
    @font-face {
      font-family: 'NormalFont';
      src: url('${fallbackRestUrl}${normal?.url}');
    }
    @font-face {
      font-family: 'BoldFont';
      src: url('${fallbackRestUrl}${bold?.url}');
    }
    @font-face {
      font-family: 'LightFont';
      src: url('${fallbackRestUrl}${light?.url}');
    }
    @font-face {
      font-family: 'MediumFont';
      src: url('${fallbackRestUrl}${medium?.url}');
    }`}
  </style>
)

export default Fonts
