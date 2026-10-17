import { useState } from "react";
import "./App.css";

const courses = [
  { name: "ReactJS", duration: "6 weeks", fee: 2500 },
  { name: "Web Development", duration: "8 weeks", fee: 3500 },
  { name: "Python", duration: "6 weeks", fee: 2500 },
  { name: "Java", duration: "8 weeks", fee: 3000 },
];

const initialForm = {
  name: "",
  email: "",
  phone: "",
  dob: "",
  gender: "",
  qualification: "",
  course: "",
  terms: false,
};

function App() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [receipt, setReceipt] = useState(null);

  const selectedCourse = courses.find(
    (course) => course.name === formData.course
  );

  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: "",
    }));
  }

  function validateDetails() {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your full name.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number.";
    }

    if (!formData.dob) {
      newErrors.dob = "Please select your date of birth.";
    } else if (new Date(formData.dob + "T00:00:00") >= new Date()) {
      newErrors.dob = "Date of birth must be in the past.";
    }

    if (!formData.gender) {
      newErrors.gender = "Please select your gender.";
    }

    if (!formData.qualification) {
      newErrors.qualification = "Please select your qualification.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function goToCoursePage(event) {
    event.preventDefault();

    if (validateDetails()) {
      setPage(2);
      setErrors({});
    }
  }

  function goToReviewPage() {
    if (!formData.course) {
      setErrors({ course: "Please select a course to continue." });
      return;
    }

    setErrors({});
    setPage(3);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!formData.terms) {
      setErrors({ terms: "Please accept the terms to continue." });
      return;
    }

    setReceipt({
      reference: `SR-${Date.now().toString().slice(-6)}`,
      name: formData.name.trim(),
      email: formData.email.trim(),
      course: selectedCourse.name,
      duration: selectedCourse.duration,
      fee: selectedCourse.fee,
    });

    setErrors({});
    setPage(4);
  }

  function startRegistration() {
    setPage(1);
  }

  function goBack() {
    setErrors({});
    setPage((current) => Math.max(1, current - 1));
  }

  function handleReset() {
    setFormData(initialForm);
    setErrors({});
    setReceipt(null);
    setPage(0);
  }

  function FieldError({ name }) {
    return errors[name] ? <p className="error">{errors[name]}</p> : null;
  }

  return (
    <main className={`page ${page === 0 ? "home-layout" : ""}`}>
      <section
        className={`registration-card ${page === 0 ? "home-card" : ""}`}
      >
        <header className="form-header">
          <div className="logo">SR</div>
          <p className="eyebrow">STUDENT SERVICES</p>
          <h1>Student Registration Portal</h1>
          <p className="subtitle">
            A simple way to begin your learning journey.
          </p>
        </header>

        {page >= 1 && page <= 3 && (
          <div className="progress-section">
            <div className="progress-label">
              <span>Registration Progress</span>
              <strong>{page} of 3</strong>
            </div>

            <div className="progress-track">
              <div
                className="progress-fill"
                style={{ width: `${(page / 3) * 100}%` }}
              />
            </div>

            <div className="step-labels">
              <span className={page >= 1 ? "active-step" : ""}>Details</span>
              <span className={page >= 2 ? "active-step" : ""}>Course</span>
              <span className={page >= 3 ? "active-step" : ""}>Review</span>
            </div>
          </div>
        )}

        {page === 0 && (
          <section className="welcome-page">
            <div className="home-hero">
              <div className="hero-copy">
                <p className="eyebrow">LEARN · GROW · ACHIEVE</p>

                <h2>
                  Make your
                  <br />
                  next step
                  <br />
                  <span>count.</span>
                </h2>

                <p className="hero-description">
                  Discover a course that matches your interests. Complete your
                  details, explore learning options, and confirm your
                  registration in a few simple steps.
                </p>

                <button
                  className="primary-action hero-button"
                  onClick={startRegistration}
                >
                  Start Registration <span aria-hidden="true">→</span>
                </button>

                <p className="hero-note">
                  <span aria-hidden="true">✓</span>
                  Simple process · Guided registration
                </p>
              </div>

              <div className="hero-visual">
                <img
  className="campus-image"
  src="/campus.jpg"
  alt="Students attending a university lecture"
/>

                <div className="image-caption">
                  <span>YOUR JOURNEY BEGINS HERE</span>
                  <strong>Build skills for your future.</strong>
                </div>

                <div className="image-number" aria-hidden="true">
                  01 / 03
                </div>
              </div>
            </div>

            <div className="home-process">
              <div className="process-heading">
                <p className="eyebrow">HOW IT WORKS</p>
                <h3>Three steps to get started.</h3>
              </div>

              <div className="process-grid">
                <div className="process-item">
                  <span className="process-number">01</span>
                  <div>
                    <h4>Your details</h4>
                    <p>Enter your personal and educational information.</p>
                  </div>
                </div>

                <div className="process-item">
                  <span className="process-number">02</span>
                  <div>
                    <h4>Choose a course</h4>
                    <p>Explore available courses, durations, and sample fees.</p>
                  </div>
                </div>

                <div className="process-item">
                  <span className="process-number">03</span>
                  <div>
                    <h4>Review and confirm</h4>
                    <p>Check your information before confirming.</p>
                  </div>
                </div>
              </div>
            </div>

            <p className="demo-note home-demo-note">
              Educational demonstration only · No real enrollment or payment
            </p>
          </section>
        )}

        {page === 1 && (
          <form onSubmit={goToCoursePage} noValidate>
            <div className="section-heading">
              <span>01</span>
              <h2>Personal Information</h2>
            </div>

            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                aria-invalid={Boolean(errors.name)}
              />
              <FieldError name="name" />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                name="email"
                type="text"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                aria-invalid={Boolean(errors.email)}
              />
              <FieldError name="email" />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                inputMode="numeric"
                value={formData.phone}
                onChange={handleChange}
                placeholder="10-digit mobile number"
                aria-invalid={Boolean(errors.phone)}
              />
              <FieldError name="phone" />
            </div>

            <div className="form-group">
              <label htmlFor="dob">Date of Birth</label>
              <input
                id="dob"
                name="dob"
                type="date"
                max={new Date().toLocaleDateString("en-CA")}
                value={formData.dob}
                onChange={handleChange}
                aria-invalid={Boolean(errors.dob)}
              />
              <FieldError name="dob" />
            </div>

            <div className="form-group">
              <label htmlFor="gender">Gender</label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                aria-invalid={Boolean(errors.gender)}
              >
                <option value="">Select gender</option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="Other">Other</option>
                <option value="Prefer not to say">Prefer not to say</option>
              </select>
              <FieldError name="gender" />
            </div>

            <div className="form-group">
              <label htmlFor="qualification">Current Qualification</label>
              <select
                id="qualification"
                name="qualification"
                value={formData.qualification}
                onChange={handleChange}
                aria-invalid={Boolean(errors.qualification)}
              >
                <option value="">Select qualification</option>
                <option value="10th Standard">10th Standard</option>
                <option value="12th Standard">12th Standard</option>
                <option value="Diploma">Diploma</option>
                <option value="Undergraduate">Undergraduate</option>
                <option value="Graduate">Graduate</option>
                <option value="Postgraduate">Postgraduate</option>
              </select>
              <FieldError name="qualification" />
            </div>

            <div className="button-group">
              <button type="submit">Continue to Courses →</button>
              <button
                type="button"
                className="reset-button"
                onClick={handleReset}
              >
                Cancel
              </button>
            </div>
          </form>
        )}

        {page === 2 && (
          <section>
            <div className="section-heading">
              <span>02</span>
              <h2>Select Your Course</h2>
            </div>

            <p className="course-instruction">
              Choose one course to see its duration and sample fee.
            </p>

            <div className="course-grid">
              {courses.map((course) => (
                <button
                  type="button"
                  key={course.name}
                  className={`course-option ${
                    formData.course === course.name ? "selected" : ""
                  }`}
                  onClick={() => {
                    setFormData((previous) => ({
                      ...previous,
                      course: course.name,
                    }));
                    setErrors({});
                  }}
                  aria-pressed={formData.course === course.name}
                >
                  <span className="course-check">
                    {formData.course === course.name ? "✓" : "+"}
                  </span>
                  <strong>{course.name}</strong>
                  <span>{course.duration}</span>
                  <span className="course-fee">
                    ₹{course.fee.toLocaleString("en-IN")}
                  </span>
                </button>
              ))}
            </div>

            <FieldError name="course" />

            {selectedCourse && (
              <div className="course-summary">
                <p>YOUR SELECTION</p>
                <div className="course-detail">
                  <span>Course</span>
                  <strong>{selectedCourse.name}</strong>
                </div>
                <div className="course-detail">
                  <span>Duration</span>
                  <strong>{selectedCourse.duration}</strong>
                </div>
                <div className="course-detail">
                  <span>Sample fee</span>
                  <strong>
                    ₹{selectedCourse.fee.toLocaleString("en-IN")}
                  </strong>
                </div>
              </div>
            )}

            <div className="button-group">
              <button type="button" className="reset-button" onClick={goBack}>
                ← Back
              </button>
              <button type="button" onClick={goToReviewPage}>
                Review Details →
              </button>
            </div>
          </section>
        )}

        {page === 3 && (
          <form onSubmit={handleSubmit} noValidate>
            <div className="section-heading">
              <span>03</span>
              <h2>Review Your Registration</h2>
            </div>

            <p className="course-instruction">
              Check your information before confirming.
            </p>

            <div className="receipt-details">
              <div>
                <span>Full Name</span>
                <strong>{formData.name.trim()}</strong>
              </div>
              <div>
                <span>Email Address</span>
                <strong>{formData.email.trim()}</strong>
              </div>
              <div>
                <span>Phone</span>
                <strong>{formData.phone}</strong>
              </div>
              <div>
                <span>Date of Birth</span>
                <strong>{formData.dob}</strong>
              </div>
              <div>
                <span>Gender</span>
                <strong>{formData.gender}</strong>
              </div>
              <div>
                <span>Qualification</span>
                <strong>{formData.qualification}</strong>
              </div>
              <div>
                <span>Selected Course</span>
                <strong>{selectedCourse?.name}</strong>
              </div>
              <div>
                <span>Duration</span>
                <strong>{selectedCourse?.duration}</strong>
              </div>
              <div>
                <span>Sample Fee</span>
                <strong>
                  ₹{selectedCourse?.fee.toLocaleString("en-IN")}
                </strong>
              </div>
            </div>

            <label className="terms-label">
              <input
                name="terms"
                type="checkbox"
                checked={formData.terms}
                onChange={handleChange}
              />
              <span>
                I confirm that the information provided is correct and
                understand that this is a demonstration registration.
              </span>
            </label>
            <FieldError name="terms" />

            <div className="button-group">
              <button type="button" className="reset-button" onClick={goBack}>
                ← Back
              </button>
              <button type="submit">Confirm Registration</button>
            </div>
          </form>
        )}

        {page === 4 && receipt && (
          <section className="receipt">
            <div className="success-icon">✓</div>
            <p className="eyebrow">REGISTRATION CONFIRMED</p>
            <h2>You're registered, {receipt.name}!</h2>
            <p className="receipt-message">
              Your details passed validation. Here is your confirmation.
            </p>

            <div className="receipt-reference">
              <span>Reference Number</span>
              <strong>{receipt.reference}</strong>
            </div>

            <div className="receipt-details">
              <div>
                <span>Student Name</span>
                <strong>{receipt.name}</strong>
              </div>
              <div>
                <span>Email</span>
                <strong>{receipt.email}</strong>
              </div>
              <div>
                <span>Course</span>
                <strong>{receipt.course}</strong>
              </div>
              <div>
                <span>Duration</span>
                <strong>{receipt.duration}</strong>
              </div>
              <div>
                <span>Sample Fee</span>
                <strong>₹{receipt.fee.toLocaleString("en-IN")}</strong>
              </div>
            </div>

            <p className="demo-note">
              Demonstration only. Registration data is not saved to a server.
            </p>

            <button className="primary-action" onClick={handleReset}>
              Return to Home
            </button>
          </section>
        )}

        <footer className="footer-text">
          Student Registration Portal <span>•</span> ReactJS
        </footer>
      </section>
    </main>
  );
}

export default App;
