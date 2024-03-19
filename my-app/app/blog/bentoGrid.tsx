import { cn } from "@/utils/cn";
import Link from "next/link";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};


//! Pass img url through Link Component to prevent having to fetch url again in blog/[slug]
export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  slug,
  imgUrl
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  slug?: string;
  imgUrl: string
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300 line-clamp-3 lg:line-clamp-6">
          {description}
        </div>
      </div>
      <button className="group-hover/bento:translate-x-2 transition duration-200 bg-blue-500 hover:bg-blue-700 text-white font-bold p-1  px-4 rounded self-start">
        {slug ? (
          <Link href={slug} > Read more</Link>
        ) : (
          <Link href="/error">Read more</Link>
        )}
      </button>
    </div >
  );
};
