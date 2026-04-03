import React, { useEffect, useState } from "react";

const people = [
  {
    name: 'Srujan Moolya',
    role: 'Founder | CEO | Full-Stack Developer',
    bio: 'Leads product direction and engineering execution across client and internal platforms.',
    focus: 'Product strategy, full-stack architecture, and delivery management.',
    imageUrl:
      './img/srujan.png',
      linkedinUrl:"https://www.linkedin.com/in/srujan-moolya",
  },
  {
    name: 'Anup Nayak',
    role: 'Co-Founder | Full-Stack Developer',
    bio: 'Builds scalable backend and frontend systems with a strong focus on performance.',
    focus: 'API design, system reliability, and modern web stacks.',
    imageUrl:
      './img/anup.png',
      linkedinUrl:"https://www.linkedin.com/in/anup-nayak",
  },
  {
    name: 'Viyan',
    role: 'Ui/Ux designer',
    bio: 'Designs user journeys that balance clarity, visual appeal, and business goals.',
    focus: 'Wireframing, interaction design, and design systems.',
    imageUrl:
      './img/viyan.png',
      linkedinUrl:"https://www.linkedin.com/in/viyan-castelino",
    },
  {
    name: 'Sainik',
    role: 'Graphic Designer',
    bio: 'Creates strong visual assets for branding, campaigns, and digital products.',
    focus: 'Brand identity, social creatives, and visual storytelling.',
    imageUrl:
      './img/sainik.png',
      linkedinUrl:"https://www.linkedin.com/in/sainik-bhumij",
    },
    {
    name: 'preetham Acharya',
    role: 'Graphic Designer | 3D Artist',
    bio: 'Blends graphics and 3D concepts to create immersive visual experiences.',
    focus: '3D modeling, motion graphics, and product visualization.',
    imageUrl:
      './img/preetham.png',
      linkedinUrl:"https://www.linkedin.com/in/preetham-acharya-815616256/",
    },
    {
    name: 'Alister dsouza',
    role: 'Graphic Designer | 3D Artist',
    bio: 'Contributes creative concepts from idea to polished visual output.',
    focus: 'Creative direction, 3D artwork, and campaign design.',
    imageUrl:
      './img/alister.png',
      linkedinUrl:"https://www.linkedin.com/in/preetham-acharya-815616256/",
    },


];

const TeamMembers = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activePerson = people[activeIndex];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prev) => (prev === people.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  const showPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? people.length - 1 : prev - 1));
  };

  const showNext = () => {
    setActiveIndex((prev) => (prev === people.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-[#f7f6f1] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0f6d5e]">Our Crew</p>
            <h2 className="mt-3 text-4xl font-semibold text-[#0a1324] sm:text-5xl">
              Talented people, shared mission.
            </h2>
            <p className="mt-5 max-w-xl text-[#4f5c71]">
              A collective of designers, engineers, and strategists united by the goal of building products that matter. We believe in long-term partnerships with clients and each other.
            </p>
          </div>
        </div>

        <div className="relative">
          <article className="group overflow-hidden rounded-2xl border border-[#1e1e1e] bg-black text-white shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
            <div className="grid min-h-[420px] md:grid-cols-[1fr_0.9fr]">
              <div className="flex flex-col justify-center px-6 py-8 sm:px-10 lg:px-14">
                <p className="text-xs uppercase tracking-[0.2em] text-[#a5a6ab]">Leadership</p>
                <h3 className="mt-5 text-3xl font-semibold leading-tight text-[#f2f2f2] sm:text-4xl">{activePerson.name}</h3>
                <p className="mt-3 text-2xl font-medium text-[#c8c9ce]">{activePerson.role}</p>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-[#b6b8bd]">{activePerson.bio}</p>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#8f9197]">
                  <span className="font-semibold text-[#d5d6da]">Core focus: </span>
                  {activePerson.focus}
                </p>

                <a
                  href={activePerson.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex h-11 w-11 items-center justify-center rounded-md border border-[#5f6167] text-[#d7d8dc] transition-colors duration-200 hover:border-[#0f6d5e] hover:bg-[#0f6d5e] hover:text-white"
                  aria-label={`${activePerson.name} LinkedIn profile`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 72 72" fill="currentColor">
                    <path d="M24.7612 55.999V28.3354H15.5433V55.999H24.7621H24.7612ZM20.1542 24.5591C23.3679 24.5591 25.3687 22.4348 25.3687 19.7801C25.3086 17.065 23.3679 15 20.2153 15C17.0605 15 15 17.065 15 19.7799C15 22.4346 17.0001 24.5588 20.0938 24.5588H20.1534L20.1542 24.5591ZM29.8633 55.999H39.0805V40.5521C39.0805 39.7264 39.1406 38.8985 39.3841 38.3088C40.0502 36.6562 41.5668 34.9455 44.1138 34.9455C47.4484 34.9455 48.7831 37.4821 48.7831 41.2014V55.999H58V40.1376C58 31.6408 53.4532 27.6869 47.3887 27.6869C42.4167 27.6869 40.233 30.4589 39.0198 32.347H39.0812V28.3364H29.8638C29.9841 30.9316 29.8631 56 29.8631 56L29.8633 55.999Z" />
                  </svg>
                </a>
              </div>

              <div className="relative min-h-[320px] md:min-h-full">
                <img
                  alt={activePerson.name}
                  src={activePerson.imageUrl}
                  className="h-full w-full object-cover object-top grayscale transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          </article>

          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              {people.map((person, index) => (
                <button
                  key={person.name}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`h-3 w-3 rounded-full border transition-colors ${
                    index === activeIndex
                      ? "border-[#0f6d5e] bg-[#0f6d5e]"
                      : "border-[#8d8f95] bg-transparent hover:border-[#0f6d5e]"
                  }`}
                  aria-label={`Go to ${person.name} slide`}
                />
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={showPrevious}
                className="rounded-md border border-[#b9babf] px-4 py-2 text-sm font-semibold text-[#1b2435] transition-colors hover:border-[#0f6d5e] hover:text-[#0f6d5e]"
                aria-label="Previous slide"
              >
                Prev
              </button>
              <button
                type="button"
                onClick={showNext}
                className="rounded-md border border-[#b9babf] px-4 py-2 text-sm font-semibold text-[#1b2435] transition-colors hover:border-[#0f6d5e] hover:text-[#0f6d5e]"
                aria-label="Next slide"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>


  );
};

export default TeamMembers;
