const features = [
  { name: 'Hardware Components', description: 'Each dispenser is equipped with sensors that accurately measure and dispense specific amounts of water, using recyclable paper cups.' },
  { name: 'Software Components', description: 'A mobile app serves as the interface, allowing users to locate dispensers, check availability, and manage payments via UPI integration.' },
  { name: 'UPI Integration and QR Code Scanning', description: 'The system integrates with UPI, allowing users to scan a QR code, select the water amount, and complete payment.' },
  { name: 'Real-time Data Synchronisation', description: 'The backend supports real-time data synchronisation, ensuring updated availability data and tracking user water usage and payments.' },
  { name: 'Sustainability Features', description: 'Recyclable paper cups and precise dispensing reduce environmental impact and promote sustainable water use.' },
  { name: 'Scalability and Reliability', description: 'The system is designed to scale easily with additional dispensers, ensuring reliability and smooth operation.' },
];

export default function Features() {
  return (
    <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Modernised Water Dispensers: Reducing Plastic Waste and Enhancing Affordable Water Accessibility</h2>
          <p className="mt-4 text-gray-500">
            The increasing environmental impact of plastic waste, particularly from bottled water, necessitates innovative solutions to promote sustainability. This project proposes developing and deploying smart water dispensers that utilise recyclable paper cups and integrate with UPI payment systems to provide an affordable and eco-friendly alternative to bottled water.
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img
            alt="Smart water dispenser with recyclable paper cups."
            src="https://www.kelsey-seybold.com/-/media/Project/KelseySeybold/KelseySeyboldClinic/Images/Blog-Images/benefits-of-hydration-blog-banner.jpg?h=592&iar=0&w=1052&hash=BDEC46C27FDC5D732E2F47DA2559A074"
            className="rounded-lg bg-gray-100"
          />
          <img
            alt="Water dispenser QR code for UPI payments."
            src="https://extension.usu.edu/images/news_images/hydration-image.jpg"
            className="rounded-lg bg-gray-100"
          />
          <img
            alt="User scanning QR code to make payment for water."
            src="https://goodparentingbrighterchildren.com/wp-content/uploads/2015/04/Good-Parenting-Brighter-Children-Water-2.jpg"
            className="rounded-lg bg-gray-100"
          />
          <img
            alt="Recyclable paper cup being filled with water."
            src="https://www.verywellhealth.com/thmb/pXCXvfnitgcnKb1rUCXIVb5_-4M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/pexels-ketut-subiyanto-4719912-81825ed74e53486888c7dcdd1817945f.jpg"
            className="rounded-lg bg-gray-100"
          />
        </div>
      </div>
    </div>
  );
}
