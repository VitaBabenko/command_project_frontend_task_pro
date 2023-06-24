export const ModalBodyWrapper = ({ children, manualControlBody }) => {
  return (
    <div className={!manualControlBody ? 'modal-body-wrapper' : ''}>
      {children}
    </div>
  );
};