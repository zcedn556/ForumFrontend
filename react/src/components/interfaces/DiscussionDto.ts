export default interface DiscussionDto {
  theme: string
  description: string
  creationDate: string
  userId: number
  imageUrl: string | null
  communityId: number
}