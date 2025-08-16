import { useState, useEffect } from "react";

export default function Dog() {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("");
  const [dogImage, setDogImage] = useState("");

  useEffect(() => {
    async function fetchDogData() {
      const response = await fetch("https://dog.ceo/api/breeds/list/all");
      const data = await response.json();
      setBreeds(Object.keys(data.message));
    }
    fetchDogData();
  }, []);

  useEffect(() => {
    async function fetchImage() {
      if (selectedBreed) {
        const requestUrl = `https://dog.ceo/api/breed/${selectedBreed}/images/random`;
        const response = await fetch(requestUrl);
        const data = await response.json();
        setDogImage(data.message);
      } else {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await response.json();
        setDogImage(data.message);
      }
    }
    fetchImage();
  }, [selectedBreed]);

  return (
    <div>
      <h2>
        {selectedBreed
          ? selectedBreed.charAt(0).toUpperCase() + selectedBreed.slice(1)
          : "Random Dog"}
      </h2>
      <select
        value={selectedBreed}
        onChange={(e) => setSelectedBreed(e.target.value)}
      >
        <option value="">--Choose a breed--</option>
        {breeds.map((breed) => (
          <option key={breed} value={breed}>
            {breed.charAt(0).toUpperCase() + breed.slice(1)}
          </option>
        ))}
      </select>
      {dogImage && (
        <div>
          <img
            src={dogImage}
            alt={selectedBreed || "Random Dog"}
            style={{
              maxWidth: "300px",
              marginTop: "20px",
              borderRadius: "10px",
              border: "2px solid #000",
            }}
          />
        </div>
      )}
    </div>
  );
}
