import { useState, useEffect } from "react";
import { faker } from "@faker-js/faker";
import Image from "next/image";

function Suggestions() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const suggestions = [...Array(5)].map((_, i) => ({
      avatar: faker.internet.avatar(),
      username: faker.internet.userName(),
      cityname: faker.address.cityName(),
      country: faker.address.country(),
      id: i,
    }));

    setSuggestions(suggestions);
  }, []);

  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
        <button className="text-gray-600 font-semibold">See All</button>
      </div>

      {suggestions.map((profile) => (
        <div
          key={profile.id}
          className="flex items-center justify-between mt-3"
        >
          <Image
            src={profile.avatar}
            className="w-10 h-10 rounded-full border p-[2px]"
            alt="avatar"
            width={100}
            height={100}
          />

          <div className="flex-1 ml-4">
            <h2 className="font-semibold text-sm">{profile.username}</h2>
            <h3 className="text-xs text-gray-400">
              From {profile.cityname}, {profile.country}
            </h3>
          </div>

          <button className="text-blue-400 text-sm font-bold">Follow</button>
        </div>
      ))}
    </div>
  );
}
export default Suggestions;
