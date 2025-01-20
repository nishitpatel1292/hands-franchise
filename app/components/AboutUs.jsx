"use client";
import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Image from "next/image";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { History, Store } from "lucide-react";
import EmployeesIcon from "../../public/svgs/employees.svg";
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);
function Counter({ end, duration }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0; // Starting number
    const intervalDuration = (duration / end) * 1000; // Duration per increment

    const counterInterval = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) {
        clearInterval(counterInterval);
      }
    }, intervalDuration);

    return () => clearInterval(counterInterval);
  }, [end, duration]);

  return <span>{count}</span>;
}
export default function AboutUs() {
  const brandData = {
    labels: [
      "Hocco Ice-cream",
      "Hocco Eatery",
      "Chhaswala",
      "Pigeon Kitchenware",
    ],
    datasets: [
      {
        data: [6, 5, 1, 1],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
        hoverBackgroundColor: ["#FF7394", "#46B2FB", "#FFDE66", "#5BD0D0"],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      // padding: 20,
    },
    plugins: {
      legend: {
        display: true,
        position: "right",
      },
      datalabels: {
        color: "#ffffff",
        font: {
          size: 14,
          weight: "bold",
        },
        formatter: (value, context) => {
          const label = context.chart.data.labels[context.dataIndex];
          return `${value}Cr`;
        },
        anchor: "center",
        align: "center",
        offset: 10,
        clip: false,
      },
    },
    onResize: (chart) => {
      if (window.innerWidth <= 1280) {
        chart.options.plugins.legend.position = "bottom"; // Set legend to 'bottom' for small screens
      } else {
        chart.options.plugins.legend.position = "right"; // Set legend to 'right' for larger screens
      }
      chart.update(); // Update the chart with the new legend position
    },
  };

  return (
    <section id='aboutus' className="relative md:pt-24 py-20 bg-[rgb(3,4,94)]/[1] z-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-center">
          <span className="tracking-[.5em] uppercase text-white text-lg max-w-lg mx-auto mb-3  flex items-center">
            About us
          </span>
          <h1 className="text-white text-3xl md:text-4xl xl:text-5xl font-semibold max-w-3xl mx-auto mb-16 leading-snug">
            About Our Franchise Empire
          </h1>
        </div>
        <div className="lg:mx-40 grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-xl text-slate-400 leading-relaxed">
              We are a dynamic franchise powerhouse managing four distinct
              brands, each contributing to our remarkable success story. With
              unwavering commitment to excellence and innovation, we've achieved
              extraordinary growth and established a formidable presence in the
              market.
            </p>
            {/* <p className="text-xl text-slate-400 leading-relaxed">
              Our diverse portfolio enables us to cater to a wide spectrum of customer needs while maintaining a cohesive and strategic business approach. We take immense pride in our ability to adapt swiftly to market trends and deliver unparalleled value to both our franchisees and customers.
            </p> */}
            <button className="primary-button sm:block hidden">
              Know more
            </button>
          </div>
          <div className="md:h-96 grid grid-cols-1 sm:grid-cols-2 about-us-figures-container">
            <div className="figure-card p-6 text-center">
              <div className="text-slate-400 text-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-12 h-12 mx-auto lucide lucide-hand-coins"
                >
                  <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" />
                  <path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
                  <path d="m2 16 6 6" />
                  <circle cx="16" cy="9" r="2.9" />
                  <circle cx="6" cy="5" r="3" />
                </svg>
              </div>
              <div className="figure-card-content">
                <h3 className="text-2xl font-semibold text-slate-300">
                  <Counter end={13} duration={2} />
                  Cr+
                </h3>
                <p className="text-xl text-slate-400">Yearly turnover</p>
              </div>
            </div>
            <div className="figure-card p-6 text-center">
              <div className="text-slate-400 mb-4">
                <Store size={"3rem"} className="mx-auto" />
              </div>
              <div className="figure-card-content">
                <h3 className="text-2xl font-semibold text-slate-300">
                  <Counter end={4} duration={2} />+
                </h3>
                <p className="text-xl text-slate-400">Franchises</p>
              </div>
            </div>
            <div className="figure-card p-6 text-center">
              <div className="text-slate-400 mb-4">
                <History size={"3rem"} className="mx-auto" />
              </div>
              <div className="figure-card-content">
                <h3 className="text-2xl font-semibold text-slate-300">
                  <Counter end={2} duration={2} />+
                </h3>
                <p className="text-xl text-slate-400">Years of Experience</p>
              </div>
            </div>
            <div className="figure-card p-6 text-center">
              <div className="text-slate-400 mb-4">
                <Image
                alt=""
                  src={"/svgs/employees.svg"}
                  width={48}
                  height={48}
                  className="mx-auto"
                />
              </div>
              <div className="figure-card-content">
                <h3 className="text-2xl font-semibold text-slate-300">
                  <Counter end={20} duration={2} />+
                </h3>
                <p className="text-xl text-slate-400">Employees</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:mx-40  grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="h-80 max-w-[100%] w-full bg-white rounded-lg shadow-xl p-6">
            <Doughnut data={brandData} options={chartOptions} />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold text-slate-200">
              Our Brand Distribution
            </h3>
            <p className="text-xl text-slate-400 leading-relaxed text-wrap w-full">
              Our success is built on the strength of our four unique brands.
              Each brand has been carefully cultivated to meet specific market
              needs, contributing to our overall growth and market dominance.
            </p>
          </div>
          <div className="block sm:hidden order-3">
            <button className="primary-button">Know more</button>
          </div>
        </div>
      </div>
    </section>
  );
}
