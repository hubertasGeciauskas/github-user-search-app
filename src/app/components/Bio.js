import Image from "next/image";

export default function Bio({ data }) {
  return (
    <>
      {/* Avatar */}
      <div className="flex gap-5">
        {/* Avatar image */}
        {data.avatar_url && (
          <Image
            src={data.avatar_url}
            alt="Avatar"
            height={70}
            width={70}
            className=" lg:hidden rounded-full h-[70px] w-[70px] md:h-[117px] md:w-[117px]"
          />
        )}
        {/* Avatar info */}
        <div className="flex flex-1 flex-col lg:flex-row lg:justify-between">
          <div>
            {data.name ? <h1>{data.name}</h1> : <h1>{data.login}</h1>}
            {data.name ? <h3>@{data.name}</h3> : <h3>@{data.login}</h3>}
          </div>

          <div>
            {data.created_at && (
              <>
                Joined{" "}
                {new Intl.DateTimeFormat("en-US", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })
                  .format(new Date(data.created_at))
                  .replace(",", "")}
              </>
            )}
          </div>
        </div>
      </div>
      {/* Bio */}
      <div className="mt-8 lg:mt-5">
        {data.bio ? (
          <p>{data.bio}</p>
        ) : (
          <p className="opacity-75">This profile has no bio</p>
        )}
      </div>
    </>
  );
}
