import React, { useState } from 'react';
import { Phone, Mail, User, MessageSquare, Award, Users, Clock } from 'lucide-react';

export default function CaspiraWebsite() {
  return (
    <div className="min-h-screen bg-white mb-0">
      <div className="relative h-screen overflow-visible">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/about/construction-building.jpg')`
          }}
        />

        <div className="relative z-10 h-full">
          <div className="container mx-auto px-6 h-60 pt-1 lg:pt-0">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-full">

              <div className="lg:col-span-6 text-white space-y-0 flex flex-col justify-center">
                <div className="flex items-center space-x-2 text-yellow-400 font-medium">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span>Get started today</span>
                </div>

                <h1 className="text-4xl lg:text-6xl font-bold text-on-dark leading-tight">
                  Let's Build Something
                  <br />
                  <span className="text-yellow-400">Great Together</span>
                </h1>

                <p className="text-lg lg:text-xl text-blue-100 leading-relaxed max-w-xl">
                  Ready to bring your vision to life? Caspira is here to deliver
                  quality, efficiency, and excellence in every project. Contact us
                  today and let's start building your future!
                </p>
              </div>

              <div className="lg:col-span-5 flex items-end lg:items-center ">
                <div className="bg-white rounded-2xl p-6 lg:p-8 max-w-sm w-[100%] ml-auto transform lg:translate-y-16">
                  <h4 className="text-2xl font-bold text-gray-800 mb-6">Engineering Excellence</h4>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-3">
                      <div className="bg-yellow-100 p-2 rounded-lg">
                        <Award className="w-5 h-5 text-yellow-600" />
                      </div>
                      <div>
                        <h6 className="font-bold text-gray-800 text-sm mb-1">25+ Years Experience</h6>
                        <p className="text-gray-600 text-xs leading-relaxed">
                          Proven track record in delivering complex civil engineering projects across Nigeria and West Africa.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="bg-blue-100 p-2 rounded-lg">
                        <Users className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h6 className="font-bold text-gray-800 text-sm mb-1">Expert Team</h6>
                        <p className="text-gray-600 text-xs leading-relaxed">
                          Licensed professional engineers specializing in structural, geotechnical, and infrastructure design.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="bg-green-100 p-2 rounded-lg">
                        <Clock className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <h6 className="font-bold text-gray-800 text-sm mb-1">On-Time Delivery</h6>
                        <p className="text-gray-600 text-xs leading-relaxed">
                          Committed to meeting project deadlines while maintaining the highest quality standards.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 lg:py-4 bg-gray-50">
        <div className="container mx-auto px-6 mt-12 lg:mt-0">
          <div className="max-w-4xl">
            <div className="flex items-center space-x-2 text-yellow-500 font-medium mb-2">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <span>Our Mission</span>
            </div>
            <h4 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-2">
              Building Solutions That Last
            </h4>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-4 max-w-2xl">
              At Caspira, we are committed to delivering innovative, reliable, and sustainable
              solutions tailored to our clients’ unique needs. Our focus is on combining creativity
              with technical expertise to transform challenges into opportunities.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}