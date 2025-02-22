import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ApplyModal from "../ApplyModal/ApplyModal.scss";
import CloseIcon from "../../assets/icons/close-24px.svg";

const ApplyModal = ({ isOpen, onClose, onApply, jobId }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [job, setJob] = useState(null);

  useEffect(() => {
    if (jobId) {
      fetch(`/api/opportunities/${jobId}`)
        .then((response) => response.json())
        .then((data) => setJob(data))
        .catch((error) => console.error("Error fetching job details:", error));
    }
  }, [jobId]);

  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onApply(formData);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg p-6 relative">
        <button
          type="button"
          className="absolute top-4 right-4 modal__close-button"
          onClick={onClose}
          aria-label="Close modal"
        >
          <img src={CloseIcon} alt="Close" />
        </button>
        <DialogHeader>
          <DialogTitle>
            {job
              ? `Apply for ${job.title} at ${job.organization_name}`
              : "Apply for this Opportunity"}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Textarea
            name="message"
            placeholder="Why are you interested?"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <div className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">Apply</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ApplyModal;
