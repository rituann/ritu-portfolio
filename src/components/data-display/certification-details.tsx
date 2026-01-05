'use client';

import { CertificationDetails } from '@/lib/types';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import ImageWrapper from '@/components/data-display/image-wrapper';

const CertificationDetails = ({ url, logo, darkModeLogo, label }: CertificationDetails) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <Link noCustomization href={url} externalLink>
        <ImageWrapper
          src={logo}
          srcForDarkMode={darkModeLogo}
          alt={label}
          className="transition-transform duration-300 md:hover:scale-110"
        />
      </Link>
      <Typography variant="body1">{label}</Typography>
    </div>
  );
};

export default CertificationDetails;
