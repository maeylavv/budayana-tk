import { useState } from "react";
import "./Watermark.css";

export default function Watermark() {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = (e) => {
    e.preventDefault();
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Watermark Bar */}
      <div className="watermark-bar">
        <span className="watermark-text">
          Dikembangkan oleh{" "}
          <span className="watermark-brand" onClick={openPopup}>
            3RA
          </span>
        </span>
      </div>

      {/* Team Info Popup Modal */}
      {isOpen && (
        <div className="watermark-modal-overlay" onClick={closePopup}>
          <div className="watermark-modal-card" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button className="watermark-close-btn" onClick={closePopup} aria-label="Close popup">
              <svg
                viewBox="0 0 24 24"
                width="22"
                height="22"
                stroke="currentColor"
                strokeWidth="3.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {/* Modal Content */}
            <div className="watermark-modal-body">
              <h2 className="watermark-title">
                Situs web ini dikembangkan
                <br />
                oleh Tim 3RA
              </h2>

              <div className="watermark-team-names">
                <p className="team-member">Elvaretta Alexandra</p>
                <p className="team-member">Mayla Fatima Putri Indra Yuana</p>
                <p className="team-member">Fariz Rifqi. M</p>
              </div>

              <div className="watermark-contact-box">
                <p className="contact-text">Hubungi kami di</p>
                <a
                  href="mailto:budayana3ra@gmail.com"
                  className="contact-email-link"
                >
                  @budayana3ra@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
