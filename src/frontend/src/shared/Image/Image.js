import React from 'react'
import { Image as CloudinaryImage, Transformation } from 'cloudinary-react'
import theme from '../../Theme/Theme'

function Image ({ imageUrl, type, onClickHandler, className, alt }) {
  const getTransformation = (type) => {
    let transformation = ''
    switch (type) {
      case 'profileAvatar':
        transformation = (
          <Transformation
            height={theme.avatar.profileAvatar}
            width={theme.avatar.profileAvatar}
            crop="fill"
            quality="100"
            // fetchFormat="auto"  - because of this some artifacts may appear
            drp="auto"
          />
        )
        break

      case 'smallAvatar':
        transformation = (
          <Transformation
            height={theme.avatar.small}
            width={theme.avatar.small}
            crop="fill"
            radius="max"
            quality="100"
            drp="auto"
          />
        )
        break

      case 'extraSmallAvatar':
        transformation = (
          <Transformation
            height={theme.avatar.extraSmall}
            width={theme.avatar.extraSmall}
            crop="fill"
            radius="max"
            quality="100"
            drp="auto"
          />
        )
        break

      case 'extraLargeAvatar':
        transformation = (
          <Transformation
            height={theme.avatar.extraLarge}
            width={theme.avatar.extraLarge}
            crop="fill"
            radius="max"
            quality="100"
            drp="auto"
          />
        )
        break

      case 'postImg':
        transformation = (
          <Transformation
            width="800"
            crop="fill"
            quality="90"
            drp="auto"
          />
        )
        break

      default:
        break
    }
    return transformation
  }

  return (
    <CloudinaryImage
      publicId={imageUrl}
      onClick={onClickHandler}
      className={className}
      crop="crop"
      key={imageUrl}
      alt={alt}
    >
      {getTransformation(type)}
    </CloudinaryImage>
  )
}

export default Image