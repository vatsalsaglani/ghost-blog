import Head from 'next/head';
// import Navbar from './navbar';

const Layout = (props) => (
    <div>
        <Head>
            <title>Blogs</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"></link>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
            <script async src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>

        </Head>
        {/* <Navbar /> */}
        <div className = 'inhouse-banner'>

        </div>

        <div className = 'container'>
        
        {props.children}


        </div>
      

        <style jsx global>
            {
                `
                @import url('https://fonts.googleapis.com/css?family=Roboto+Slab&display=swap');
                @import url('https://fonts.googleapis.com/css?family=Courier+Prime&display=swap');



               

            div {
                font-family: 'Roboto Slab', serif;
            }

            .inhouse-banner {
                margin-top: -220px;
                height: 580px;
                width: 100%;
                background: #f7bb2f;
                position: absolute;
                z-index: -11111;
                // border-radius: 100px;
            }
            
            h1 {
                color: white;
                padding-bottom: 20px;
                text-align: center;
                font-family: 'Courier Prime', monospace;
                font-size: 60px;
                // letter-spacing: 0.2em;
            }

            .card {
                color: #3d3d4b;
                border-radius: 1%;
                elevation: 180deg;
            }

            .collection {
                background: #eff0f1;
                border: none;
            }

            .collection-item {
                background: #eff0f1;
            }
            .inhouse-home-btn {
                background-color: #798fa8;
            }

            .inhouse-tags {
                display: inline-block;
                padding-bottom: 18px;
                padding-left: 10px;
                padding-top: 20px;
                padding-right: 10px;
                margin-top: 8px;
            }
            `
            }
            </style>
    </div>
)

export default Layout;