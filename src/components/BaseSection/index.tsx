import { BaseSectionWrapper, backgrounds } from "./styles";

interface BaseSectionProps {
  children: React.ReactNode;
  height: string;
  bg: keyof typeof backgrounds;
}

export const BaseSection: React.FC<BaseSectionProps> = ({
  children,
  height,
  bg,
}) => {
  return (
    <BaseSectionWrapper bg={bg} height={height}>
      {children}
    </BaseSectionWrapper>
  );
};
