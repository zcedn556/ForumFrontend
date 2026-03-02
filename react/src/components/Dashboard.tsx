import CommunityList from "./CommunityList";
import DiscussionList from "./DiscussionList";
import type DashboardData from "./interfaces/DashboardData";

export default function Dashboard({discussions, communities}: DashboardData )
{
    return (
        <>
            <div className='main-container'>
                <div className="discussion-list">
                    <DiscussionList discussions={discussions} />
                </div>
                <div className='community-list-wrapper'>
                <div className='community-banner'><h3>Communities</h3></div>
                <div className="community-list">
                    <CommunityList communities={communities} />
                </div>
                </div>
            </div>
        </>
    )
}