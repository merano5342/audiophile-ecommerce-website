import imgBestGear from '../assets/shared/desktop/image-best-gear.jpg';

const Article = () => {
  return (
    <div className="grid justify-center gap-8 lg:grid-cols-2">
      <img src={imgBestGear} alt="" className="rounded-lg" />
      <div className="mx-auto mt-10 max-w-[445px] lg:order-first lg:m-0 lg:my-auto">
        <h2 className="mb-8 tracking-[1px] sm:text-md lg:text-left">
          Bringing you the <span className="text-primary">best</span> audio gear
        </h2>
        <p className="tracking-[1px] text-black50 lg:text-left">
          Located at the heart of New York City, Audiophile is the premier store for high
          end headphones, earphones, speakers, and audio accessories. We have a large
          showroom and luxury demonstration rooms available for you to browse and
          experience a wide range of our products. Stop by our store to meet some of the
          fantastic people who make Audiophile the best place to buy your portable audio
          equipment.
        </p>
      </div>
    </div>
  );
};

export default Article;
