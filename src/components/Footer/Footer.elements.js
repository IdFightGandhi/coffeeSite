import styled from 'styled-components'
import {Link} from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'

export const FooterContainer = styled.footer`
background-color: black;
margin: 0;
padding: 0;
margin-left: 7em;
margin-top: auto;
min-height: 100%;
display:flex;
flex-direction: column;
align-items: center;
`

export const FooterTitle = styled.h1`
font-size: 25px;
color: #fff;
padding: 0px 12px
`
export const FooterWrap = styled.div`
padding:36px 12px;
display: flex;
flex-direction: row;
/* justify-content: center; */
max-width: 1100px;
margin: 0 auto;
border-bottom: 1px solid grey;

@media screen and (max-width:420px) {
    flex-direction: column;
}
`

export const FooterLinksContainer= styled.div`
display: flex;
justify-content: center;
padding:0px 50px;

@media screen and (max-width: 820px) {
    padding-top: 24px;
}
`

export const FooterLinksWrapper = styled.div`
display: flex;

@media screen and (max-width: 820px) {
    flex-direction: column;
}
`

export const FooterLinkItems = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
margin: 8px;
text-align: left;
width: 160px;
box-sizing: border-box;
color: #fff;

@media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
    flex-direction: column;
}
`
export const FooterLinkTitle = styled.h1`
font-size:20px;
margin-bottom: 16px;
`
export const FooterLink = styled(Link)`
color:#fff;
text-decoration: none;
margin-bottom: 0.5rem;
font-size: 14px;

&:hover {
    color:gold;
    transition: 0.3s ease-out;
    text-decoration: underline;
}
`
export const SocialMedia = styled.section `
max-width: 1000px;
width: 100%;
`

export const SocialMediaWrap = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
max-width: 1100px;
margin: 40px auto 0 auto;

@media screen and (max-width:820px) {
    flex-direction: column;
}

`

export const SocialLogo = styled(Link)`
color:#fff;
justify-self: start;
cursor: pointer;
text-decoration: none;
font-size:1.5rem;
display: flex;
align-items: center;
padding-right:32px;
font-weight: bold;

&:hover {
    color:gold;
    transition: 0.3s ease-out;
    text-decoration: underline;
}

`



export const SocialIcons = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 240px;


`

export const SocialIconLink = styled.a`
font-size: 24px;
color:#fff;

&:hover {
    color:gold;
    transition: 0.3s ease-out;
    text-decoration: underline;
}
`

export const FooterBottomContainer = styled.section `
display: block;
font-size:14px;
line-height: 21px;
align-items: center;
box-sizing: border-box;
color: #888;
`

export const FooterBottomWrap = styled.div`
display: flex;
align-items: center;
`

export const WebsiteRights = styled.small`
color:#fff;
margin: 16px, 16px, 8px, 0px;
font-size: 14px;
display: flex;
max-width: 50%;
position: relative;
text-align: right;
`
export const FooterBottomMenu = styled.div`
display: flex;
padding: 0px, 10px;
justify-content: start;
max-width: 50%;
text-align: left;

`

export const FooterBottomItem = styled.ul`
color:#d7d7d7;
position: relative;
text-transform: uppercase;
letter-spacing: 1px;
font-size: 1.125rem;
width: auto;
margin: 0 20px 0 0;

&:hover {
    color:gold;
    transition: 0.3s ease-out;
    text-decoration: underline;
    cursor: pointer;
}


`


