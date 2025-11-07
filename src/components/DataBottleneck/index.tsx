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
            <div className="p-6 text-center">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#991B1B] to-[#DC2626] shadow-lg">
                <svg
                  className="h-9 w-9 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.5 3C19.433 3 21 4.567 21 6.5c0 1.679-1.18 3.078-2.754 3.428A3.994 3.994 0 0119 12c0 1.113-.455 2.12-1.188 2.846A3.5 3.5 0 0118.5 18c0 1.933-1.567 3.5-3.5 3.5H9c-1.933 0-3.5-1.567-3.5-3.5a3.5 3.5 0 01.688-2.154A3.992 3.992 0 015 12a3.994 3.994 0 01.754-2.34C4.18 9.31 3 7.912 3 6.233 3 4.3 4.567 2.733 6.5 2.733c1.679 0 3.078 1.18 3.428 2.754A3.994 3.994 0 0112 5c1.113 0 2.12.455 2.846 1.188A3.5 3.5 0 0118.5 5.5c0-.729-.28-1.393-.738-1.893A3.5 3.5 0 0117.5 3z" />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-bold text-white">
                Complex Processing
              </h3>
              <p className="text-base leading-relaxed text-white">
                Biological data analysis requires specialized knowledge and
                custom coding for each dataset type.
              </p>
            </div>

            {/* Card 2 - Data Quality Drag */}
            <div className="p-6 text-center">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1E40AF] to-[#3B82F6] shadow-lg">
                <svg
                  className="h-9 w-9 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                    clipRule="evenodd"
                  />
                </svg>
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

            {/* Card 3 - Infrastructure Burden */}
            <div className="p-6 text-center">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#854D0E] to-[#CA8A04] shadow-lg">
                <svg
                  className="h-9 w-9 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.5 3.75a3 3 0 00-3 3v.75h21v-.75a3 3 0 00-3-3h-15z" />
                  <path
                    fillRule="evenodd"
                    d="M22.5 9.75h-21v7.5a3 3 0 003 3h15a3 3 0 003-3v-7.5zm-18 3.75a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-bold text-white">
                Infrastructure Burden
              </h3>
              <p className="text-base leading-relaxed text-white">
                Researchers must manage servers, dependencies, and parallel
                performance instead of focusing on science.
              </p>
            </div>

            {/* Card 4 - Slower Discovery */}
            <div className="p-6 text-center">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#374151] to-[#6B7280] shadow-lg">
                <svg
                  className="h-9 w-9 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-bold text-white">
                Slower Discovery
              </h3>
              <p className="text-base leading-relaxed text-white">
                Time spent on technical setup delays the real work of biological
                discovery and insight generation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataBottleneck;
