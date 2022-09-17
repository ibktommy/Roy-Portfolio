import React from 'react'
import chatUsImage from '../../images/topmost/main/chatUs.png'
import FilterImage from '../../images/topmost/main/filter.png'
import CategoryImage from '../../images/topmost/main/category.png'
import LandingImage from '../../images/topmost/main/landing.png'
import HeroSliderImage from '../../images/topmost/main/heroSlider.png'
import FooterImage from '../../images/topmost/main/footer.png'
import ProductImage from '../../images/topmost/main/product.png'
import GiftOrderImage from '../../images/topmost/main/giftOrder.png'
import CheckOutOneImage from '../../images/topmost/main/checkout-1.png'
import CheckOutTwoImage from '../../images/topmost/main/checkout-2.png'
import CheckOutThreeImage from '../../images/topmost/main/checkout-3.png'

const VirtualDesign = () => {
  return (
    <div className="topmost-virtual">
      <h4>Visual Design</h4>

      <div className="topmost-virtual_content-column flex">
        <div className="topmost-virtual_content-column_text">
          <h5>
            For a target market where Topmost is operating , social media still serves as the primary place for making online purchases
          </h5>
          <p>
            Platforms like Instagram, Twitter, Tiktok and most importantly Whatsapp does not just help publicize a business but serve as the source of transactions. Revealed during the user research, it was decided to include a direct Whatsapp link on the landing page of Topmost so that users, especially mobile users of our platform can with a click send us private messages and place orders to their own convenience on Whatsapp. <br />Nigerian society places importance on speaking with a vendor for assurance and delibrations before payments, this level of confidence is what we have given our users by providing a Whatsapp link. It can also be used for inquiries, complains or other interests of the users.
          </p>
        </div>
        <div className="topmost-virtual_content-column_image">
          <img src={chatUsImage} alt="col-img" />
        </div>
      </div>

      <div className="topmost-virtual_filter-section">
        <div className="topmost-virtual_filter-section_text">
          <h5>
            A well detailed, user friendly filter box
          </h5>

          <p>
            The old site of Topmost allows for users to apply a filter to ease product serach but, this filter box leaves out a lot of options for the users it is also scattered, rough and not user friendly. I redesigned the filter, organized its content and added other filter options including;
          </p>

          <ul>
            <li>
              <p>Filter by size</p>
            </li>
            <li>
              <p>Filter by star ratings</p>
            </li>
            <li>
              <p>Filter by brands</p>
            </li>
            <li>
              <p>Filter by available discount offers</p>
            </li>
          </ul>
          <p>
            The price filter bar was made prominent too.
          </p>
          <p>
            A filter allows for a smooth user experience, allowing users to find the product of their chioce with little effort without having to use the general search bar and scrolling through lots of search results before finding the desired type of product. Reducing the users product serach time.
          </p>
        </div>
        <div className="topmost-virtual_filter-section_image">
          <div className="image-container">
            <img src={FilterImage} alt="filter-bar" />
            <img src={CategoryImage} alt="category-page" />
          </div>
        </div>
      </div>

      <div className="topmost-virtual_promotion">
        <div className="topmost-virtual_promotion-text">
          <h5>
            Promotional Hero slider
          </h5>
          <p>
            Bringing onformation to users is one of the approaches taken in the redesign of Topmost, previously, users on entering the site have no information on maybe there a products with special offers like price deductions or free delivery unless they stumble upon a product with it while shopping.<br />
            A heroslider that displays promotional text and imagery was designed on the homepage so that users can check out all the latest shopping information with neccessarily searching for them. This is part of the effort to cut down the Bounce rate the website previously has.
          </p>
        </div>
        <div className="topmost-virtual_promotion-image">
          <img src={LandingImage} alt="landing" />
          <img src={HeroSliderImage} alt="heroSlider" />
        </div>
      </div>

      <div className="topmost-virtual_footer">
        <div className="topmost-virtual_promotion-text">
          <h5>
            The old pages lacked a footer, building one for additional value by displaying relevant information for overall usability.
          </h5>
          <p>
            A footer contains the copyright links, privacy policy, cookie policies, social media links and icons among other things such as contact information. <br />
            Users can easily refer to the footer for return policies, it give a sense of transparency and intuition for the website. Footers increase the user experience and credibility of the site. They refer to it for navigational purposes.
          </p>
        </div>
        <div className="topmost-virtual_promotion-image">
          <img src={LandingImage} alt="landing" />
          <img src={FooterImage} alt="footerImage" />
        </div>
      </div>

      <div className="topmost-virtual_payment">
        <div className="topmost-virtual_payment-text">
          <h5>
            Due to high abandonment rate at the checkout stage, the payment system has been redesigned with a primary and secondary button system.
          </h5>
          <p>
            The product page displays detailed information about the product and all add ons, it is when the user decides if they want the product or not. Previously they can only add the product to cart and keep shopping but now a secondary CTA has been included to prompt the user to immediately buy the product without having to add it to cart. <br />
            The goal is ensure fast checkout process for Topmost products, the goods can be purchased on the spot and the user will resume shopping after its done.
          </p>
        </div>
        <div className="topmost-virtual_payment-image">
          <div className="image-container flex">
            <img src={ProductImage} alt="productImage" />
          </div>
        </div>
      </div>

      <div className="topmost-virtual_order">
        <div className="topmost-virtual_order-text">
          <h5>
            Not all customers are purchasing for themselves or business purposes, some of our users are making orders for loved ones, which means the price tag on the packaging slip won’t be needed.
          </h5>

          <p>
            With that in mind, a special checkbox was included in the design system for users to apply if they will like the product to be delivered as a gift. Thereby, the price tag will not be put inside the pacakaging but be replaced by special gift cards. <br />
            Some users find it judgemental if they present gifts with prices on them, considering that it maybe seen as too low in value or high in value to be considered a show off. This feature will make our plaform a number choice for gift purchases and delivery.
          </p>
        </div>
        <div className="topmost-virtual_order-image">
          <div className="image-container">
            <img src={GiftOrderImage} alt="giftOrderImage" />
          </div>
        </div>
      </div>

      <div className="topmost-virtual_checkout">
        <div className="topmost-virtual_checkout-text">
          <h5>
            Analyzing the needed checkout pattern for Topmost being a new online platform I allowed a popular system of allowing users use the platform without having need to sign in.
          </h5>

          <p>
            Users can access almost all of the features of the platform, they can even add items to cart, edit the order details. But will not be able to checkout withou signing in. <br />
            Meanwhile provision has also been made for users to checkout as guests this will allow yhe company not to save their information or save them on the system as registered users. The downside to this is that they will have to always enter their information everytime an order is placed on Topmost.
            To relief users of the stress of having to checkout as guest or entering their email and creating passwords before checking out from the platform. Social accounts has been introduced so users can sign in immediately with their Google accounts, Facebook and Apple accounts, all by a sinle click.
            To this end,to stop the abadonement rate during checkout experienced by Topmost on the platform. <br />
            The range of design solutions put in place to reduce the checkout time is important for the users to have a beautiful experience and continue visiting our site for ecommerce.
          </p>
        </div>
        <div className="topmost-virtual_checkout-image">
          <div className="image-container">
            <img src={CheckOutOneImage} alt="checkout-1" />
            <img src={CheckOutTwoImage} alt="checkout-2" />
            <img src={CheckOutThreeImage} alt="checkout-3" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default VirtualDesign