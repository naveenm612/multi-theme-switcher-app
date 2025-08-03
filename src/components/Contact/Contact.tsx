import React, { useState } from "react";
import { Paper, TextField, Button, Box, Snackbar, Alert } from "@mui/material";
import PersonPinCircleIcon from "@mui/icons-material/PersonPinCircle";
import CallIcon from "@mui/icons-material/Call";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { useTheme } from "../../contexts/ThemeContext";
import "./Contact.css";

const Contact: React.FC = () => {
  const { theme } = useTheme();
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [alert, setAlert] = useState<{
    open: boolean;
    type: "success" | "error";
    message: string;
  }>({
    open: false,
    type: "success",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCloseAlert = () => {
    setAlert({ open: false, type: "success", message: "" });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setAlert({ open: true, type: "success", message: "Processing..." });
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "82755d67-c2d3-4831-91b5-aed614aedab8",
          ...formValues,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setAlert({
          open: true,
          type: "success",
          message: "Message sent successfully!",
        });
        setFormValues({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error(
          data.message || "Something went wrong. Please try again later."
        );
      }
    } catch (error: any) {
      setAlert({
        open: true,
        type: "error",
        message: error.message || "Submission failed!",
      });
    }
  };

  return (
    <section className={`contact-section ${theme}`}>
      <div className="title-container">
        <h2 className={`title ${theme}`}>Get in Touch</h2>
      </div>
      <p className={`about-description ${theme}`}>
        Feel free to reach out to me for any inquiries, collaboration
        opportunities, or questions. I'm always open to discussing exciting
        projects and innovative ideas.
      </p>

      <Box className="contact-grid">
        {/* Contact Info */}
        <div className={`contact-card ${theme} contact-info-box`}>
          <Box className="info-block">
            <PersonPinCircleIcon />
            <div className={`info-title ${theme}`}>Address</div>
          </Box>
          <div className="info-text">
            3/4, Naduvaneri Power Office (opp), Vembadithalam, Salem - 637504
          </div>

          <Box className="info-block">
            <CallIcon />
            <div className={`info-title ${theme}`}>Phone</div>
          </Box>
          <div className="info-text">+91 9025151850</div>

          <Box className="info-block">
            <MailOutlineIcon />
            <div className={`info-title ${theme}`}>Email</div>
          </Box>
          <div className="info-text">naveenpavi612@gmail.com</div>
        </div>

        {/* Contact Form */}
        <Paper elevation={3} className={`contact-card ${theme} contact-form-box`}>
          <form onSubmit={handleSubmit}>
            <Box sx={{ display: "flex", gap: "10px", marginBottom: "15px", flexWrap: "wrap" }}>
              <TextField
                fullWidth
                label="Your Name"
                name="name"
                value={formValues.name}
                onChange={handleInputChange}
                variant="outlined"
                size="small"
                required
              />
              <TextField
                fullWidth
                label="Your Email"
                name="email"
                value={formValues.email}
                onChange={handleInputChange}
                variant="outlined"
                size="small"
                type="email"
                required
              />
            </Box>
            <TextField
              fullWidth
              label="Subject"
              name="subject"
              value={formValues.subject}
              onChange={handleInputChange}
              variant="outlined"
              size="small"
              sx={{ marginBottom: "15px" }}
              required
            />
            <TextField
              fullWidth
              label="Message"
              name="message"
              value={formValues.message}
              onChange={handleInputChange}
              variant="outlined"
              multiline
              rows={4}
              sx={{ marginBottom: "15px" }}
              required
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{
                padding: "10px",
                textTransform: "none",
                fontSize: "16px",
                backgroundColor: "#3b82f6",
                fontWeight: "500",
              }}
            >
              Send Message
            </Button>
          </form>
        </Paper>
      </Box>

      {/* Snackbar for alerts */}
      <Snackbar
        open={alert.open}
        onClose={handleCloseAlert}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={handleCloseAlert}
          severity={alert.type}
          sx={{ width: "100%" }}
        >
          {alert.message}
        </Alert>
      </Snackbar>
    </section>
  );
};

export default Contact;
