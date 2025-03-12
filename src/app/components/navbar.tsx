"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/app/styles/NavBar.module.css";
import initialsImage from "@/app/assets/icons/initials.png"; // Ensure this path is correct

const NavBar = () => {
    const [scrollingDown, setScrollingDown] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    // Function to handle scroll event
    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY && currentScrollY > 50) {
            // Scrolling down
            setScrollingDown(true);
        } else {
            // Scrolling up
            setScrollingDown(false);
        }
        setLastScrollY(currentScrollY);
    };

    // Add scroll event listener
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    return (
        <nav className={`${styles.navbar} ${scrollingDown ? styles.hidden : styles.visible}`}>
            <Link href="/" className={styles.logo}>
                <Image src={initialsImage} alt="Initials" width={50} height={50} />
                <span className={styles.fullName}> | Naafi Dasana IBRAHIM</span>
                <span className={styles.shortName}> | Naafi IBRAHIM</span>
            </Link>

            <div className={styles.navLinks}>
                <Link href="#about">About</Link>
                <Link href="#projects">Projects</Link>
                <Link href="https://scholar.google.com/citations?user=pq6TpNQAAAAJ&hl=en" target="_blank">Publications</Link>
                <Link href="https://drive.google.com/file/d/1oFjaM4xopEBtFQ6dyL8MzTsg0e7dmbMy/view?usp=sharing" target="_blank">Resume</Link>
            </div>
        </nav>
    );
};

export default NavBar;
