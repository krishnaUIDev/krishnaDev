import React from 'react';

type PriceProps = {
  posts: {
    title: string;
    description: string;
    price: number;
    offer: string[];
    primum: boolean;
  };
};

function PricingCard({ posts }: PriceProps) {
  return (
    <div className="mx-auto flex max-w-lg flex-col rounded-lg border border-gray-100 bg-white p-6 text-center text-gray-900 shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white xl:p-8">
      <h3 className="mb-4 text-2xl font-semibold">{posts.title}</h3>
      <p className="font-light text-gray-500 dark:text-gray-400 sm:text-lg">
        {posts.description}
      </p>
      <div className="my-8 flex items-baseline justify-center">
        <span className="mr-2 text-5xl font-extrabold">${posts.price}</span>
        <span className="text-gray-500 dark:text-gray-400">/month</span>
      </div>
      <ul className="mb-8 space-y-4 text-left">
        {posts &&
          posts.offer &&
          posts.offer.length > 0 &&
          posts.offer.map((item) => (
            <li className="flex items-center space-x-3" key={item}>
              <svg
                className="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>{item}</span>
            </li>
          ))}
      </ul>
      <a
        href="htps://localhost:3000"
        className="bg-accent-600 hover:bg-accent-700 focus:ring-primary-200 dark:focus:ring-primary-900 rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:ring-4  dark:text-white"
      >
        Get started
      </a>
    </div>
  );
}

export default PricingCard;
