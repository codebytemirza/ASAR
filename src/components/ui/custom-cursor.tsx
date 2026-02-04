'use client';

import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
    const [mounted, setMounted] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isHidden, setIsHidden] = useState(true);

    useEffect(() => {
        setMounted(true);
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
            setIsHidden(false);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('.btn') ||
                target.closest('.group') ||
                target.closest('button') ||
                target.closest('a') ||
                target.classList.contains('cursor-pointer') ||
                window.getComputedStyle(target).cursor === 'pointer'
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        const handleMouseLeave = () => {
            setIsHidden(true);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseover', handleMouseOver, { capture: true });
        document.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleMouseOver, { capture: true });
            document.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    if (!mounted) return null;

    return (
        <div
            className={`fixed top-0 left-0 pointer-events-none z-[9999] transition-opacity duration-300 ${isHidden ? 'opacity-0' : 'opacity-100'
                }`}
            style={{
                transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
            }}
        >
            <div className="relative">

                {/* Modern macOS Arrow Style (Based on latest reference) */}
                <div
                    className={`absolute top-0 left-0 transition-all duration-200 ease-out ${isHovering ? 'opacity-0 scale-50 -translate-y-2' : 'opacity-100 scale-100 translate-y-0'
                        }`}
                    style={{ transform: 'translate(-2px, -2px)' }}
                >
                    <svg
                        width="28"
                        height="28"
                        viewBox="0 0 32 32"
                        className="drop-shadow-[1px_2px_2px_rgba(0,0,0,0.4)]"
                    >
                        {/* White Stroke Base for that thick macOS outline */}
                        <path
                            d="M8 2.5V26.5L13.5 21L17.5 28.5L20.5 27L16.5 19.5L24.5 19.5L8 2.5Z"
                            fill="white"
                            stroke="white"
                            strokeWidth="2.5"
                            strokeLinejoin="round"
                        />
                        {/* Black Core */}
                        <path
                            d="M8.5 4.5V24.5L13 20L17.5 28.5L19 27.5L14.5 19L22 19L8.5 4.5Z"
                            fill="#111"
                        />
                    </svg>
                </div>

                {/* User-Provided Professional Hand SVG (Pointer State) */}
                <div
                    className={`absolute top-0 left-0 transition-all duration-200 ease-out ${isHovering ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-50 translate-y-2'
                        }`}
                    style={{ transform: 'translate(-16px, -16px)' }}
                >
                    <svg
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px" y="0px"
                        viewBox="0 0 32 32"
                        enableBackground="new 0 0 32 32"
                        className="drop-shadow-[2px_4px_4px_rgba(0,0,0,0.3)]"
                        width="32"
                        height="32"
                    >
                        <g>
                            <defs>
                                <rect id="SVGID_1_" width="32" height="32" />
                            </defs>
                            <clipPath id="SVGID_2_">
                                <use xlinkHref="#SVGID_1_" overflow="visible" />
                            </clipPath>
                            {/* Note: strokeJoin fixed to strokeLinejoin elsewhere or removed if not needed */}
                            <path clipPath="url(#SVGID_2_)" fill="#FFFFFF" d="M11.3,20.4c-0.3-0.4-0.6-1.1-1.2-2c-0.3-0.5-1.2-1.5-1.5-1.9
                c-0.2-0.4-0.2-0.6-0.1-1c0.1-0.6,0.7-1.1,1.4-1.1c0.5,0,1,0.4,1.4,0.7c0.2,0.2,0.5,0.6,0.7,0.8c0.2,0.2,0.2,0.3,0.4,0.5
                c0.2,0.3,0.3,0.5,0.2,0.1c-0.1-0.5-0.2-1.3-0.4-2.1c-0.1-0.6-0.2-0.7-0.3-1.1c-0.1-0.5-0.2-0.8-0.3-1.3c-0.1-0.3-0.2-1.1-0.3-1.5
                c-0.1-0.5-0.1-1.4,0.3-1.8c0.3-0.3,0.9-0.4,1.3-0.2c0.5,0.3,0.8,1,0.9,1.3c0.2,0.5,0.4,1.2,0.5,2c0.2,1,0.5,2.5,0.5,2.8
                c0-0.4-0.1-1.1,0-1.5c0.1-0.3,0.3-0.7,0.7-0.8c0.3-0.1,0.6-0.1,0.9-0.1c0.3,0.1,0.6,0.3,0.8,0.5c0.4,0.6,0.4,1.9,0.4,1.8
                c0.1-0.4,0.1-1.2,0.3-1.6c0.1-0.2,0.5-0.4,0.7-0.5c0.3-0.1,0.7-0.1,1,0c0.2,0,0.6,0.3,0.7,0.5c0.2,0.3,0.3,1.3,0.4,1.7
                c0,0.1,0.1-0.4,0.3-0.7c0.4-0.6,1.8-0.8,1.9,0.6c0,0.7,0,0.6,0,1.1c0,0.5,0,0.8,0,1.2c0,0.4-0.1,1.3-0.2,1.7
                c-0.1,0.3-0.4,1-0.7,1.4c0,0-1.1,1.2-1.2,1.8c-0.1,0.6-0.1,0.6-0.1,1c0,0.4,0.1,0.9,0.1,0.9s-0.8,0.1-1.2,0c-0.4-0.1-0.9-0.8-1-1.1
                c-0.2-0.3-0.5-0.3-0.7,0c-0.2,0.4-0.7,1.1-1.1,1.1c-0.7,0.1-2.1,0-3.1,0c0,0,0.2-1-0.2-1.4c-0.3-0.3-0.8-0.8-1.1-1.1L11.3,20.4z"/>

                            <path clipPath="url(#SVGID_2_)" fill="none" stroke="#000000" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" d="
                M11.3,20.4c-0.3-0.4-0.6-1.1-1.2-2c-0.3-0.5-1.2-1.5-1.5-1.9c-0.2-0.4-0.2-0.6-0.1-1c0.1-0.6,0.7-1.1,1.4-1.1c0.5,0,1,0.4,1.4,0.7
                c0.2,0.2,0.5,0.6,0.7,0.8c0.2,0.2,0.2,0.3,0.4,0.5c0.2,0.3,0.3,0.5,0.2,0.1c-0.1-0.5-0.2-1.3-0.4-2.1c-0.1-0.6-0.2-0.7-0.3-1.1
                c-0.1-0.5-0.2-0.8-0.3-1.3c-0.1-0.3-0.2-1.1-0.3-1.5c-0.1-0.5-0.1-1.4,0.3-1.8c0.3-0.3,0.9-0.4,1.3-0.2c0.5,0.3,0.8,1,0.9,1.3
                c0.2,0.5,0.4,1.2,0.5,2c0.2,1,0.5,2.5,0.5,2.8c0-0.4-0.1-1.1,0-1.5c0.1-0.3,0.3-0.7,0.7-0.8c0.3-0.1,0.6-0.1,0.9-0.1
                c0.3,0.1,0.6,0.3,0.8,0.5c0.4,0.6,0.4,1.9,0.4,1.8c0.1-0.4,0.1-1.2,0.3-1.6c0.1-0.2,0.5-0.4,0.7-0.5c0.3-0.1,0.7-0.1,1,0
                c0.2,0,0.6,0.3,0.7,0.5c0.2,0.3,0.3,1.3,0.4,1.7c0,0.1,0.1-0.4,0.3-0.7c0.4-0.6,1.8-0.8,1.9,0.6c0,0.7,0,0.6,0,1.1
                c0,0.5,0,0.8,0,1.2c0,0.4-0.1,1.3-0.2,1.7c-0.1,0.3-0.4,1-0.7,1.4c0,0-1.1,1.2-1.2,1.8c-0.1,0.6-0.1,0.6-0.1,1
                c0,0.4,0.1,0.9,0.1,0.9s-0.8,0.1-1.2,0c-0.4-0.1-0.9-0.8-1-1.1c-0.2-0.3-0.5-0.3-0.7,0c-0.2,0.4-0.7,1.1-1.1,1.1
                c-0.7,0.1-2.1,0-3.1,0c0,0,0.2-1-0.2-1.4c-0.3-0.3-0.8-0.8-1.1-1.1L11.3,20.4z"/>

                            <line clipPath="url(#SVGID_2_)" fill="none" stroke="#000000" strokeWidth="0.75" strokeLinecap="round" x1="19.6" y1="20.7" x2="19.6" y2="17.3" />
                            <line clipPath="url(#SVGID_2_)" fill="none" stroke="#000000" strokeWidth="0.75" strokeLinecap="round" x1="17.6" y1="20.7" x2="17.5" y2="17.3" />
                            <line clipPath="url(#SVGID_2_)" fill="none" stroke="#000000" strokeWidth="0.75" strokeLinecap="round" x1="15.6" y1="17.3" x2="15.6" y2="20.7" />
                        </g>
                    </svg>
                </div>

            </div>
        </div>
    );
}
