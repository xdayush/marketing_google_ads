import React, { useEffect } from 'react';
import './apply.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Apply() {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1.3 }
      });
    }
  }, [controls, inView]);

  return (
    <div>
      <div className="card my-4 card-apply">
        <motion.div
          className="card-img-overlay apply-div"
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
        >
          <h4 className="card-title text-center"><b>You Can Apply:</b></h4>
          
        </motion.div>
        <p className="card-text margin-apply margin-left">- If you are an Indian citizen above 18 years of age.</p>
          <p className="card-text margin-left">- If you have a valid current address proof</p>
          <p className="card-text margin-left">- If you have a bank account with internet banking facility</p>
          <p className="card-text margin-left">- List of documents required for loan approval <a href='#'>CheckList</a></p>
      </div>
    </div>
  );
}
