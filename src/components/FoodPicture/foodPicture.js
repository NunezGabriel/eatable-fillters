/** @jsxImportSource @emotion/react */
import * as Styled from "./styles.js";

function FoodPicture({ size, url, alt = "", ...rest }) {
  return (
    <img {...rest} css={Styled[size]} src={url} alt={alt} />
  )
}

export default FoodPicture;