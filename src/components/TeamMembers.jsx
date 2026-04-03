import React from "react";

const teamMembers = [
  {
    name: "Srujan Moolya",
    role: "Founder & CEO",
    image: "https://media.licdn.com/dms/image/v2/D5603AQEbOr3huxeb2w/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1695266645091?e=1744243200&v=beta&t=5yf6GBMar_in2B9z0zg1m2mlQDRBYIwzWrgp2urTZ7Q", // Replace with actual image URL
    linkedin: "https://www.linkedin.com/in/srujan-moolya",
  },
  {
    name: "Anup Nayak",
    role: "CTO",
    image: "https://via.placeholder.com/150",
    linkedin: "https://www.linkedin.com/in/john-doe",
  },

];
const people = [
  {
    name: 'Srujan Moolya',
    role: 'Founder | CEO | Full-Stack Developer',
    imageUrl:
      './img/srujan.png',
      linkedinUrl:"https://www.linkedin.com/in/srujan-moolya",
  },
  {
    name: 'Anup Nayak',
    role: 'Co-Founder | Full-Stack Developer',
    imageUrl:
      './img/anup.png',
      linkedinUrl:"https://www.linkedin.com/in/anup-nayak",
  },
  {
    name: 'Viyan',
    role: 'Ui/Ux designer',
    imageUrl:
      './img/viyan.png',
      linkedinUrl:"https://www.linkedin.com/in/viyan-castelino",
    },
  {
    name: 'Sainik',
    role: 'Graphic Designer',
    imageUrl:
      './img/sainik.png',
      linkedinUrl:"https://www.linkedin.com/in/sainik-bhumij",
    },
    {
    name: 'preetham Acharya',
    role: 'Graphic Designer | 3D Artist',
    imageUrl:
      './img/preetham.png',
      linkedinUrl:"https://www.linkedin.com/in/preetham-acharya-815616256/",
    },
    {
    name: 'Alister dsouza',
    role: 'Graphic Designer | 3D Artist',
    imageUrl:
      './img/alister.png',
      linkedinUrl:"https://www.linkedin.com/in/preetham-acharya-815616256/",
    },


];

const TeamMembers = () => {
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

        <ul role="list" className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {people.map((person) => (
            <li
              key={person.name}
              className="group overflow-hidden rounded-2xl border border-[#d0d1ca] bg-white shadow-[0_10px_24px_rgba(10,19,36,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(10,19,36,0.12)]"
            >
              <div className="relative h-40 overflow-hidden bg-gradient-to-br from-[#eef8f6] to-[#f0ede3]">
                <img
                  alt={person.name}
                  src={person.imageUrl}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-base font-semibold text-[#0f1a2f]">{person.name}</h3>
                <p className="mt-1 text-xs text-[#7a8a9f]">{person.role}</p>
                <a
                  href={person.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-center rounded-lg border border-[#d4d5d8] bg-[#f9f8f6] p-2.5 transition-colors duration-200 hover:bg-[#0f6d5e] hover:text-white"
                  aria-label={`${person.name} LinkedIn profile`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 72 72" fill="currentColor">
                    <path d="M24.7612 55.999V28.3354H15.5433V55.999H24.7621H24.7612ZM20.1542 24.5591C23.3679 24.5591 25.3687 22.4348 25.3687 19.7801C25.3086 17.065 23.3679 15 20.2153 15C17.0605 15 15 17.065 15 19.7799C15 22.4346 17.0001 24.5588 20.0938 24.5588H20.1534L20.1542 24.5591ZM29.8633 55.999H39.0805V40.5521C39.0805 39.7264 39.1406 38.8985 39.3841 38.3088C40.0502 36.6562 41.5668 34.9455 44.1138 34.9455C47.4484 34.9455 48.7831 37.4821 48.7831 41.2014V55.999H58V40.1376C58 31.6408 53.4532 27.6869 47.3887 27.6869C42.4167 27.6869 40.233 30.4589 39.0198 32.347H39.0812V28.3364H29.8638C29.9841 30.9316 29.8631 56 29.8631 56L29.8633 55.999Z" />
                  </svg>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>


  );
};

export default TeamMembers;
