import { useState, useEffect, useRef } from 'react';
import { ReactComponent as ArrowDown } from 'assets/icons/ArrowDown.svg';
import { useDispatch } from 'react-redux';
import { setSelectedOption } from 'store/selectedOptionSlice';
import styles from './SelectBox.module.scss';

const options = [
  { value: 'all', name: '전체보기' },
  { value: '텀블러', name: '텀블러 사용하기' },
  { value: '대중교통', name: '대중교통 이용하기' },
  { value: '장바구니', name: '장바구니 사용하기' },
];

interface SelectBoxProps {
  onSelectClick?: (selectedValue: string) => void;
}

function SelectBox({ onSelectClick }: SelectBoxProps) {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [selectOption, setSelectOption] = useState(options[0]);
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
    setSelectOption({ value, name });

    dispatch(setSelectedOption({ value, name }));
  };

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.selectValue} onClick={handleSelectValueClick}>
        <span>{selectOption.name}</span>
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
