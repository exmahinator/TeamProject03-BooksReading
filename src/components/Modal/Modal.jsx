import { createPortal } from 'react-dom';
import { useEffect } from 'react';

import { Overlay } from 'ui/Modal/Modal.styled';
import { ModalWindow } from 'ui/Modal/Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ toogleModal, children, bookId }) => {
	useEffect(() => {
		window.addEventListener('keydown', onKeyDown);
		return () => {
			window.removeEventListener('keydown', onKeyDown);
		};
	});

	const onOverlayClick = e => {
		if (e.target === e.currentTarget) {
			toogleModal();
		}
	};

	const onKeyDown = e => {
		if (e.code === 'Escape') {
			toogleModal();
		}
	};

	return createPortal(
		<Overlay onClick={onOverlayClick}>
			<ModalWindow>
			{children}
			</ModalWindow>
		</Overlay>,
		modalRoot
	);
};

export default Modal;
