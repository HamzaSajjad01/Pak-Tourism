import React from 'react'

const Peaks = () => {
    const Mountains = [
        {
            id: 1,
            title: "K2 (Karakoram 2)",
            description: "K2, standing at 8,611 meters (28,251 ft) in the Karakoram Range, is the second-highest mountain in the world and lies on the border of Pakistan’s Gilgit-Baltistan and China’s Xinjiang region. Known as the “Savage Mountain”, it is considered far more dangerous than Mount Everest due to its extremely steep slopes, harsh weather, frequent avalanches, and the deadly Bottleneck section near the summit. First surveyed in 1856 and named “K2” during the Great Trigonometrical Survey, it was successfully climbed for the first time in 1954 by Italian climbers Achille Compagnoni and Lino Lacedelli via the Abruzzi Spur route. K2 has earned legendary status among mountaineers because of its technical difficulty and high fatality rate, with only elite climbers attempting it each year. Surrounded by massive glaciers, rugged ridges, and stunning high-altitude landscapes, it stands as the highest peak in Pakistan, a symbol of natural beauty and national pride, and one of the greatest challenges in the world of mountaineering.",
            image: "https://images.unsplash.com/photo-1627896157734-4d7d4388f28b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 2,
            title: "Broad Peak",
            description: "Broad Peak, standing at 8,047 metres (26,401 ft) above sea level, is the 12th-highest mountain in the world and a prominent peak of the Karakoram Range near K2 on the Pakistan–China border. Known for its wide summit plateau stretching nearly 2 kilometers, Broad Peak offers a challenging climb due to its harsh weather conditions, steep icy slopes, and high-altitude exposure.",
            image: "https://images-sp.summitpost.org/tr:e-sharpen,e-contrast-1,fit-max,q-60,h-800/326289.jpg"
        },
        {
            id: 3,
            title: "Gasherbrum I",
            description: "Gasherbrum I, surveyed as K5 and also known as Hidden Peak, is the 11th highest mountain in the world at 8,080 metres (26,510 ft). It is located on the Pakistan–Chinese border and Xinjiang region of China. Gasherbrum I is part of the Gasherbrum massif in the Karakoram region.",
            image: "https://hunzaguidespakistan.com/wp-content/uploads/2022/02/Gasherbrum-1.jpg"
        },
        {
            id: 4,
            title: "Gasherbrum II",
            description: "Gasherbrum II, originally surveyed as K4, rises to 8,035 metres (26,362 ft), making it the 13th-highest mountain in the world. Located on the border between Gilgit–Baltistan, Pakistan, and Xinjiang, China, it is renowned for its striking glaciers and challenging climbing conditions.",
            image: "https://wallpaperaccess.com/full/2762949.jpg"
        },
        {
            id: 5,
            title: "Nanga Parbat",
            description: "Nanga Parbat, locally known as Diamer, rises to 8,126 metres (26,660 ft), making it the ninth-highest mountain in the world. Renowned for its dramatic vertical relief and challenging climbing conditions, Nanga Parbat has earned a reputation as one of the most formidable peaks in the world.",
            image: "https://www.mountainsoftravelphotos.com/Nanga%20Parbat/Nanga%20Parbat%20Rupal%20Face/slides/20%20Nanga%20Parbat%20Rupal%20Face%20From%20Bazhin%20Glacier%20Just%20Past%20Rupal%20Face%20Base%20Camp.jpg"
        },
    ]

    return (
        <section className="w-full mt-54 px-6 md:px-16">
            {/* Section Header */}
            <div className='text-center mb-16'>
                <h2 className='text-5xl text-green-600 font-bold'>Peaks</h2>
                <p className='text-gray-500 text-justify mt-4'>
                    Pakistan is home to 108 peaks above 7,000 metres and probably as many peaks above 6,000 m. Five of the 14 highest independent peaks in the world (the eight-thousanders) are in Pakistan.
                </p>
            </div>

            {/* Mountains List */}
            <div className='space-y-24'>
                {Mountains.map((m, index) => (
                    <div key={m.id} className='flex flex-col md:flex-row items-start gap-12'>
                        {/* Image */}
                        <div className={`md:w-1/2 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                            <img src={m.image} alt={m.title} className="rounded-xl w-full object-cover shadow-lg" />
                        </div>

                        {/* Description */}
                        <div className="md:w-1/2 flex flex-col justify-start -mt-4">
                            <h3 className="text-3xl font-bold text-left mb-4">{m.title}</h3>
                            <p className="text-gray-500 text-justify">{m.description}</p>
                        </div>
                    </div>
                ))}

                {/* Video Section */}
                <div className="mt-16">
                    <video
                        width="100%"
                        height="auto"
                        src="https://salampakistan.gov.pk/assets/videos/SalamPakistan.mp4"
                        controls
                        poster="https://images.pexels.com/photos/33302385/pexels-photo-33302385.jpeg"
                        className="rounded-2xl"
                    ></video>
                </div>
            </div>
        </section>
    )
}

export default Peaks
