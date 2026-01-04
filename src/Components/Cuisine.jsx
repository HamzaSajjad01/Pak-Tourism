import React from 'react'

const Cuisine = () => {
    const PakistanCuisines = [
  {
    id: 1,
    title: "Biryani",
    description: "Pakistani Biryani is a rich and aromatic culinary masterpiece that has won the hearts of food lovers across the country and beyond. Made with fragrant basmati rice, tender meat such as chicken, beef, or mutton, and a complex blend of spices including cumin, cardamom, cloves, cinnamon, and saffron, this dish is a feast for both the eyes and the palate. Often enriched with yogurt, fried onions, garlic, and ginger, the ingredients are layered carefully and slow-cooked to allow the flavors to meld perfectly. Biryani is not just a meal; it is a celebration on a plate, served during weddings, festivals, and family gatherings, where its vibrant colors and enticing aroma signal warmth, hospitality, and festivity. Each region in Pakistan has its own distinctive take on Biryani, from the spicy Karachi-style Biryani to the milder, fragrant Sindhi Biryani, making it a versatile dish that caters to diverse taste preferences. The combination of soft, fluffy rice and flavorful, juicy meat, complemented by fresh herbs and sometimes a touch of lemon or chutney, ensures that every bite is an explosion of taste, making Pakistani Biryani one of the most iconic and beloved dishes in the nation’s rich culinary heritage",
    image: "https://images.pexels.com/photos/16020573/pexels-photo-16020573.jpeg"
  },
  {
    id: 2,
    title: "Nihari",
    description: "Pakistani Nihari is a deeply flavorful and aromatic stew that has been cherished for generations as one of the country’s most iconic breakfast dishes. Traditionally prepared with tender cuts of beef or lamb, the meat is slow-cooked over several hours until it becomes melt-in-the-mouth soft, allowing the rich flavors of ginger, garlic, and a blend of warming spices such as cloves, cinnamon, cardamom, and black pepper to infuse every morsel. The slow-cooking process creates a thick, luxurious gravy that is often enhanced with ghee and garnished with fresh coriander, sliced green chilies, and a squeeze of lemon, making each serving both hearty and satisfying. Nihari is more than just a dish; it is a cultural tradition, often enjoyed with freshly baked naan or parathas and shared among family and friends during special occasions or weekend breakfasts. Its deep, robust flavor, combined with the comforting warmth of its slow-cooked meat, has made Nihari a beloved culinary treasure across Pakistan, celebrated not only for its taste but also for the sense of history and togetherness it brings to the dining table.",
    image: "https://www.teaforturmeric.com/wp-content/uploads/2016/11/Easy-Nihari-Pakistani-Beef-Stew-3-1024x1536.jpg"
  },
  {
    id: 3,
    title: "Haleem",
    description: "Pakistani Haleem is a rich, hearty, and wholesome dish that holds a special place in the country’s culinary tradition, especially during the holy months of Ramadan and Muharram. It is a slow-cooked porridge made by blending wheat, barley, lentils, and tender chunks of beef, mutton, or chicken, simmered for several hours until the ingredients merge into a smooth, thick consistency. The dish is delicately spiced with a fragrant mix of cumin, coriander, garam masala, ginger, and garlic, creating layers of deep, comforting flavors. Traditionally, Haleem is garnished with fried onions, fresh coriander, green chilies, lemon wedges, and sometimes a drizzle of ghee, enhancing both its aroma and taste. Served piping hot, it is often eaten with naan, paratha, or simply on its own, providing a nourishing and energizing meal. Beyond its incredible taste, Haleem is celebrated for the sense of community it fosters, as families and neighbors often prepare it together in large quantities for gatherings, making it not just a dish but a symbol of tradition, warmth, and shared joy in Pakistani culture.",
    image: "https://www.teaforturmeric.com/wp-content/uploads/2020/07/Haleem-Recipe-Instant-Pot-2-1175x1536.jpg"
  },
  {
    id: 4,
    title: "Peshawari Chapli Kebab",
    description: "Peshawari Chapli Kebab is a beloved and iconic dish from the Khyber Pakhtunkhwa region of Pakistan, renowned for its bold flavors, unique texture, and aromatic spices. These kebabs are made from minced beef or lamb, mixed with a carefully balanced blend of spices including coriander seeds, cumin, red chili, garam masala, ginger, garlic, and sometimes pomegranate seeds for a subtle tang. Flattened into round patties, they are pan-fried to golden perfection, resulting in a crisp exterior while remaining juicy and flavorful on the inside. Chapli Kebabs are traditionally served hot with naan, rice, or parathas, often accompanied by fresh salad, chutneys, or yogurt-based sauces, making them a complete and satisfying meal. The dish is celebrated not only for its mouthwatering taste but also for the cultural heritage it represents, reflecting the rich culinary traditions and the hospitality of the people of Peshawar. Loved across Pakistan, these kebabs are a staple at street food stalls, family gatherings, and festive occasions, offering a perfect blend of spice, texture, and aroma that leaves a lasting impression on anyone who tastes them.",
    image: "https://seeforcumin.com/wp-content/uploads/2024/06/chapli-kabab1-1152x1536.jpg"
  },
  {
    id: 5,
    title: "Seekh Kebab",
    description: "Seekh Kebabs are one of Pakistan’s most popular and flavorful street foods, celebrated for their smoky aroma, tender texture, and perfectly spiced taste. Made from minced beef or lamb, the meat is blended with a carefully balanced mix of spices such as cumin, coriander, garam masala, chili, ginger, and garlic, sometimes with fresh herbs like cilantro and mint for extra freshness. The seasoned meat is then molded onto skewers and grilled over hot charcoal, which imparts a rich, smoky flavor and gives the kebabs a slightly crisp exterior while keeping the inside juicy and succulent. Typically served hot with naan, parathas, or as part of a larger meal, Seekh Kebabs are often accompanied by chutneys, onions, and lemon wedges, enhancing their savory taste. Loved across Pakistan, they are a staple at roadside food stalls, festivals, and family gatherings, embodying the country’s vibrant street food culture and offering a perfect combination of spice, texture, and aroma that makes them irresistible to meat lovers.",
    image: "https://www.teaforturmeric.com/wp-content/uploads/2018/10/Seekh-Kebab-4-1024x1536.jpg"
  },
  {
    id: 6,
    title: "Samosa",
    description: "Pakistani Samosa is a beloved snack that has earned its place as a staple of tea-time and festive gatherings across the country. This deep-fried, golden triangular pastry is filled with a savory mixture that can include spiced potatoes, peas, lentils, or minced meat, all seasoned with a fragrant blend of cumin, coriander, garam masala, green chilies, and fresh herbs. The crisp, flaky outer layer perfectly contrasts with the soft, flavorful filling, creating a delightful combination of textures in every bite. Samosas are enjoyed at home, at street food stalls, and during special occasions such as Ramadan, Eid, and weddings, often served alongside tangy chutneys or yogurt for an extra burst of flavor. Beyond being a delicious snack, Samosas hold cultural significance as a symbol of hospitality and sharing, bringing families and friends together over tea or evening gatherings. Their irresistible aroma, crunchy exterior, and richly spiced interior make Pakistani Samosas an iconic and much-loved treat throughout the country.",
    image: "https://cdn.pixabay.com/photo/2022/02/04/02/34/samosa-6991771_1280.jpg"
  },
  {
    id: 7,
    title: "Chicken Karahi",
    description: "Pakistani Chicken Karahi is a vibrant and aromatic curry that holds a cherished place in the country’s culinary heritage. Named after the traditional wok-like pan called a “karahi” in which it is cooked, this dish features succulent pieces of chicken simmered in a rich, spiced tomato-based gravy infused with garlic, ginger, and a carefully balanced blend of spices such as cumin, coriander, turmeric, and red chili. Green chilies, fresh coriander, and julienned ginger are often added as a garnish, enhancing both the flavor and visual appeal of the dish. The cooking process allows the spices and tomato gravy to meld perfectly with the tender chicken, creating a curry that is deeply flavorful, slightly tangy, and delightfully spicy. Chicken Karahi is traditionally served hot with naan, roti, or steamed rice, making it a staple at family meals, festive occasions, and street food stalls alike. Loved across Pakistan, this dish is celebrated not only for its bold flavors but also for the comforting warmth and communal spirit it brings to the dining table, embodying the essence of Pakistani home-cooked cuisine.",
    image: "https://jamilghar.com/wp-content/uploads/2022/01/chicken-karahi9-960x960.jpg.webp"
  },
  {
    id: 8,
    title: "Mutton Kharai",
    description: "Pakistani Mutton Kharai is a rich, flavorful, and aromatic curry that is a staple of traditional Pakistani cuisine, especially in North and Central regions of the country. Prepared with tender pieces of mutton, this dish is cooked in a wok-like pan called a “karahi,” allowing the meat to absorb the bold flavors of tomatoes, green chilies, garlic, ginger, and a carefully blended mix of spices including cumin, coriander, and garam masala. The slow-cooking process ensures that the mutton becomes succulent and infused with the rich, spicy gravy, while fresh coriander and julienned ginger are often added as garnish to enhance both flavor and presentation. Mutton Kharai is traditionally served piping hot with naan, roti, or steamed rice, making it a perfect dish for family gatherings, festive occasions, and special meals. Loved for its hearty and robust taste, this dish embodies the essence of Pakistani home-cooked meals, offering a delightful combination of tender meat, bold spices, and a comforting, aromatic gravy that reflects the country’s rich culinary heritage.",
    image: "https://fatimacooks.net/wp-content/uploads/2020/03/IMG_3066-scaled.jpg"
  },
  {
    id: 9,
    title: "Gulab Jamun",
    description: "Pakistani Gulab Jamun is one of the most beloved and iconic desserts in the country, celebrated for its rich sweetness, soft texture, and aromatic flavor. Made from dough balls prepared with khoya (reduced milk solids) or milk powder, these spheres are deep-fried to a golden brown perfection and then soaked in a fragrant sugar syrup infused with cardamom, rose water, or saffron, allowing them to absorb the syrup and become melt-in-the-mouth soft. Gulab Jamun is a centerpiece at weddings, festivals like Eid, and other celebratory occasions, symbolizing joy and indulgence. Often served warm or at room temperature, it can be paired with ice cream, nuts, or simply enjoyed on its own, providing a heavenly balance of sweetness and aroma. Beyond its delightful taste, Gulab Jamun holds cultural significance as a symbol of hospitality and festivity, bringing families and communities together to share this classic dessert that has been cherished for generations across Pakistan.",
    image: "https://www.vegrecipesofindia.com/wp-content/uploads/2022/10/gulab-jamun.jpg"
  },
  {
    id: 10,
    title: "Jalebi",
    description: "Pakistani Jalebi is a vibrant and irresistibly sweet dessert that holds a special place in the country’s culinary tradition, often enjoyed as a breakfast treat, snack, or festive indulgence. Made from a fermented batter of flour and yogurt, the batter is piped into hot oil in delicate spiral or circular shapes, deep-fried until crisp and golden, and then immediately soaked in a fragrant sugar syrup infused with cardamom, saffron, or rose water. The result is a dessert with a perfectly crunchy exterior and a sticky, syrupy interior that melts in the mouth, delivering a burst of sweetness with every bite. Jalebi is commonly served warm, sometimes alongside milk, rabri, or yogurt, enhancing its rich flavor and texture. Beyond its delicious taste, Jalebi is culturally significant in Pakistan, often prepared during festivals, weddings, and special gatherings, symbolizing celebration, happiness, and the joy of sharing sweet moments with family and friends. Its bright orange-golden spirals are not just a treat for the palate but also a visual delight, making Jalebi an enduring favorite across the country.",
    image: "https://ministryofcurry.com/wp-content/uploads/2022/03/Jalebi-9.jpg"
  }
];

  return (
      <div className="my-24 mt-54 px-6 md:px-16 h-full">

    <h2 className="text-4xl font-bold mb-16 text-center text-green-600">
      Pakistani Famous Cuisine
    </h2>

    <div className="space-y-24">
      {PakistanCuisines.map((cuisine) => (
        <div
          key={cuisine.id}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start"
        >

          {/* LEFT SIDE → Title + Image */}
          <div>
            <h3 className="text-3xl font-bold mb-6">{cuisine.title}</h3>

            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src={cuisine.image}
                alt={cuisine.title}
                className="w-full h-[420px] object-cover"
              />
            </div>
          </div>

          {/* RIGHT SIDE → Description */}
          <div className="flex justify-center items-start mt-14">
            <p className="text-gray-600 leading-relaxed text-justify">
              {cuisine.description}
            </p>
          </div>
        </div>
      ))}
      {/* Video Section */}
                <div className="mt-16 flex justify-between gap-8">
  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/gwipMaoQZ9o?si=sHeFRi5tNI305yGQ"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
  ></iframe>

  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/vQMo2Sg1p-Y?si=wtZa55yoPI1BilnS"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
  ></iframe>
</div>

    </div>
  </div>
);
}

export default Cuisine