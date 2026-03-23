"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function RetreatPage() {
  const searchParams = useSearchParams();
  const rawName = searchParams.get("name");
  const name = rawName
    ? rawName.charAt(0).toUpperCase() + rawName.slice(1)
    : null;

  return (
    <div className="min-h-screen bg-white text-[#0a0a0a] dark:bg-[#0a0a0a] dark:text-[#f0f0f0]">
      <div className="max-w-140 mx-auto px-6 py-16 font-sans">

        {/* Hero */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="mb-12"
          
        >
          <h1 className="text-[28px] leading-[1.3] tracking-tight font-medium mb-2">
            Thank you for making <br /> retreat possible.
          </h1>
          <p className="text-sm text-neutral-500">
            KCF Retreat 2026 | Seek First the Kingdom
          </p>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-neutral-200 dark:bg-neutral-800 mb-10" />

        {/* Body */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-10 space-y-5 text-[15px] leading-[1.85] text-neutral-700 dark:text-neutral-300"
        >
          <p>
            Hi {name ? `${name}` : ""}!
            <br />
            <br />
            Two weekends ago, something happened at retreat that we keep coming
            back to. This year's retreat was more than a getaway. It was a space
            where students encountered God, built real relationships, and found
            rest in the Lord — the kind that's hard to find anywhere else. That
            wouldn't have happened without you.
          </p>
          <p>
            Thank you for being someone who makes that possible.
            Your generosity, whether that was prayer or financial support, directly impacted every moment.
          </p>
        </motion.div>

        {/* Highlights */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-[10px] tracking-[2px] uppercase text-neutral-400 mb-2">
            Retreat Highlights
          </p>

          <div className="grid grid-cols-2 gap-2 mb-6">
            {[
              "dsc089772.jpg",
              "_dsc90012.jpg",
            ].map((img, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="relative aspect-3/2 rounded-lg overflow-hidden"
              >
                <Image
                  src={`https://eapfvlw.stripocdn.email/content/guids/CABINET_3b51c84954502fdd737ac98edfbaa64791764f86e5dff1f32642c7bd5cfe6e28/images/${img}`}
                  alt=""
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Service */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-[10px] tracking-[2px] uppercase text-neutral-400 mb-2">
            Service & Fellowship
          </p>

          <div className="grid grid-cols-2 gap-2 mb-10">
            {[
              "_dsc89692.jpg",
              "_dsc89632.jpg",
            ].map((img, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="relative aspect-3/2 rounded-lg overflow-hidden"
              >
                <Image
                  src={`https://eapfvlw.stripocdn.email/content/guids/CABINET_3b51c84954502fdd737ac98edfbaa64791764f86e5dff1f32642c7bd5cfe6e28/images/${img}`}
                  alt=""
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <a
            href="https://youtu.be/62VS31pEM9Y"
            target="_blank"
            className="inline-block px-5 py-3 text-sm rounded-md bg-black text-white dark:bg-white dark:text-black transition hover:opacity-80"
          >
            Watch retreat recap →
          </a>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-neutral-200 dark:bg-neutral-800 mb-10" />

        {/* Closing */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-14 space-y-5 text-[15px] leading-[1.85] text-neutral-700 dark:text-neutral-300"
        >
          <p>
            Every conversation, every shared meal, every moment of worship. Your
            support made it possible. Thank you{name ? `, ${name}` : ""}, for being part of what God is doing through KCF!
          </p>
          <p>
            With love,
            <br />
            <span className="font-medium">
              SBU Korean Christian Fellowship
            </span>
          </p>
        </motion.div>

        {/* Footer */}
        <div className="h-px bg-neutral-200 dark:bg-neutral-800 mb-6" />

        <div className="flex justify-between text-xs text-neutral-400">
          <span>© 2026 KCF</span>
          <div className="space-x-4">
            <a href="https://www.instagram.com/sbu.kcf/" target="_blank">
              Instagram
            </a>
            <a href="https://www.youtube.com/@sbukcf" target="_blank">
              Youtube
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}