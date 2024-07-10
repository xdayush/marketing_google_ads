import React, { useEffect } from 'react';
import './paragraph.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TextComponent = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1 }
      });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={controls}
      style={{ fontSize: '24px' }} // Example styling
    >
      <h1><b>ACHIEVE</b></h1>
      <h4 className='my-4'>Everything You Aspire For A Happy Life With F2 Fintech</h4><br/>
    </motion.div>
  );
};

export default function Paragraph() {
  return (
    <div className='para my-2'>
      <TextComponent /> 
      
      
      <p>
        - Interest rate starting with as low as 8.45%<br/>
        - Low or Zero processing fees charges*<br/>
        - Repayment period starting from 1-20 years<br/>
        - Financial Literacy for your entire family*
      </p>
    </div>
  );
}
