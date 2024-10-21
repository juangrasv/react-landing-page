import bgVideo from '../assets/background-hero.mp4'

export default function Hero() {
  return (
    <>
      <main className="relative min-h-full flex items-center justify-center bg-slate-800 px-6 py-24 sm:py-32 lg:px-8">
        <video src={bgVideo}
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
        </video>
        <div className="relative z-10 text-center text-zinc">
          <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight sm:text-7xl">
            The Future Is Now!
          </h1>
          <p className="mt-6 text-pretty text-lg font-medium text-zinc-600 sm:text-xl">
            Organic Clothing, Made Easy
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md px-3.5 py-2.5 text-sm font-medium text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium inventore consequuntur quaerat similique accusamus delectus ratione nostrum maxime accusantium necessitatibus, id velit natus dolor tenetur repellat commodi ad beatae facilis.
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
