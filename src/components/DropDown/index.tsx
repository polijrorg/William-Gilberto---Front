import React, { useState } from 'react';
import * as S from './styles';

interface DropdownProps {
  z: number;
  text?: string;
  placeholder?: string;
  options: string[];
  value: string | number;
  onOptionSelect: (option: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, onOptionSelect, value, text, placeholder, z }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
    onOptionSelect(option);
    setIsOpen(false);
  };

  return (
    <S.Div z={z}>
      <S.styledText>{text}</S.styledText>
      <S.Container onPress={() => setIsOpen(!isOpen)}>
          <S.SelectedOption>{selectedOption || value || placeholder}</S.SelectedOption>
        {isOpen && (
          <S.OptionsContainer>
            {options.map((option, index) => (
              <S.OptionTouchable
                key={index}
                onPress={() => handleSelectOption(option)}
                activeOpacity={0.6}
              >
                <S.Option>{option}</S.Option>
              </S.OptionTouchable>
            ))}
          </S.OptionsContainer>
        )}
      </S.Container>
    </S.Div>
    
  );
};

export default Dropdown;
