import Collection from '@/components/shared/Collection'
import { Button } from '@/components/ui/button'
import { getAllEvents } from '@/lib/actions/event.actions'
import Image from 'next/image'
import Link from 'next/link'


export default async function Home() {

  const events = await getAllEvents({
    query: '',
    category: '',
    page: 1,
    limit: 6
  })

  return (
    <>
      <section className='bg-hero-bg py-5 md:py-10'>
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className='flex flex-col justify-center gap-10'>
            <h1 className='h1-bold text-white'>
              Discover, Connect, Experience: Where Every Event Journey Starts Here!
            </h1>
            <p className='p-regular-20 md:p-regular-24 text-white'>
              Explore events of all patterns, from Rocking parties to Insightful Tech talks and conference. Join us and Attend your dream events today! 
            </p>
            <Button size="lg" asChild className='bg-primary-500 button w-full sm:w-fit'>
              <Link href="#events">
                Explore Now
              </Link>
            </Button>
          </div>
{/* 
          <Image 
            src="/assets/images/hero.png"
            alt="hero"
            width={1000}
            height={1000}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]" /> */}
        </div>
      </section>

      <section id="events" className='wrapper py-8 flex flex-col gap-8 md:gap-12'>
        <h2 className='h2-bold text-white'>
          <span style={{ color:'#F7EA00' }} >Trusted by</span>  <br /> Thousands of Events
        </h2>
        <div className='flex w-full flex-col gap-5 md:flex-row'>
          Search
          CategoryFilter
        </div>
        <Collection
          data={events?.data}
          emptyTitle='No events found'
          emptyStateSubText='Come back later'
          collectionType='All_Events'
          limit={6}
          page={1}
          totalPages={2} 
          title={''}        
        />

      </section>
    </>
  )
}

