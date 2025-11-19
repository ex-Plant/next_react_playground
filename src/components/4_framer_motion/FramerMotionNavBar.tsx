"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
  {
    path: "/",
    route: "home",
  },
  {
    path: "/page1",
    route: "page1",
  },
  {
    path: "/animatedImages",
    route: "animatedImages",
  },
];

// add layoutid to make it work
// this will animate when component is rendered - and path is active
export const FramerMotionNavBar = () => {
  const path = usePathname();

  return (
    <nav className={`flex gap-2`}>
      {routes.map((r) => (
        <div key={r.path} className={`relative`}>
          <Link href={r.path}>{r.route}</Link>
          {path === r.path && (
            <motion.div
              transition={{ type: "spring", stiffness: 800, damping: 25 }}
              initial={{ opacity: 0, scaleX: 0.5 }}
              animate={{ opacity: 1, scaleX: 1 }}
              className={"bg-red-200 w-full h-1 "}
              key={r.path}
              layoutId={`link`}
            ></motion.div>
          )}
        </div>
      ))}
    </nav>
  );
};
