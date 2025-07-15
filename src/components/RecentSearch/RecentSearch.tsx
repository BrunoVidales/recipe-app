import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import { AnimatePresence, motion } from "framer-motion";
import { RecentCard } from "../Cards/RecentCard/RecentCard";
import './_RecentSearch.scss';
import { useEffect, useState } from "react";

export const RecentSearch = () => {

  const [currentOpen, setCurrentOpen] = useState(() => {
    const item = localStorage.getItem('currentOpen');
    return item ? JSON.parse(item) : true;
  });

  
  
  useEffect(() => {
    localStorage.setItem('currentOpen', JSON.stringify(currentOpen));
  }, [currentOpen]);

  return (
    <section className="spacing">
      <h2>Recent Search</h2>
      <motion.button onClick={() => setCurrentOpen(!currentOpen)}>
        {currentOpen 
          ? <EyeIcon width={50} hanging={50} />
          : <EyeSlashIcon width={50} hanging={50} />
        }
      </motion.button>
      <AnimatePresence>
        {currentOpen && (
          <motion.div
            className="recentCards"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: .3, ease: "easeInOut"}}
          >
            <RecentCard />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
