import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `ConsultationCta`.
 */
export type ConsultationCtaProps =
  SliceComponentProps<Content.ConsultationCtaSlice>;

/**
 * Component for "ConsultationCTA" Slices.
 */
const ConsultationCta: FC<ConsultationCtaProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div>
        <div>
          <PrismicRichText field={slice.primary.heading} />
          <form>
            <div>
              <label htmlFor="firstName">First Name</label>
              <input
                id="firstName"
                type="text"
                placeholder="Enter your first name..."
              />
            </div>
            <div>
              <label htmlFor="lastName">Last Name</label>
              <input
                id="lastName"
                type="text"
                placeholder="Enter your last name..."
              />
            </div>
            <div>
              <label htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                type="tel"
                placeholder="Enter your phone number..."
              />
            </div>
            <div>
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                placeholder="example@gmail.com"
              />
            </div>
            <div>
              <label htmlFor="location">Location</label>
              <select id="location">
                <option value="">Select Location</option>
              </select>
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                placeholder="Write a Comment"
              ></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>

        <div>
          {slice.primary.office_map && (
            <PrismicNextImage field={slice.primary.office_map} />
          )}
          <h3>{slice.primary.office_name}</h3>
          <div>
            <div>
              <span>📍</span>
              <div>
                <strong>Location</strong>
                <p>{slice.primary.office_address}</p>
              </div>
            </div>
            <div>
              <span>📧</span>
              <div>
                <strong>Email</strong>
                <p>{slice.primary.office_email}</p>
              </div>
            </div>
            <div>
              <span>📞</span>
              <div>
                <strong>Phone</strong>
                <p>{slice.primary.office_phone}</p>
              </div>
            </div>
            <div>
              <span>🕐</span>
              <div>
                <strong>Office Hour</strong>
                {slice.primary.office_hours.map((item, index) => (
                  <div key={index}>
                    <p>
                      <strong>{item.day}:</strong> {item.hours}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationCta;
