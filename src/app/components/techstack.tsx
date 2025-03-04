"use client";
import Image from "next/image";
import styles from "@/app/styles/TechStack.module.css";
import techStack from "@/app/data/techstacks";

const TechStack = () => {
    return (
        <div className={styles.techStackContainer}>
            <p className={styles.techStackHeading}>Tech Stack</p>
            <div className={styles.techStackWrapper}>
                {
                    techStack.map((tech: any, index: number) => (
                        <div key={index} className={styles.techItem}>
                            <Image src={tech.image} alt={tech.name} width={50} height={50} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default TechStack;
