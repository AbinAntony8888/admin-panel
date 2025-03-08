// export default function Abin(){
//     return(
//         <div className="">
//             <h1>hai anoop.................</h1>
//             <img src="https://thumbs.dreamstime.com/b/hello-welcome-symbol-concept-words-wooden-blocks-beautiful-pink-background-succulent-plant-business-copy-space-322306353.jpg" alt="" />
//             {/* 8086505425 */}
//         </div>
//     )
// }
"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const ROWS = 11; // Adjust for performance
const COLS = 20;

const AnimatedLogin = () => {
  const router = useRouter();
  useEffect(() => {
    const squares = document.querySelectorAll(".bg-square");

    const handleMouseMove = (e: MouseEvent) => {
      squares.forEach((square) => {
        const rect = square.getBoundingClientRect();
        const inside =
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom;

        if (inside) {
          (square as HTMLElement).style.backgroundColor = "red";
          (square as HTMLElement).style.transition =
            "background-color 0s ease-in-out";
        } else {
          (square as HTMLElement).style.backgroundColor = "#181818";
          (square as HTMLElement).style.transition =
            "background-color 2s ease-in-out";
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative flex h-screen w-screen items-center justify-center bg-black overflow-hidden">
      {/* Animated Grid Background */}
      <div
        className="absolute inset-0 grid w-full h-full pointer-events-none"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${COLS}, 1fr)`,
          gridTemplateRows: `repeat(${ROWS}, 1fr)`,
        }}
      >
        {Array.from({ length: ROWS * COLS }).map((_, index) => (
          <span key={index} className="bg-square"></span>
        ))}
      </div>

      {/* Login Form */}
      <div className="relative z-10 bg-gray-900 p-8 rounded-lg shadow-lg">
        <h2 className="text-center text-green-500 text-xl font-bold">
          SIGN IN
        </h2>
        <input
          type="text"
          placeholder="Username"
          className="w-full p-2 my-2 bg-gray-800 border-none rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 my-2 bg-gray-800 border-none rounded-md"
        />
        <button className="w-full p-2 bg-green-600 hover:bg-green-700 rounded-md text-white my-2">
          Login
        </button>
        <button
          className="w-full p-2 bg-red-600 hover:bg-red-700 rounded-md text-white my-2"
          onClick={() => router.push("/news")}
        >
          View News
        </button>
      </div>
    </div>
  );
};

export default AnimatedLogin;
