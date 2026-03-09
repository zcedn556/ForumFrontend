import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../css/DiscussionPage.css";
import type DiscussionProps from "../components/interfaces/DiscussionProps";

export const API_URL = import.meta.env.VITE_API_URL;


export default function DiscussionPage() {

  const { id } = useParams();
  const [discussion, setDiscussion] = useState<DiscussionProps | null>(null);

  useEffect(() => {
    fetch(`${API_URL}/discussions/${id}`)
      .then(res => res.json())
      .then(data => setDiscussion(data))
      .catch(err => console.error(err));
  }, [id]);

  if (!discussion) {
    return <h2 className="loading">Loading...</h2>;
  }

  return (
    <div className="discussion-container">

      <div className="discussion-card">

        {discussion.imageUrl && (
          <img
            className="discussion-image"
            src={discussion.imageUrl}
            alt={discussion.theme}
          />
        )}

        <div className="discussion-content">

          <h1 className="discussion-title">
            {discussion.theme}
          </h1>

          <div className="discussion-meta">
            <span>Created:</span>
            <span>
              {new Date(discussion.creationDate).toLocaleDateString()}
            </span>
          </div>

          <p className="discussion-description">
            {discussion.description}
          </p>

        </div>

      </div>

    </div>
  );
}