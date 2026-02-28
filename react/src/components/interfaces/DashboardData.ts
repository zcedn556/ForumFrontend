import type CommunityProps from "./CommunityProps";
import type DiscussionProps from "./DiscussionProps";

export default interface DashboardData
{
    discussions: Array<DiscussionProps>;
    communities: Array<CommunityProps>;
}