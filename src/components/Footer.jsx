import { useState } from "react";
import { socialImgs } from "../constants";
import Modal from "./Modal";

const Footer = () => {
  const [showTerms, setShowTerms] = useState(false);

  return (
    <>
      <footer className="bg-gray-900 text-white py-6">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Terms */}
          <div className="flex justify-center md:justify-start">
            <p
              onClick={() => setShowTerms(true)}
              className="cursor-pointer hover:underline"
            >
              Terms & Conditions
            </p>
          </div>

          {/* Social icons */}
          <div className="flex gap-4">
            {socialImgs.map((s, idx) => (
              <a
                key={idx}
                href={s.url}
                {...(s.url.startsWith("mailto:")
                  ? {}
                  : { target: "_blank", rel: "noopener noreferrer" })}
                aria-label={s.name}
                className="hover:scale-110 transform transition"
              >
                <img
                  src={s.imgPath}
                  alt={`${s.name} icon`}
                  className="w-6 h-6 object-contain"
                />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="flex justify-center md:justify-end">
            <p className="text-center">
              © {new Date().getFullYear()} Ahmed Omar Ali. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Modal */}
      {showTerms && (
        <Modal onClose={() => setShowTerms(false)}>
          <h3 className="font-semibold mb-2">Terms & Conditions</h3>

          <p className="mb-2">
            <strong>Last updated:</strong> 2025-05-15
          </p>

          <p className="mb-3">
            Welcome to my personal portfolio website ("ahmedym-portfolio"). By
            accessing or using this Website, you agree to these Terms and
            Conditions. If you do not agree, please do not use the Website.
          </p>

          <p className="mb-2">
            <strong>1. Ownership of Content</strong>
            <br />
            All content on this Website — including but not limited to text,
            images, graphics, projects, certificates, and code snippets — is
            owned by Ahmed Omar Ali unless otherwise stated. Third-party content
            is credited accordingly.
          </p>

          <p className="mb-2">
            <strong>2. Use of Content</strong>
            <br />
            You may view and read the projects, articles, and resources on this
            Website for personal, educational, or non-commercial purposes. You
            may not copy, reproduce, or distribute my work without prior written
            permission, claim my work as your own, or use my work commercially
            without consent.
          </p>

          <p className="mb-2">
            <strong>3. Project Information</strong>
            <br />
            Project descriptions, source code, and related materials are for
            demonstration purposes only and may not represent final
            production-ready systems. Use any code examples at your own risk.
          </p>

          <p className="mb-2">
            <strong>4. No Guarantees</strong>
            <br />
            While I strive to keep information accurate, I make no guarantees
            about completeness, reliability, or accuracy.
          </p>

          <p className="mb-2">
            <strong>5. External Links</strong>
            <br />
            This Website may contain links to third-party websites (e.g.,
            GitHub, LinkedIn). I am not responsible for the content or practices
            of these external sites.
          </p>

          <p className="mb-2">
            <strong>6. Privacy</strong>
            <br />
            This Website does not collect personal data unless you submit it
            (e.g., via contact form). Any submitted data will not be shared with
            third parties without consent. See the Privacy Policy if present.
          </p>

          <p className="mb-2">
            <strong>7. Liability Limit</strong>
            <br />I am not liable for damages, data loss, or other issues
            resulting from use of the Website or linked resources.
          </p>

          <p className="mb-2">
            <strong>8. Changes</strong>
            <br />I may update these Terms from time to time. Continued use
            after changes constitutes acceptance.
          </p>

          <p className="mb-2">
            <strong>9. Governing Law</strong>
            <br />
            These Terms are governed by the laws of Djibouti. Any disputes fall
            under the jurisdiction of the courts in Djibouti City, Djibouti.
          </p>

          <p className="mt-4 text-sm">
            <strong>Contact:</strong> ahmedymimar@gmail.com
          </p>
        </Modal>
      )}
    </>
  );
};

export default Footer;
