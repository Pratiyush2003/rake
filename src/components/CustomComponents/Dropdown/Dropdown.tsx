/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, FC, memo, ReactNode, useRef, useEffect } from 'react';

interface CurrencyOption {
  key: string;
  label: string;
  value?: string;
  icon: string;
}

interface DropdownProps {
  options: ReactNode[];
  currentValue?: ReactNode;
  onChange: (value: CurrencyOption | null) => void;
  data?: any[];
  mainClasses?: string;
  bodyClasses?: string;
  bodyChildClasses?: string;
}

const Dropdown: FC<DropdownProps> = ({
  options,
  currentValue,
  onChange,
  data,
  bodyClasses,
  mainClasses,
  bodyChildClasses,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleOptionClick = (index: number) => {
    if (!data) return;
    const selectedData = data[index] || null;
    onChange(selectedData);
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='relative' ref={dropdownRef}>
      <button
        className={`flex w-full items-center justify-between rounded-[10px] border-0
          bg-rake_background-500 !p-0 focus:outline-none ${mainClasses}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {currentValue || <span>Select an option</span>}
        <svg
          className={`mr-2.5 transition-transform duration-200 ${isOpen ? 'rotate-180 transform' : ''}`}
          width='16'
          height='8'
          viewBox='0 0 16 8'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M15.654 0.886603C15.3329 0.564881 14.7799 0.535902 14.4187 0.821877L8.19377 5.75058C8.08326 5.83808 7.91673 5.83808 7.80623 5.75058L1.58133 0.821877C1.22014 0.535902 0.667079 0.564881 0.346026 0.886603C0.0249731 1.20833 0.0575061 1.70096 0.418691 1.98694L6.64359 6.91564C7.41715 7.52812 8.58285 7.52812 9.35641 6.91564L15.5813 1.98694C15.9425 1.70096 15.975 1.20833 15.654 0.886603Z'
            fill='#0099f4'
          ></path>
        </svg>
      </button>

      {isOpen && (
        <ul
          className={`absolute z-10 mt-1 max-h-[230px] w-full overflow-y-auto rounded-md border
          border-gray-300 shadow-lg ${bodyClasses}`}
        >
          {options.map((option, index) => (
            <li
              key={index}
              className={`group cursor-pointer px-[15px] py-[7px] hover:bg-[#455b70] ${bodyChildClasses}`}
              onClick={() => handleOptionClick(index)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default memo(Dropdown);
