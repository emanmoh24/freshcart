"use client";

import React from "react";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import homeSliderImg from "../../../assets/images/home-slider-1.png";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

export default function HomeSlider() {
  return (
    <section className="relative overflow-hidden bg-emerald-950">
      <Swiper
        className="home-slider"
        slidesPerView={1}
        loop={true}
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          prevEl: ".home-slider-prev",
          nextEl: ".home-slider-next",
        }}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
      >
        <SwiperSlide>
          <div
            className="flex min-h-[380px] items-center bg-cover bg-center px-5 py-14 sm:min-h-[440px] sm:px-10 lg:min-h-[500px] lg:px-16"
            style={{
              backgroundImage: `linear-gradient(90deg, rgba(6, 78, 59, 0.94) 0%, rgba(6, 78, 59, 0.76) 48%, rgba(6, 78, 59, 0.28) 100%), url(${homeSliderImg.src})`,
            }}
          >
            <div className="mx-auto w-full max-w-7xl">
              <div className="max-w-xl">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-amber-300">
                  Fresh picks, delivered
                </p>
                <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                  Fresh products delivered to your door
                </h2>
                <p className="mt-4 text-base text-emerald-50 sm:text-lg">
                  Get 20% off your first order
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="#featuredProducts" className="rounded-md cursor-pointer bg-amber-400 px-6 py-3 font-semibold text-emerald-950 shadow-sm transition-colors hover:bg-amber-300">
                    Shop Now
                  </Link>
                  <button className="rounded-md border cursor-pointer border-white/80 bg-white/10 px-6 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-emerald-800">
                    View Deals
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="flex min-h-[380px] items-center bg-cover bg-center px-5 py-14 sm:min-h-[440px] sm:px-10 lg:min-h-[500px] lg:px-16"
            style={{
              backgroundImage: `linear-gradient(90deg, rgba(6, 78, 59, 0.94) 0%, rgba(6, 78, 59, 0.76) 48%, rgba(6, 78, 59, 0.28) 100%), url(${homeSliderImg.src})`,
            }}
          >
            <div className="mx-auto w-full max-w-7xl">
              <div className="max-w-xl">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-amber-300">
                  Fresh picks, delivered
                </p>
                <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                  Fresh products delivered to your door
                </h2>
                <p className="mt-4 text-base text-emerald-50 sm:text-lg">
                  Get 20% off your first order
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <button className="rounded-md bg-amber-400 px-6 py-3 font-semibold text-emerald-950 shadow-sm transition-colors hover:bg-amber-300">
                    Shop Now
                  </button>
                  <button className="rounded-md border border-white/80 bg-white/10 px-6 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-emerald-800">
                    View Deals
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="flex min-h-[380px] items-center bg-cover bg-center px-5 py-14 sm:min-h-[440px] sm:px-10 lg:min-h-[500px] lg:px-16"
            style={{
              backgroundImage: `linear-gradient(90deg, rgba(6, 78, 59, 0.94) 0%, rgba(6, 78, 59, 0.76) 48%, rgba(6, 78, 59, 0.28) 100%), url(${homeSliderImg.src})`,
            }}
          >
            <div className="mx-auto w-full max-w-7xl">
              <div className="max-w-xl">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-amber-300">
                  Fresh picks, delivered
                </p>
                <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                  Fresh products delivered to your door
                </h2>
                <p className="mt-4 text-base text-emerald-50 sm:text-lg">
                  Get 20% off your first order
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <button className="rounded-md bg-amber-400 px-6 py-3 font-semibold text-emerald-950 shadow-sm transition-colors hover:bg-amber-300">
                    Shop Now
                  </button>
                  <button className="rounded-md border border-white/80 bg-white/10 px-6 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-emerald-800">
                    View Deals
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <button
        type="button"
        aria-label="Previous slide"
        className="home-slider-prev absolute left-4 top-1/2 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-emerald-950/50 text-white shadow-md backdrop-blur-sm transition hover:border-amber-300 hover:bg-amber-400 hover:text-emerald-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 sm:left-6 sm:size-12"
      >
        <IconChevronLeft size={23} stroke={2} />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        className="home-slider-next absolute right-4 top-1/2 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-emerald-950/50 text-white shadow-md backdrop-blur-sm transition hover:border-amber-300 hover:bg-amber-400 hover:text-emerald-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 sm:right-6 sm:size-12"
      >
        <IconChevronRight size={23} stroke={2} />
      </button>
    </section>
  );
}
