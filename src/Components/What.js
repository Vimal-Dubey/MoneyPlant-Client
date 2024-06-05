// import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'
 import icon_act from './Icons/icon_act.jpg';
 import icon_dca from './Icons/icon_dca.jpg';
 import icon_la from './Icons/icon_la.jpg';
 import icon_pm from './Icons/icon_pm.jpg';

const features = [
  {
    name: 'Automated Trading',
    description:
      'Streamline your trading experience with our automated trading feature, leveraging smart contracts to execute trades automatically based on predefined conditions.',
    icon: icon_act,
  },
  {
    name: 'Dollar-Cost Averaging (DCA)',
    description:
      'By spreading your investments across intervals, DCA helps mitigate the impact of market fluctuations and allows you to accumulate assets steadily for long-term growth.',
    icon: icon_dca,
  },
  {
    name: 'Liquidity Aggregation',
    description:
      'With our multi-DEX router, you can tap into deeper liquidity pools, ensuring better price discovery and improved execution for your trades across various markets.',
    icon: icon_la,
  },
  {
    name: 'Portfolio Management',
    description:
      'Manage your cryptocurrency portfolio with confidence, track performance metrics, and make informed decisions to optimize your investment strategy for success in decentralized finance.',
    icon: icon_pm,
  },
]

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Explore Our Features
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          Explore our suite of features to optimize your investment strategy and unlock new opportunities in decentralized finance.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg ">
                    <img src={feature.icon} alt={feature.name} className="h-10 w-10 rounded-lg text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
