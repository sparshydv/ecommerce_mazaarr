import React from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'

const Checkout = () => {
  return (
    <>
    <Header />


<div className="page-contaiter">
  {/*Breadcrumb*/}
  <section className="breadcrumb">
    <div className="background-image" data-background="img/bg_img/bg_001.jpg" data-bg-posx="center" data-bg-posy="center" data-bg-overlay={4} />
    <div className="breadcrumb-content">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="breadcrumb-title">Checkout</h1>
            <nav className="breadcrumb-link">
              <span><a href="home.html">Home</a></span>
              <span>Checkout</span>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*Breadcrumb*/}
  {/*Content*/}
  <section className="sec-padding--md">
    <div className="container">
      {/*Alert*/}
      <div className="alert-info" role="alert">
        {/*<a class="button" href="#">View Cart</a>*/}
        Returning customer? <a href="#">Click here to login</a>
      </div>
      {/*Alert*/}
      {/*Alert*/}
      <div className="alert-info" role="alert">
        {/*<a class="button" href="#">View Cart</a>*/}
        Have a coupon? <a href="#">Click here to enter your code</a>
      </div>
      {/*Alert*/}
      <form className="row product-checkout">
        <div className="col-md-6 pr-md-5">
          <div className="product-checkout-customer_details">
            <h3>Billing Details</h3>
            <div className="row billing-fields__field-wrapper">
              <p className="form-field-wrapper col-sm-6">
                <label htmlFor="billing_first_name">First Name&nbsp;<abbr className="required" title="required">*</abbr></label>
                <input className="form-full input--lg" name="billing_first_name" title="First Name" defaultValue placeholder="First Name" required aria-required="true" type="text" />
              </p>
              <p className="form-field-wrapper col-sm-6">
                <label htmlFor="billing_last_name" className>Last Name&nbsp;<abbr className="required" title="required">*</abbr></label>
                <input className="form-full input--lg" name="billing_last_name" id="billing_last_name" placeholder defaultValue type="text" />
              </p>
              <p className="form-field-wrapper col-sm-12">
                <label htmlFor="billing_company" className>Company Name &nbsp;<span className="optional">(optional)</span></label>
                <input className="form-full input--lg" name="billing_company" id="billing_company" placeholder defaultValue type="text" />
              </p>
              <p className="form-field-wrapper col-sm-12">
                <label htmlFor="billing_country" className>Country &nbsp;<abbr className="required" title="required">*</abbr></label>
                <select name="billing_country" id="billing_country" className="form-full input--lg" autoComplete="country" tabIndex={-1} aria-hidden="true">
                  <option value>Select a country…</option>
                  <option value="AX">Åland Islands</option>
                  <option value="AF">Afghanistan</option>
                  <option value="AL">Albania</option>
                  <option value="DZ">Algeria</option>
                  <option value="AS">American Samoa</option>
                  <option value="AD">Andorra</option>
                  <option value="AO">Angola</option>
                  <option value="AI">Anguilla</option>
                  <option value="AQ">Antarctica</option>
                  <option value="AG">Antigua and Barbuda</option>
                  <option value="AR">Argentina</option>
                  <option value="AM">Armenia</option>
                  <option value="AW">Aruba</option>
                  <option value="AU">Australia</option>
                  <option value="AT">Austria</option>
                  <option value="AZ">Azerbaijan</option>
                  <option value="BS">Bahamas</option>
                  <option value="BH">Bahrain</option>
                  <option value="BD">Bangladesh</option>
                  <option value="BB">Barbados</option>
                  <option value="BY">Belarus</option>
                  <option value="PW">Belau</option>
                  <option value="BE">Belgium</option>
                  <option value="BZ">Belize</option>
                  <option value="BJ">Benin</option>
                  <option value="BM">Bermuda</option>
                  <option value="BT">Bhutan</option>
                  <option value="BO">Bolivia</option>
                  <option value="BQ">Bonaire, Saint Eustatius and Saba</option>
                  <option value="BA">Bosnia and Herzegovina</option>
                  <option value="BW">Botswana</option>
                  <option value="BV">Bouvet Island</option>
                  <option value="BR">Brazil</option>
                  <option value="IO">British Indian Ocean Territory</option>
                  <option value="VG">British Virgin Islands</option>
                  <option value="BN">Brunei</option>
                  <option value="BG">Bulgaria</option>
                  <option value="BF">Burkina Faso</option>
                  <option value="BI">Burundi</option>
                  <option value="KH">Cambodia</option>
                  <option value="CM">Cameroon</option>
                  <option value="CA">Canada</option>
                  <option value="CV">Cape Verde</option>
                  <option value="KY">Cayman Islands</option>
                  <option value="CF">Central African Republic</option>
                  <option value="TD">Chad</option>
                  <option value="CL">Chile</option>
                  <option value="CN">China</option>
                  <option value="CX">Christmas Island</option>
                  <option value="CC">Cocos (Keeling) Islands</option>
                  <option value="CO">Colombia</option>
                  <option value="KM">Comoros</option>
                  <option value="CG">Congo (Brazzaville)</option>
                  <option value="CD">Congo (Kinshasa)</option>
                  <option value="CK">Cook Islands</option>
                  <option value="CR">Costa Rica</option>
                  <option value="HR">Croatia</option>
                  <option value="CU">Cuba</option>
                  <option value="CW">Curaçao</option>
                  <option value="CY">Cyprus</option>
                  <option value="CZ">Czech Republic</option>
                  <option value="DK">Denmark</option>
                  <option value="DJ">Djibouti</option>
                  <option value="DM">Dominica</option>
                  <option value="DO">Dominican Republic</option>
                  <option value="EC">Ecuador</option>
                  <option value="EG">Egypt</option>
                  <option value="SV">El Salvador</option>
                  <option value="GQ">Equatorial Guinea</option>
                  <option value="ER">Eritrea</option>
                  <option value="EE">Estonia</option>
                  <option value="ET">Ethiopia</option>
                  <option value="FK">Falkland Islands</option>
                  <option value="FO">Faroe Islands</option>
                  <option value="FJ">Fiji</option>
                  <option value="FI">Finland</option>
                  <option value="FR">France</option>
                  <option value="GF">French Guiana</option>
                  <option value="PF">French Polynesia</option>
                  <option value="TF">French Southern Territories</option>
                  <option value="GA">Gabon</option>
                  <option value="GM">Gambia</option>
                  <option value="GE">Georgia</option>
                  <option value="DE">Germany</option>
                  <option value="GH">Ghana</option>
                  <option value="GI">Gibraltar</option>
                  <option value="GR">Greece</option>
                  <option value="GL">Greenland</option>
                  <option value="GD">Grenada</option>
                  <option value="GP">Guadeloupe</option>
                  <option value="GU">Guam</option>
                  <option value="GT">Guatemala</option>
                  <option value="GG">Guernsey</option>
                  <option value="GN">Guinea</option>
                  <option value="GW">Guinea-Bissau</option>
                  <option value="GY">Guyana</option>
                  <option value="HT">Haiti</option>
                  <option value="HM">Heard Island and McDonald Islands</option>
                  <option value="HN">Honduras</option>
                  <option value="HK">Hong Kong</option>
                  <option value="HU">Hungary</option>
                  <option value="IS">Iceland</option>
                  <option value="IN">India</option>
                  <option value="ID">Indonesia</option>
                  <option value="IR">Iran</option>
                  <option value="IQ">Iraq</option>
                  <option value="IE">Ireland</option>
                  <option value="IM">Isle of Man</option>
                  <option value="IL">Israel</option>
                  <option value="IT">Italy</option>
                  <option value="CI">Ivory Coast</option>
                  <option value="JM">Jamaica</option>
                  <option value="JP">Japan</option>
                  <option value="JE">Jersey</option>
                  <option value="JO">Jordan</option>
                  <option value="KZ">Kazakhstan</option>
                  <option value="KE">Kenya</option>
                  <option value="KI">Kiribati</option>
                  <option value="KW">Kuwait</option>
                  <option value="KG">Kyrgyzstan</option>
                  <option value="LA">Laos</option>
                  <option value="LV">Latvia</option>
                  <option value="LB">Lebanon</option>
                  <option value="LS">Lesotho</option>
                  <option value="LR">Liberia</option>
                  <option value="LY">Libya</option>
                  <option value="LI">Liechtenstein</option>
                  <option value="LT">Lithuania</option>
                  <option value="LU">Luxembourg</option>
                  <option value="MO">Macao S.A.R., China</option>
                  <option value="MK">Macedonia</option>
                  <option value="MG">Madagascar</option>
                  <option value="MW">Malawi</option>
                  <option value="MY">Malaysia</option>
                  <option value="MV">Maldives</option>
                  <option value="ML">Mali</option>
                  <option value="MT">Malta</option>
                  <option value="MH">Marshall Islands</option>
                  <option value="MQ">Martinique</option>
                  <option value="MR">Mauritania</option>
                  <option value="MU">Mauritius</option>
                  <option value="YT">Mayotte</option>
                  <option value="MX">Mexico</option>
                  <option value="FM">Micronesia</option>
                  <option value="MD">Moldova</option>
                  <option value="MC">Monaco</option>
                  <option value="MN">Mongolia</option>
                  <option value="ME">Montenegro</option>
                  <option value="MS">Montserrat</option>
                  <option value="MA">Morocco</option>
                  <option value="MZ">Mozambique</option>
                  <option value="MM">Myanmar</option>
                  <option value="NA">Namibia</option>
                  <option value="NR">Nauru</option>
                  <option value="NP">Nepal</option>
                  <option value="NL">Netherlands</option>
                  <option value="NC">New Caledonia</option>
                  <option value="NZ">New Zealand</option>
                  <option value="NI">Nicaragua</option>
                  <option value="NE">Niger</option>
                  <option value="NG">Nigeria</option>
                  <option value="NU">Niue</option>
                  <option value="NF">Norfolk Island</option>
                  <option value="KP">North Korea</option>
                  <option value="MP">Northern Mariana Islands</option>
                  <option value="NO">Norway</option>
                  <option value="OM">Oman</option>
                  <option value="PK">Pakistan</option>
                  <option value="PS">Palestinian Territory</option>
                  <option value="PA">Panama</option>
                  <option value="PG">Papua New Guinea</option>
                  <option value="PY">Paraguay</option>
                  <option value="PE">Peru</option>
                  <option value="PH">Philippines</option>
                  <option value="PN">Pitcairn</option>
                  <option value="PL">Poland</option>
                  <option value="PT">Portugal</option>
                  <option value="PR">Puerto Rico</option>
                  <option value="QA">Qatar</option>
                  <option value="RE">Reunion</option>
                  <option value="RO">Romania</option>
                  <option value="RU">Russia</option>
                  <option value="RW">Rwanda</option>
                  <option value="ST">São Tomé and Príncipe</option>
                  <option value="BL">Saint Barthélemy</option>
                  <option value="SH">Saint Helena</option>
                  <option value="KN">Saint Kitts and Nevis</option>
                  <option value="LC">Saint Lucia</option>
                  <option value="SX">Saint Martin (Dutch part)</option>
                  <option value="MF">Saint Martin (French part)</option>
                  <option value="PM">Saint Pierre and Miquelon</option>
                  <option value="VC">Saint Vincent and the Grenadines</option>
                  <option value="WS">Samoa</option>
                  <option value="SM">San Marino</option>
                  <option value="SA">Saudi Arabia</option>
                  <option value="SN">Senegal</option>
                  <option value="RS">Serbia</option>
                  <option value="SC">Seychelles</option>
                  <option value="SL">Sierra Leone</option>
                  <option value="SG">Singapore</option>
                  <option value="SK">Slovakia</option>
                  <option value="SI">Slovenia</option>
                  <option value="SB">Solomon Islands</option>
                  <option value="SO">Somalia</option>
                  <option value="ZA">South Africa</option>
                  <option value="GS">South Georgia/Sandwich Islands</option>
                  <option value="KR">South Korea</option>
                  <option value="SS">South Sudan</option>
                  <option value="ES">Spain</option>
                  <option value="LK">Sri Lanka</option>
                  <option value="SD">Sudan</option>
                  <option value="SR">Suriname</option>
                  <option value="SJ">Svalbard and Jan Mayen</option>
                  <option value="SZ">Swaziland</option>
                  <option value="SE">Sweden</option>
                  <option value="CH">Switzerland</option>
                  <option value="SY">Syria</option>
                  <option value="TW">Taiwan</option>
                  <option value="TJ">Tajikistan</option>
                  <option value="TZ">Tanzania</option>
                  <option value="TH">Thailand</option>
                  <option value="TL">Timor-Leste</option>
                  <option value="TG">Togo</option>
                  <option value="TK">Tokelau</option>
                  <option value="TO">Tonga</option>
                  <option value="TT">Trinidad and Tobago</option>
                  <option value="TN">Tunisia</option>
                  <option value="TR">Turkey</option>
                  <option value="TM">Turkmenistan</option>
                  <option value="TC">Turks and Caicos Islands</option>
                  <option value="TV">Tuvalu</option>
                  <option value="UG">Uganda</option>
                  <option value="UA">Ukraine</option>
                  <option value="AE">United Arab Emirates</option>
                  <option value="GB">United Kingdom (UK)</option>
                  <option value="US" selected="selected">United States (US)</option>
                  <option value="UM">United States (US) Minor Outlying Islands</option>
                  <option value="VI">United States (US) Virgin Islands</option>
                  <option value="UY">Uruguay</option>
                  <option value="UZ">Uzbekistan</option>
                  <option value="VU">Vanuatu</option>
                  <option value="VA">Vatican</option>
                  <option value="VE">Venezuela</option>
                  <option value="VN">Vietnam</option>
                  <option value="WF">Wallis and Futuna</option>
                  <option value="EH">Western Sahara</option>
                  <option value="YE">Yemen</option>
                  <option value="ZM">Zambia</option>
                  <option value="ZW">Zimbabwe</option>
                </select>
              </p>
              <p className="form-field-wrapper col-sm-12">
                <label htmlFor="billing_address_1" className>Street address &nbsp;<abbr className="required" title="required">*</abbr></label>
                <input className="form-full input--lg" name="billing_address_1" id="billing_address_1" placeholder="House number and street name" defaultValue type="text" />
              </p>
              <p className="form-field-wrapper col-sm-12">
                <input className="form-full input--lg" name="billing_address_2" id="billing_address_2" placeholder="Apartment, suite, unit etc. (optional)" defaultValue type="text" />
              </p>
              <p className="form-field-wrapper col-sm-12">
                <label htmlFor="billing_city">Town / City&nbsp;<abbr className="required" title="required">*</abbr></label>
                <input className="form-full input--lg" name="billing_city" title defaultValue placeholder required aria-required="true" type="text" />
              </p>
              <p className="form-field-wrapper col-sm-12">
                <label htmlFor="billing_city">State&nbsp;<abbr className="required" title="required">*</abbr></label>
                <select name="billing_state" id="billing_state" className="form-full input--lg" autoComplete="address-level1" data-placeholder tabIndex={-1} aria-hidden="true">
                  <option value>Select an option…</option>
                  <option value="AL">Alabama</option>
                  <option value="AK">Alaska</option>
                  <option value="AZ">Arizona</option>
                  <option value="AR">Arkansas</option>
                  <option value="CA">California</option>
                  <option value="CO">Colorado</option>
                  <option value="CT">Connecticut</option>
                  <option value="DE">Delaware</option>
                  <option value="DC">District Of Columbia</option>
                  <option value="FL">Florida</option>
                  <option value="GA">Georgia</option>
                  <option value="HI">Hawaii</option>
                  <option value="ID">Idaho</option>
                  <option value="IL">Illinois</option>
                  <option value="IN">Indiana</option>
                  <option value="IA">Iowa</option>
                  <option value="KS">Kansas</option>
                  <option value="KY">Kentucky</option>
                  <option value="LA">Louisiana</option>
                  <option value="ME">Maine</option>
                  <option value="MD">Maryland</option>
                  <option value="MA">Massachusetts</option>
                  <option value="MI">Michigan</option>
                  <option value="MN">Minnesota</option>
                  <option value="MS">Mississippi</option>
                  <option value="MO">Missouri</option>
                  <option value="MT">Montana</option>
                  <option value="NE">Nebraska</option>
                  <option value="NV">Nevada</option>
                  <option value="NH">New Hampshire</option>
                  <option value="NJ">New Jersey</option>
                  <option value="NM">New Mexico</option>
                  <option value="NY">New York</option>
                  <option value="NC">North Carolina</option>
                  <option value="ND">North Dakota</option>
                  <option value="OH">Ohio</option>
                  <option value="OK">Oklahoma</option>
                  <option value="OR">Oregon</option>
                  <option value="PA">Pennsylvania</option>
                  <option value="RI">Rhode Island</option>
                  <option value="SC">South Carolina</option>
                  <option value="SD">South Dakota</option>
                  <option value="TN">Tennessee</option>
                  <option value="TX">Texas</option>
                  <option value="UT">Utah</option>
                  <option value="VT">Vermont</option>
                  <option value="VA">Virginia</option>
                  <option value="WA">Washington</option>
                  <option value="WV">West Virginia</option>
                  <option value="WI">Wisconsin</option>
                  <option value="WY">Wyoming</option>
                  <option value="AA">Armed Forces (AA)</option>
                  <option value="AE">Armed Forces (AE)</option>
                  <option value="AP">Armed Forces (AP)</option>
                </select>
              </p>
              <p className="form-field-wrapper col-sm-12">
                <label htmlFor="billing_postcode">ZIP&nbsp;<abbr className="required" title="required">*</abbr></label>
                <input className="form-full input--lg" name="billing_postcode" title defaultValue placeholder required aria-required="true" type="text" />
              </p>
              <p className="form-field-wrapper col-sm-12">
                <label htmlFor="billing_phone">Phone &nbsp;<abbr className="required" title="required">*</abbr></label>
                <input className="form-full input--lg" name="billing_phone" title defaultValue placeholder required aria-required="true" type="text" />
              </p>
              <p className="form-field-wrapper col-sm-12">
                <label htmlFor="billing_email">Email address  &nbsp;<abbr className="required" title="required">*</abbr></label>
                <input className="form-full input--lg" name="billing_email" title defaultValue placeholder required aria-required="true" type="email" />
              </p>
              <p className="form-field-wrapper col-sm-12">
                <label className="woocommerce-form__label" htmlFor="ship_to_different_address">
                  <input id="ship_to_different_address" className name="ship_to_different_address" defaultValue={1} type="checkbox" />
                  <span>&nbsp;Ship to a different address?</span>
                </label>
              </p>
              <p className="form-field-wrapper col-sm-12">
                <label htmlFor="order_comments">Order Notes &nbsp;<span className="optional">(optional)</span></label>
                <textarea name="order_comments" className="form-full" id="order_comments" placeholder="Notes about your order, e.g. special notes for delivery." rows={2} cols={5} defaultValue={""} />
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="product-checkout-review-order">
            <h3>Your Order</h3>
            <div className="order_review">
              <table>
                <thead>
                  <tr>
                    <th className="product-name">Product</th>
                    <th className="product-total">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="cart_item">
                    <td className="product-name">United Colors of Benetton&nbsp;<strong className="product-qty">× 1</strong></td>
                    <td className="product-total"><span className="amount"><span className="Price-currencySymbol">$</span>49.00</span></td>
                  </tr>
                  <tr className="cart_item">
                    <td className="product-name">United Colors of Benetton&nbsp;<strong className="product-qty">× 1</strong></td>
                    <td className="product-total"><span className="amount"><span className="Price-currencySymbol">$</span>49.00</span></td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr className="cart-subtotal">
                    <th>Subtotal</th>
                    <td><span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>98.00</span></td>
                  </tr>
                  <tr className="shipping">
                    <th>Shipping</th>
                    <td data-title="Shipping">
                      <ul className="shipping_method">
                        <li>
                          <input name="shipping_method[0]" data-index={0} id="shipping_method_0_flat_rate2" defaultValue="flat_rate:2" className="shipping_method" defaultChecked="checked" type="radio" />
                          <label htmlFor="shipping_method_0_flat_rate2">Flat rate: <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>10.00</span></label>
                        </li>
                        <li>
                          <input name="shipping_method[0]" data-index={0} id="shipping_method_0_free_shipping3" defaultValue="free_shipping:3" className="shipping_method" type="radio" />
                          <label htmlFor="shipping_method_0_free_shipping3">Free shipping</label>
                        </li>
                        <li>
                          <input name="shipping_method[0]" data-index={0} id="shipping_method_0_local_pickup4" defaultValue="local_pickup:4" className="shipping_method" type="radio" />
                          <label htmlFor="shipping_method_0_local_pickup4">Local pickup: <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">£</span>0.00</span></label>
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="order-total">
                    <th>Total</th>
                    <td><strong><span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>108.00</span></strong> </td>
                  </tr>
                </tfoot>
              </table>
              <div className="checkout-payment">
                <ul>
                  <li>
                    <label>
                      Check payments 
                    </label>
                    <div className="payment_method_cheque">
                      <p>
                        Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.
                      </p>
                    </div>
                  </li>
                </ul>
                <div className="place-order">
                  <div className="terms-and-conditions-wrapper">
                    <p>
                      Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.
                    </p>
                    <p>
                      <label>
                        <input className name="terms" id="terms" type="checkbox" />&nbsp;
                        <span className="woocommerce-terms-and-conditions-checkbox-text">I have read and agree to the website <a href="#" className="woocommerce-terms-and-conditions-link" target="_blank">Terms and Conditions</a></span>
                      </label>
                    </p>
                  </div>
                  <button type="submit" className="btn btn--lg btn--primary btn--full" name="checkout_place_order" id="place_order" value="Place order" data-value="Place Order">Place Order</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </section>
  {/*End Content*/}
</div>



    <Footer />
    </>
  )
}

export default Checkout