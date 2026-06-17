type AnswerButtonProps = {
  option: string;
  isDisabled: boolean;
  isCorrect: boolean;
  isSelected: boolean;
  onSelect: (option: string) => void;
};

export function AnswerButton({
  option,
  isDisabled,
  isCorrect,
  isSelected,
  onSelect,
}: AnswerButtonProps) {
  let className = "answer-button";

  if (isDisabled && isCorrect) {
    className += " answer-button--correct";
  } else if (isDisabled && isSelected) {
    className += " answer-button--incorrect";
  }

  return (
    <button
      className={className}
      type="button"
      disabled={isDisabled}
      onClick={() => onSelect(option)}
    >
      {option}
    </button>
  );
}
