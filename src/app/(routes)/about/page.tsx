import React from 'react';
import Image from 'next/image';
import girl from "../../../../images/bannerImg.jpg";


const AboutPage = () => {
  return (
    <div className="container mx-auto p-8">
      <div className="bg-white shadow-md rounded-lg  overflow-hidden">
        <Image
          src={girl}
          alt="image"
          width={800}
          height={800}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-4">About Us</h1>
          <p className="text-gray-700 mb-4">
            Welcome to our application. We are dedicated to providing the best service possible.
            Our team is composed of experienced professionals who are passionate about what they do.
          </p>
          <p className="text-gray-700 mb-4">
            Our mission is to deliver high-quality products that meet the needs of our customers.
            We believe in continuous improvement and always strive to exceed expectations.
          </p>
          <p className="text-gray-700">
            Thank you for choosing our application. We look forward to serving you.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;