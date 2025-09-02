
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const Card = ({
  title,
  description,
  color,
}: {
  title: string;
  description: string;
  color: string;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const card = cardRef.current;
    if (!canvas || !card) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = card.offsetWidth;
      canvas.height = card.offsetHeight;
    };
    resizeCanvas();

    class Bubble {
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      baseSpeed: number;
      speed: number;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.radius = Math.random() * 25 + 10;
        this.vx = Math.random() * 2 - 1;
        this.vy = Math.random() * 2 - 1;
        this.baseSpeed = 0.7;
        this.speed = this.baseSpeed;
      }

      update(isHovered: boolean) {
        this.speed = isHovered ? this.baseSpeed * 3 : this.baseSpeed;
        this.x += this.vx * this.speed;
        this.y += this.vy * this.speed;

        if (this.x < 0 || this.x > (canvas?.width ?? 0)) this.vx *= -1;
        if (this.y < 0 || this.y > (canvas?.height ?? 0)) this.vy *= -1;
      }

      draw(ctx: CanvasRenderingContext2D) {
        const gradient = ctx.createRadialGradient(
          this.x,
          this.y,
          0,
          this.x,
          this.y,
          this.radius
        );
        gradient.addColorStop(0, color.replace(/0\.\d+/, '0.7')); // bright core
        gradient.addColorStop(1, color); // soft edge
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      }
    }

    const bubbles: Bubble[] = [];
    for (let i = 0; i < 15; i++) bubbles.push(new Bubble());

    let isHovered = false;
    const handleEnter = () => (isHovered = true);
    const handleLeave = () => (isHovered = false);

    card.addEventListener('mouseenter', handleEnter);
    card.addEventListener('mouseleave', handleLeave);
    window.addEventListener('resize', resizeCanvas);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      bubbles.forEach((bubble) => {
        bubble.update(isHovered);
        bubble.draw(ctx);
      });
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      card.removeEventListener('mouseenter', handleEnter);
      card.removeEventListener('mouseleave', handleLeave);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [color]);

  return (
    <motion.div
      ref={cardRef}
      className="relative w-[40vw] h-[60vh] rounded-2xl shadow-lg overflow-hidden flex-shrink-0 border border-gray-100 hover:shadow-xl transition-all duration-300 bg-white"
      initial={{ x: '50%' }} 
      animate={{ x: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <canvas ref={canvasRef} className="absolute inset-0" />
      <div className="relative z-10 flex flex-col items-start justify-center h-full p-6 text-left space-y-4 bg-white/70 backdrop-blur-md">
        <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
        <p className="text-gray-700 text-base">{description}</p>
        <button className="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors">
          Learn More
        </button>
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start center', 'end center'], 
  });
  const [translateRange, setTranslateRange] = useState<[number, number]>([0, 0]);

  useEffect(() => {
    const updateRange = () => {
      const vw = window.innerWidth / 100;
      const cardWidth = 40 * vw;
      const gap = 2 * vw;
      const totalWidth = 4 * cardWidth + 3 * gap;
      const maxTranslate = -(totalWidth - window.innerWidth + cardWidth / 2); // Adjust for half card
      setTranslateRange([cardWidth / 2, maxTranslate]); 
    };
    updateRange();
    window.addEventListener('resize', updateRange);
    return () => window.removeEventListener('resize', updateRange);
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], translateRange);

  const cards = [
    {
      title: 'Development',
      description:
        'Turning responsive websites tailored to your needs, ensuring a seamless experience across all devices.',
      color: 'rgba(144, 238, 144, 0.3)',
    },
    {
      title: 'SEO Optimization',
      description:
        'Boost your online presence, driving organic traffic with expert optimization.',
      color: 'rgba(255, 105, 180, 0.3)',
    },
    {
      title: 'Branding',
      description:
        'Craft unique brand identities that captivate and distinguish your market presence.',
      color: 'rgba(135, 206, 235, 0.3)',
    },
    {
      title: 'Social Media',
      description:
        'Enhance your community with engaging content and strategic campaign management.',
      color: 'rgba(221, 160, 221, 0.3)',
    },
  ];

  return (
    <section ref={sectionRef} className="relative" style={{ height: '250vh' }}>
      <div className="sticky top-0 h-screen overflow-hidden bg-gradient-to-br from-white to-gray-50">
        <motion.div
          style={{ x }}
          className="flex flex-row h-full items-center gap-[2vw] pl-[5vw]"
        >
          {cards.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              color={card.color}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;