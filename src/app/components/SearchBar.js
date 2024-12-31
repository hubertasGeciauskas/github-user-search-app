"use client";
import Search from "../../../public/Search";
import { useRef } from "react";

export default function SearchBar({ setData, setNotFound, notFound }) {
  const userRef = useRef();
  async function handleSearch() {
    setNotFound(false);

    const user = userRef.current.value;

    const res = await fetch(`https://api.github.com/users/${user}`);
    const data = await res.json();
    console.log(data);

    if (data.message === "Not Found") {
      setNotFound(true);
    } else {
      setData(data);
      userRef.current.value = "";
    }
  }
  return (
    <section className="mt-9 flex items-center justify-between p-2 bg-foreground rounded-2xl shadow-custom">
      <form className="flex flex-1 items-center w-full md:w-auto">
        <Search className="ml-4 md:ml-8 mr-2 md:mr-6" />
        <input
          ref={userRef}
          className="bg-foreground appearance-none border-none outline-none flex-grow cursor-pointer"
          type="text"
          placeholder="Search GitHub username…"
        />
      </form>

      <div className="flex items-center gap-6">
        {notFound === true && <p className="text-[#f74646]">Not Found</p>}
        <input
          onClick={handleSearch}
          className="w-[84px] h-[46px] md:w-[106px] md:h-[50px] bg-[#0079ff] hover:bg-[#60abff] rounded-[10px] cursor-pointer"
          type="submit"
          value="Search"
        />
      </div>
    </section>
  );
}
