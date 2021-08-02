import React from 'react'
import StyleMainLeft from './styleMainLeft'

function MainRight () {
  const classes = StyleMainLeft()
  const bull = <span className={classes.bullet}>•</span>

  return (
    <div className={classes.root}>
      orem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor varius placerat. Duis elementum mattis dui,
      in egestas massa hendrerit eget. Cras commodo felis erat, laoreet blandit leo hendrerit quis. Morbi diam justo,
      aliquam a dictum aliquam, lobortis quis sapien. Morbi luctus laoreet justo eu facilisis. Maecenas sollicitudin
      feugiat dui, et feugiat mauris efficitur eu. Curabitur posuere eros sed tincidunt tempor. Sed massa lectus,
      consequat et maximus eu, eleifend tempor justo. Curabitur in dapibus nibh. Vivamus sed risus eros. Pellentesque
      habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean condimentum mattis turpis
      ac elementum. Etiam eu orci condimentum, placerat dui ac, scelerisque sem. Sed tincidunt id risus sit amet
      tincidunt. Nulla sed metus ex. Phasellus libero tortor, iaculis quis accumsan ac, facilisis in leo
    </div>
  )
}

export default MainRight