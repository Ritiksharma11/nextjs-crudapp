import Link from "next/link";

async function getPostData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    return res.json();
}

const Posts = async () => {
    const posts = await getPostData();
    return (
        <div>
            <h1 className="text-4xl text-center mb-4 ">Posts Page</h1>
            <ul className="flex flex-col gap-4 ">
                {
                    posts.map((post) => (
                        <Link key={post.id} href={`/posts/${post.id}`} >
                            <li className="bg-gray-100 rounded-md p-2 " >
                                <h4 className="text-xl font-semibold mb-2 " >{post.title}</h4>
                                <p>{post.body}</p>
                            </li>
                        </Link>
                    ))
                }
            </ul>
        </div>
    )
}

export default Posts