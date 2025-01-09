'use client'
import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import Image from 'next/image'

ChartJS.register(ArcElement, Tooltip, Legend)

export default function AboutUs() {
  const brandData = {
    labels: ['Hocco Ice-cream', 'Hocco Eatery', 'Chhaswala', 'Pigeon Kitchenware'],
    datasets: [
      {
        data: [40, 25, 25, 20],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        hoverBackgroundColor: ['#FF7394', '#46B2FB', '#FFDE66', '#5BD0D0']
      }
    ]
  }

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' ,
      }
    }
  }

  return (
    <section className="py-20 bg-[rgb(3,4,94)]/[1]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold text-center mb-12 text-white">About Our Franchise Empire</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-xl text-slate-400 leading-relaxed">
              We are a dynamic franchise powerhouse managing four distinct brands, each contributing to our remarkable success story. With unwavering commitment to excellence and innovation, we've achieved extraordinary growth and established a formidable presence in the market.
            </p>
            <p className="text-xl text-slate-400 leading-relaxed">
              Our diverse portfolio enables us to cater to a wide spectrum of customer needs while maintaining a cohesive and strategic business approach. We take immense pride in our ability to adapt swiftly to market trends and deliver unparalleled value to both our franchisees and customers.
            </p>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
            <Image 
              src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80"
              alt="Modern office building representing our franchise headquarters"
              width={800}
              height={600}
              priority
              className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="h-80 w-full bg-white rounded-lg shadow-xl p-6">
            <Doughnut data={brandData} options={chartOptions} />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold text-slate-200">Our Brand Distribution</h3>
            <p className="text-xl text-slate-400 leading-relaxed">
              Our success is built on the strength of our four unique brands. Each brand has been carefully cultivated to meet specific market needs, contributing to our overall growth and market dominance.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

