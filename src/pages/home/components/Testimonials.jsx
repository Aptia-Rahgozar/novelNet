export const Testimonials = () => {
  return (
    <section className="my-20">
      <h1 className="text-3xl text-center text-Accent font-semibold dark:text-white mb-5 underline-offset-8">
        Why Book Lovers Choose Us
      </h1>
      <div className="grid mb-8 rounded-lg border border-neutral-300 shadow-sm dark:border-neutral-500 md:mb-12 md:grid-cols-2">
        <figure className="flex flex-col justify-center items-center p-8 text-center bg-Secondary rounded-t-lg border-b border-neutral-300 md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-darkSecondary dark:border-neutral-500">
          <blockquote className="mx-auto mb-4 max-w-2xl text-gray-100 lg:mb-8 dark:text-neutral-300">
            <h3 className="text-xl font-semibold text-AccentDarker dark:text-white">
              A book lover’s paradise
            </h3>
            <p className="my-4 font-light">
              "Finding my next great read has never been easier. Love the
              selection and recommendations!"
            </p>
          </blockquote>
          <figcaption className="flex justify-center items-center space-x-3">
            <img
              className="w-9 h-9 rounded-full"
              src="/assets/images/userAvatars/user01.svg"
              alt="user"
            />
            <div className="space-y-0.5 font-medium text-AccentDarker dark:text-white text-left">
              <div>James Carter</div>
              <div className="text-sm font-light text-gray-100 dark:text-neutral-300">
                Book Blogger at The Literary Haven
              </div>
            </div>
          </figcaption>
        </figure>
        <figure className="flex flex-col justify-center items-center p-8 text-center bg-Secondary rounded-tr-lg border-b border-neutral-300 dark:bg-darkSecondary dark:border-neutral-500">
          <blockquote className="mx-auto mb-4 max-w-2xl text-gray-100 lg:mb-8 dark:text-neutral-300">
            <h3 className="text-xl font-semibold text-AccentDarker dark:text-white">
              Seamless and enjoyable browsing
            </h3>
            <p className="my-4 font-light">
              "The website is beautifully designed, and buying books here is a
              breeze."
            </p>
          </blockquote>
          <figcaption className="flex justify-center items-center space-x-3">
            <img
              className="w-9 h-9 rounded-full"
              src="/assets/images/userAvatars/user02.svg"
              alt="user"
            />
            <div className="space-y-0.5 font-medium text-AccentDarker dark:text-white text-left">
              <div>Sophia Lin</div>
              <div className="text-sm font-light text-gray-100 dark:text-neutral-300">
                Avid Reader & Reviewer
              </div>
            </div>
          </figcaption>
        </figure>
        <figure className="flex flex-col justify-center items-center p-8 text-center bg-Secondary rounded-bl-lg border-b border-neutral-300 md:border-b-0 md:border-r dark:bg-darkSecondary dark:border-neutral-500">
          <blockquote className="mx-auto mb-4 max-w-2xl text-gray-100 lg:mb-8 dark:text-neutral-300">
            <h3 className="text-xl font-semibold text-AccentDarker dark:text-white">
              My go-to for discovering new favorites
            </h3>
            <p className="my-4 font-light">
              "I always find something interesting here. A fantastic site for
              book lovers!"
            </p>
          </blockquote>
          <figcaption className="flex justify-center items-center space-x-3">
            <img
              className="w-9 h-9 rounded-full"
              src="/assets/images/userAvatars/user03.svg"
              alt="user"
            />
            <div className="space-y-0.5 font-medium text-AccentDarker dark:text-white text-left">
              <div>Emily Foster</div>
              <div className="text-sm font-light text-gray-100 dark:text-neutral-300">
                Librarian & Book Club Host
              </div>
            </div>
          </figcaption>
        </figure>
        <figure className="flex flex-col justify-center items-center p-8 text-center bg-Secondary border-neutral-300 md:rounded-br-lg dark:bg-darkSecondary dark:border-neutral-500">
          <blockquote className="mx-auto mb-4 max-w-2xl text-gray-100 lg:mb-8 dark:text-neutral-300">
            <h3 className="text-xl font-semibold text-AccentDarker dark:text-white">
              Exactly what every reader needs
            </h3>
            <p className="my-4 font-light">
              "If you love books, this site is a must-visit. Great variety and
              smooth shopping experience."
            </p>
          </blockquote>
          <figcaption className="flex justify-center items-center space-x-3">
            <img
              className="w-9 h-9 rounded-full"
              src="/assets/images/userAvatars/user04.svg"
              alt="user"
            />
            <div className="space-y-0.5 font-medium text-AccentDarker dark:text-white text-left">
              <div>Daniel Reyes</div>
              <div className="text-sm font-light text-gray-100 dark:text-neutral-300">
                Author & Literature Enthusiast
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};
