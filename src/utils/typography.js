import Typography from "typography"
import stowLakeTheme from "typography-theme-stow-lake"
stowLakeTheme.baseFontSize = '16px'
stowLakeTheme.overrideThemeStyles = ({rhythm}, options) => ({
  'h1, h2, h3, h4, h5, h6': {
    color: 'rgb(226, 224, 224)',
    marginTop: rhythm(1/2)
  },
  'a:hover': {
    color: 'rgb(226, 224, 224)'
  }
})

const typography = new Typography(stowLakeTheme)

export default typography
export const rhythm = typography.rhythm