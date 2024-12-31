import Links from "./Links";
import Bio from "./Bio";
import Stats from "./Stats";
import Image from "next/image";

export default function Content({ data }) {
  return (
    <section className=" mt-4 md:mt-6 bg-foreground flex px-6 pt-8 pb-12 md:p-10 lg:p-12 rounded-2xl shadow-custom">
      {data && (
        <>
          {data.avatar_url && (
            <Image
              src={data.avatar_url}
              alt="Avatar"
              height={117}
              width={117}
              className="rounded-full hidden lg:block h-[117px] w-[117px] mr-9"
            />
          )}
          <div className="w-full">
            <Bio data={data} />
            <Stats data={data} />
            <Links data={data} />
          </div>
        </>
      )}
    </section>
  );
}
