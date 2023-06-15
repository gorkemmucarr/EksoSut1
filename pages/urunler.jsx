import React from "react";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Header from "@/components/Header"
import Footer from "@/components/Footer";

const urunler = () => {
	
	const images = [
		"/unlumamul.jpg",
		"/unlumamul.jpg",
		"/unlumamul.jpg",
		"/unlumamul.jpg",
		"/unlumamul.jpg",
	];

	
	const zoomInProperties = {
		indicators: true,
		scale: 1.2,
		duration: 5000,
		transitionDuration: 500,
		infinite: true,
		prevArrow: (
			<div style={{ width: "30px", marginRight: "-30px", cursor: "pointer" }}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512"
					fill="#2e2e2e"
				>
					<path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
				</svg>
			</div>
		),
		nextArrow: (
			<div style={{ width: "30px", marginLeft: "-30px", cursor: "pointer" }}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512"
					fill="#2e2e2e"
				>
					<path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
				</svg>
			</div>
		),
	};
	return (
		<div className="">
            
            <Header/>
            <div className="flex justify-center w-full h-full mt-10">
                <img src="/unlumamul.jpg" alt="unlumamuller" className="w-2/4 object-cover rounded-lg shadow-xl"/>
            </div>
			<h1 className="text-center text-3xl  font-bold pb-10 text-red-500 mt-10">
				ÜRÜNLER
			</h1>

			<Zoom {...zoomInProperties}>
				{images.map((each, index) => (
					<div key={index} className="flex justify-center w-full h-full">
						<img
							className="w-3/4 object-cover rounded-lg shadow-xl"
							src={each}
						/>
					</div>
				))}
			</Zoom>
            <div className="mt-20">
                <Footer/>
            </div>
		</div>
	);
};

export default urunler;