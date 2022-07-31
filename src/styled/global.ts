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
  
  :root{
    //fonts
    --font:normal 700 ${pixelsToRem(32)}/0 ;
  }

  a{
    text-decoration: none;
  }

  li,ul,ol {
    list-style: none;
  }



`


export default Global