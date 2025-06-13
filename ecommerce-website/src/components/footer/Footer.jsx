import ServiceCard from "./ServiceCard.jsx";
import {FaShippingFast, FaYoutube} from "react-icons/fa";
import {TbPackageImport} from "react-icons/tb";
import {MdOutlinePayment, MdSupportAgent} from "react-icons/md";
import {IoGiftSharp} from "react-icons/io5";
import {HiOutlineChatAlt2} from "react-icons/hi";
import {Link} from "react-router-dom";
import {Button, Checkbox, FormControlLabel} from "@mui/material";
import {FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP} from "react-icons/fa6";
import SocialLink from "./SocialLink.jsx";

export default function Footer(){
    return <footer className={"py-6 !bg-white border-t border-t-gray-200"}>
        <div className={"container"}>
           <div className={"flex items-center justify-center gap-10 columns-5 pt-4 pb-10"}>
              <ServiceCard icon={FaShippingFast} title={"Free Shipping"} details={"For all orders over ₹2000"}/>
               <ServiceCard icon={TbPackageImport} title={"30 Days Returns"} details={"For an exchange product"}/>
               <ServiceCard icon={MdOutlinePayment} title={"Secured Payment"} details={"Payments card accepted"}/>
               <ServiceCard icon={IoGiftSharp} title={"Special Gifts"} details={"On your first order"}/>
               <ServiceCard icon={MdSupportAgent} title={"Support 24/7"} details={"Contact us anytime"}/>
           </div>
            <hr className={"text-primary"}/>
            <div className={"footer flex columns-4 justify-center gap-15 py-10"}>
               <div className={"flex flex-col gap-3 border-r-1 border-r-gray-300 px-10"}>
                   <h3 className={"text-[16px] font-[500]"}>Contact Us</h3>
                   <p className={"text-[13px] text-gray-500 font-[500]"}>Ecom Shop - XYZ Pvt Limited - Union Trade Center, ABC</p>
                   <Link to={"/"}>
                       <p className={"text-[13px] text-gray-500 font-[500] link"}>support@onestop.com</p>
                   </Link>
                   <p className={"text-primary font-[600]"}>(+91) 1111-122-222</p>
                   <div className={"flex items-center gap-3"}>
                       <HiOutlineChatAlt2 className={"text-primary"} size={"3rem"}/>
                       <p className={"text-[14px] font-[500]"}>Online Chat <br/>Get Expert Help</p>
                   </div>
               </div>
                <div className={"flex flex-col gap-3"}>
                    <h3 className={"text-[16px] font-[500]"}>Products</h3>
                    <ul className={"flex flex-col gap-2"}>
                        <li className={"text-[13px] text-gray-500 font-[500]"}>Prices Drop</li>
                        <li className={"text-[13px] text-gray-500 font-[500]"}>New Products</li>
                        <li className={"text-[13px] text-gray-500 font-[500]"}>Best Sales</li>
                        <li className={"text-[13px] text-gray-500 font-[500]"}>Contact Us</li>
                        <li className={"text-[13px] text-gray-500 font-[500]"}>Site Map</li>
                        <li className={"text-[13px] text-gray-500 font-[500]"}>Stores</li>
                    </ul>
                </div>
                <div className={"flex flex-col gap-3"}>
                    <h3 className={"text-[16px] font-[500]"}>Our Company</h3>
                    <ul className={"flex flex-col gap-2"}>
                        <li className={"text-[13px] text-gray-500 font-[500]"}>Delivery</li>
                        <li className={"text-[13px] text-gray-500 font-[500]"}>Legal Notice</li>
                        <li className={"text-[13px] text-gray-500 font-[500]"}>Terms & Conditions Of Use</li>
                        <li className={"text-[13px] text-gray-500 font-[500]"}>About Us</li>
                        <li className={"text-[13px] text-gray-500 font-[500]"}>Secure Payment</li>
                        <li className={"text-[13px] text-gray-500 font-[500]"}>Login</li>
                    </ul>
                </div>
                <div className={"flex flex-col gap-3"}>
                    <h3 className={"text-[16px] font-[500]"}>Subscribe To NewsLetter</h3>
                    <p className={"text-[13px] text-gray-500 font-[500]"}>Subscribe to our latest newsletter to get news about special discounts.</p>
                    <form className={"!my-2"}>
                        <input required placeholder={"Your email address"} type={"email"} className={"text-[13px] w-full outline-none h-[30px] border-1 border-gray-200 rounded-sm px-2 py-3"}/>
                        <FormControlLabel required label="I agree to the terms & conditions and privacy policy."  control={<Checkbox/>}/>
                        <br/>
                        <Button type={"submit"} variant={"contained"} className={"!bg-primary !h-[2rem]"}>Subscribe</Button>

                    </form>
                </div>
            </div>
        </div>
        <div className={"bottomStrip border-t-1 border-gray-200 py-5"}>
            <div className={"container flex items-center justify-between"}>
               <ul className={"flex items-center gap-3"}>
                  <SocialLink icon={FaFacebookF}/>
                   <SocialLink icon={FaYoutube}/>
                  <SocialLink icon={FaInstagram}/>
                  <SocialLink icon={FaLinkedinIn}/>
                   <SocialLink icon={FaPinterestP}/>
               </ul>
                <p className={"text-[13px] text-gray-500"}>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
                <p className={"text-[13px] text-gray-500"}>© 2025 - Ecommerce Template by xyz.pvt.limited</p>
            </div>
        </div>
    </footer>
}