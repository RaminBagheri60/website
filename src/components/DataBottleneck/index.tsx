const DataBottleneck = () => {
  return (
    <section className="bg-white py-16 dark:bg-dark md:py-20 lg:py-28">
      <div className="container">
        <div className="mx-auto max-w-[1200px] text-center">
          {/* Title */}
          <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[42px] md:leading-[1.2]">
            The Life Sciences Data Bottleneck
          </h2>
          
          {/* Subtitle with highlighted text */}
          <p className="mx-auto mb-12 max-w-[900px] text-base text-body-color dark:text-dark-6 sm:text-lg md:text-xl">
            Genome annotation pipelines take{" "}
            <span className="font-semibold text-[#3B82F6]">2-6 weeks</span>{" "}
            per study; 80% is spent on scripting and cluster wrangling instead of discovery.
          </p>

          {/* Cards Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Card 1 - Complex Processing */}
            <div className="rounded-xl bg-[#FEF2F2] p-6 text-left shadow-sm transition-shadow hover:shadow-md dark:bg-[#2C1515]">
              <h3 className="mb-3 text-xl font-bold text-[#991B1B] dark:text-[#FCA5A5]">
                Complex Processing
              </h3>
              <p className="text-sm leading-relaxed text-[#7C2D12] dark:text-[#FED7AA]">
                Biological data analysis requires specialized knowledge and custom coding for each dataset type.
              </p>
            </div>

            {/* Card 2 - Data Quality Drag */}
            <div className="rounded-xl bg-[#EFF6FF] p-6 text-left shadow-sm transition-shadow hover:shadow-md dark:bg-[#1E3A5F]">
              <h3 className="mb-3 text-xl font-bold text-[#1E40AF] dark:text-[#93C5FD]">
                Data Quality Drag
              </h3>
              <p className="text-sm leading-relaxed text-[#1E3A8A] dark:text-[#BFDBFE]">
                Inconsistent metadata, mislabeled samples, duplicates, and contamination undermine results and burn weeks on manual curation.
              </p>
            </div>

            {/* Card 3 - Infrastructure Burden */}
            <div className="rounded-xl bg-[#FEFCE8] p-6 text-left shadow-sm transition-shadow hover:shadow-md dark:bg-[#422006]">
              <h3 className="mb-3 text-xl font-bold text-[#854D0E] dark:text-[#FDE047]">
                Infrastructure Burden
              </h3>
              <p className="text-sm leading-relaxed text-[#713F12] dark:text-[#FEF08A]">
                Researchers must manage servers, dependencies, and parallel performance instead of focusing on science.
              </p>
            </div>

            {/* Card 4 - Slower Discovery */}
            <div className="rounded-xl bg-[#F3F4F6] p-6 text-left shadow-sm transition-shadow hover:shadow-md dark:bg-[#1F2937]">
              <h3 className="mb-3 text-xl font-bold text-[#374151] dark:text-[#D1D5DB]">
                Slower Discovery
              </h3>
              <p className="text-sm leading-relaxed text-[#4B5563] dark:text-[#E5E7EB]">
                Time spent on technical setup delays the real work of biological discovery and insight generation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataBottleneck;

