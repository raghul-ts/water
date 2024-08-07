import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid';

export default function Explanation() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">Smart Water Dispensers</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">An Eco-friendly Solution</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                The increasing environmental impact of plastic waste, particularly from bottled water, necessitates innovative solutions to promote sustainability. This project proposes developing and deploying smart water dispensers that utilise recyclable paper cups and integrate with UPI payment systems to provide an affordable and eco-friendly alternative to bottled water.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt=""
            src="https://img.freepik.com/free-photo/portrait-man-home-drinking-glass-water_23-2148923946.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1722902400&semt=ais_hybrid"
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
                The primary aim of this project is to facilitate the use of water in precisely the required amount, thus minimizing waste. For instance, if an individual needs only 200 ml of water, they can conveniently use the dispenser instead of purchasing a full plastic water bottle.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <CloudArrowUpIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Cost-effective Solution.</strong> Our smart water dispensers offer a cost-effective solution, dispensing water at a rate of 3 rupees per half-litre cup, compared to the typical 20 rupees per litre for bottled water.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <LockClosedIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">User Convenience.</strong> Users can locate the nearest dispenser and check water availability via a dedicated mobile app, which also facilitates seamless payments through UPI by scanning a QR code.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Environmental Impact.</strong> This system aims to significantly reduce plastic waste by substituting disposable plastic bottles with recyclable paper cups.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                The app ensures user convenience by providing real-time information on dispenser locations and water levels, enhancing accessibility and user experience. The project highlights the environmental benefits of reducing plastic waste, with potential data-driven estimates showing substantial reductions in plastic bottle usage.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Economic and Technical Benefits</h2>
              <p className="mt-6">
                Economically, the model is designed to be sustainable, with a clear cost-benefit analysis demonstrating lower costs for consumers and potential revenue streams for operators. Technically, the implementation involves both hardware (dispensers) and software (mobile app, UPI integration), with a focus on overcoming challenges related to system reliability and user adoption. Future developments may include expanding the network of dispensers, enhancing app features, and forming strategic partnerships.
              </p>
              <p className="mt-8">
                In conclusion, the proposed smart water dispenser system presents a viable solution to the dual challenges of plastic waste and affordable water accessibility, offering significant environmental and economic benefits. This innovative approach not only addresses a pressing environmental issue but also provides a practical and user-friendly service, allowing individuals to use only the amount of water they need without contributing to plastic waste.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
