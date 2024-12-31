export default function Stats({ data }) {
  return (
    <div className=" flex rounded-[10px] bg-background px-4 py-5 mt-7">
      <div className="flex flex-col flex-1 items-center gap-2 md:gap-[1px]">
        <h4>Repos</h4>
        {data.public_repos && <h2>{data.public_repos}</h2>}
      </div>

      <div className="flex flex-col flex-1 items-center gap-2 md:gap-[1px]">
        <h4>Followers</h4>
        {data.followers && <h2>{data.followers}</h2>}
      </div>

      <div className="flex flex-col flex-1 items-center gap-2 md:gap-[1px]">
        <h4>Following</h4>
        {data.following && <h2>{data.following}</h2>}
      </div>
    </div>
  );
}
