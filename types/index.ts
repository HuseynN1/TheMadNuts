interface PostFormData {
    firstName: string,
    lastName: string,
    email: string,
    country: string,
    size: string
}
interface SizesI {
    "men": { label: string, value: string }[],
    "boy": { label: string, value: string }[]
}
export type { PostFormData, SizesI }