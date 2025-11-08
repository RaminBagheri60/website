import Image from "next/image";

const DataBottleneck = () => {
  return (
    <section className="bg-[#090E34] py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="mx-auto max-w-[1200px] text-center">
          {/* Title */}
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-[42px] md:leading-[1.2]">
            The Life Sciences Data Bottleneck
          </h2>

          {/* Subtitle with highlighted text */}
          <p className="mx-auto mb-12 max-w-[900px] text-base text-gray-300 sm:text-lg md:text-xl">
            Genome annotation pipelines take{" "}
            <span className="font-semibold text-[#3B82F6]">2-6 weeks</span> per
            study; 80% is spent on scripting and cluster wrangling instead of
            discovery.
          </p>

          {/* Cards Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Card 1 - Complex Processing */}
            <div className="flex h-full flex-col items-center p-6 text-center">
              <div className="mx-auto mb-5 flex justify-center">
                <Image
                  src="/icons/icon-33r.png"
                  alt="Complex Processing"
                  width={408}
                  height={333}
                  className="h-56 w-auto max-w-full"
                  unoptimized
                />
              </div>
              <h3 className="mb-4 text-xl font-bold text-white">
                Complex Processing
              </h3>
              <p className="text-base leading-relaxed text-white">
                Biological data analysis requires specialized knowledge and
                custom coding for each dataset type.
              </p>
            </div>

            {/* Card 2 - Infrastructure Burden */}
            <div className="flex h-full flex-col items-center p-6 text-center">
              <div className="mx-auto mb-5 flex justify-center">
                <div className="relative h-60 w-60 overflow-hidden rounded-full">
                  <Image
                    src="/icons/icon-22RR.png"
                    alt="Infrastructure Burden"
                    fill
                    className="object-cover"
                    sizes="12rem"
                    unoptimized
                  />
                </div>
              </div>
              <h3 className="mb-4 text-xl font-bold text-white">
                Infrastructure Burden
              </h3>
              <p className="text-base leading-relaxed text-white">
                Researchers must manage servers, dependencies, and parallel
                performance instead of focusing on science.
              </p>
            </div>

            {/* Card 3 - Slower Discovery */}
            <div className="flex h-full flex-col items-center p-6 text-center">
              <div className="mx-auto mb-5 flex justify-center">
                <div className="relative h-56 w-56 overflow-hidden rounded-full">
                  <Image
                    src="/icons/icon-5Rnew2.png"
                    alt="Slower Discovery"
                    fill
                    className="object-cover"
                    sizes="12rem"
                    unoptimized
                  />
                </div>
              </div>
              <h3 className="mb-4 text-xl font-bold text-white">
                Slower Discovery
              </h3>
              <p className="text-base leading-relaxed text-white">
                Time spent on technical setup delays the real work of biological
                discovery and insight generation.
              </p>
            </div>

            {/* Card 4 - Data Quality Drag */}
            <div className="flex h-full flex-col items-center p-6 text-center">
              <div className="mx-auto mb-5 flex justify-center">
                <Image
                  src="/icons/icon-1rr.png"
                  alt="Data Quality Drag"
                  width={333}
                  height={296}
                  className="h-56 w-auto max-w-full"
                  unoptimized
                />
              </div>
              <h3 className="mb-4 text-xl font-bold text-white">
                Data Quality Drag
              </h3>
              <p className="text-base leading-relaxed text-white">
                Inconsistent metadata, mislabeled samples, duplicates, and
                contamination undermine results and burn weeks on manual
                curation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataBottleneck;
