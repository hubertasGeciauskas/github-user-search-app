import Location from "../../../public/Location";
import Website from "../../../public/Website";
import Twitter from "../../../public/Twitter";
import Company from "../../../public/Company";
import "../sass/components/Links.scss";
import Link from "next/link";

export default function Links({ data }) {
  return (
    <>
      {/* First column */}
      <div className="flex flex-col md:flex-1 md:flex-row mt-6 md:mt-[30px] lg:mt-[37px] gap-4">
        {data.location ? (
          <div className="link md:flex-1">
            <Location />
            <p>{data.location}</p>
          </div>
        ) : (
          <div className="link unactive md:flex-1">
            <Location />
            <p>Not Available</p>
          </div>
        )}
        {data.website ? (
          <Link className="link active md:flex-1" href={data.website}>
            <Website />
            <p>{data.website}</p>
          </Link>
        ) : (
          <div className="link unactive md:flex-1">
            <Website />
            <p>Not Available</p>
          </div>
        )}
      </div>

      <div className="flex flex-col md:flex-row mt-4  gap-4 ">
        {data.twitter ? (
          <Link
            className="link active md:flex-1"
            href={`https://twitter.com/${data.twitter}`}
          >
            <Twitter />
            <p>{data.twitter}</p>
          </Link>
        ) : (
          <div className="link md:flex-1 unactive">
            <Twitter />
            <p>Not Available</p>
          </div>
        )}
        {data.company ? (
          <Link
            className="link active md:flex-1"
            href={`https://github.com/${data.company.replace("@", "")}`}
          >
            <Company />
            <p>{data.company}</p>
          </Link>
        ) : (
          <div className="link md:flex-1 unactive">
            <Company />
            <p>Not Available</p>
          </div>
        )}
      </div>
    </>
  );
}
