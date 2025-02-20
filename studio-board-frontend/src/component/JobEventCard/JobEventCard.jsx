import "./JobEventCard.scss";
import { Link, useNavigate } from "react-router-dom"; // Ensure Link is imported
import chevronRight from "../../assets/icons/chevron_right-24px.svg";
import likeIcon from "../../assets/icons/icon-like.svg";
import applyIcon from "../../assets/icons/edit-24px.svg";

export default function JobEventCard({ opportunities, baseURL, onApply }) {
  const navigate = useNavigate();

  // Ensure 'opportunities' exists before accessing 'id'
  const navigateToDetails = () => {
    if (opportunities && opportunities.id) {
      navigate(`/jobboard/${opportunities.id}`);
    } else {
      console.error("Opportunities or ID not found");
    }
  };

  // Fallback to default values if opportunities is undefined or missing expected properties
  const organizationName = opportunities?.organization_name || "N/A";
  const title = opportunities?.title || "Untitled";
  const type = opportunities?.type || "Not specified";
  const location = opportunities?.location || "Location unknown";

  return (
    <li className="jobboard-card">
      <div className="jobboard-card__left">
        <div className="jobboard-card__element jobboard-card__element--top">
          <p className="jobboard-card__label">ORGANIZATION</p>
          <div className="jobboard-card__name">
            <p
              className="jobboard-card__content jobboard-card__content--blue"
              onClick={navigateToDetails}
            >
              {organizationName}
            </p>
            <img
              src={chevronRight}
              alt="Chevron Right"
              className="jobboard-card__icon"
            />
          </div>
        </div>
        <div className="jobboard-card__element jobboard-card__element--bottom">
          <p className="jobboard-card__label">TITLE</p>
          <div className="jobboard-card__title">
            <p className="jobboard-card__title-name">{title}</p>
          </div>
        </div>
        <div className="jobboard-card__apply-icon">
          <img src={applyIcon} alt="Apply Icon" onClick={onApply} />
        </div>
      </div>

      <div className="jobboard-card__right">
        <div className="jobboard-card__element jobboard-card__element--top">
          <p className="jobboard-card__label">TYPE</p>
          <p className="jobboard-card__content">{type}</p>
        </div>
        <div className="jobboard-card__element jobboard-card__element--bottom">
          <p className="jobboard-card__label">LOCATION</p>
          <div className="jobboard-card__contact-info">
            <p className="jobboard-card__content">{location}</p>
          </div>
        </div>
        <div className="jobboard-card__like-icon">
          <Link to={`/jobboard/${opportunities?.id}/like`}>
            <img src={likeIcon} alt="Like Icon" />
          </Link>
        </div>
      </div>
    </li>
  );
}
