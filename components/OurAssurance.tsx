import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Eye, Clock, Shield, Users } from "lucide-react";

const OurAssurance = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollPercent, setScrollPercent] = useState(0);
    const [maxScrollPercent, setMaxScrollPercent] = useState(0); // New state variable

    
  // Scroll handler
  useEffect(() => {
  let lastScrollY = window.scrollY; // track scroll position

  const handleScroll = () => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      let percent =
        ((windowHeight - rect.top) / (rect.height + windowHeight)) * 100;
      percent = Math.max(0, Math.min(100, percent));

      // ✅ Only update if scrolling down
      if (window.scrollY > lastScrollY) {
        setMaxScrollPercent((prevMax) => Math.max(prevMax, percent));
      }

      lastScrollY = window.scrollY; // update last scroll position
    }
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // initial

  return () => window.removeEventListener("scroll", handleScroll);
}, []);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (sectionRef.current) {
  //       const rect = sectionRef.current.getBoundingClientRect();
  //       const windowHeight = window.innerHeight;

  //       // Calculate current scroll percentage for the section
  //       let percent =
  //         ((windowHeight - rect.top) / (rect.height + windowHeight)) * 100;
  //       percent = Math.max(0, Math.min(100, percent));

  //       // Only update the max percentage if the current scroll is greater
  //       setMaxScrollPercent((prevMax) => Math.max(prevMax, percent));
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   handleScroll(); // Initial call to set the line position
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  const cards = [
    {
      icon: <Eye className="w-8 h-8 text-blue-800" />,
      bg: "bg-blue-100",
      title: "100% Transparency",
      desc: "Complete visibility into project progress, timelines, and deliverables. No hidden costs or surprise changes.",
    },
    {
      icon: <Clock className="w-8 h-8 text-green-600" />,
      bg: "bg-blue-100",
      title: "95% On Time Delivery",
      desc: "Proven track record of meeting deadlines with quality deliverables. We value your time and business commitments.",
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-600" />,
      bg: "bg-blue-100",
      title: "Free 30 Days Support",
      desc: "Complimentary post-launch support to ensure smooth operation and address any issues that may arise.",
    },
    {
      icon: <Users className="w-8 h-8 text-orange-600" />,
      bg: "bg-orange-100",
      title: "Flexible Engagement",
      desc: "Adaptable working models to suit your project needs, timeline, and budget requirements.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className=" px-6 md:px-16 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto text-center max-w-6xl">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-red-600 dark:text-red-600">
          ASSURANCE TO YOU
        </h3>
        <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
          Our Commitment and Guarantee
        </h2>
        <div className="mx-auto h-1 w-20 bg-red-600 dark:bg-red-600  mt-4"></div>
        <p className="text-base dark:text-white text-gray-600 max-w-xl mx-auto mt-1 leading-relaxed">
          We promise quality, transparency, and reliability from consultation to post-launch support and ensure your website meets expectations, delivers results, and drives success.
        </p>

        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 w-full">
          {cards.map((item, idx) => (
            <motion.div
              key={idx}
              className="dark:bg-gray-900 relative bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 flex flex-col items-center text-center p-6 rounded-lg bg-slate-100 shadow-sm overflow-hidden transition-transform duration-200 group"
              whileHover={{
                y: -6,
                boxShadow: "0 12px 28px rgba(0,0,0,0.15)",
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
            >
              {/* Scroll gradient line */}
              <div
  className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-600 to-red-700 dark:from-red-800 dark:to-red-800 rounded-t-2xl"
  style={{ width: `${maxScrollPercent}%` }}
></div>
              {/* <div className="absolute top-0 left-0 h-1 rounded-t-lg bg-red-600"
                   style={{ width: `${scrollPercent}%` }}></div> */}

              {/* Icon */}
              <div
                className={`w-16 h-16 ${item.bg} rounded-full flex items-center justify-center mb-4 shadow-md transition-transform duration-300 group-hover:scale-110`}
              >
                {item.icon}
              </div>

              {/* Title */}
              <h4 className="text-lg dark:text-blue-400 font-semibold text-gray-900 mb-2">
                {item.title}
              </h4>

              {/* Description */}
              <p className="text-sm dark:text-white text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurAssurance;
