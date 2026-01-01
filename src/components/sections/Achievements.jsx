import { motion } from 'framer-motion';
import styled from 'styled-components';

const AchievementsContainer = styled.section`
  min-height: 100vh;
  width: 100%;
  position: relative;
  z-index: 1;
  padding: 120px 20px 80px;
  margin: 0 auto;
  max-width: 1400px;

  @media (max-width: 1024px) {
    padding: 100px 20px 60px;
  }

  @media (max-width: 768px) {
    padding: 80px 15px 50px;
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 60px;
  background: ${({ theme }) => theme.colors.glass};
  backdrop-filter: blur(20px);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 20px;
  padding: 50px 40px 40px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, ${({ theme }) => theme.colors.primary}, transparent);
    opacity: 0.6;
  }

  @media (max-width: 768px) {
    margin-bottom: 40px;
    padding: 40px 30px 30px;
  }

  @media (max-width: 480px) {
    padding: 30px 20px 20px;
  }
`;

const Title = styled(motion.h2)`
  font-size: 4rem;
  font-weight: 800;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, #00ff88);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 20px;
  font-family: 'JetBrains Mono', monospace;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    font-size: 2.8rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
  font-family: 'JetBrains Mono', monospace;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const StatsBar = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
  padding: 28px;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 8px 24px rgba(100, 255, 218, 0.15);
    background: rgba(100, 255, 218, 0.05);
  }
`;

const StatIcon = styled.div`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 16px;
`;

const StatLabel = styled.div`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 700;
  margin-bottom: 6px;
  font-family: 'Fira Code', monospace;
  letter-spacing: 0.02em;
`;

const StatDesc = styled.div`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-family: 'IBM Plex Mono', monospace;
`;

const AchievementsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
`;

const AchievementSection = styled(motion.div)`
  background: ${({ theme }) => theme.colors.glass};
  backdrop-filter: blur(20px);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 16px;
  padding: 40px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, ${({ theme }) => theme.colors.primary}, transparent);
  }

  @media (max-width: 768px) {
    padding: 28px;
  }
`;

const SectionTitle = styled.h3`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.text};
  font-family: 'JetBrains Mono', monospace;
  font-weight: 700;
  margin-bottom: 28px;
  display: flex;
  align-items: center;
  gap: 10px;
  letter-spacing: -0.01em;

  &::before {
    content: '//';
    color: ${({ theme }) => theme.colors.primary};
    opacity: 0.8;
    font-size: 1.4rem;
  }

  i {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.3rem;
  }
`;

const GitHubStatsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;

  img {
    width: 100%;
    max-width: 900px;
    height: auto;
    border-radius: 12px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    background: rgba(13, 17, 23, 0.8);
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 24px rgba(100, 255, 218, 0.15);
      border-color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const ProfileViewsCard = styled.div`
  background: rgba(100, 255, 218, 0.05);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
  padding: 24px;
  text-align: center;
  margin-bottom: 28px;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    background: rgba(100, 255, 218, 0.08);
  }

  .views-label {
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.1rem;
    margin-bottom: 12px;
    font-family: 'Fira Code', monospace;
    font-weight: 600;
    letter-spacing: 0.02em;
  }

  img {
    height: 28px;
  }
`;

const BadgesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  padding: 20px;
`;

const HackerRankContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;

  .badge-link {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    transition: all 0.3s ease;
    padding: 20px;
    border-radius: 16px;
    border: 1px solid transparent;

    &:hover {
      transform: translateY(-8px);
      border-color: ${({ theme }) => theme.colors.border};
      background: rgba(189, 110, 82, 0.05);
    }

    svg {
      width: 140px;
      height: 140px;
      margin-bottom: 20px;
      filter: drop-shadow(0 4px 12px rgba(189, 110, 82, 0.2));
      transition: all 0.3s ease;

      &:hover {
        filter: drop-shadow(0 8px 24px rgba(189, 110, 82, 0.4));
      }
    }

    .badge-info {
      text-align: center;

      .language {
        display: block;
        font-size: 1.3rem;
        font-weight: 700;
        color: ${({ theme }) => theme.colors.text};
        font-family: 'Fira Code', monospace;
        margin-bottom: 6px;
        letter-spacing: 0.03em;
      }

      .level {
        display: block;
        font-size: 1rem;
        color: #bd6e52;
        font-weight: 600;
        font-family: 'IBM Plex Mono', monospace;
      }
    }
  }
`;

export default function Achievements() {
  return (
    <AchievementsContainer id="achievements">
      <Header>
        <Title
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {'<Achievements />'}
        </Title>
        <Subtitle
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Security Projects • Certifications • Professional Recognition
        </Subtitle>

        <StatsBar
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <StatCard whileHover={{ y: -4 }}>
            <StatIcon>
              <i className="fab fa-github"></i>
            </StatIcon>
            <StatLabel>GitHub</StatLabel>
            <StatDesc>Security Projects</StatDesc>
          </StatCard>
          <StatCard whileHover={{ y: -4 }}>
            <StatIcon>
              <i className="fas fa-shield-alt"></i>
            </StatIcon>
            <StatLabel>Security</StatLabel>
            <StatDesc>Detection & Analysis</StatDesc>
          </StatCard>
          <StatCard whileHover={{ y: -4 }}>
            <StatIcon>
              <i className="fas fa-certificate"></i>
            </StatIcon>
            <StatLabel>Certifications</StatLabel>
            <StatDesc>Professional Credentials</StatDesc>
          </StatCard>
        </StatsBar>
      </Header>

      <AchievementsGrid>
        <AchievementSection
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <SectionTitle>
            <i className="fab fa-github"></i>
            GitHub Statistics
          </SectionTitle>

          <GitHubStatsContainer>
            <img
              src="https://raw.githubusercontent.com/abhishekpeddada/abhishekpeddada/output/github-snake-dark.svg"
              alt="GitHub Contribution Snake"
              style={{ width: '100%', maxWidth: '100%' }}
            />
          </GitHubStatsContainer>
        </AchievementSection>

        <AchievementSection
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <SectionTitle>
            <i className="fas fa-project-diagram"></i>
            Security Projects
          </SectionTitle>

          <div style={{ display: 'grid', gap: '20px' }}>
            <ProfileViewsCard>
              <div className="views-label">LOG DETECTION & ALERTING SYSTEM</div>
              <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', marginTop: '8px', textAlign: 'left', padding: '0 16px' }}>
                Python-based log detection engine that ingests and parses system logs from Linux systems.
                Implemented detection rules for brute-force attempts, privilege escalation, and port scanning with MITRE ATT&CK mapping.
              </div>
              <div style={{ color: 'rgba(100, 255, 218, 0.8)', fontSize: '0.85rem', marginTop: '12px' }}>Tech: Python, Sysmon, MITRE ATT&CK</div>
            </ProfileViewsCard>

            <ProfileViewsCard>
              <div className="views-label">NETWORK TRAFFIC ANALYSIS</div>
              <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', marginTop: '8px', textAlign: 'left', padding: '0 16px' }}>
                Captured and analyzed network packets using Wireshark to investigate traffic anomalies.
                Identified DNS tunneling, C2 channels, and data exfiltration signatures.
              </div>
              <div style={{ color: 'rgba(100, 255, 218, 0.8)', fontSize: '0.85rem', marginTop: '12px' }}>Tech: Wireshark, PCAP, TCP/IP Protocols</div>
            </ProfileViewsCard>

            <ProfileViewsCard>
              <div className="views-label">THREAT HUNTING WITH GOOGLE CHRONICLE</div>
              <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', marginTop: '8px', textAlign: 'left', padding: '0 16px' }}>
                Engineered detection logic using UDM queries and custom parsers.
                Simulated real-world threats and mapped behaviors to MITRE ATT&CK framework.
              </div>
              <div style={{ color: 'rgba(100, 255, 218, 0.8)', fontSize: '0.85rem', marginTop: '12px' }}>Tech: Chronicle, UDM, MITRE ATT&CK</div>
            </ProfileViewsCard>
          </div>
        </AchievementSection>

        <AchievementSection
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <SectionTitle>
            <i className="fas fa-award"></i>
            Professional Certifications
          </SectionTitle>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <ProfileViewsCard>
              <div className="views-label">CERTIFIED ETHICAL HACKER</div>
              <div style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1rem', marginTop: '8px' }}>NPTEL, IIT Kharagpur</div>
              <div style={{ color: 'rgba(100, 255, 218, 0.9)', fontSize: '0.95rem', marginTop: '8px', fontWeight: '600' }}>Elite Rank</div>
            </ProfileViewsCard>

            <ProfileViewsCard>
              <div className="views-label">GOOGLE PROFESSIONAL SECURITY OPERATIONS ENGINEER</div>
              <div style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1rem', marginTop: '8px' }}>Google Cloud</div>
              <a
                href="https://www.credly.com/badges/5f18eef4-ba2c-429a-8b46-4d671ce341c0/linked_in_profile"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'rgba(100, 255, 218, 0.9)', fontSize: '0.9rem', marginTop: '8px', display: 'inline-block' }}
              >
                View Credential →
              </a>
            </ProfileViewsCard>

            <ProfileViewsCard>
              <div className="views-label">AWS CERTIFIED DEVELOPER - ASSOCIATE</div>
              <div style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1rem', marginTop: '8px' }}>Amazon Web Services</div>
              <a
                href="https://www.linkedin.com/learning/certificates/093265a4a1cd367fd8e9ea4d3fbdaee36ed1e59a12ea7b56e4a84a9c4d0949f7"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'rgba(100, 255, 218, 0.9)', fontSize: '0.9rem', marginTop: '8px', display: 'inline-block' }}
              >
                View Credential →
              </a>
            </ProfileViewsCard>
          </div>
        </AchievementSection>
      </AchievementsGrid>
    </AchievementsContainer>
  );
}
