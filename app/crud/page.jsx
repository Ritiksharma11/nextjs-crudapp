import AddPost from '../../components/AddPost'
import PostList from '../../components/PostList'

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Crud = async () => {
  const posts = await getData();
  return (
    <div className='max-w-5xl mx-auto  '>
      <div className="flex flex-col gap-4 py-4 ">
        <h1 className='text-3xl font-semibold '>Todo List</h1>
        <AddPost />
      </div>

      <PostList posts={posts} />
    </div>
  )
}

export default Crud