import { BtnLoadMore } from "./LoadMore.styled"

export const LoadMore = ({onLoadMoreClick}) => {
    return (
        <>
            <BtnLoadMore type="click" onClick={onLoadMoreClick}>Load More</BtnLoadMore>
        </>
    )
}