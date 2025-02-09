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
    role: 'Founder / CEO',
    imageUrl:
      'https://media.licdn.com/dms/image/v2/D5603AQEbOr3huxeb2w/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1695266645091?e=1744243200&v=beta&t=5yf6GBMar_in2B9z0zg1m2mlQDRBYIwzWrgp2urTZ7Q',
      linkedinUrl:"https://www.linkedin.com/in/srujan-moolya",
  },
  {
    name: 'Anup Nayak',
    role: 'Co-Founder / Full-Stack Developer',
    imageUrl:
      'https://i.pinimg.com/736x/b1/33/4f/b1334f43d458b7a3794cd239928370c7.jpg',
      linkedinUrl:"https://www.linkedin.com/in/anup-nayak",
  },
  {
    name: 'Viyan',
    role: 'Ui/Ux designer',
    imageUrl:
      'https://cdn.vectorstock.com/i/500p/63/28/funny-astronaut-works-on-notebook-vector-45226328.jpg',
      linkedinUrl:"https://www.linkedin.com/in/viyan-castelino",
    },
  {
    name: 'Sainik',
    role: 'Graphic Designer',
    imageUrl:
      'https://i.etsystatic.com/40533556/r/il/15ab7e/4873057259/il_300x300.4873057259_lkai.jpg',
      linkedinUrl:"https://www.linkedin.com/in/sainik-bhumij",
    }

];

const TeamMembers = () => {
  return (



    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-xl">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
            Our Team
          </h2>
          <p className="mt-6 text-lg/8 text-gray-600">
          A passionate team of innovators dedicated to crafting cutting-edge digital solutions. We blend creativity, technology, and strategy to deliver impactful experiences and drive business growth. 💡✨
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img alt="" src={person.imageUrl} className="size-20 rounded-full" />
                <div>
                  <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">{person.name}</h3>
                  <p className="text-sm/6 font-semibold text-indigo-600">{person.role}</p>
                  <a href={person.linkedinUrl}
                    class="p-2 rounded-lg flex items-start border border-gray-300 justify-center transition-all duration-500 hover:border-gray-100 hover:bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 72 72"
                      fill="none">
                      <path
                        d="M24.7612 55.999V28.3354H15.5433V55.999H24.7621H24.7612ZM20.1542 24.5591C23.3679 24.5591 25.3687 22.4348 25.3687 19.7801C25.3086 17.065 23.3679 15 20.2153 15C17.0605 15 15 17.065 15 19.7799C15 22.4346 17.0001 24.5588 20.0938 24.5588H20.1534L20.1542 24.5591ZM29.8633 55.999H39.0805V40.5521C39.0805 39.7264 39.1406 38.8985 39.3841 38.3088C40.0502 36.6562 41.5668 34.9455 44.1138 34.9455C47.4484 34.9455 48.7831 37.4821 48.7831 41.2014V55.999H58V40.1376C58 31.6408 53.4532 27.6869 47.3887 27.6869C42.4167 27.6869 40.233 30.4589 39.0198 32.347H39.0812V28.3364H29.8638C29.9841 30.9316 29.8631 56 29.8631 56L29.8633 55.999Z"
                        fill="#111827" />
                    </svg>
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>


  );
};

export default TeamMembers;
