import { formatDistanceToNow } from 'date-fns';
import prisma from "@/lib/prisma";

export default async function CategoryThreadsPage({
    params,
}: {
    params: { domain: string; slug: string };
}) {

    const threads = await prisma?.thread.findMany(
        // {
        //     where: {}
        // }
    );

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Threads</h1>
            <div className="space-y-4">
                {threads?.map((thread) => (
                    <div key={thread.id} className="p-4 bg-white rounded-lg shadow">
                        <h2 className="text-xl font-semibold">{thread.title}</h2>
                        <div className="mt-4 flex justify-between items-center text-sm text-gray-500">
                            <span>Posted by {thread.userId}</span>
                            {formatDistanceToNow(new Date(thread.createdAt), { addSuffix: true })}
                            {/* <span>{new Date(thread.createdAt).toLocaleDateString()}</span> */}
                        </div>
                        <div className="mt-2">
                            <a href={`/community/${params.slug}/${thread.id}`} className="text-indigo-600 hover:text-indigo-800">Go to {thread.title}</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

}