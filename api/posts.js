import GhostContentAPI from '@tryghost/content-api';
import ghostapikey from '../keys/ghostapi'
// const api = new GhostContentAPI({
//     url: 'http://localhost:2368',
//     key: 'da4dab62f40b027f55556489e8',
//     version: 'v2'
// });

const api = new GhostContentAPI(ghostapikey)

export async function getPosts() {
    return await api.posts
      .browse({
        include: "tags,authors",
        limit: "all"
        
      })
      .catch(err => {
        console.log(err);
      });
  }

export async function getSinglePost(postSlug) {
    return await api.posts.read({
        slug: postSlug
    })
    .catch(err => {
        console.log(err);
    })
}

