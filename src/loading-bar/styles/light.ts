import type { Theme } from '../../_mixins'
import type { ThemeCommonVars } from '../../_styles/common'
import { commonLight } from '../../_styles/common'

function self(vars: ThemeCommonVars) {
  const { primaryColor, errorColor } = vars
  return {
    colorError: errorColor,
    colorLoading: primaryColor,
    height: '2px'
  }
}

export type LoadingBarThemeVars = ReturnType<typeof self>

const loadingBarLight: Theme<'LoadingBar', LoadingBarThemeVars> = {
  name: 'LoadingBar',
  common: commonLight,
  self
}

export default loadingBarLight
export type LoadingBarTheme = typeof loadingBarLight
