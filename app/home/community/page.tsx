import Link from "next/link";
import prisma from "@/lib/prisma";

export default async function Home() {

    /*const categories = [
      { id: 0, name: 'General Real Estate Investing' },
      { id: 1, name: 'Starting Out' },
      { id: 2, name: 'Buying & Selling Real Estate' },
      { id: 3, name: 'Market News & Data' },
      { id: 4, name: 'General Info' },
      { id: 5, name: 'Real Estate Strategies' },
      { id: 6, name: 'Landlording & Rental Properties' },
    ];
  
    const subCategories = [
      { id: 0, category: 3, name: 'Market Trends & Data' },
      { id: 1, category: 3, name: 'Buying & Selling Real Estate' },
      { id: 2, category: 3, name: 'Real Estate Technology' },
    ];*/

    const categories = await prisma?.category.findMany();

    const forums = await prisma?.forum.findMany();

    const threads = [
        { id: 0, sub: 3, category: 3, title: 'Surge in Demand and Rising Home Values in Ohio', posted: 'August 19, 1975 23:15:30', authorId: 1, content: 'The real estate market in Ohio has been witnessing higher trends far from what it was before, especially when it comes to cities likeToledo, Cincinnati, Columbus, and Cleveland. Those cities are leading the charge, by showing significant growth in the market. I will go through factors surging Ohio\'s real estate market to the forefront and what this means for investors.The National Association of Realtors identified Toledo as the nation\'s hottest real estate market for this year, despite that it has been only a month in 2024, with Cincinnati (mentioned in my last post), Columbus, and Cleveland not too far behind. Affordability makes these markets key attractions, compared to the national housing landscape, combined with expected home value appreciation and the rapid speed of home sales. These factors are making Ohio\'s cities stand out in a challenging national market still grappling with low inventory and high mortgage rates.' }
    ];

    const replies = [
        { id: 0, thread: 0, userId: 2, content: 'Ohio is going the moon.' }
    ]

    // breadcrumbs
    // pagination
    // seo
    // sign in to post (modal)
    // Log in or sign up to reply
    // recaptcha
    // rate limiting
    // email verification
    // admin dashboard create/remove categories
    // moderator dashboard

    return (
        <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-50">
            <div className="space-y-4 w-full max-w-4xl">
                {categories?.map((category) => (
                    <div key={category.id} className="bg-white rounded-lg shadow overflow-hidden">
                        <h2 className="text-2xl font-semibold text-gray-800 p-5 bg-gray-100 border-b">
                            {category.name}
                        </h2>
                        <div className="p-5">
                            {forums?.filter(forum => forum.categoryId === category.id).map((forum) => (
                                <div key={forum.id} className="my-2">
                                    <h3 className="text-lg font-medium text-gray-700 hover:text-gray-900 cursor-pointer">
                                        <Link href={`/community/${forum.slug}`}>{forum.name}</Link>
                                    </h3>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </main >
    );
}
