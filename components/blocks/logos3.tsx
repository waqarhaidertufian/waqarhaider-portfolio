"use client";

import React from "react";

export const Logos3 = () => {
  return (
    <section className="w-full bg-black py-20 overflow-hidden border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
          Technologies & Platforms I Work With
        </h2>
      </div>

      {/* Infinite Marquee Track Container */}
      <div className="relative w-full flex items-center overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
        {/* Running Row Wrapper (Duplicated manually for smooth infinite wrap) */}
        <div className="flex w-max items-center gap-20 animate-marquee whitespace-nowrap py-4">
          {[...Array(3)].map((_, mainIdx) => (
            <React.Fragment key={mainIdx}>
              
              {/* SYSTEMS LIMITED ORIGINAL LOGO */}
              <div className="flex items-center justify-center min-w-[150px] h-10">
                <svg className="h-9 w-auto text-white fill-current" viewBox="0 0 200 50">
                  <path d="M15 10h12v6H15zm0 10h20v6H15zm0 10h15v6H15z" />
                  <text x="45" y="32" fontSize="18" fontWeight="bold" fill="currentColor">SYSTEMS</text>
                </svg>
              </div>

              {/* NETSOL TECHNOLOGIES ORIGINAL LOGO */}
              <div className="flex items-center justify-center min-w-[150px] h-10">
                <svg className="h-8 w-auto text-white fill-current" viewBox="0 0 200 50">
                  <path d="M10 35c5-10 15-15 25-5s15 5 25-5" stroke="currentColor" strokeWidth="4" fill="none" />
                  <text x="70" y="32" fontSize="18" fontWeight="bold" fill="currentColor">NETSOL</text>
                </svg>
              </div>

              {/* ARBISOFT ORIGINAL LOGO */}
              <div className="flex items-center justify-center min-w-[150px] h-10">
                <svg className="h-8 w-auto text-white fill-current" viewBox="0 0 200 50">
                  <polygon points="10,40 25,10 40,40" fill="none" stroke="currentColor" strokeWidth="4" />
                  <text x="50" y="32" fontSize="18" fontWeight="bold" fill="currentColor">arbisoft</text>
                </svg>
              </div>

              {/* DEVSINC ORIGINAL LOGO */}
              <div className="flex items-center justify-center min-w-[150px] h-10">
                <svg className="h-9 w-auto text-white fill-current" viewBox="0 0 200 50">
                  <text x="10" y="32" fontSize="22" fontWeight="900" fill="currentColor">devsinc</text>
                </svg>
              </div>

              {/* MICROSOFT ORIGINAL LOGO */}
              <div className="flex items-center justify-center min-w-[150px] h-10">
                <svg className="h-7 w-auto" viewBox="0 0 23 23">
                  <path fill="#f25022" d="M0 0h11v11H0z" />
                  <path fill="#7fba00" d="M12 0h11v11H12z" />
                  <path fill="#00a4ef" d="M0 12h11v11H0z" />
                  <path fill="#ffb900" d="M12 12h11v11H12z" />
                </svg>
                <span className="text-white font-semibold text-lg ml-2">Microsoft</span>
              </div>

              {/* VISIBILITY BOT ORIGINAL LOGO */}
              <div className="flex items-center justify-center min-w-[150px] h-10">
                <svg className="h-8 w-auto text-blue-400 fill-current" viewBox="0 0 30 30">
                  <circle cx="15" cy="15" r="10" fill="none" stroke="currentColor" strokeWidth="3" />
                  <circle cx="15" cy="15" r="4" fill="currentColor" />
                </svg>
                <span className="text-white font-semibold text-lg ml-2">Visibility Bot</span>
              </div>

              {/* GOOGLE ORIGINAL LOGO */}
              <div className="flex items-center justify-center min-w-[150px] h-10">
                <svg className="h-8 w-auto" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.53-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-8.17z"/>
                  <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.11 0-5.74-2.11-6.68-4.96H1.21v3.15C3.18 21.88 7.31 24 12 24z"/>
                  <path fill="#FBBC05" d="M5.32 14.24A7.16 7.16 0 0 1 4.91 12c0-.79.13-1.57.41-2.24V6.61H1.21A11.94 11.94 0 0 0 0 12c0 1.92.45 3.74 1.21 5.39l4.11-3.15z"/>
                  <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.93 1.19 15.24 0 12 0 7.31 0 3.18 2.12 1.21 6.61l4.11 3.15c.94-2.85 3.57-4.96 6.68-4.96z"/>
                </svg>
              </div>

            </React.Fragment>
          ))}
        </div>

        <style jsx global>{`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-33.333%); }
          }
          .animate-marquee {
            animation: marquee 25s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}</style>
      </div>
    </section>
  );
};
