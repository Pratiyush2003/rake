import { Link, useParams } from 'react-router-dom';
import PopularArticle from '@/components/Blog/PopularArticle';
import { blogs } from '@/components/Blog/constants';
import { useEffect, useState } from 'react';


interface Blog {
    id: number;
    title: string;
    subtitle: string;
    image: string;
    category: string;
}

const BlogPost: React.FC = () => {
    const { category, id } = useParams<{ category: string; id: string }>();
   

    const [getBlogsfromParams, setBlogsfromParams] = useState<Blog | undefined>(
        undefined,
    );
    const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>([]);

    const date = new Date();
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    useEffect(() => {
        if (id && category) {
            const blog = blogs.find((ele) => ele.id === parseInt(id));
            setBlogsfromParams(blog);
            const filterproductbycategory = blogs.filter((ele) => ele.category === category)
            setFilteredBlogs(filterproductbycategory)
        }
    }, [id, category]);

    return (
        <div className='bg-rake_background-500 p-10'>
            <div className='flex items-center gap-4'>
                
                    <p className='font-bold text-rake_blue-500 font-inter no-underline '>
                    <Link to={'/blog/'}>Blog</Link></p>
                
                <p>{'>'}</p>
                <p className='font-inter'>Article</p>
            </div>
            <div className='isolate mt-9 box-border block'>
                <div className='w-full text-2xl font-extrabold leading-8'>
                    {getBlogsfromParams?.title}
                </div>
                <div className='mt-3 w-full text-xs font-normal leading-4'>
                    {month[date.getMonth()]}, {date.getDate()}, {date.getFullYear()}
                </div>
                <div className='mt-2 flex items-center justify-center object-contain'>
                    <img
                        src={getBlogsfromParams?.image}
                        alt='hero blog'
                        className='h-24'
                    />
                </div>
            </div>
            <div className='mt-3 w-full'>
                <h6 className='m-0 text-base font-bold leading-5'>
                    {getBlogsfromParams?.title}
                </h6>
                <p>{getBlogsfromParams?.subtitle}</p>
                <p className='mt-3'>
                    {' '}
                    Below are some of the reasons why Bitcoin remains our top pick for
                    online gambling at Rake.com:
                </p>
            </div>
            <div className='mt-4'>
                <h6 className='text-base'>Easy and Accessible Transactions</h6>
                <p>
                    We prioritize seamless transactions for all of our players. For this reason, we provide cryptocurrency options for gamblers anywhere in the world. If you don’t use crypto, we also recommend trusted third-party payment platforms like Visa, Mastercard, Google Pay, Apple Pay, and Samsung Pay, which ensures flawless transactions.
                </p>
            </div>
            <div className='mt-4'>
                <h6 className='text-base'>Diverse Gaming Selection</h6>
                <p>
                    At Rake.com, our games are carefully selected and regularly updated. We ensure that these games cater to all kinds of bettors – the new and the veteran ones. For instance, you can be confident to enjoy all of the major games like Baccarat, Blackjack, Craps, Roulette, and Poker. Our games are also well-regulated and licensed by the Government of Curacao.
                </p>
            </div>
            <div className='mt-4'>
                <h6 className='text-base'>Bonuses and VIP Rewards</h6>
                <p>
                    Our bonuses and VIP rewards at Rake.com cater to every bettor. It includes offers like Bronze, Silver Strides, Aiming for Gold, Platinum Prestige, and the Diamond Difference. Players who stick with us also get the chance to enjoy amazing VIP rewards that improve their chances of earning more from wins.
                </p>
            </div>
            <div className='mt-4'>
                <h6 className='text-base'>Beyond Traditional Gambling: Rake Rumble</h6>
                <p>
                    Rake Rumble is an MMORPG game on Rake.com that allows players to enjoy gaming like no other by improving creativity levels and social interaction. You also get the chance to benefit from our coin, Rake Coin, which you can use for in-game transactions.
                </p>
            </div>
            <div className='mt-4'>
                <h6 className='text-base'>Customer Support and Service</h6>
                <p>
                    If you have any complaints or inquiries, you can reach out to us via our 24/7 Live Chat and email. Our Live Chat provides a quick solution to problems, but if you prefer to reach out via email, you can also do so at any time of the day. PS: Email inquiries take longer than Live Chat.
                </p>
            </div>
            <div className='mt-4'>
                <h6 className='text-base'>Get a Rare Gambling Experience</h6>
                <p>
                    Rake.com proves your gambling experience can be more exciting and transparent. Our offer exceeds the typical betting system but also allows you to earn more through our Rake Coins. Join in the fun today.
                </p>
            </div>
            <PopularArticle blogs={filteredBlogs} />
        </div>
    );
};

export default BlogPost;
