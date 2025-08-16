import "./style.css";
import { useState, useEffect } from "react";

export default function Cards() {
  const [petFinderAnimals, setPetFinderAnimals] = useState([]);

  useEffect(() => {
    async function fetchPets() {
      // Fetch only dogs in Canada
      const response = await fetch("http://localhost:3001/api/pets?type=dog&country=CA");
      const data = await response.json();
      setPetFinderAnimals(data.animals || []);
    }
    fetchPets();
  }, []);

  return (
    <div className="ummooCardContainer">
      {petFinderAnimals.map((dog) => (
        <div className="ummooCard" key={dog.id}>
          <div className="ummooCard--EdgeblurEffect"></div>
          <div className="ummooCard--img--txt--on--img--container">
            <img
              className="ummooCard--img"
              src={dog.photos[0]?.medium || "default-dog.jpg"}
              alt={dog.name}
            />
            <div className="ummooCard--txt--left--nd--right--on--img--container">
              <div className="left--txt--nd--icon--on--img--container">
                <img
                  className="ummooCard--ummoo-card-location-icon"
                  src=".public/assets/location-icon.svg"
                  alt=""
                />
                <p className="txt--on--img--left">{dog.contact?.address?.city || "Unknown"}, {dog.contact?.address?.country || "CA"}</p>
              </div>
              <div className="right--txt--on--img--container">
                <img
                  className="ummooCard--ummoo-card-location-icon"
                  src=".public/assets/sales-icon.svg"
                  alt=""
                />
                <p className="txt--on--img--rightLeft">Adoption fee</p>
                <p className="txt--on--img--rightRight">{dog.attributes?.adoption_fee || "$200"}</p>
              </div>
            </div>
          </div>
          <div className="ummooCard--header--nd--sub--txt--container">
            <div className="ummooCard--main--nd--sub--txt--container">
              <p className="ummooCard--header-txt">{dog.name}</p>
              <p className="ummoo--sub--txt">{dog.breeds?.primary || "Unknown breed"}</p>
            </div>
            <div className="highlighted--txt--container">
              <div className="highlightd--txt 1">{dog.age}</div>
              <div className="highlightd--txt 2">{dog.gender}</div>
              <div className="highlightd--txt 3">{dog.size}</div>
            </div>
          </div>
          <button className="learnMoreBtn">Learn more</button>
        </div>
      ))}
    </div>

    
  );
}