import Discussion from "../partials/Discussion";
import type DiscussionListProps from "./interfaces/DiscussionListProps";
import "../css/DiscussionList.css"

export default function DiscussionList({ discussions }: DiscussionListProps) {
  return (
    <>
      {discussions.map((item) => (
        <>
        <div key={`${item.userId}-${item.creationDate.getTime()}`} className="discussion-list">
          <Discussion
            theme={item.theme}
            description={item.description}
            creationDate={item.creationDate}
            userId={item.userId}
            imageUrl={item.imageUrl}
            communityId={item.communityId}
          />
        </div>
        </>
      ))}
    </>
  );
}
