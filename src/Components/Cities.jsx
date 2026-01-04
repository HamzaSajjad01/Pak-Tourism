import React from 'react'

const Cities = () => {
    let Provinces = [
        {
            id:1,
            title: "Punjab",
            text:"Punjab is Pakistan's second largest province by area, and it is the most populated province, with rich culture & hitory.",
            image: "https://tourism.gov.pk/assets/images/punjab.jpg",
            weather: "https://tourism.gov.pk/assets/images/punjab-icon.png",
            ProvinceLink: "https://www.tdcp.gop.pk"
        },
        {
            id:2,
            title:"Sindh",
            text: "Sindh is in the southeast of the country, and the historical home of the Sindhi people. Sindh has Pakistan's second largest economy, while its provincial capital Karachi is Pakistan's largest city and financial hub.",
            image:"	https://tourism.gov.pk/assets/images/sindh-nxt.jpg",
            weather: "	https://tourism.gov.pk/assets/images/sindh-icon.png",
             ProvinceLink: "https://stdc.gos.pk"
        },
        {
            id:3,
            title:"Khyber Pakhtunkhwa",
            text: "located in the northwestern region of the country along the international border with Afghanistan.",
            image:"https://tourism.gov.pk/assets/images/kpk.jpg",
            weather: "https://tourism.gov.pk/assets/images/KPK-icon.png",
            ProvinceLink: "https://kptourism.com/"
        },
        {
            id:4,
            title:"Balochistan",
            text: "It is the largest province in terms of land area, forming the southwestern region of the country, but is the least populated. Its provincial capital and largest city is Quetta.",
            image:"	https://tourism.gov.pk/assets/images/balochistan-nxt.jpg",
            weather: "	https://tourism.gov.pk/assets/images/balochistan-icon.png",
             ProvinceLink: "https://balochistan.gov.pk"
        },
        {
            id:5,
            title:"Azad Kashmir",
            text: "Azad Kashmir is Administrative region of Pakistan situated in Northern part of the country. The northern part of Azad Jammu and Kashmir encompasses the lower part of the Himalayas, including Jamgarh Peak (15,531 feet [4,734 meters]).",
            image:"	https://tourism.gov.pk/assets/images/kashmir.jpg",
            weather: "https://tourism.gov.pk/assets/images/punjab-icon.png",
             ProvinceLink: "https://ajktourism.gov.pk"
        },
        {
            id:6,
            title:"Gilgit Baltistan",
            text: "Gilgit-Baltistan is admisitrative unit of Pakistan situated in the Northern Part of the country.It is one of the best tourist spots in Pakistan. Gilgit-Baltistan is home to five of the 'eight-thousanders' and to more than fifty peaks above 7,000 metres (23,000 ft). Gilgit and Skardu are the two main hubs for expeditions to those mountains.",
            image:"https://tourism.gov.pk/assets/images/gilgit-baltistan1.jpg",
            weather: "https://tourism.gov.pk/assets/images/punjab-icon.png",
             ProvinceLink: "https://visitgilgitbaltistan.gov.pk"
        },
    ]
  return (
    <div className='w-full h-full '>
        <div className='grid grid-cols-2 gap-6'>
            {
                Provinces.map((p) => (
                <div key={p.id} className="relative rounded-2xl overflow-hidden shadow-lg shadow-black
                    hover:scale-105 transition-all duration-500 
                    cursor-pointer w-full h-[420px]">

      {/* Background Image */}
      <img
        src={p.image}
        alt={p.title}
        className="w-full h-full object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-transparent"></div>

      {/* Content */}
      <div className="absolute bottom-6 left-6 text-white max-w-[80%]">

        {/* Icon + Title */}
        <div className="flex items-center gap-3 mb-2">
         <img src={p.weather} alt={p.title} />
          <h2 className="text-3xl font-bold">{p.title}</h2>
        </div>

        {/* Description */}
        <p className="text-md leading-snug mb-3 opacity-90 text-justify">
          {p.text}
        </p>

        {/* Read More */}
        <div className='text-left'>
          <a href={p.ProvinceLink} target="_blank" className='hover:text-green-600'>Read More &gt;&gt;</a>
        </div>
        
      </div>
    </div>

                ))
            }
        </div>
    </div>
  )
}

export default Cities