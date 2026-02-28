import Community from "../partials/Community";
import type CommunityListProps from "./interfaces/CommunityListProps";
import "../css/CommunityList.css"

export default function CommunityList({ communities }: CommunityListProps ) {
    return (
        <>
          {communities.map((item) => (
            <div key={`${item.name}-${item.creationDate.getTime()}`}>
              <Community
                name={item.name}
                creationDate={item.creationDate}
              />
            </div>
          ))}
        </>);
}