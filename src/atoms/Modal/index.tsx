import { FC, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Text } from "src/atoms";
import { Close as CloseIcon } from "src/assets/icons";
import SC from "./styles";

const modalRoot = document.getElementById("modal");

type Props = {
  visible: boolean;
  title: string;
  close: () => void;
};

const Modal: FC<Props> = ({ visible, close, title, children }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const clickOutside = (event: MouseEvent) => {
      const eventTarget = event.target as Node;
      if (!wrapperRef.current?.contains(eventTarget)) {
        close();
      }
    };
    document.addEventListener("mousedown", clickOutside);
    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  }, [close]);

  if (!visible || !modalRoot) return null;

  return createPortal(
    <SC.Background>
      <SC.Wrapper ref={wrapperRef}>
        <SC.CloseWrapper onClick={close}>
          <CloseIcon />
        </SC.CloseWrapper>
        <SC.Title>
          <Text type="h3">{title}</Text>
        </SC.Title>
        {children}
      </SC.Wrapper>
    </SC.Background>,
    modalRoot
  );
};

export default Modal;
