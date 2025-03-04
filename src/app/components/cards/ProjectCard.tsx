import React from "react";
import styles from "@/app/styles/ProjectCard.module.css";

interface ProjectCardProps {
    title: string;
    description: string;
    url: string;
  }

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, url}) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardDescription}>{description}</p>
                <a href={url} className={styles.cardLink} target="_blank">Visit!</a>
            </div>
        </div>
    );
}

export default ProjectCard;