"use client";
import Image from "next/image";
import logo from "../navbar/logo.png";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import visa from "../footer/visa.jpeg";
import paypal from "../footer/paypal.jpeg";
import skill from "../footer/skill.jpg";
import mast from "../footer/th.jpeg";
import { Provider } from "react-redux";
import store from "@/app/store/Store";
import Link from "next/link";

function Footer() {
  return (
    <Provider store={store}>
      <div className="pl-[190px] pr-[190px] bg-slate-200 pt-10  sm:pl-[50px] ">
        <div className="flex justify-between gap-5 border-b-2  border-gray-300  pb-10 sm:flex-wrap ">
          <div className="  pt-5">
            <Image src={logo} width={100} height={100} />
            <div className="flex flex-col gap-2 mt-4">
              <span className="text-gray-800 text-sm">
                Address: 60-49 Road 11378 New York
              </span>
              <span className="text-gray-800 text-sm">
                Phone: +65 11.188.888
              </span>
              <span className="text-gray-800 text-sm">
                Email: hello@colorlib.com
              </span>
            </div>
          </div>

          <div className="pt-5  ">
            <h5 className="font-bold mb-5 ">Useful Links</h5>
            <div className="flex gap-[70px]">
              <div className="flex flex-col">
                <Link
                  href="/Lorem"
                  className="text-sm mb-2 text-gray-500"
                >
                  About Us{" "}
                </Link>
                <Link
                  href="/Lorem"
                  className="text-sm mb-2 text-gray-500"
                >
                  About Our Shop
                </Link>
                <Link
                  href="/Lorem"
                  className="text-sm mb-2 text-gray-500"
                >
                  Secure Shopping
                </Link>
                <Link
                  href="/Lorem"
                  className="text-sm mb-2 text-gray-500"
                >
                  Delivery Information
                </Link>
                <Link
                  href="/Lorem"
                  className="text-sm mb-2 text-gray-500"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/Lorem"
                  className="text-sm mb-2 text-gray-500"
                >
                  Our Sitemap
                </Link>
              </div>

              <div className="flex flex-col">
                <Link
                  href="/Lorem"
                  className="text-sm mb-2 text-gray-500"
                >
                  Who We Are{" "}
                </Link>
                <Link
                  href="/Lorem"
                  className="text-sm mb-2 text-gray-500"
                >
                  Our Service
                </Link>
                <Link
                  href="/Lorem"
                  className="text-sm mb-2 text-gray-500"
                >
                  Project
                </Link>
                <Link
                  href="/Lorem"
                  className="text-sm mb-2 text-gray-500"
                >
                  Contact
                </Link>
                <Link
                  href="/Lorem"
                  className="text-sm mb-2 text-gray-500"
                >
                  Innovation
                </Link>
                <Link
                  href="/Lorem"
                  className="text-sm mb-2 text-gray-500"
                >
                  Testimonials
                </Link>
              </div>
            </div>
          </div>

          <div className="pt-5 flex flex-col">
            <span className=" flex font-semibold mb-5">
              Join Our Newsletter Now
            </span>
            <span className="mb-2 text-gray-500 text-sm">
              Get E-mail updates about our latest shop and special offers.
            </span>
            <div className="mt-5 flex">
              <input
                type="Email"
                placeholder="Enter Your Email"
                className="placeholder-gray-900 pl-5 pt-2 pb-2 w-[250px]"
              ></input>
              <button class="bg-[#84cc16]  text-white font-bold py-2 px-4 rounded  sm:px-2 ">
                SUBSCRIBE
              </button>
            </div>
            <div className="flex mt-8 gap-5  ">
              <Link href="https://www.facebook.com/">
                {" "}
                <CiFacebook className="text-[35px]" />
              </Link>
              <Link href="https://www.instagram.com/">
                {" "}
                <FaInstagram className="text-[35px]" />{" "}
              </Link>
              <Link href="https://x.com/">
                {" "}
                <FaTwitter className="text-[35px]" />
              </Link>
              <Link href="https://in.pinterest.com/">
                {" "}
                <FaPinterestP className="text-[35px]" />
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-5 pb-10 flex justify-between">
          <div className=" flex divide-x-2 divide-gray-300 gap-2 text-gray-500 text-sm  ">
            <span>Copyright ©2024 All rights reserved </span>
            <div className="flex gap-1 pl-2 text-gray-500 ">
              <span>This template is made with </span>
              <FaHeart className="text-[18px] pt-1" /> <span>by</span>
              <span className="text-[#007BFF] hover:text-white">Colrolib</span>
            </div>
          </div>

          <div className="gap-5 flex   sm:hidden ">
            <Image src={mast} width={35} height={5} />
            <Image src={visa} width={35} height={5} />
            <Image src={paypal} width={35} height={5} />
            <Image src={mast} width={35} height={5} />
            <Image src={skill} width={35} height={5} />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default Footer;
