import { BaseCardWrapper, colors, sizes } from "./style";

interface BaseCardProps {
  children: React.ReactNode;
  size: keyof typeof sizes;
  color: keyof typeof colors;
}

export const BaseCard: React.FC<BaseCardProps> = ({
  children,
  size,
  color,
}) => {
  return (
    <BaseCardWrapper size={size} color={color}>
      {children}
    </BaseCardWrapper>
  );
};
