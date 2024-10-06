import antfu from '@antfu/eslint-config'

export default antfu(
  {
    formatters: true,
    // Or customize the stylistic rules
    stylistic: {
      indent: 2, // 4, or 'tab'
      quotes: 'single', // or 'double'
    },
  },
)
