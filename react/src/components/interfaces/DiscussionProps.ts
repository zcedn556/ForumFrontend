export default interface DiscussionProps{
    readonly id: number;
    theme: string;
    description: string;
    creationDate: Date
    imageUrl: string | null;
    userId: number;
    communityId: number;
}