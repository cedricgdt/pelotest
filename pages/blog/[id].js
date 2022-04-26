import Link from "next/link"

export default function Post ({post}) {
  return (
    <div>
      <Link href="/">
        <a>Home Page</a>
      </Link>
      <h1><span>{ post.id}</span> - { post.title }</h1>
      <p>{ post.body }</p>
    </div>
  )
}

export async function getStaticProps ({params}) {
  const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`).then((res) => {
    return res.json()
  })

  return {
    props: {
      post
    }
  }
}

export async function getStaticPaths () {
  const posts = await fetch(`https://jsonplaceholder.typicode.com/posts`).then((res) => {
    return res.json()
  })

  return {
    paths: posts.map((post) => ({
      params: { id: post.id.toString() }
    })),
    fallback: false
  }
}

