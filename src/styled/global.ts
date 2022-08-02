import { createGlobalStyle } from "styled-components";

function pixelsToRem(...values:Array<number>) {
  return values.reduce((a, i) => (a += i / 16 + `rem `), "").trim();
}

const Global = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: ${pixelsToRem(16)};    
  }
  body{
    display: flex;
    justify-content: center;
    color: var(--color-text);
  }
  #root{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
  }
  :root{
    //fonts
    --font1:normal 700 ${pixelsToRem(40)}/${pixelsToRem(48)} 'Dancing Script', cursive, sans-serif;
    --font2:normal 700 ${pixelsToRem(32)}/${pixelsToRem(24)} 'Abel', sans-serif;
    //small
    --small:normal 400 ${pixelsToRem(16)}/${pixelsToRem(16)} 'Abel', sans-serif;




    //colors
    --color-text:#222;
    //grey
    --grey-BG:#f8f8f8;
    --grey:#E7E7E7;
    --greyDark:#a0a0a0;
  }

  a{
    text-decoration: none;
  }

  li,ul,ol {
    list-style: none;
  }

`


export default Global