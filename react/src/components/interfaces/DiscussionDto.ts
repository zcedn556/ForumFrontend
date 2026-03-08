export default interface DiscussionDto {
  readonly id: number
  theme: string
  description: string
  creationDate: string
  userId: number
  imageUrl: string | null
  communityId: number
}