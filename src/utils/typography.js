import Typography from "typography"
import typographyTheme from "typography-theme-lincoln"

const typography = new Typography({
  ...typographyTheme,
  includeNormalize: false,
})

// Export helper functions
export const { scale, rhythm, options } = typography
export default typography
