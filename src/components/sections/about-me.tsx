import Image from 'next/image';

import RituFullPose from '/public/images/ritu-full-pose.jpg';
import Tag from '@/components/data-display/tag';
import Container from '@/components/layout/container';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import { EXTERNAL_LINKS } from '@/lib/data';

const AboutMeSection = () => {
  return (
    <Container className="bg-gray-50" id="about">
      <div className="self-center">
        <Tag label="About me" />
      </div>

      <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
        {/* Image */}
        <div className="flex justify-center md:order-first md:justify-end">
          <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
            <Image
              src={RituFullPose}
              alt="Fullpose of Ritu"
              className="absolute z-10 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"
              style={{ objectFit: 'cover' }}
            ></Image>
            <div className="absolute h-[360px] w-[320px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex max-w-xl flex-col gap-6">
          <Typography variant="h3">
            About Me
          </Typography>
          <Typography>
            Senior Product Manager | INSEAD MBA | Ex-Amazon & Cisco Engineer
            {/* I&apos;m a passionate,{' '}
            <Link
              noCustomization
              externalLink
              withUnderline
              href={EXTERNAL_LINKS.FIGMA}
            >
              self-proclaimed designer
            </Link>{' '}
            who specializes in full stack development (React.js & Node.js). I am
            enthusiastic about bringing the technical and visual aspects of
            digital products to life. User experience, pixel perfect design, and
            writing clear, readable, highly performant code matters to me. */}
          </Typography>
          <Typography>
            I build and scale high-traffic fintech and e-commerce platforms. 
            From designing security intelligence at Cisco to driving new growth at Amazon, 
            I bridge the gap between complex engineering and global business strategy.
            {/* I began my journey as a web developer in 2015, and since then,
            I&apos;ve continued to grow and evolve as a developer, taking on new
            challenges and learning the latest technologies along the way. Now,
            in my early thirties, 7 years after starting my web development
            journey, I&apos;m building cutting-edge web applications using
            modern technologies such as Next.js, TypeScript, Nestjs,
            Tailwindcss, Supabase and much more. */}
          </Typography>
          <Typography>
            I am a strategic product operator with a foundation in Machine Learning 
            and Cybersecurity software engineering. With an MBA from INSEAD, 
            I specialize in applying AI-enabled insights to product strategy 
            and agile execution at scale.
            
            My track record includes: * Scaling Fintech: Leading platform modernization
             for BFC Group, reducing backend processing time by 70%. 
             * Market Expansion: Owning UK/EU expansion strategy for
              Amazon Haul, managing complex global supply chain partner
               integrations. * Engineering Roots: Shipping cloud-native
                security components at Cisco that improved intrusion 
                detection by 40%.
            I thrive at the intersection of regulated markets, 
            distributed systems architecture, and customer-centric 
            growth.
            {/* I am very much a progressive thinker and enjoy working on products
            end to end, from ideation all the way to development. */}
          </Typography>
          <Typography>
            When I&apos;m not in strategy mode, you can find me
            anchoring events or learning a new song on ukulele. You can follow
            me on{' '}
            <Link
              noCustomization
              externalLink
              withUnderline
              //href={EXTERNAL_LINKS.TWITTER}
              href={EXTERNAL_LINKS.LINKEDIN}
            >
              Linkedin
            </Link>{' '}
            where I share tech-related bites and build in public, or you can
            follow me on{' '}
            <Link
              noCustomization
              externalLink
              withUnderline
              href={EXTERNAL_LINKS.GITHUB}
            >
              GitHub
            </Link>
            .
          </Typography>
          <Typography>At a Glance</Typography>
          <div className="flex flex-col gap-2 md:flex-row md:gap-6">
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">
                MBA - INSEAD Class of 2025 December | BTech Electronics and Communication Engineering - NIT Calicut
              </Typography>
              <Typography component="li">Full time product strategist</Typography>
            </ul>
            {/* <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">Avid learner</Typography>
              <Typography component="li">Aspiring cartwheeler</Typography>
            </ul> */}
          </div>
          <Typography>
            {/* One last thing, I&apos;m available for freelance work, so feel free
            to reach out and say hello! I promise I don&apos;t bite 😉 */}
            Happy to connect over a cup of coffee or a quick chat! Feel free to reach out!
          </Typography>
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;
