// import GhostContentAPI from '@tryghost/content-api';
import Link from 'next/link';

import { getPosts } from '../api/posts';
import Layout from '../components/layout';
// import Card from '../components/layout'



const Index = (props) => (
    <Layout>
        <h1 className = 'center'>
            B.L.O.G.S
        </h1>
        <div class="fixed-action-btn">
            <Link href='https://thevatsalsaglani.xyz'><a class="btn-floating btn-large red">
                <i class="inhouse-home-btn medium material-icons yellow">person</i>
            </a></Link>

        </div>

        <div className="row">
            {props.posts.map(post => (
                <div key={post.id} className='col s12 m6 l6 xl4 post-card'>
                    <div className="card">
                        <div className="card-image waves-effect waves-block waves-light">
                            <img className='activator' src={post.feature_image}></img>

                        </div>
                        <div className="card-content">
                            <span className="card-title activator grey-text text-darken-4">{post.title}<i class="material-icons right">more_vert</i></span>

                        </div>
                        <div className='inhouse-tags'>
                                {post.tags.map(tag => <span className='new badge teal' data-badge-caption={tag.name}></span>)}
                            </div>
                        <div className='card-reveal'>
                            <span className='card-title grey-text text-darken-4'>
                                <i class="material-icons right">close</i>
                            </span>

                            {/* <span ><img src = {post.primary_author.profile_image} class = 'circle' width = '7%'></img>
                            <span><p>{post.primary_author.name}</p></span></span> */}
                            <div>
                                <ul className="collection">
                                    <li className="collection-item avatar">
                                        <img src={post.primary_author.profile_image} width="10%" alt="" className="circle"></img>
                                        <span className="title">{post.primary_author.name}</span>
                                    </li>
                                </ul>
                            </div>
                            {/* <h6>Tags:</h6 >


                            <div className='inhouse-tags'>
                                {post.tags.map(tag => <span className='new badge teal' data-badge-caption={tag.name}></span>)}
                            </div> */}

                        </div>

                        <div className="card-action">
                            <Link href={`/[slug]`} as={`/${post.slug}`}>
                                <a>Read More</a>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>



    </Layout>



);

Index.getInitialProps = async () => {
    const posts = await getPosts();
    return { posts: posts }
}





export default Index;