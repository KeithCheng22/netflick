const Hero = () => {
  return (
    <header id='header'>
        <section className="relative bg-right bg-cover bg-[url('../public/hero.jpeg')] py-8 px-2 rounded-lg">

            <div className="mt-3 relative h-fit my-auto text-white text-center">
                <h1 className='w-[80%] mx-auto  max-sm:text-lg sm:text-2xl md:text-4xl lg:text-6xl font-semibold'>All the movies you <span className='text-red-300'>love</span> in one place</h1>

                <form>
                  <input type='text' name='query' autoFocus className='focus:outline-none w-[80%] min-h-10 rounded-xl bg-transparent mt-5 border-2 indent-4 placeholder:text-white' placeholder='Marvels: Infinity War'></input>
                </form>
            </div>
        </section>
    </header>
  )
}

export default Hero