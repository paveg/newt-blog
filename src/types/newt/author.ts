import type { Image } from './image'

export interface Author {
  _id: string
  fullName: string
  slug: string
  biography: string // HTML
  profileImage: Image | null
}
