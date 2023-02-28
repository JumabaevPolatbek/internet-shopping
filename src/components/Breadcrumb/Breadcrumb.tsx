import './Breadcrumb.scss';
import { v4 as uuid } from 'uuid';

export type BreadcrumbType = {
    urls: { link: string, text: string }[]
}



function Breadcrumb(props: BreadcrumbType) {
    const { urls } = props;
    return (
        <div className="container">
            <div className='breadcrumb'>
                <ul>
                    {urls.map((url: any) =>
                        <li key={uuid()}>
                            <a href={url.link}>{url.text}</a>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Breadcrumb;