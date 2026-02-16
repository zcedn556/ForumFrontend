import type DiscussionProps from "../components/interfaces/DiscussionProps";
import "../css/Discussion.css";

export default function Discussion({ theme, description, creationDate, imageUrl, userId, communityId }: DiscussionProps) {
    return (
        <div className="discussion-item">
            <div className="discussion-content">
                <div className="discussion-creator-info">
                    <p>Community id: {communityId} / {creationDate.toDateString()}</p>
                </div>
                <h3>{theme}</h3>
                <p>{description}</p>
                {/* <p>User id: {userId}</p> */}
            </div>
            {imageUrl && <img src={imageUrl.toString()} alt="Discussion Img" />}
        </div>
    );
}
