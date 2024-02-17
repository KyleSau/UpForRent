export default async function PostPage({ params }: { params: { id: number } }) {


    const thread = await prisma?.thread.findUnique(
        {
            where:
            {
                id: parseInt(params.id)
            }
        }
    );

    const posts = await prisma?.post.findMany(
        {
            where: {
                threadId: thread?.id
            }
        }
    );

    return (
        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">{thread?.title}</h1>
            <p className="mb-8">{thread?.content}</p>
            <ul>
                {posts?.map((post) => (
                    <li key={post.id} className="mb-4 p-4 bg-gray-100 rounded-md">
                        <p>{post.content}</p>
                        <div className="mt-2 text-sm text-gray-600">
                            Posted by {post.userId} on {new Date(post.createdAt).toLocaleDateString()}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );

}