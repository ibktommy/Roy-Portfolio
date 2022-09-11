import React from 'react'
import chatUsImage from '../../images/topmost/main/chatUs.png'
import FilterImage from '../../images/topmost/main/filter.png'
import CategoryImage from '../../images/topmost/main/category.png'

const VirtualDesign = () => {
  return (
    <div className="topmost-virtual">
      <h4>Virtual Design</h4>

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
            <li>Filter by size</li>
            <li>Filter by star ratings</li>
            <li>Filter by brands</li>
            <li>Filter by available discount offers</li>
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
    </div>
  )
}

export default VirtualDesign