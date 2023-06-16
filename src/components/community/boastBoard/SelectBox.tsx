import { useState, useEffect, useRef } from 'react';
import { ReactComponent as ArrowDown } from 'assets/icons/ArrowDown.svg';
import styles from './SelectBox.module.scss';

const options = [
  { value: 'all', name: '전체보기' },
  { value: 'tumbler', name: '텀블러 사용하기' },
  { value: 'public', name: '대중교통 이용하기' },
  { value: 'basket', name: '장바구니 사용하기' },
];

function SelectBox() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const handleSelectValueClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (value: string, name: string) => {
    setIsOpen(false);
    setSelectedOption({ value, name });
  };

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.selectValue} onClick={handleSelectValueClick}>
        <span>{selectedOption.name}</span>
        <ArrowDown />
      </div>
      {isOpen && (
        <div>
          <ul className={styles.optionContainer}>
            {options.map((option) => (
              <li key={option.value} value={option.value} onClick={() => handleOptionClick(option.value, option.name)}>
                {option.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SelectBox;
