import { Button, colors } from "./style";

interface BaseButtonProps {
  children: React.ReactNode;
  color: keyof typeof colors;
  shadow?: boolean;
}

export const BaseButton: React.FC<BaseButtonProps> = ({
  children,
  color,
  shadow,
}) => {
  return (
    <Button color={color} shadow={shadow}>
      {children}
    </Button>
  );
};
