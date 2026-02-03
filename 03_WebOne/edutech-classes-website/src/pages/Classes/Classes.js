import "./Classes.css";

const classes = Array.from({ length: 10 }, (_, i) => i + 1);

function Classes() {
  return (
    <div className="classes-page">
      <h2>Choose Your Class</h2>

      <div className="class-grid">
        {classes.map((cls) => (
          <div key={cls} className="class-card">
            Class {cls}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Classes;
