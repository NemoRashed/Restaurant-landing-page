'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="|About Restautrant" textStyles="text-center p-2" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >

  
        <span className="font-extrabold text-white">Sodani</span> specializes in delicious food featuring fresh ingredients and masterful preparation by the
 Sodani{' '}
        <span className="font-extrabold text-white">
         Restautrant 
        </span>{' '}
        culinary team.{' '}
        <span className="font-extrabold text-white">SODANI</span> Whether you’re ordering a multi-course meal or grabbing a drink and pizza at the bar, 
 (RN’s) lively,{' '}
        <span className="font-extrabold text-white"> casual yet upscale</span>  atmosphere makes it perfect for dining with friends, family, clients and business associates.
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;