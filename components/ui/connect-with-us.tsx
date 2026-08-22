'use client'

import React from 'react'

const SocialConnect = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center p-4 font-sans">
      <div className="relative w-full max-w-2xl">
        {/* 3D Glowing Container */}
        <div 
          className="rounded-3xl bg-gradient-to-br from-gray-900/90 via-gray-900/80 to-black/90 border border-gray-800/80 shadow-2xl backdrop-blur-3xl overflow-hidden p-4 sm:p-6 transition-all duration-500 hover:scale-[1.02]"
          style={{
            boxShadow: '0 0 50px rgba(139, 92, 246, 0.3), 0 0 80px rgba(124, 58, 237, 0.2)'
          }}
        >
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <a href="https://github.com/waqarhaidertufian" target="_blank" rel="noopener noreferrer" className="social-icon github">
              <div className="icon-container">
                <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
                </svg>
              </div>
              <span className="icon-label">GitHub</span>
            </a>
            
            <a href="https://www.linkedin.com/in/waqar-haider-063083322/" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
              <div className="icon-container">
                <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </div>
              <span className="icon-label">LinkedIn</span>
            </a>

            <a href="https://www.instagram.com/waqarhaider_3?igsh=NGNoOXY5czV0aDJl&utm_source=qr" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
              <div className="icon-container">
                <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>
              <span className="icon-label">Instagram</span>
            </a>
            
            <a href="https://wa.me/923271086970" target="_blank" rel="noopener noreferrer" className="social-icon whatsapp">
              <div className="icon-container">
                <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.503-5.729-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.863-9.864.001-2.637-1.025-5.116-2.891-6.983A9.799 9.799 0 0 0 12.008 1.84c-5.442 0-9.867 4.422-9.87 9.865-.001 1.688.45 3.332 1.307 4.771l-.995 3.637 3.72-.976-.523-.337z"/>
                </svg>
              </div>
              <span className="icon-label">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .social-icon {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-decoration: none;
          transition: all 0.3s ease;
          position: relative;
          z-index: 1;
        }
        
        .icon-container {
          display: inline-flex;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          transition: all 0.3s ease;
          position: relative;
          justify-content: center;
          align-items: center;
          background: rgba(255, 255, 255, 0.05);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(4px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .social-icon:hover .icon-container {
          transform: translateY(-8px) scale(1.1);
        }
        
        .social-icon:hover .icon-label {
          opacity: 1;
          transform: translateY(4px);
        }
        
        .icon-label {
          margin-top: 10px;
          color: white;
          font-size: 0.875rem;
          font-weight: 500;
          opacity: 0.7;
          transition: all 0.3s ease;
        }
        
        .social-icon.instagram:hover .icon-container {
          background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
          box-shadow: 0 0 20px rgba(225, 48, 108, 0.6);
        }
        
        .social-icon.whatsapp:hover .icon-container {
          background: #25D366;
          box-shadow: 0 0 20px rgba(37, 211, 102, 0.6);
        }
        
        .social-icon.github:hover .icon-container {
          background: #24292e;
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
        }
        
        .social-icon.linkedin:hover .icon-container {
          background: #0077b5;
          box-shadow: 0 0 20px rgba(0, 119, 181, 0.6);
        }
      `}</style>
    </div>
  )
}

export { SocialConnect }
