import User1 from '@/assets/profile2.jpg'
import User2 from '@/assets/profile3.jpg'



export const TestSection = ()=>{
    return (
        <>
            <section className="text-center mt-24 max-w-7xl mx-auto pt-4 p-8 sm:pt-8">
                <h2 className="text-4xl font-bold">What Developers Say</h2>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="bg-gray-900 p-8 rounded-lg shadow-lg flex items-center gap-6">
                        <img src={User1} alt="User image" className='w-[52px] h-[52px] rounded-full border-2 border-purple-400 object-cover' />
                        <div className='text-left'>
                            <p className='text-gray-400 text-lg '>"LaunchFlow made our deployment effortless and fast"</p>
                            <h4 className='text-lg font-semibold mt-4'>Nancy Wheelers</h4>
                            <p className='text-purple-400'>Frontend Developer</p>
                        </div>
                    </div>
                    <div className="bg-gray-900 p-8 rounded-lg shadow-lg flex items-center gap-6">
                        <img src={User2} alt="User image" className='w-[52px] h-[52px] rounded-full border-2 border-blue-400 object-cover' />
                        <div className='text-left'>
                            <p className='text-gray-400 text-lg '>"A game changer for frontend developers"</p>
                            <h4 className='text-lg font-semibold mt-4'>John Wick</h4>
                            <p className='text-blue-400'>React Developer</p>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
}