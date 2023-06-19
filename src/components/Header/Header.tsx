import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  GithubLink,
  HeaderContainer,
  HeaderIconsContainer,
  Title,
} from './styles'
import githubIcon from '../../assets/github.svg'
import { lightTheme } from '../../styles/theme'

const Header: React.FC = () => {
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  }

  const githubLinkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  }

  return (
    <HeaderContainer>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={titleVariants}
        transition={{ duration: 0.5 }}
      >
        <Title data-testid="header-title" theme={lightTheme}>
          Weather Application
        </Title>
      </motion.div>
      <HeaderIconsContainer>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          variants={githubLinkVariants}
        >
          <GithubLink
            data-testid="github-link"
            theme={lightTheme}
            href="https://www.github.com/filipefdm/weather-app"
          >
            <Image src={githubIcon} alt="Github Icon" />
          </GithubLink>
        </motion.div>
      </HeaderIconsContainer>
    </HeaderContainer>
  )
}

export default Header
