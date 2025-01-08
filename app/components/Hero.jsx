import React from 'react';
import { ArrowRight } from 'lucide-react';
import VideoSlider from './VideoSlider';
import VideoSlider2 from './VideoSlider2';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center hero-section">
      <VideoSlider2 />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Transform Your Business Through Franchising
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
          Expert guidance and innovative solutions to help you build, grow, and manage successful franchise networks.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors inline-flex items-center justify-center">
            Start Your Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
          <button className="bg-white text-gray-900 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </div>
  );
}