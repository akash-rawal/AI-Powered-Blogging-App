import React from 'react';
import { LuSparkles,LuX } from 'react-icons/lu';

const Drawer = ({ isOpen, onClose, title, children }) => {
 return (
   <div
     className={`fixed top-[70px] right-0 z-40 h-[calc(100dvh-70px)]  p-4 overflow-y-auto transition-transform bg-white w-full md:w-[35vw] shadow-2xl shadow-cyan-800/10 border-r border-l-gray-800  ${
       isOpen ? "translate-x-0" : "translate-x-full"
     } transition-transform duration-300 ease-in-out w-96 bg-white shadow-lg`}
     tabIndex="-1"
     aria-labelledby="drawer-right-label"
   >
     {/* Header */}
     <div className="flex items-start justify-between mb-4">
       <div className="flex flex-col items-start gap-3">
         <span
           className="flex items-center gap-2 bg-cyan-100/60 text-sky-500 px-3 py-0.5 rounded-full text-xs font-medium text-nowrap"
         >
           <LuSparkles /> Summarize this post
         </span>

         <h5
           id="drawer-right-label"
           className="flex items-center text-base font-semibold text-gray-500"
         >
           {title}
         </h5>
       </div>
       {/* Close Button */}
       <button
         type="button"
         onClick={onClose}
         className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8  inline-flex items-center justify-center"
       >
         <LuX className="text-lg" />
       </button>
     </div>

     {/* Body Content */}
     <div className="text-sm mx-3 mb-6">{children}</div>
   </div>
 );
};

export default Drawer;