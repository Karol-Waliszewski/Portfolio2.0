import Link from 'types/navLink'

import HomeIcon from 'assets/icons/home.svg'
import BulbIcon from 'assets/icons/bulb.svg'
import EmailIcon from 'assets/icons/mail.svg'
import CodeIcon from 'assets/icons/code.svg'
import ProjectsIcon from 'assets/icons/projects.svg'
import GithubIcon from 'assets/icons/github.svg'
import CVIcon from 'assets/icons/cv.svg'

export const PRIMARY: Link[] = [
  {
    icon: HomeIcon,
    text: 'Strona główna',
    link: '/',
    type: 'local',
  },
  {
    icon: BulbIcon,
    text: 'O mnie',
    link: '/#about',
    type: 'anchor',
  },
  {
    icon: CodeIcon,
    text: 'Technologie',
    link: '/#technologies',
    type: 'anchor',
  },
  {
    icon: ProjectsIcon,
    text: 'Projekty',
    link: '/#projects',
    type: 'anchor',
  },
  {
    icon: EmailIcon,
    text: 'Kontakt',
    link: '/#contact',
    type: 'anchor',
  },
]

export const SECONDARY: Link[] = [
  {
    icon: GithubIcon,
    text: 'Github',
    link: 'https://github.com/Karol-Waliszewski',
    type: 'external',
  },
  {
    icon: CVIcon,
    text: 'CV',
    link: 'https://docs.google.com/gview?url=https://karol-waliszewski.github.io/Portfolio/src/Karol_Waliszewski_CV.pdf&embedded=true',
    type: 'external',
  },
]
