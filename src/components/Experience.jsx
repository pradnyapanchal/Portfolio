import React from "react";
import { MdPlayArrow } from "react-icons/md";
// import photo from "../assets/photo-1.jpg";
{
  /* <img src={photo} alt="profile" />; */
}
const Experience = () => {
  return (
    <div
      name="Experience"
      className="   text-[#ccd6f6] w-full  px-6 sm:px-12 md:px-20 lg:px-30 py-20  flex-col items-center min-h-screen 
      my-10"
    >
      <div className="flex items-center gap-3">
        <h1 className="text-3xl sm:text-3xl md:text-4xl font-bold whitespace-nowrap mb-5 md:mb-10">
          / experience
        </h1>
        <div className=" border-t border-[#ccd6f6]  mb-3 w-5/6  md:mb-8"></div>
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-15 mt-6">
        <div className=" flex lg:w-2/6  justify-center">
          <img
            src="/profile-1.jpg"
            alt="profile"
            className="w-70 h-64 sm:w-72 sm:h-72  lg:w-90 lg:h-90 
                 object-cover object-top 
                 rounded-xl 
            shadow-[0_0_16px_black]
            transition duration-300
            hover:-translate-y-2
        "
          />
        </div>

        <div className=" text-sm lg:w-4/6 sm:text-base lg:text-lg leading-relaxed">
          <p>
            Lorem ipsum dolor sit
            <span className="font-bold"> Software Engineer </span>
            consectetur adipisicing elit... Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Repellat quo assumenda ullam alias
            aperiam, ab possimus sunt odit ipsam ex at mollitia repudiandae
            molestiae earum, magni modi delectus fugit nesciunt tempore adipisci
            laboriosam esse? Amet voluptatum facilis tempora numquam dolorem,
            minima cum voluptatibus quidem omnis reprehenderit commodi voluptate
            quaerat ipsa ipsam, vel exercitationem maiores eveniet. Nesciunt
            nisi alias ab quibusdam!
          </p>

          <p className="mt-4">
            Here are some technologies I have been working with... Lorem ipsum
            dolor sit amet consectetur, adipisicing elit. Itaque aliquid aliquam
            suscipit iste repudiandae doloribus unde pariatur natus. Porro,
            voluptate cupiditate deleniti possimus veniam autem nemo molestias
            quos totam impedit aut id placeat quaerat optio minus blanditiis
            neque voluptas praesentium!
          </p>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Experience;
