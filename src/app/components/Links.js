import Location from "../../../public/Location";
import Website from "../../../public/Website";
import Twitter from "../../../public/Twitter";
import Company from "../../../public/Company";
import "../sass/components/Links.scss";
import Link from "next/link";

export default function Links({ data }) {
  return (
    <div className="flex flex-col mt-6 gap-4">
      {data.location ? (
        <div className="link">
          <Location />
          <p>{data.location}</p>
        </div>
      ) : (
        <div className="link unactive">
          <Location />
          <p>Not Available</p>
        </div>
      )}
      {data.website ? (
        <Link className="link active" href={data.website}>
          <Website />
          <p>{data.website}</p>
        </Link>
      ) : (
        <div className="link unactive">
          <Website />
          <p>Not Available</p>
        </div>
      )}
      {data.twitter ? (
        <Link
          className="link active"
          href={`https://twitter.com/${data.twitter}`}
        >
          <Twitter />
          <p>{data.twitter}</p>
        </Link>
      ) : (
        <div className="link unactive">
          <Twitter />
          <p>Not Available</p>
        </div>
      )}
      {data.company ? (
        <Link
          className="link active"
          href={`https://github.com/${data.company.replace("@", "")}`}
        >
          <Company />
          <p>{data.company}</p>
        </Link>
      ) : (
        <div className="link unactive">
          <Company />
          <p>Not Available</p>
        </div>
      )}
    </div>
  );
}
