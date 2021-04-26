// https://github.com/diegohaz/arc/wiki/Atomic-Design#templates
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { size } from 'styled-theme'
import wave from '../../atoms/background/wave.svg'

const Wrapper = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 4fr 1fr;
  grid-column-gap: 0em;
  grid-row-gap: 0px;


  // display: flex;
  // flex-direction: column;
  // padding-top: 3.75rem;
  // min-height: 100vh;
  // box-sizing: border-box;
  // @media screen and (max-width: 640px) {
  //   padding-top: 3.25rem;
  // }
`

const Head = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
`
const Mainheader=styled.header`
  grid-column: 1 / 3;
  grid-row: 1 ;
  background: url('http://www.autodatz.com/wp-content/uploads/2017/05/Old-Car-Wallpapers-Hd-36-with-Old-Car-Wallpapers-Hd.jpg');
	text-align: center;
	width: 100%;
	height: auto;
	background-size: cover;
	background-attachment: fixed;
	position: relative;
	overflow: hidden;
	border-radius: 0 0 85% 85% / 30%;
  margin:0px;
  border:1px solid #000
  
    // width:100%;
    // justify-content: center;
    // align-items: center;
    // height: 400px;
    // min-height: 105px;
    // background-image: url(https://images.unsplash.com/photo-1442606383395-175ee96ed967?q=80&fm=jpg&s=5c8c74be9bc91b47c79a1aaf92264be5);
    // background-size: cover;
    // background-position: center;
    // overflow: hidden;
    
` 
const Overlay = styled.div`
   width: 100%;
	height: 100%;
	padding: 0px;
  margin:0px;
	color: #FFF;
	text-shadow: 1px 1px 1px #333;
  background-image: linear-gradient( 135deg, #9f05ff69 10%, #fd5e086b 100%);
` 

const SectionOverlay=styled.section`
   margin: 0px;
   padding: 16px;
  .menuItems {
    list-style: none;
    display: flex;
    justify-content:center;
    li {
      margin: 20px;

      a {
        text-decoration: none;
        color: #8f8f8f;
        font-size: 24px;
        font-weight: 400;
        transition: all 0.5s ease-in-out;
        position: relative;
        text-transform: uppercase;

        &::before {
          content: attr(data-item);
          transition: 0.5s;
          color: #8254ff;
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          width: 0;
          overflow: hidden;
        }

        &:hover {
          &::before {
            width: 100%;
            transition: all 0.5s ease-in-out;
          }
        }
      }
    }
  }

`
const Panel =styled.section`
  grid-column: 2 ;
  grid-row: 2 ;
 
  border:1px solid #000
` 
const Content = styled.section`
  grid-column: 1  ;
  grid-row: 2 ;
  border:1px solid #000

  // width: 100%;
  // box-sizing: border-box;
  // margin: 2rem auto;
  // max-width: ${size('maxWidth')};
`
const MainFooter =styled.footer`
  grid-column: 1 / 3;
  grid-row: 3 ;
  display: grid;
  grid-template-rows: 1fr 1fr ;
  border:1px solid #000
  background-color:#26272b;
  padding:20px 0 20px;
  font-size:15px;
  line-height:24px;
  color:#737373;
  bottom:0;
`
const Container=styled.div`
     border:0px solid #fff;
     display:grid;
     grid-template-columns:  100px 1f 1f;
    ul{   list-style:none; }
`
const About=styled.div`
      grid-column :1;
      display:flex;
      flex-wrap:wrap;
`
const Category=styled.div`
     grid-column :2;
     
`
const QuickLinks=styled.div`
    grid-column:3;
`
const UserInfo= styled.div`
     border:0px solid #fff;
     display:grid;
     grid-template-columns: 1f 1f 
     list-style:none;
`
const SocialIcons=styled.div`
  padding-left:0;
  margin-bottom:0;
  ul{list-style:none};
`






const Footer = styled.footer`
  margin-top: auto;
`
const Hero = styled.section``
const Sponsor = styled.section``
const Bg = styled.div`
    background: url(${wave});
`


const ContactTemplate = ({header, hero, sponsor, children,footer, ...props}) => {
  
  return (
    <Wrapper {...props}> 
     
            <Mainheader>
                  <Overlay>
                      {/* <h1>Simply The Best</h1>
                      <h3>Reasons for Choosing US</h3>
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero nostrum quis, odio veniam itaque ullam debitis qui magnam consequatur ab. Vero nostrum quis, odio veniam itaque ullam debitis qui magnam consequatur ab.</p>
                        <br/> */}
                        
                        <SectionOverlay>
                              <nav>
                                <ul class="menuItems">
                                  <li><a href='#' data-item='Home'>Home</a></li>
                                  <li><a href='#' data-item='About'>About</a></li>
                                  <li><a href='#' data-item='Projects'>Projects</a></li>
                                  <li><a href='#' data-item='Blog'>Blog</a></li>
                                  <li><a href='#' data-item='Contact'>Contact</a></li>
                                </ul>
                              </nav>

                      </SectionOverlay>

                      <button>READ MORE</button>


		               </Overlay>
            </Mainheader>
            
            <Panel> panel</Panel>
            
            <Content>content</Content> 

            <MainFooter>
                     <Container>
                              <About>
                                   <h6>About</h6>
                                   <p class="text-justify">Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> 
                                   is an initiative  to help the upcoming programmers with the code. 
                                   Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple. 
                                   We will help programmers build up concepts in different programming languages that include C, 
                                   C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.
                                   </p>
                              </About>

                               <Category>
                                    <h6>Categories</h6>
                                    <ul class="footer-links">
                                      <li><a href="http://scanfcode.com/category/c-language/">C</a></li>
                                      <li><a href="http://scanfcode.com/category/front-end-development/">UI Design</a></li>
                                      <li><a href="http://scanfcode.com/category/back-end-development/">PHP</a></li>
                                      <li><a href="http://scanfcode.com/category/java-programming-language/">Java</a></li>
                                      <li><a href="http://scanfcode.com/category/android/">Android</a></li>
                                      <li><a href="http://scanfcode.com/category/templates/">Templates</a></li>
                                    </ul>
                              </Category>

                               <QuickLinks>
                                    <h6>Quick Links</h6>
                                    <ul class="footer-links">
                                      <li><a href="http://scanfcode.com/about/">About Us</a></li>
                                      <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
                                      <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
                                      <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
                                      <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
                                    </ul>
                              </QuickLinks>



                     </Container>

                     <UserInfo>
                             <div class="col-md-8 col-sm-6 col-xs-12">
                                  <p class="copyright-text">Copyright &copy; 2017 All Rights Reserved by 
                                   <a href="#">Scanfcode</a>.
                                  </p>
                              </div>

                               <SocialIcons>
                                <div class="col-md-4 col-sm-6 col-xs-12">
                                  <ul class="social-icons">
                                    <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
                                    <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
                                    <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
                                    <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>   
                                  </ul>
                                </div>
                                </SocialIcons>

                     </UserInfo>

            </MainFooter>
        
    </Wrapper>
  )
}

ContactTemplate.propTypes = {
  header: PropTypes.node.isRequired,
  hero: PropTypes.node,
  sponsor: PropTypes.node,
  footer: PropTypes.node.isRequired,
 //  children: PropTypes.any.isRequired,
  Bg:PropTypes.node
}

export default ContactTemplate
