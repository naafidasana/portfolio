"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "@/app/styles/About.module.css";
import naafipf1 from "@/app/assets/images/naafipf1.jpg";
import naafipf2 from "@/app/assets/images/naafipf2.jpg";
import profile from "@/app/data/profile";
import TechStack from "@/app/components/techstack";
import githubImage from "@/app/assets/icons/github.png";
import linkedInImage from "@/app/assets/icons/linkedin.png";
import instagramImage from "@/app/assets/icons/instagram.png";
import xImage from "@/app/assets/icons/x.png";

const About = () => {
    const [role, setRole] = useState("");
    const [bio, setBio] = useState("");
    const [isBioComplete, setIsBioComplete] = useState(false);
    const roles = ["a Machine Learning Engineer 🤖🛠️", "an NLP Researcher 🗣️🧠"];

    /* Role Update */
    useEffect(() => {
        if (!isBioComplete) return;

        let currentRoleIndex = 0;
        let currentText = "";
        let isDeleting = false;
        let charIndex = 0;

        function typeRoleEffect() {
            const roleText = roles[currentRoleIndex];
            if (isDeleting) {
                currentText = roleText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                currentText = roleText.substring(0, charIndex + 1);
                charIndex++;
            }

            setRole(currentText);

            let typeSpeed = isDeleting ? 50 : 100;
            if (!isDeleting && currentText === roleText) {
                typeSpeed = 2000; // Pause before deleting.
                isDeleting = true;
            } else if (isDeleting && currentText === "") {
                isDeleting = false;
                currentRoleIndex = (currentRoleIndex + 1) % roles.length;
                typeSpeed = 500; // Pause before typing new role.
            }

            setTimeout(typeRoleEffect, typeSpeed);
        }

        typeRoleEffect();
    }, [isBioComplete]);

    /* Bio Writer */
    useEffect(() => {
        let currentText = "";
        let charIndex = 0;

        function typeBioEffect() {
            const bioText = profile.bio;
            if (charIndex < bioText.length) {
                currentText = bioText.substring(0, charIndex + 1);
                charIndex++;
                setBio(currentText);
                setTimeout(typeBioEffect, 20);
            } else {
                setIsBioComplete(true);
            }
        }

        typeBioEffect();
    }, []);

    return (
        <div className={styles.container}>
            {/* Profile Image with Hover Effect */}
            <div className={styles.profileContainer}>
                <div className={styles.imageWrapper}>
                    <Image
                        src={naafipf1}
                        alt="Naafi Profile"
                        layout="fill"
                        objectFit="cover"
                        className={`${styles.profileImage} ${styles.first}`}
                    />
                    <Image
                        src={naafipf2}
                        alt="Naafi Profile Hover"
                        layout="fill"
                        objectFit="cover"
                        className={`${styles.profileImage} ${styles.second}`}
                    />
                </div>

                <div className={styles.contactContainer}>
                    <a href="https://github.com/naafidasana" target="_blank">
                        <Image src={githubImage} alt="GitHub" width={30} height={30}/>
                    </a>
                    <a href="https://linkedin.com/in/naafi-ibrahim" target="_blank">
                        <Image src={linkedInImage} alt="LinkedIn" width={30} height={30}/>
                    </a>
                    <a href="https://www.instagram.com/naafidasana/" target="_blank">
                        <Image src={instagramImage} alt="Insta" width={30} height={30}/>
                    </a>
                    <a href="https://x.com/naafi_2" target="_blank">
                        <Image src={xImage} alt="X" width={30} height={30}/>
                    </a>
                </div>
            </div>

            <div className={styles.textContainerWrapper}>
                {/* Text Content (Now correctly positioned to the right) */}
                <div className={styles.textContainer}>
                    <p className={styles.welcomeText}>Hi 👋! I'm <b>Naafi!</b> Nice to meet you 😉!</p>
                    <p className={styles.roleText}>I am: {role}</p>
                    <p className={styles.bioText}>{bio}</p>
                </div>

                {/* Tech Stack */}
                <div className={styles.techStack}>
                    <TechStack />
                </div>
            </div>
        </div>
    );
}

export default About;
