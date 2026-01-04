import React from 'react'

const Valleys = () => {
    const PakistanValleys = [
  {
    id: 1,
    title: "Hunza Valley",
    description: "Hunza Valley, located in Gilgit-Baltistan, is famous for its breathtaking landscapes, snow-capped peaks, crystal-clear rivers, and serene lakes that create a mesmerizing atmosphere for visitors throughout the year. Surrounded by some of the tallest and most majestic mountains in the world, including Rakaposhi, Ultar Sar, and Ladyfinger Peak, the valley attracts nature lovers, trekkers, and photographers who come to witness its unmatched beauty. Beyond its stunning scenery, Hunza is cherished for its warm and friendly locals, whose rich culture, vibrant festivals, traditional cuisine, and peaceful lifestyle provide a welcoming experience to travelers. The region also holds great historical significance, with ancient landmarks like Baltit and Altit forts showcasing the architectural heritage and centuries-old history of the area while offering panoramic views of the surrounding mountains and valleys. With its perfect blend of natural wonders, cultural richness, and historical charm, Hunza Valley stands as one of Pakistan’s most captivating and cherished destinations.",
    image: "https://images.unsplash.com/photo-1514558427911-8e293bebf18c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 2,
    title: "Swat Valley",
    description: "Swat Valley, often referred to as the 'Switzerland of the East', is a mesmerizing region in northern Pakistan that captivates visitors with its unparalleled natural beauty and rich cultural heritage. Nestled amidst towering, verdant mountains and dotted with sparkling rivers and streams, the valley offers breathtaking landscapes that change with the seasons—from snow-capped peaks in winter to blooming orchards and meadows in spring and summer. The fertile lands of Swat are famous for their fruit-bearing orchards, particularly apples, peaches, and apricots, which add vibrant colors to the scenery. Beyond its scenic allure, Swat Valley is steeped in history, boasting numerous archaeological and historical sites that tell the story of ancient civilizations, Buddhist heritage, and medieval kingdoms. Visitors can explore relics, stupas, and ancient ruins, making the valley a treasure trove for history enthusiasts and scholars alike. Adventure seekers and nature lovers are equally drawn to the region, as it offers hiking trails, river rafting, and serene spots perfect for camping or simply immersing oneself in the tranquility of nature. The valley’s charming towns, warm and hospitable locals, and traditional culture further enhance its appeal, creating a unique blend of natural splendor and historical richness that makes Swat Valley a must-visit destination for travelers seeking both beauty and insight into Pakistan’s past.",
    image: "https://images.unsplash.com/photo-1624087267589-41ea77e28b1a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 3,
    title: "Neelum Valley",
    description: "Neelum Valley, situated in the breathtaking region of Azad Kashmir, is renowned for its pristine natural beauty, where crystal-clear rivers meander through dense, verdant forests and quaint, picturesque villages. The valley’s lush landscapes are a feast for the eyes, with rolling hills, cascading waterfalls, and vibrant meadows creating a serene and captivating environment that draws travelers from all over the world. Known as a haven for adventure and nature enthusiasts, Neelum Valley offers countless opportunities for trekking along scenic trails, camping under starry skies, and capturing stunning photographs of its untouched scenery. Its charming villages, where traditional culture and hospitality flourish, add a human touch to the valley’s natural splendor, allowing visitors to experience the local way of life while surrounded by the grandeur of the mountains. The harmonious blend of rivers, forests, and hills, combined with the valley’s peaceful ambiance and rich biodiversity, makes Neelum Valley not only a perfect escape for relaxation and reflection but also a thrilling destination for those seeking adventure, exploration, and a deep connection with nature.",
    image: "https://api.salampakistan.gov.pk/photo-1626162340055.jpeg"
  },
  {
    id: 4,
    title: "Kalash Valley",
    description: "Kalash Valley, nestled in the remote region of Chitral, is a remarkable destination celebrated for its unique cultural heritage, vibrant festivals, and exceptional hospitality. Surrounded by towering, majestic mountains, the valley is home to the indigenous Kalash people, whose traditions, attire, and way of life remain distinct and deeply rooted in their ancestral customs. The colorful festivals, such as Joshi, Uchau, and Choimus, showcase lively dances, music, and rituals that attract visitors eager to witness the valley’s rich cultural tapestry firsthand. Beyond its cultural significance, Kalash Valley offers breathtaking natural scenery, with lush valleys, rolling hills, and serene landscapes that provide a perfect backdrop for photography, trekking, and exploration. The Kalash community’s warmth and openness make every visit memorable, allowing travelers to not only marvel at the extraordinary surroundings but also engage meaningfully with a people whose lifestyle is both fascinating and resilient. Combining scenic beauty, vibrant culture, and a sense of timeless tradition, Kalash Valley stands out as one of Pakistan’s most enchanting and culturally significant destinations.",
    image:"https://api.salampakistan.gov.pk/photo-1629023481111.jpeg"
  },
  {
    id: 5,
    title: "Skardu Valley",
    description: "Skardu Valley, located in the heart of Gilgit-Baltistan, serves as the gateway to some of the world’s tallest and most awe-inspiring peaks, including the legendary K2, drawing mountaineers and adventure enthusiasts from across the globe. The valley is a spectacular blend of rugged, towering mountains, serene turquoise lakes, and expansive valleys that create a breathtaking natural panorama at every turn. Its pristine lakes, such as Shangrila Lake and Sheosar Lake, mirror the surrounding peaks and skies, offering picturesque views that are perfect for photography and peaceful reflection. Skardu is also a haven for trekkers and explorers, providing access to challenging trekking routes, glacial landscapes, and high-altitude adventures that test endurance while rewarding visitors with unparalleled scenic beauty. Beyond its outdoor allure, the valley is enriched with the culture and hospitality of its local communities, who warmly welcome travelers and provide insight into the region’s unique traditions and lifestyle. With its combination of thrilling adventure, serene natural beauty, and cultural richness, Skardu Valley remains one of Pakistan’s most captivating destinations for those seeking both exploration and awe-inspiring landscapes.",
    image: "https://api.salampakistan.gov.pk/photo-1630566479437.jpeg"
  },
  {
    id: 6,
    title: "Kaghan Valley",
    description: "Kaghan Valley, located in the picturesque Mansehra District of Khyber Pakhtunkhwa, is celebrated for its stunning natural beauty, where lush green meadows, sparkling alpine lakes, and towering snow-capped peaks create a landscape that feels both serene and majestic. Among its most famous attractions is Lake Saif-ul-Malook, a pristine glacial lake surrounded by dramatic mountains, which draws visitors eager to experience its enchanting waters and panoramic views. Babusar Top, another highlight, offers breathtaking vistas of the valley and serves as a gateway for travelers exploring the higher reaches of the region. Throughout the year, Kaghan Valley attracts tourists seeking adventure, relaxation, and a close connection with nature, offering opportunities for trekking, camping, and photography amid its breathtaking scenery. The valley’s charming villages, warm local hospitality, and unspoiled landscapes make it a must-visit destination for nature lovers, adventurers, and anyone looking to immerse themselves in the tranquil beauty of northern Pakistan.",
    image: "https://pakistanitouragency.com/wp-content/uploads/2025/11/Kaghan-Valley-Pakistan%E2%80%93The-Ultimate-2025-Travel-Guide.avif"
  },
  {
    id: 7,
    title: "Shangrila Valley",
    description: "Shangrila Valley, located near Skardu in Gilgit-Baltistan, is renowned for its extraordinary scenic beauty, tranquil lakes, and the majestic mountains that surround it, earning it the poetic nickname of 'Heaven on Earth.' The valley captivates visitors with its serene landscapes, where crystal-clear waters reflect the towering peaks and lush greenery, creating a picture-perfect environment for nature lovers and photographers alike. Its calm and peaceful atmosphere makes it an ideal retreat for those seeking relaxation away from the bustle of city life, while the vibrant flora and panoramic vistas provide endless opportunities for exploration and photography. Beyond its natural allure, Shangrila Valley exudes a sense of timeless charm, offering visitors a chance to connect deeply with the beauty of northern Pakistan and experience the harmonious blend of mountains, lakes, and fresh alpine air that has made it a treasured destination for travelers from around the world.",
    image: "https://www.pakistanhc.lk/wp-content/uploads/2018/10/Shangrila-Pakistan-960x640.jpg"
  },
  {
    id: 8,
    title: "Rama Valley",
    description: "Rama Valley, nestled in the Astore District of Gilgit-Baltistan, is a breathtaking destination renowned for its expansive meadows, dense pine forests, and awe-inspiring views of towering peaks, including the majestic Rakaposhi. The valley’s lush landscapes, dotted with wildflowers in spring and vibrant greenery in summer, create a serene and picturesque environment that attracts nature lovers and photographers alike. Adventure enthusiasts are drawn to Rama Valley for its excellent trekking trails, camping spots, and opportunities to immerse themselves in the raw beauty of the northern mountains. The combination of tranquil forests, sweeping meadows, and panoramic mountain vistas makes Rama Valley not only a haven for outdoor activities but also a peaceful retreat for those seeking to experience the harmony and grandeur of Gilgit-Baltistan’s natural splendor. Its unspoiled beauty and the sense of adventure it offers have cemented Rama Valley as one of the most captivating destinations in Pakistan’s northern region.",
    image: "https://www.travelertrails.com/wp-content/uploads/2022/11/rama-2.jpg"
  },
  {
    id: 9,
    title: "Bagrot Valley",
    description: "Bagrot Valley, located near Gilgit in Gilgit-Baltistan, is a hidden gem celebrated for its fertile lands, crystal-clear snow-fed streams, and the towering peaks of the Karakoram range that surround it. Unlike more frequented tourist spots, Bagrot Valley offers an offbeat and authentic experience, allowing visitors to immerse themselves in the traditional lifestyle of local communities while enjoying unspoiled natural beauty. The valley’s lush fields, meandering streams, and dramatic mountain vistas provide a serene and picturesque setting for nature lovers, trekkers, and photographers seeking tranquility away from crowded destinations. With its combination of fertile landscapes, panoramic mountain views, and a genuine glimpse into rural life in northern Pakistan, Bagrot Valley stands out as a remarkable destination for those looking to explore the scenic and cultural richness of the Karakoram region.",
    image: "https://visitgilgitbaltistan.gov.pk/storage/images/h0ZXN9eWtEiGZpUS0lxVdzfQYC11n6-metaQkFHUk9URS1WQUxMRVktMi1lMTQ0MjQ5NzE4OTg1Ny5qcGc=-.jpg"
  },
  {
    id: 10,
    title: "Borith Lake Valley",
    description: "Borith Lake Valley, located near Hunza in Gilgit-Baltistan, is renowned for its tranquil Borith Lake, which is gracefully nestled amidst lush green pastures and framed by majestic mountains. The valley’s serene environment and pristine landscapes make it a perfect retreat for nature lovers, offering a peaceful escape from the bustle of everyday life. Borith Lake is especially popular among birdwatchers, as it attracts a variety of migratory and local bird species, providing ample opportunities for wildlife observation and photography. In addition, the surrounding trails and meadows make the valley an excellent destination for hiking and leisurely walks, allowing visitors to fully immerse themselves in the natural beauty of northern Pakistan. With its combination of calm waters, verdant surroundings, and panoramic mountain vistas, Borith Lake Valley is a captivating destination that highlights the untouched splendor and tranquility of the Hunza region.",
    image: "https://www.travelertrails.com/wp-content/uploads/2023/03/Borith-Lake-2.jpg"
  }
];

  return (
   <section className="w-full mt-24 flex justify-center ">
  <div className="max-w-5xl w-full">

    {/* Section Title and Main Description */}
    <div className="mb-16 px-6 md:px-0">
      <h2 className="text-5xl text-green-600 font-bold">
        Beautiful Valleys of Pakistan
      </h2>

      <p className="text-gray-500 text-justify mt-6 leading-relaxed">
        Pakistan is blessed with some of the most scenic valleys in the world,
        each offering stunning landscapes, rich culture, and unforgettable experiences.
      </p>
    </div>

    {/* Valley List */}
    <div className="space-y-32 px-6 md:px-0">
      {PakistanValleys.map((valley) => (
        <div key={valley.id} className="flex flex-col gap-8">

          {/* Valley Title */}
          <h3 className="text-4xl font-bold text-left">{valley.title}</h3>

          {/* Valley Description */}
          <p className="  text-justify text-gray-500 leading-relaxed">
            {valley.description}
          </p>

          {/* Valley Image */}
          <div className="w-full">
            <img
              src={valley.image}
              alt={valley.title}
              className="w-full h-[600px] object-cover rounded-3xl shadow-2xl
                         hover:scale-105 transition-transform duration-500"
            />
          </div>

        </div>
      ))}
    </div>

  </div>
</section>


  )
}

export default Valleys