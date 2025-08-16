import { useEffect, useState } from "react";

export default function Petfinder() {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    async function fetchPets() {
      // Fetch from local proxy server
      const response = await fetch("http://localhost:3001/api/pets");
      const data = await response.json();
      console.log(data);
      setAnimals(data.animals || []);
    }

    fetchPets();
  }, []);
}
