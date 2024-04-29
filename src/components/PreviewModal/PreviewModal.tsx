import './PreviewModal.scss';

export default function PreviewModal({
  imageLink,
  hideModal
}: {
  imageLink: string;
  hideModal: () => void;
}): JSX.Element {
  return (
    <div className="preview-modal__wrapper" onClick={hideModal}>
      <img
        className="preview-modal__image"
        src={imageLink}
        alt="Certificate"
        onClick={e => {
          e.stopPropagation();
        }}
      />
    </div>
  );
}
