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
    type: 'local',
  },
  {
    icon: CodeIcon,
    text: 'Technologie',
    link: '/#technologies',
    type: 'local',
  },
  {
    icon: ProjectsIcon,
    text: 'Projekty',
    link: '/#projects',
    type: 'local',
  },
  {
    icon: EmailIcon,
    text: 'Kontakt',
    link: '/',
    type: 'local',
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
    link: 'http://example.com/',
    type: 'external',
  },
]
