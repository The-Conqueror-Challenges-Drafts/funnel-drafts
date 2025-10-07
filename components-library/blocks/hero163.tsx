const Hero163 = () => {
  return (
    <section className="dark bg-background py-12 font-sans md:py-20">
      <div className="container">
        <div className="mx-auto mb-24 flex max-w-[900px] flex-col items-center gap-3">
          <p className="text-center text-foreground">Your Support Team</p>
          <h1 className="text-center text-4xl leading-tight font-medium text-foreground sm:text-5xl md:text-6xl">
            Experienced Professionals Committed to Your Mental Health
          </h1>
        </div>
        <div className="grid w-full max-w-[83.125rem] auto-cols-auto grid-cols-2 grid-rows-[auto_auto] justify-center gap-5 md:grid-cols-[repeat(4,1fr)]">
          <div className="col-[1/2] row-[1/2] w-full">
            <div className="h-full max-h-[19.375rem] w-full overflow-hidden rounded-2xl">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                alt=""
                className="block h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="col-[2/3] row-[1/2] w-full md:col-[2/3] md:row-[1/2]">
            <div className="h-full max-h-[19.375rem] w-full overflow-hidden rounded-2xl">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg"
                alt=""
                className="block h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="col-[1/3] row-[3/4] w-full md:col-[1/3] md:row-[2/3]">
            <div className="flex h-full min-h-[9.375rem] flex-col gap-3 overflow-hidden rounded-3xl bg-muted p-5 px-5 md:flex-row md:items-center md:gap-7 md:py-8">
              <div className="h-20 w-20 shrink-0 overflow-hidden rounded-xl md:h-[7.5rem] md:w-[7.5rem]">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp"
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="flex h-full w-full flex-col justify-between gap-2">
                <p className="text-lg font-medium text-foreground">
                  &quot;Since beginning therapy here, I feel more grounded and
                  at ease.&quot;
                </p>
                <p className="text-foreground">John Doe</p>
              </div>
            </div>
          </div>
          <div className="col-[1/3] row-[2/3] h-[25rem] w-full md:col-[3/5] md:row-[1/3] md:h-auto">
            <div className="h-full max-h-[32.625rem] w-full overflow-hidden rounded-2xl">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg"
                alt=""
                className="block h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero163 };
