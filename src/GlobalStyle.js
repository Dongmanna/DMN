import { createGlobalStyle } from 'styled-components';

const GlobalStyle= createGlobalStyle`
@font-face {
    font-family: 'InkLipquid';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/InkLipquid.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
@font-face {
     font-family: 'NIXGONM-Vb';
     src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/NIXGONM-Vb.woff') format('woff');
     font-weight: normal;
     font-style: normal;
}
    *{
        box-sizing:border-box
    }

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');
    
    :root{
        --grn-1:#9BBA74;
        --grn-2:#638A55;
        --bg-gray:#F2F2F2;
        --hred:#F95335;
        --gray1:#A1A1A1;
    }
    html{
        font-size:14;
    }
`;

export default GlobalStyle;
//사용 : background-color: var(--grn-1);