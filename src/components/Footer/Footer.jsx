import {
  FooterWrapper,
  WrapperName,
  TextName,
  Text,
  FooterMain,
  ListTextInf,
  WrapperFirstList,
  ListRouts,
  TextRous,
  ListNetWork,
  WrapperRouters,
  TextSubSlet,
  TextOffers,
  TextBtn,
  BtnLogOut,
  WrapperInp,
  MailInp,
  InputMod,
  WrapperLastFooter,
  ListNetWorkLast,
  WrapperInpBtn,
  socialMediaFace,
  socialMediaInst,
  socialMediaYout,
  socialMediaTwit,
} from './Footer.styled';
import { BsFacebook, BsInstagram, BsYoutube, BsTwitter } from 'react-icons/bs';
import { Logo } from '../LogoFooter/LogoFooter';
const Footer = () => {
  const uppPageHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <FooterMain>
      <FooterWrapper>
        <WrapperFirstList>
          <WrapperName>
            <Logo />
            <TextName>So Yummy</TextName>
          </WrapperName>
          <ListTextInf>
            <li>
              <Text>Database of recipes that can be replenished </Text>
            </li>
            <li>
              <Text>Flexible search for desired and unwanted ingredients</Text>
            </li>
            <li>
              <Text>Ability to add your own recipes with photos </Text>
            </li>
            <li>
              <Text>Convenient and easy to use</Text>
            </li>
          </ListTextInf>
        </WrapperFirstList>
        <WrapperRouters>
          <ListRouts>
            <li>
              <TextRous to="/categories" onClick={uppPageHandler}>
                Categories
              </TextRous>
            </li>
            <li>
              <TextRous to="/add" onClick={uppPageHandler}>
                Add recipes
              </TextRous>
            </li>
            <li>
              <TextRous to="own-recipes" onClick={uppPageHandler}>
                My recipes
              </TextRous>
            </li>
            <li>
              <TextRous to="/favorite" onClick={uppPageHandler}>
                Favorite
              </TextRous>
            </li>
            <li>
              <TextRous to="/shopping-list" onClick={uppPageHandler}>
                Shopping list
              </TextRous>
            </li>
          </ListRouts>
          <ListNetWork>
            <li>
              <socialMediaFace
                style={{ fill: '#8BAA36', width: '20px', height: '20px' }}
              />
            </li>
            <li>
              <socialMediaInst
                style={{ fill: '#8BAA36', width: '20px', height: '20px' }}
              />
            </li>
            <li>
              <socialMediaYout
                style={{ fill: '#8BAA36', width: '20px', height: '20px' }}
              />
            </li>
            <li>
              <socialMediaTwit />
            </li>
          </ListNetWork>
        </WrapperRouters>
        <WrapperLastFooter>
          <TextSubSlet>Subscribe to our Newsletter</TextSubSlet>
          <TextOffers>
            Subscribe up to our newsletter. Be in touch with latest news and
            special offers, etc.
          </TextOffers>{' '}
          <WrapperInpBtn>
            <form>
              <WrapperInp>
                <MailInp />
                <InputMod type="text" placeholder="Enter your email address" />
              </WrapperInp>
            </form>
            <BtnLogOut>
              <TextBtn>Subscribe</TextBtn>
            </BtnLogOut>
          </WrapperInpBtn>
          <ListNetWorkLast>
            <li>
              <BsFacebook />
            </li>
            <li>
              <BsInstagram />
            </li>
            <li>
              <BsYoutube />
            </li>
            <li>
              <BsTwitter />
            </li>
          </ListNetWorkLast>
        </WrapperLastFooter>
      </FooterWrapper>
      <div className="light-footer">
        <p className="light-year">© 2023 All Rights Reserved.</p>
        <p className="light-text">Terms of Service</p>
      </div>
    </FooterMain>
  );
};

export default Footer;
