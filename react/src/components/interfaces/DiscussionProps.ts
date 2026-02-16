export default interface DiscussionProps{
    theme: string;
    description: string;
    creationDate: Date
    imageUrl: string | null;
    userId: number;
    communityId: number;
}