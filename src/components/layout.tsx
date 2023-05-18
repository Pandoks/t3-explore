import type { PropsWithChildren } from "react";

export const PageLayout = (props: PropsWithChildren) => {
  return (
    <main className="flex justify-center h-screen">
      <div className="border-slate-400, h-full w-full overflow-y-scroll border-x md:max-w-2xl">
        {props.children}
      </div>
    </main>
  );
};
