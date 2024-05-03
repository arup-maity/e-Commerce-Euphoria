"use client";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ForMen = () => {
   var settings = {
      dots: false,
      arrows: false,
      rows: 2,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 2,
      draggable: false,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 3,
            }
         },
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 2,
               initialSlide: 2
            }
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1
            }
         }
      ]
   };

   return (
      <div className="w-full">
         <Slider {...settings} className="new-arrival-silder -mx-4">
            {itemArray?.map((item, index) => {
               return (
                  <div key={index} className="px-4 mb-10">
                     <div className="bg-cover bg-center bg-no-repeat w-full aspect-[250/350] rounded-lg" style={{ backgroundImage: `url(${item.image})` }}></div>
                     <p className="text-lg text-[#3c4242] font-lato font-medium mt-2">{item.title}</p>
                     <p className="text-xs text-[#7F7F7F] font-lato font-medium mt-1">{item.description}</p>
                  </div>
               );
            })}
         </Slider>
      </div>
   );
};

export default ForMen;

const itemArray = [
   {
      image: "/img-15.png",
      title: "Knitted Joggers",
      description: "Explore Now!"
   },
   {
      image: "/img-19.png",
      title: "Full Sleeve",
      description: "Explore Now!"
   },
   {
      image: "/img-16.png",
      title: "Active T-shirts",
      description: "Explore Now!"
   },
   {
      image: "/img-20.png",
      title: "Urban Shirts",
      description: "Explore Now!"
   },
   {
      image: "/img-17.png",
      title: "Priented T-Shirt",
      description: "Explore Now!"
   },
   {
      image: "/img-21.png",
      title: "Hoodies & Sweetshirt",
      description: "Explore Now!"
   },
   {
      image: "/img-18.png",
      title: "Knitted Joggers",
      description: "Explore Now!"
   },
   {
      image: "/img-22.png",
      title: "Full Sleeve",
      description: "Explore Now!"
   }
];
