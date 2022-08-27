import React from "react";
import "./testimonials.css";
import AVA1 from "../../assets/avatar1.jpg";
import AVA2 from "../../assets/avatar2.jpg";
import AVA3 from "../../assets/avatar3.jpg";
import AVA4 from "../../assets/avatar4.jpg";
// import Swiper core and required modules
import { Pagination, Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVA1,
    name: "test1",
    review:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempor accusantium velit itaque repudiandae ea quisquam reprehenderit? Modquaerat molestiae, incidunt maxime earum consequuntur quasreiciendis tenetur, dignissimos praesentium totam placeat.",
  },
  {
    avatar: AVA2,
    name: "test2",
    review:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempor accusantium velit itaque repudiandae ea quisquam reprehenderit? Modquaerat molestiae, incidunt maxime earum consequuntur quasreiciendis tenetur, dignissimos praesentium totam placeat.",
  },
  {
    avatar: AVA3,
    name: "test3",
    review:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempor accusantium velit itaque repudiandae ea quisquam reprehenderit? Modquaerat molestiae, incidunt maxime earum consequuntur quasreiciendis tenetur, dignissimos praesentium totam placeat.",
  },
  {
    avatar: AVA4,
    name: "test4",
    review:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempor accusantium velit itaque repudiandae ea quisquam reprehenderit? Modquaerat molestiae, incidunt maxime earum consequuntur quasreiciendis tenetur, dignissimos praesentium totam placeat.",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination, Navigation]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt={name}></img>
              </div>
              <h5 className="client_name">{name}</h5>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};
export default Testimonials;
