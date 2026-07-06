export default function Hole({ isMoleVisible, onClick }) {
  return (
    <div className={`hole ${isMoleVisible ? "mole" : ""}`} onClick={onClick}>
      {/* The background-image in CSS handles the visuals */}
    </div>
  );
}