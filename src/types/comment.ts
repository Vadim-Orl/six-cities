export type User = {
    id: number,
    name: string,
    avatarUrl: string,
    isPro: boolean,
}

export type Comment = {
    id: number,
    user: User,
    comment: string,
    date: string,
    rating: number,
}

export type TListReviews = Comment []