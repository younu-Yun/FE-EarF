import React from 'react';
import styles from './PageTitle.module.scss';
import Star from 'assets/icons/Star.svg';

interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <div className={styles.title}>
      <div className={styles.star}>
        <img src={Star} alt='별아이콘' />
      </div>
      <h2>{title}</h2>
    </div>
  );
};

export default Title;
