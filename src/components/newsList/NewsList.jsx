import { NewsItem } from "../newsItem/NewsItem";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NewsItemSkeleton } from "../skeletons/NewsItemSkeleton";
import { ErrorBounder } from "../errorBounder/ErrorBounder";
export const NewsList = (props) => {

    const { loading } = props


    const uniqueItems = props.data.filter(
        (item, index, self) =>
            index === self.findIndex(obj => obj.id === item.id)
    );

    const items = uniqueItems.map(({ author, title, description, image, url, content, publishedAt, id, source }) => {
        return <NewsItem author={author} title={title} description={description} url={url} source={source} image={image} content={content} date={publishedAt} key={id} />
    })
    return (
        <div className="container my-4">
            <ul className="list-unstyled">
                <ErrorBounder >
                    {items}
                </ErrorBounder>

                {loading ? [<NewsItemSkeleton key={'7578571'} />, <NewsItemSkeleton key={'31515511'} />, <NewsItemSkeleton key={'75awdawd78571'} />, <NewsItemSkeleton key={'31w515511'} />] : ''}
            </ul>
            <div className="text-center mt-4">
                <button
                    className="btn btn-primary" onClick={props.onAll} disabled={loading}>
                    {loading ? 'Loading...' : 'Load more'}
                </button>
            </div>
        </div>
    );
}