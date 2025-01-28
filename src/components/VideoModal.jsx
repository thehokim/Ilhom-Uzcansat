import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Required for accessibility

const VideoModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-30"
      overlayClassName="fixed inset-0 bg-black/70 z-30"
      shouldCloseOnOverlayClick={true} // Close modal when clicking outside
    >
      <div className="relative w-screen h-screen flex items-center justify-center z-30">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-white text-4xl z-10"
          onClick={onClose}
        >
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="48" height="48" rx="12" fill="#616161" />
            <path d="M13.8628 14.0718L13.9596 13.9596C14.3147 13.6046 14.8702 13.5723 15.2617 13.8628L15.3739 13.9596L24.0001 22.5854L32.6263 13.9596C33.0168 13.5691 33.65 13.5691 34.0405 13.9596C34.431 14.3502 34.431 14.9833 34.0405 15.3739L25.4147 24.0001L34.0405 32.6263C34.3955 32.9813 34.4278 33.5369 34.1373 33.9284L34.0405 34.0405C33.6855 34.3955 33.1299 34.4278 32.7385 34.1373L32.6263 34.0405L24.0001 25.4147L15.3739 34.0405C14.9833 34.431 14.3502 34.431 13.9596 34.0405C13.5691 33.65 13.5691 33.0168 13.9596 32.6263L22.5854 24.0001L13.9596 15.3739C13.6046 15.0188 13.5723 14.4633 13.8628 14.0718L13.9596 13.9596L13.8628 14.0718Z" fill="white" />
          </svg>

        </button>

        {/* Fullscreen Video */}
        <video
          controls
          autoPlay
          className="w-screen h-screen object-cover"
        >
          <source src="/VN20250127_102031.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </Modal>
  );
};

export default VideoModal;
