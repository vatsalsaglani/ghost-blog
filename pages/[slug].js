import { getSinglePost } from '../api/posts';
import BlogLayout from '../components/bloglayout';
import Link from 'next/link';
import Head from 'next/head';

const PostPage = (props) => {
    return (
        <div>
            <Head>
                <title>{props.post.title}</title>
            </Head>
            <div class="fixed-action-btn">
                <Link href='/'><a class="btn-floating btn-large red">
                    <i class="inhouse-home-btn medium material-icons">home</i>
                </a></Link>

            </div>
            <BlogLayout>
                <h1 className='inhouse-title'>{props.post.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: props.post.html }} />

            </BlogLayout>



        </div>



    )
}

PostPage.getInitialProps = async (params) => {
    const post = await getSinglePost(params.query.slug);
    return { post: post }
}

export default PostPage;