import { TECHNOLOGIES } from '@/lib/data';
import Tag from '@/components/data-display/tag';
import CertificationDetails from '@/components/data-display/certification-details';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';

const CertificationsSection = () => {
  return (
    <Container>
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Certifications" />
        </div>
        <Typography variant="subtitle" className="max-w-xl text-center">
          Some of the certifications I have earned to validate my skills and expertise.
        </Typography>
      </div>

      <div className="grid grid-cols-3 gap-y-4 md:grid-cols-6 md:gap-y-8 lg:grid-cols-8 lg:gap-y-12">
        {TECHNOLOGIES.map((technology, index) => (
          <CertificationDetails {...technology} key={index} />
        ))}
      </div>
    </Container>
  );
};

export default CertificationsSection;
