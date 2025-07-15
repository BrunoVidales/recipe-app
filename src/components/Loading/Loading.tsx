import { ClockLoader } from 'react-spinners';
import { motion, AnimatePresence } from 'framer-motion';
import './_Loading.scss';

export const Loading = () => {

    return (
        <AnimatePresence>
            <motion.div
                className="loader__wrapper"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
            >
                <div className="loader__spinner">
                    <ClockLoader
                        color="#7ad41a"
                        loading={true}
                        size={100}
                    />
                    <p className="loader__text">Cooking something amazing</p>
                </div>
            </motion.div>
    </AnimatePresence>
    )
}
