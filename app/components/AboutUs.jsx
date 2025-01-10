'use client'
import React, { useEffect, useState } from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import Image from 'next/image'
import ChartDataLabels from 'chartjs-plugin-datalabels'

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels)
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
    labels: ['Hocco Ice-cream', 'Hocco Eatery', 'Chhaswala', 'Pigeon Kitchenware'],
    datasets: [
      {
        data: [4, 2.5, 2.5, 2],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        hoverBackgroundColor: ['#FF7394', '#46B2FB', '#FFDE66', '#5BD0D0']
      }
    ]
  }

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      // padding: 20,
    },
    plugins: {
      legend: {
        display: true,
        position: 'right'
      },
      datalabels: {
        color: '#ffffff',
        font: {
          size: 14,
          weight: 'bold',
        },
        formatter: (value, context) => {
          const label = context.chart.data.labels[context.dataIndex];
          return `${value}Cr`;
        },
        anchor: 'center',
        align: 'center',
        offset: 10,
        clip: false,
      },
    },
    onResize: (chart) => {
      if (window.innerWidth <= 1280) {
        chart.options.plugins.legend.position = 'bottom'; // Set legend to 'bottom' for small screens
      } else {
        chart.options.plugins.legend.position = 'right'; // Set legend to 'right' for larger screens
      }
      chart.update(); // Update the chart with the new legend position
    },
  };


  return (
    <section className="py-20 bg-[rgb(3,4,94)]/[1]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold text-center mb-12 text-white">
          About Our Franchise Empire
        </h2>
        <div className="lg:mx-40 grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-xl text-slate-400 leading-relaxed">
              We are a dynamic franchise powerhouse managing four distinct brands, each contributing to our remarkable success story. With unwavering commitment to excellence and innovation, we've achieved extraordinary growth and established a formidable presence in the market.
            </p>

            {/* <p className="text-xl text-slate-400 leading-relaxed">
              Our diverse portfolio enables us to cater to a wide spectrum of customer needs while maintaining a cohesive and strategic business approach. We take immense pride in our ability to adapt swiftly to market trends and deliver unparalleled value to both our franchisees and customers.
            </p> */}
            <button className='primary-button'>Know more</button>
          </div>
          <div className="md:h-96 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-lg p-6 text-center shadow-lg">
              <div className="text-slate-400 mb-4">
                <svg className="w-12 h-12 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c1.104.004 2-.896 2-2 0-1.104-.896-2-2-2s-2 .896-2 2c0 1.104.896 2 2 2zm0 4c-4 0-8 2-8 6v2h16v-2c0-4-4-6-8-6z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-slate-300">
                <Counter end={6} duration={2} />Cr+
              </h3>
              <p className="text-xl text-slate-400">Yearly turnover</p>
            </div>
            <div className="rounded-lg p-6 text-center shadow-lg">
              <div className="text-slate-400 mb-4">
                <svg className="w-12 h-12 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c1.104.004 2-.896 2-2 0-1.104-.896-2-2-2s-2 .896-2 2c0 1.104.896 2 2 2zm0 4c-4 0-8 2-8 6v2h16v-2c0-4-4-6-8-6z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-slate-300">
                <Counter end={4} duration={2} />+
              </h3>
              <p className="text-xl text-slate-400">Franchises</p>
            </div>
            <div className="rounded-lg p-6 text-center shadow-lg">
              <div className="text-slate-400 mb-4">
                <svg className="w-12 h-12 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c1.104.004 2-.896 2-2 0-1.104-.896-2-2-2s-2 .896-2 2c0 1.104.896 2 2 2zm0 4c-4 0-8 2-8 6v2h16v-2c0-4-4-6-8-6z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-slate-300">
                <Counter end={10} duration={2} />+
              </h3>
              <p className="text-xl text-slate-400">Years of Experience</p>
            </div>
            <div className="rounded-lg p-6 text-center shadow-lg">
              <div className="text-slate-400 mb-4">
                <svg className="w-12 h-12 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c1.104.004 2-.896 2-2 0-1.104-.896-2-2-2s-2 .896-2 2c0 1.104.896 2 2 2zm0 4c-4 0-8 2-8 6v2h16v-2c0-4-4-6-8-6z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-slate-300">
                <Counter end={20} duration={2} />+
              </h3>
              <p className="text-xl text-slate-400">Employees</p>
            </div>
          </div>
        </div>
        <div className="lg:mx-40  grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="h-80 max-w-[100%] w-full bg-white rounded-lg shadow-xl p-6">
            <Doughnut data={brandData} options={chartOptions} />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold text-slate-200">Our Brand Distribution</h3>
            <p className="text-xl text-slate-400 leading-relaxed text-wrap w-full">
              Our success is built on the strength of our four unique brands. Each brand has been carefully cultivated to meet specific market needs, contributing to our overall growth and market dominance.
            </p>
          </div>
        </div>
      </div>
    </section>

  )
}

