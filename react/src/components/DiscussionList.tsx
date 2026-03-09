import Discussion from "../partials/Discussion";
import type DiscussionListProps from "./interfaces/DiscussionListProps";
import "../css/DiscussionList.css"
import { Link } from "react-router-dom";

export default function DiscussionList({ discussions }: DiscussionListProps) {
  return (
    <>
      {discussions.map((item) => (
        <div key={`${item.userId}-${item.creationDate.getTime()}`}>
          <Link style={{textDecoration: "none"}} to={`/discussions/${item.id}`}>
            <Discussion
            id={item.id}
            theme={item.theme}
            description={item.description}
            creationDate={item.creationDate}
            userId={item.userId}
            imageUrl={item.imageUrl}
            communityId={item.communityId}
          />
          </Link>
        </div>
      ))}
    </>
  );
}
