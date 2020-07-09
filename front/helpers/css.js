const glob = require("glob")

export const getElementUiStylesFiles = folder => {
  const css = []
  glob(`${folder}/node_modules/element-ui/lib/theme-chalk/*.css`, function (er, files) {
    files.forEach(file => {
      css.push(file.replace('/home/node/app/node_modules/', ''))
    })
    console.log(css)
    return css
  })
}
