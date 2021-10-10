import React from 'react'
import { FaInstagram, FaTwitter, FaFacebook,  } from 'react-icons/fa'
import * as FaIcons from 'react-icons/fa'

import { 
    FooterContainer, 
    FooterWrap,
    FooterLinkTitle,
    FooterLinksWrapper,
    FooterLink,
    FooterLinksContainer,
    FooterLinkItems,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIconLink,
    SocialIcons,
} from './Footer.elements'


function Footer() {
    return (
        <>
            <FooterContainer>
                <FooterWrap>
                    <FooterLinksContainer>
                        <FooterLinksWrapper>
                        <SocialLogo to='/'>
                                    <FaIcons.FaCoffee />
                                </SocialLogo>

                            <FooterLinkItems>
                                <FooterLinkTitle>Chioto Coffee</FooterLinkTitle>
                                <FooterLink to="/">Home</FooterLink>
                                <FooterLink to="/about">About Us</FooterLink>
                                <FooterLink to="/">Careers</FooterLink>
                            </FooterLinkItems>
                        </FooterLinksWrapper>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>Store</FooterLinkTitle>
                                <FooterLink to="/">Coffee</FooterLink>
                                <FooterLink to="/about">Coffee Makers</FooterLink>
                                <FooterLink to="/">Accessories</FooterLink>
                            </FooterLinkItems>
                        </FooterLinksWrapper>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>Follow Us</FooterLinkTitle>
                                <FooterLink to="/">Instagram</FooterLink>
                                <FooterLink to="/about">Facebook</FooterLink>
                                <FooterLink to="/">Twitter</FooterLink>
                            </FooterLinkItems>
                        </FooterLinksWrapper>
                        <FooterLinksWrapper>
                            <SocialMediaWrap>
                                <SocialIcons>
                                    <SocialIconLink href="//www.facebook.com" target="_blank" aria-label="Facebook">
                                        <FaFacebook />
                                    </SocialIconLink>
                                    <SocialIconLink href="//www.instagram.com" target="_blank" aria-label="Instagram">
                                        <FaInstagram />
                                    </SocialIconLink>
                                    <SocialIconLink href="//www.twitter.com" target="_blank" aria-label="Twitter">
                                        <FaTwitter/>
                                    </SocialIconLink>
                                </SocialIcons>
                            </SocialMediaWrap>
                        </FooterLinksWrapper>
                    </FooterLinksContainer>
                    
                </FooterWrap>
                <WebsiteRights>Chioto Coffee Company © {new Date().getFullYear()} All Rights Reserved </WebsiteRights>


            </FooterContainer>
        </>
    )
}

export default Footer
