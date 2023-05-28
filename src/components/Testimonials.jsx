import {
  useEffect,
  useState,
} from 'react';

import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
} from 'react-icons/ai';

function Testimonials() {
  const [index, setIndex] = useState(0);

  const tesimonials = [
    {
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      name: "Jack Smith",
      opinion:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat voluptas minima rem expedita est earum neque. Voluptates molestiae quis quasi distinctio nam dolorum quam tempora modi ea, culpa id nostrum sint deserunt ad quidem eaque sequi! Incidunt quasi mollitia ad.",
      job: "Cryptocurrency expert, Crypture",
    },
    {
      img: "https://images.unsplash.com/photo-1585240975858-7264fd020798?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      name: "Joanna Caroll",
      opinion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta temporibus ex odio molestiae accusantium quasi quaerat mollitia eum ipsam eius fuga consectetur ullam magnam minus error eveniet obcaecati blanditiis suscipit reprehenderit necessitatibus reiciendis cupiditate, iure sequi? Quae doloribus excepturi similique, tenetur voluptas minima eum itaque, repellendus qui rem distinctio voluptate.",
      job: "Marketing expert, Jumbo-bumbo Restaurant",
    },
    {
      img: "https://images.unsplash.com/photo-1604904612715-47bf9d9bc670?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      name: "Nicola Okazaki",
      opinion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eius ipsam quo est eveniet esse hic officia quidem perferendis cumque dolores error voluptate mollitia quos aliquid qui dolorum eos id molestias, repellat, facere omnis asperiores perspiciatis. Quisquam eaque nemo aliquid commodi harum quas praesentium fuga officiis ab quia soluta iste autem pariatur alias fugiat perferendis voluptatibus quo, provident minus voluptatum.",
      job: "IT Specialist, KINGCODE",
    },

    {
      img: "https://images.unsplash.com/photo-1613181013804-1dcba09e6a9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=789&q=80",
      name: "Thomas Jackson",
      opinion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi esse a expedita nam quos! Explicabo cum quae, voluptatibus vitae commodi expedita vel impedit. Repellendus nobis voluptate itaque voluptates quasi fugiat dolorem neque deleniti exercitationem eveniet quis aspernatur praesentium quo earum, nihil illum laborum enim quas repudiandae quisquam inventore quod harum tempore! Quod, maxime! Officiis quod, aliquam hic, optio illo dolore magni nemo culpa numquam suscipit ex ratione non assumenda nisi.",
      job: "CIO of Amazon, Dallas",
    },
  ];

  const pushForwardTestimonial = () => {
    setIndex((prev) => {
      return prev + 1;
    });
    if (index >= tesimonials.length - 1) {
      setIndex(0);
    }
  };

  const pullBackTestimonial = () => {
    setIndex((prev) => {
      return prev - 1;
    });

    if (index <= 0) {
      setIndex(tesimonials.length - 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => {
        const newIndex = prevIndex + 1;
        if (newIndex >= tesimonials.length) {
          return 0;
        }
        return newIndex;
      });
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="flex flex-col w-full justify-center items-center bg-slate-700">
      <h2 className="text-4xl text-white">Testimonials:</h2>

      {tesimonials.map((person, i) => (
        <figure
          className={`${
            i === index ? "block md:flex" : "hidden"
          } bg-slate-100 m-4 rounded-xl p-8 md:p-0 dark:bg-slate-800 lg:w-1/2`}
        >
          <img
            className="w-24 h-24 lg:rounded-l md:w-48 md:h-auto md:rounded-none rounded-full mx-auto object-cover"
            src={person.img}
            alt=""
            width="384"
            height="512"
          />
          <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
              <p className="text-lg font-medium text-white">{person.opinion}</p>
            </blockquote>
            <figcaption className="font-medium">
              <div className="text-sky-500 dark:text-sky-400">
                {person.name}
              </div>
              <div className="text-slate-700 dark:text-slate-500">
                {person.job}
              </div>
            </figcaption>
          </div>
        </figure>
      ))}

      <div className="flex w-1/2 justify-around p-4">
        <button className="text-4xl text-white" onClick={pullBackTestimonial}>
          <AiOutlineArrowLeft />
        </button>

        <button
          className="text-4xl text-white"
          onClick={pushForwardTestimonial}
        >
          <AiOutlineArrowRight />
        </button>
      </div>
    </div>
  );
}

export default Testimonials;
