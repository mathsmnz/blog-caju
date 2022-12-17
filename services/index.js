import {gql, request} from 'graphql-request';
import pThrottle from 'p-throttle'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
const throttle = pThrottle({limit: 5, interval: 1000})

export const throttledFetch = throttle(async (...args) => {
    const [query, vars] = args
    return await request(query, vars)
})

export const getPosts = async () => {
    const query = gql`
        query GetPosts {
            postsConnection {
                edges {
                    node {
                        createdAt
                        excerpt
                        title
                        slug
                        author {
                            bio
                            name
                            pronouns
                            photo {
                                url
                            }
                        }
                        category {
                            slug
                            name
                        }
                        subCategories {
                            slug
                            name
                        }
                        featuredImage {
                            url
                        }
                    }
                }
            }
        }
    `;
    const result = await request(graphqlAPI, query);
    return result.postsConnection.edges;
}

export const getFiles = async () =>{
    const GetFiles = gql`
        query MyQuery {
            filesConnection {
                edges {
                    node {
                        createdAt
                        description
                        name
                        slug
                        category {
                            name
                            slug
                        }
                        subCategories {
                            slug
                            name
                        }
                        mirrorUrl
                        libraryFile {
                            url
                        }
                    }
                }
            }
        }
    `;
    const result = await request(graphqlAPI, query);
    return result.postsConnection.edges;
}

export const getRecentPosts = async () => {
    const query = gql`
        query GetPostDetails{
            posts(
                orderBy: createdAt_ASC
                last: 3
            ){
                title
                featuredImage{
                    url
                }
                createdAt
                slug
            }

        }
    `;
    const result = await request(graphqlAPI, query);
    return result.posts;
}

export const getSimilarPosts = async (subCategories, slug) => {
    const query = gql`
        query GetPostDetails($slug: String!, $subCategories: [String!]) {
            posts(
                where: {slug_not: $slug, AND: {subCategories_some: {slug_in: $subCategories}}}
                last: 3
            ) {
                title
                featuredImage {
                    url
                }
                createdAt
                slug
            }
        }
    `;
    const result = await request(graphqlAPI, query, {slug, subCategories});

    return result.posts;
};

export const getSimilarFiles = async (subCategories, slug) =>{
    const query = gql`
        query GetFileDetails($slug: String!, $subCategories: [String!]){
            files(
                where: {slug_not: $slug, AND: {subCategories_some: {slug_in: $subCategories}}}
                last: 3
            ){
                name
                createdAt
                slug
            }
        }
    `;
    const result = await request(graphqlAPI, query, {slug, subCategories});

    return result.files;
}

export const getPostsByCategory = async (category) =>{
    const query = gql`
        query GetPosts($category: String!) {
            posts(
                where: {category: {slug: $category}}
                last: 3
            ) {
                createdAt
                excerpt
                title
                slug
                author {
                    bio
                    name
                    pronouns
                    photo {
                        url
                    }
                }
                category {
                    slug
                    name
                }
                subCategories {
                    slug
                    name
                }
                featuredImage {
                    url
                }
            }
        }
    `;

    const result = await request(graphqlAPI, query, {category});
    return result.posts;
}

export const getFilesByCategory = async (category) =>{
    const query = gql`
        query GetFile($category: String!){
            files(
                where: {category: {slug: $category }}
                last:3
            ){
                name
                createdAt
                slug
                description
                mirrorUrl
                libraryFile {
                    url
                }
            }
        }
    `;
    const result = await request(graphqlAPI, query, {category});
    return result.files;
}

export const getCategories = async () => {
    const query = gql`
        query GetGategories {
            categories {
                name
                slug
            }
        }
    `;

    const result = await request(graphqlAPI, query);

    return result.categories;
};

export const getPostDetails = async (slug) => {
    const query = gql`
        query GetPostDetails($slug: String!) {
            post(where: {slug: $slug}){
                createdAt
                slug
                title
                excerpt
                author {
                    bio
                    name
                    pronouns
                    photo {
                        url
                    }
                }
                category {
                    slug
                    name
                }
                subCategories {
                    slug
                    name
                }
                featuredImage {
                    url
                }
                content {
                    raw
                }
            }

        }
    `;
    const result = await request(graphqlAPI, query, {slug});
    return result.post;
}

export const submitComment = async (obj) => {
    const result = await fetch('/api/comments', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj),
    })

    return result.json();
}

export const getComments = async (slug) => {
    const query = gql`
        query GetComments($slug: String!) {
            comments(where: {post: {slug: $slug}}){
                name
                createdAt
                comment
            }
        }
    `;

    const result = await request(graphqlAPI, query, {slug});

    return result.comments;
};