import { css } from "@emotion/react";
import { shadow } from "../../styles/colors";

export const sm = css`
width: 62px;
height: 62px;
object-fit: cover;
border-radius: 100%;
box-shadow: ${shadow.image};
`;

export const md = css`
width: 130px;
height: 130px;
object-fit: cover;
border-radius: 100%;
box-shadow: ${shadow.image};
`;

export const lg = css`
width: 241px;
height: 241px;
object-fit: cover;
border-radius: 100%;
box-shadow: ${shadow.image};
`;
