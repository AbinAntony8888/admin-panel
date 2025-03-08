"use client";

import React from "react";

// Dummy news data
const dummyNews = [
  {
    id: 1,
    title: "Breaking News: Major Event Unfolds",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl lacinia mi, nec tincidunt nulla lorem nec urna.",
    date: "March 8, 2025",
    image: "https://www.iiss.org/globalassets/media-library---content--migration/images-delta/comment/military-balance-blog/2024/03/886x486-mb-blog-russia.png",
  },
  {
    id: 2,
    title: "Tech Update: New Gadget Released",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
    date: "March 7, 2025",
    image: "https://media.thegaze.media/thegaze-october-prod/media/24-Winner-Year/June-24/06-06-24/hi-tech-06-24/Hi-tech-human-06-06.jpg",
  },
  {
    id: 3,
    title: "Market Watch: Stocks Surge",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.",
    date: "March 6, 2025",
    image: "https://via.placeholder.com/600x400",
  },
  {
    id: 4,
    title: "Sports Update: Local Team Wins Championship",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.",
    date: "March 5, 2025",
    image: "https://via.placeholder.com/600x400",
  },
];

// Single editorial story dummy data
const dummyEditorial = {
  id: 1,
  title: "Editorial: The Future of Technology",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt.",
  date: "March 8, 2025",
  image: "https://imageio.forbes.com/specials-images/imageserve/6200b0dddcf32d3be937fa84/The-5-Technologies-That-Will-Change-The-Future-Of-The-Human-Race/960x0.jpg?height=399&width=711&fit=bounds",
};

const NewsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-5xl font-bold font-serif text-center mb-8">Latest News</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main news section */}
          <div className="md:col-span-2 grid grid-cols-1 gap-8">
            {dummyNews.map((news) => (
              <div
                key={news.id}
                className="bg-white shadow-md rounded-md overflow-hidden"
              >
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-2xl font-bold mb-2">{news.title}</h2>
                  <p className="text-gray-600 text-sm mb-4">{news.date}</p>
                  <p className="text-gray-700">{news.description}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Editorial sidebar with one editorial story */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold mb-4">Editorial</h2>
            <div className="bg-white shadow-md rounded-md overflow-hidden">
              <img
                src={dummyEditorial.image}
                alt={dummyEditorial.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">
                  {dummyEditorial.title}
                </h3>
                <p className="text-gray-600 text-sm mb-2">
                  {dummyEditorial.date}
                </p>
                <p className="text-gray-700">{dummyEditorial.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
