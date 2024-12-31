"use client";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Content from "./components/Content";

export default function Home() {
  const [data, setData] = useState();
  const [notFound, setNotFound] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`https://api.github.com/users/octocat`);
      const data = await res.json();

      if (data.message === "Not Found") {
        setNotFound(true);
      } else {
        setData(data);
      }
    };

    fetchData().catch(console.error);
  }, []);

  return (
    <div className="max-w-[730px] mx-auto">
      <Header />
      <SearchBar
        setData={setData}
        setNotFound={setNotFound}
        notFound={notFound}
      />
      <Content data={data} />
    </div>
  );
}
