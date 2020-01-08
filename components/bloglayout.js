import Head from 'next/head';
import Link from 'next/link'

const BlogLayout = (props) => (
    <div>

        <Head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"></link>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
            <script async src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
            <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.11.0/styles/default.min.css" />
            <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.11.0/highlight.min.js"></script>
            <script src = '../public/highlisht.js'></script>


        </Head>
        <div className="banner-class">
            {/* <img className = 'banner-class' src = 'https://images.pexels.com/photos/1550561/pexels-photo-1550561.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'></img> */}
        </div>
        <div className='container inhouse-content' id="inhouse-content">
            {props.children}

        </div>


            

            <style jsx global>

                {

                    `
                @import url('https://fonts.googleapis.com/css?family=Roboto+Slab&display=swap');
                @import url('https://fonts.googleapis.com/css?family=Inconsolata&display=swap');

                body {
                    margin: 0;
                    padding-top: 10px;
                }

                // .banner-class {
                //     margin-top: -190px;
                //     height: 500px;
                //     width: 100%;
                //     background: #798fa8;
                //     position: absolute;
                //     z-index: -11111;
                //     border-radius: 100px;
                // }
           

                div  {
                    font-family: 'Roboto Slab', serif;
                    
                }

                .inhouse-title {
                    // color: white;
                    // text-decoration: underline;
                }

                .container {
                    padding-top: 50px;
                }

                pre {
                    background: #27221f;
                    color: white;
                    margin: 0.5em 0;
                    padding: 1em;
                    border: 1px solid #dddbcc;
                    border-radius: 5px;
                    elevation: higher;
                    overflow: auto;
                    width: 99%;
                }

                img {
                    width: 99%;
                    border-radius: 0.5%;
                }

                code {
                    padding: 2px 4px;
                    font-family: 'Inconsolata', monospace;
                    color: white;
                    background: #27221f;
                    border-radius: 3px;
                    font-weight: 1000;

                }
            

                figcaption {
                    text-align: center;
                    color: gray;
                    font-style: italic;
                    font-family: 'Sans Serif';

                }

                p {
                    line-height: 1.5em;
                    padding-right: 12%;
                    text-align: justify;
                    margin-left: 12%;
                    font-size: 1.01em;
                    padding-top: 8px;
                    padding-bottom: 8px;
                }

                ul {
                    margin-left: 12%;
                    list-style-type: circle;

                }

                ul li {
                    list-style-type: circle;
                    padding-top: 3px;

                }
                ul:not(.browser-default) > li {
                    list-style-type: initial;
                }

                .inhouse-home-btn {
                    background-color: #798fa8;
                }


          

                // img {
                //     margin-left: 25%;
                //     height: 50%;
                //     width: 50%;
                //     text-align: center;
                //     padding-bottom: 25px;
                // }

                
                
                `

                }

            </style>
        </div>
        )
        
export default BlogLayout;