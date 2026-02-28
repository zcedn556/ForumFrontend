import type CommunityProps from "../components/interfaces/CommunityProps";
import "../css/Community.css"

export default function Community({ name, creationDate }: CommunityProps) {
    return (
        <div className="community-item">
            <h3>{name}</h3>
            <p>Date of Creation: {creationDate.toDateString()}</p>
        </div>
    );
}