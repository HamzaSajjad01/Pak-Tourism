import React from 'react';


const Cultures = () => {
    const PakistanCulture = [
  {
    id: 1,
    title: "Truck Art",
    description: "Truck art in Pakistan is a spectacular and unique form of artistic expression that transforms everyday vehicles into moving works of art, reflecting the vibrant culture and creativity of the country. This highly decorative art form adorns trucks, buses, and rickshaws with intricate patterns, vivid colors, floral motifs, portraits, and calligraphy, often featuring poetry, slogans, or images of cultural and religious significance. Each vehicle becomes a canvas that tells stories of regional traditions, local beliefs, and the personal tastes of the drivers, while also showcasing the craftsmanship of skilled artists who spend weeks painting these masterpieces by hand. Beyond its aesthetic appeal, truck art has become a symbol of Pakistani identity, capturing the imagination of locals and tourists alike, and has even gained international recognition for its bold and lively designs, demonstrating how everyday life and mobility in Pakistan are intertwined with a deep appreciation for art and culture.",
    image: "https://landin.pk/wp-content/uploads/2025/09/Screenshot-2025-09-29-215217.jpg"
  },
  {
    id: 2,
    title: "Peshawari Chappal",
    description: "Peshawari Chappal is a traditional footwear originating from the Khyber Pakhtunkhwa region of Pakistan, widely recognized for its unique design, durability, and comfort. Made primarily from high-quality leather, these handcrafted sandals feature a distinctive woven pattern on the upper part and a sturdy sole, making them suitable for both casual wear and formal occasions. Traditionally worn by men, Peshawari Chappals are celebrated for their blend of practicality and style, often paired with Shalwar Kameez, and have become an iconic symbol of Pakistani culture and craftsmanship. Over time, they have gained popularity beyond Pakistan as a fashionable and functional footwear choice, representing the country’s rich heritage and artisanal skill.",
    image: "https://www.peshawarichappals.pk/cdn/shop/collections/20251017_2014_image.png?v=1762248469"
  },
  {
    id: 3,
    title: "Sufi Music",
    description: "Sufi music, particularly Qawwali, is a deeply spiritual and poetic musical tradition in Pakistan that embodies themes of divine love, devotion, and unity. Rooted in the mystical practices of Sufism, it combines powerful vocals, rhythmic clapping, and harmonium or percussion accompaniment to create a transcendent listening experience that connects the audience to the spiritual essence of the lyrics. This genre has produced legendary performers like Nusrat Fateh Ali Khan, whose electrifying performances brought international acclaim and introduced the world to the soulful intensity of Pakistani Sufi music. Beyond entertainment, Qawwali serves as a medium for spiritual reflection and communal harmony, celebrating Pakistan’s rich cultural and religious heritage while inspiring generations of listeners both locally and globally.",
    image: "https://trulypakistan.net/wp-content/uploads/2025/06/ChatGPT-Image-Jun-13-2025-12_13_50-PM.jpg.webp"
  },
  {
    id: 4,
    title: "Shandoor Festivals",
    description: "The Shandur Festival is an annual cultural and sporting event held at the Shandur Pass, famously known as the “Roof of the World,” in northern Pakistan. Celebrated in July, this festival is most renowned for its exhilarating polo matches between teams from Chitral and Gilgit-Baltistan, played on one of the highest polo grounds in the world. Beyond the sport, the festival is a vibrant gathering of local communities and tourists, featuring traditional music, dance, handicrafts, and regional cuisine, creating a colorful celebration of Pakistan’s rich cultural heritage. Shandur Festival not only showcases the athletic skill and competitive spirit of the players but also highlights the hospitality, traditions, and natural beauty of the northern areas, making it a unique and iconic symbol of Pakistani culture.",
    image: "https://www.discoverwalks.com/blog/wp-content/uploads/2023/07/paul-chambers-m1ut_xhstqm-unsplash.jpg"
  },
  {
    id: 5,
    title: "Calligraphy Art",
    description: "Islamic calligraphy holds a distinguished place in Pakistani culture, serving as both a spiritual practice and a celebrated art form. It adorns mosques, public buildings, and private homes, transforming spaces with its intricate and elegant designs that often feature verses from the Quran. This artistic tradition emphasizes harmony, symmetry, and beauty, blending religious devotion with creative expression, and has been passed down through generations of skilled calligraphers. Beyond its decorative purpose, Islamic calligraphy in Pakistan reflects the deep connection between faith and art, symbolizing cultural identity, reverence for the divine, and the country’s rich heritage of craftsmanship and aesthetic refinement.",
    image: "https://islamicartfestival.com/wp-content/uploads/2024/10/10006-1.jpg"
  },
  {
    id: 6,
    title: "Basant Festival",
    description: "Basant is a vibrant and traditional festival celebrated in the Punjab region of Pakistan, heralding the arrival of spring with colorful kite-flying competitions. During this festival, the skies are filled with a multitude of kites, as families and friends gather on rooftops and open spaces to participate in the joyful activity. The celebrations are accompanied by lively music, delicious local foods, and communal gatherings, creating an atmosphere of excitement and festivity. Basant not only showcases the playful and artistic side of Pakistani culture but also symbolizes renewal, community bonding, and the exuberant spirit of the people, making it one of the most cherished cultural events in the country.",
    image: "https://www.travelertrails.com/wp-content/uploads/2022/11/Kite.jpg"
  },
  {
    id: 7,
    title: "Handicrafts",
    description: "Pakistan boasts a rich heritage of handicrafts that showcase the country’s artistic diversity and cultural depth. Traditional crafts such as pottery, embroidery, woodwork, and carpet weaving have been perfected over centuries, reflecting the unique identities of different regions and the use of locally sourced materials. Artisans employ intricate techniques passed down through generations, producing items that are both functional and visually stunning. These handcrafted works not only highlight the creativity and skill of Pakistani craftsmen but also serve as cultural symbols, preserving history, storytelling, and regional aesthetics, making Pakistan’s handicraft traditions a vital part of its cultural legacy.",
    image: "https://trulypakistan.net/wp-content/uploads/2025/06/ChatGPT-Image-Jun-24-2025-12_53_25-PM.jpg.webp"
  },
  {
    id: 8,
    title: "Tea Culture",
    description: "Tea, locally known as ‘chai’, is an essential part of everyday life in Pakistan, deeply embedded in the country’s social and cultural fabric. From bustling roadside tea stalls to elaborate family gatherings, chai serves as a symbol of warmth, hospitality, and communal connection. It is often brewed strong with milk and sugar and enjoyed alongside savory snacks or sweet treats, creating moments of conversation, relaxation, and togetherness. Beyond its role as a beverage, chai reflects Pakistan’s tradition of social bonding, offering a simple yet profound way for people to connect, celebrate, and share in the rhythm of daily life.",
    image: "https://clickpakistan.org/wp-content/uploads/2021/04/Teas-min.jpg"
  },
  {
    id: 9,
    title: "Iqbal Day",
    description: "Iqbal Day is a national observance in Pakistan, celebrated annually on November 9th to honor the birth anniversary of Allama Muhammad Iqbal, the philosopher, poet, and visionary who inspired the idea of Pakistan. Iqbal’s poetry and writings emphasized self-respect, unity, and the empowerment of Muslims, encouraging them to strive for spiritual, intellectual, and social progress. On this day, schools, colleges, and institutions hold special events, including poetry recitations, seminars, and exhibitions, to reflect on his contributions to literature, philosophy, and the creation of Pakistan. Iqbal Day serves as a reminder of his enduring legacy and the values of vision, dedication, and national pride that continue to inspire Pakistanis across generations.",
    image: "https://img.freepik.com/premium-vector/allama-iqbal-day-9th-november-national-poet-pakistan-iqbal-day-illustration_463801-812.jpg?w=996"
  },
  {
    id: 10,
    title: "Traditional Festivals",
    description: "Festivals such as Eid, Ramadan, and Independence Day hold a special place in Pakistan, celebrated nationwide with vibrant traditions and communal spirit. During Eid, families come together to offer prayers, share festive meals, and exchange gifts, while Ramadan is marked by fasting, prayers, and nightly iftar gatherings that strengthen social bonds. Independence Day on August 14th features flag-raising ceremonies, parades, cultural performances, and patriotic displays across the country. These celebrations showcase Pakistan’s rich cultural heritage, culinary traditions, and a sense of unity, highlighting the shared values, pride, and collective joy that define the nation’s social and cultural life.",
    image: "https://wpassets.graana.com/blog/wp-content/uploads/2022/03/salman-preeom-cGx-Onkd8A-unsplash-1115x627.jpg"
  },
];
  return (
    <section className="w-full mt-54 px-6 md:px-16">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-5xl text-green-600 font-bold">Pakistani Culture</h2>
        <p className="text-gray-500 text-justify mt-4">
          Pakistan has a rich and diverse cultural heritage that includes vibrant festivals, traditional music, colorful art, and delicious cuisine. Through its arts, crafts, attire, and food, Pakistan presents a unique identity celebrated worldwide.
        </p>
      </div>

      {/* Culture List */}
      <div className="space-y-24">
        {PakistanCulture.map((culture, index) => (
          <div key={culture.id} className="flex flex-col md:flex-row items-start gap-12">
            {/* Image */}
            <div className={`md:w-1/2 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
              <img
                src={culture.image}
                alt={culture.title}
                className="rounded-xl w-full object-cover shadow-lg"
              />
            </div>

            {/* Description */}
            <div className="md:w-1/2 flex flex-col justify-start -mt-4">
              <h3 className="text-3xl font-bold text-left mb-4">{culture.title}</h3>
              <p className="text-gray-500 text-justify">{culture.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cultures;
