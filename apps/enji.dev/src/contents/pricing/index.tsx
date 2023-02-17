import { Tab } from '@headlessui/react';
import clsx from 'clsx';
import { useState } from 'react';

import PricingCard from './PricingCard';

export default function PricingContents() {
  const categories = {
    Monthly: [
      {
        id: 1,
        title: 'Starter',
        description: 'Best option for personal use & for your next project.',
        price: 15,
        offer: [
          'Individual configuration',
          'Individual configuration',
          'Individual configuration',
        ],
        primum: false,
      },
      {
        id: 2,
        title: 'Starter',
        description: 'Best option for personal use & for your next project.',
        price: 15,
        offer: [
          'Individual configuration',
          'Individual configuration',
          'Individual configuration',
        ],
        primum: false,
      },
      {
        id: 3,
        title: 'Starter',
        description: 'Best option for personal use & for your next project.',
        price: 415,
        offer: [
          'Individual configuration',
          'Individual configuration',
          'Individual configuration',
        ],
        primum: true,
      },
    ],
    Annually: [
      {
        id: 1,
        title: 'Starter',
        description: 'Best option for personal use & for your next project.',
        price: 1500,
        offer: [
          'Individual configuration',
          'Individual configuration',
          'Individual configuration',
        ],
      },
      {
        id: 2,
        title: 'Starter',
        description: 'Best option for personal use & for your next project.',
        price: 150,
        offer: [
          'Individual configuration',
          'Individual configuration',
          'Individual configuration',
        ],
      },
    ],
  };

  const [updatedData, setUpdatedData] = useState([]);

  const handleClick = (category: string) => {
    setUpdatedData(categories[category]);
  };

  // useEffect(() => {
  //   setUpdatedData(categories && categories.Monthly);
  // }, []);

  return (
    <div className="flex items-center justify-center sm:px-0">
      <Tab.Group>
        <div>
          <div className="justify-cente flex items-center">
            <Tab.List className="flex w-3/6 space-x-2 rounded-xl bg-blue-900/20 p-1 ">
              {Object.keys(categories).map((category) => (
                <Tab
                  onClick={() => handleClick(category)}
                  key={category}
                  className={({ selected }) =>
                    clsx(
                      'w-full rounded-lg p-3 text-sm font-medium leading-5 text-blue-700',
                      'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                      selected
                        ? 'bg-white shadow'
                        : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                    )
                  }
                >
                  {category}
                </Tab>
              ))}
            </Tab.List>
          </div>
          <Tab.Panels className="mt-2">
            <section className="bg-white dark:bg-gray-900">
              <div className="mx-auto max-w-screen-xl py-8 px-4 lg:py-16 lg:px-6">
                <div className="space-y-8 sm:gap-6 lg:grid lg:grid-cols-3 lg:space-y-0 xl:gap-10">
                  {updatedData &&
                    updatedData.length > 0 &&
                    updatedData.map((posts) => (
                      <PricingCard key={posts.id} posts={posts} />
                    ))}
                </div>
              </div>
            </section>
          </Tab.Panels>
        </div>
      </Tab.Group>
    </div>
  );
}
