export const FeaturesSection = ()=>{
    return(
        <>
         <section className="text-center mt-24 max-w-7xl mx-auto grid grid-cols-1
          md:grid-cols-3 gap-12 pt-4 p-8 sm:pt-8">
            <div className="bg-gray-900 p-8 rounded-lg text-center
             hover:bg-gray-800 transition hover:cursor-pointer">
                <h3 className="text-2xl font-semibold ">Instant Deoloyment</h3>
                <p className="mt-4 text-gray-400">Push your code and see live updates in seconds, no configuration needed.</p>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg text-center hover:bg-gray-800 transition hover:cursor-pointer">
                <h3 className="text-2xl font-semibold ">Scalable Infrastructure</h3>
                <p className="mt-4 text-gray-400">Your projects automatically scale based on traffic and demand.</p>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg text-center hover:bg-gray-800 transition hover:cursor-pointer">
                <h3 className="text-2xl font-semibold ">Seamless Integrations</h3>
                <p className="mt-4 text-gray-400">Works with GitHub,GitLab,Bitbucket and all morden frameworks.</p>
            </div>

         </section>
        </>
    );
}