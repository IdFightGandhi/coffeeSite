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
    FooterBottomContainer,
    FooterBottomWrap,
    FooterBottomMenu,
    FooterBottomItem
} from './Footer.elements'


function Footer() {
    return (
        <>
            <FooterContainer id="footer-container">
                <FooterWrap id="footer-wrap">
                    <FooterLinksContainer id="footer-links-container">
                        <FooterLinksWrapper id="footer-links-wrap">
                        <SocialLogo to='/'>
                                    <FaIcons.FaCoffee />
                                </SocialLogo>

                            <FooterLinkItems id="footer-link-column1">
                                <FooterLinkTitle>Chioto Coffee</FooterLinkTitle>
                                <FooterLink to="/">Home</FooterLink>
                                <FooterLink to="/about">About Us</FooterLink>
                                <FooterLink to="/">Careers</FooterLink>
                            </FooterLinkItems>
                        </FooterLinksWrapper>
                        <FooterLinksWrapper>
                            <FooterLinkItems id="footer-link-column2">
                                <FooterLinkTitle>Store</FooterLinkTitle>
                                <FooterLink to="/">Coffee</FooterLink>
                                <FooterLink to="/about">Coffee Makers</FooterLink>
                                <FooterLink to="/">Accessories</FooterLink>
                            </FooterLinkItems>
                        </FooterLinksWrapper>
                        <FooterLinksWrapper>
                            <FooterLinkItems id="footer-link-column3">
                                <FooterLinkTitle>Follow Us</FooterLinkTitle>
                                <FooterLink to="/">Instagram</FooterLink>
                                <FooterLink to="/about">Facebook</FooterLink>
                                <FooterLink to="/">Twitter</FooterLink>
                            </FooterLinkItems>
                        </FooterLinksWrapper>
                        <FooterLinksWrapper id="footer-link-column-socialmedia">
                            <SocialMediaWrap>
                                <SocialIcons id="social-media-icons">
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
                <FooterBottomContainer id="footer-bottom">
                    <FooterBottomWrap>
                        <FooterBottomMenu id="footer-bottom-menu">
                            <FooterBottomItem>About Us</FooterBottomItem>
                            <FooterBottomItem>Our Story</FooterBottomItem>
                            <FooterBottomItem>Contact Us</FooterBottomItem>
                        </FooterBottomMenu>
                        <WebsiteRights>Chioto Coffee Company © {new Date().getFullYear()} All Rights Reserved </WebsiteRights>
                    </FooterBottomWrap>
                </FooterBottomContainer>

            </FooterContainer>
        </>
    )
}

export default Footer
