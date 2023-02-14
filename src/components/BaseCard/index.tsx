import { BaseCardWrapper, colors, sizes } from "./style";
import { AnimationOnScroll } from "react-animation-on-scroll";

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
    <AnimationOnScroll animateIn="animate__bounceIn">
      <BaseCardWrapper size={size} color={color}>
        {children}
      </BaseCardWrapper>
    </AnimationOnScroll>
  );
};
