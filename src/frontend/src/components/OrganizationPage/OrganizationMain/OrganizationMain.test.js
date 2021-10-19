import { shallow } from 'enzyme'
import React from 'react'
import OrganizationMain from './OrganizationMain'

jest.mock('./styles', () => () => ({}))

const setUp = () => shallow(<OrganizationMain />)

describe('should render OrganizationMain component', () => {
  let name
  let about
  let industry
  let location
  let numberOfFollowers
  let numberOfConnections
  let numberOfEmployees
  let isFollowedByActiveUser
  let webSite

  let component
  beforeEach(() => {
    name = 'DAN.IT education'
    about = 'DAN.IT education - educational center in Kiev, which trains IT specialists according to the methods of the Israeli army.\n\nIn 2017, two representatives of the Israeli startup nation chose Ukraine as the next step in their mission. Eran Lasser and Eddie Prilepsky - businessmen, investors, business angels and representatives of international venture capital funds - decided to bring values ​​and methodology to the Ukrainian IT sphere, which at one time helped Israel to become a direct competitor to Silicon Valley.\n\nWhy Ukraine? Because Ukrainian specialists are highly valued in the world market of information services. Because our students have a high level of responsibility and a great desire to learn. And, of course, because Ukraine is worthy to represent Europe in the IT market in the forefront. It was with this idea that the DAN.IT education training center was created. By the way, "Dan" in the Hebrew interpretation symbolizes great potential.\n\nWhy choose our method\n\nTo implement the idea, the founders of DAN.IT education decided to adapt the Telem methodology, which is also used to train technical specialists of the Israeli army. Its advantage is teamwork on the strengths of each student and increasing his motivation. A teacher, offline and online mentor, coordinator and HR specialist work with the student at the same time. On the one hand, he learns programming based on case studies and practical exercises without boring lectures and wasting time, which is also the basis of our methodology. On the other hand, he has time to develop his personal skills and prepare for a job search.\n\nSupervisory Board\n\nTo keep abreast of the trends in the Ukrainian and global markets, we have formed a Supervisory Board. The Council employs the leading experts of Ukraine in the field of IT - they always know what employers want and expect, as well as plan and adjust our training programs. Thus, with the help of colleagues from the technical field, we prepare students for the challenges and difficulties of future work. Members of the Supervisory Board are also potential employers for our graduates.\n\nOur achievements\n\nFor 4 years on the Ukrainian market, we have opened 7 areas of study for a period of 6 to 12 months, in which both adolescents 9-14 years old and adults can study. We are chosen by both school graduates and people over the age of 40 who have already tried several professions, but do not want to stop there. Former lawyers, doctors, stylists and businessmen, bloggers and creators, bank employees and TV presenters study on programs at DAN.IT. The scope of our students\' skills is amazing, but at DAN IT they become programmers, developers, web designers and digital marketers in order to conquer new heights. And this inspires us to achieve.\n\nAlready, the training center is a member of the IT Ukraine Association, the official partner of the International Bank of Azerbaijan for the provision of social IT education services to the Azerbaijani market, the gold partner of the Ukrainian Israeli Innovation Summit. We have graduated more than 2,000 students, and the employment rate of graduates reaches 73%.\n\nFor the comfort of our students, in January 2021, we opened another DAN.IT office on the right bank of Kiev. Now it will become easier for residents from Obolon to Goloseevo, from Pechersk to Svyatoshino, from the city center to its suburbs, combining study with work, personal life and leisure. The second location is located at st. Vladimirskaya, 77A, BC "Solo Plus", 2nd floor.\n\nJoining the IT Ukraine Association\n\nIn December 2019, DAN.IT education became the only educational partner and member of the Ukrainian IT Association. Together with the Association, we plan to develop the country\'s information technologies and have already begun work on projects such as ClickToSchool.'
    industry = 'Information Technology & Services'
    location = 'Kyiv, Ukraine'
    numberOfFollowers = 800
    numberOfConnections = 2
    numberOfEmployees = 85
    isFollowedByActiveUser = false
    webSite = 'https://dan-it.com.ua/'
    component = setUp(
      {
        name,
        about,
        industry,
        location,
        numberOfFollowers,
        numberOfConnections,
        numberOfEmployees,
        isFollowedByActiveUser,
        webSite
      }
    )
  })
  it('to match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
  it('should render Follow', () => {
    expect.stringMatching('Follow')
    component.find('SharedButton[id=\'handleFollow\']').simulate('click')
    expect.stringMatching('Following')
  })
})

describe('should render OrganizationMain component', () => {
  let name
  let about
  let industry
  let location
  let numberOfFollowers
  let numberOfConnections
  let numberOfEmployees
  let isFollowedByActiveUser
  let webSite

  let component
  beforeEach(() => {
    name = 'DAN.IT education'
    about = 'DAN.IT education - educational center in Kiev, which trains IT specialists according to the methods of the Israeli army.\n\nIn 2017, two representatives of the Israeli startup nation chose Ukraine as the next step in their mission. Eran Lasser and Eddie Prilepsky - businessmen, investors, business angels and representatives of international venture capital funds - decided to bring values ​​and methodology to the Ukrainian IT sphere, which at one time helped Israel to become a direct competitor to Silicon Valley.\n\nWhy Ukraine? Because Ukrainian specialists are highly valued in the world market of information services. Because our students have a high level of responsibility and a great desire to learn. And, of course, because Ukraine is worthy to represent Europe in the IT market in the forefront. It was with this idea that the DAN.IT education training center was created. By the way, "Dan" in the Hebrew interpretation symbolizes great potential.\n\nWhy choose our method\n\nTo implement the idea, the founders of DAN.IT education decided to adapt the Telem methodology, which is also used to train technical specialists of the Israeli army. Its advantage is teamwork on the strengths of each student and increasing his motivation. A teacher, offline and online mentor, coordinator and HR specialist work with the student at the same time. On the one hand, he learns programming based on case studies and practical exercises without boring lectures and wasting time, which is also the basis of our methodology. On the other hand, he has time to develop his personal skills and prepare for a job search.\n\nSupervisory Board\n\nTo keep abreast of the trends in the Ukrainian and global markets, we have formed a Supervisory Board. The Council employs the leading experts of Ukraine in the field of IT - they always know what employers want and expect, as well as plan and adjust our training programs. Thus, with the help of colleagues from the technical field, we prepare students for the challenges and difficulties of future work. Members of the Supervisory Board are also potential employers for our graduates.\n\nOur achievements\n\nFor 4 years on the Ukrainian market, we have opened 7 areas of study for a period of 6 to 12 months, in which both adolescents 9-14 years old and adults can study. We are chosen by both school graduates and people over the age of 40 who have already tried several professions, but do not want to stop there. Former lawyers, doctors, stylists and businessmen, bloggers and creators, bank employees and TV presenters study on programs at DAN.IT. The scope of our students\' skills is amazing, but at DAN IT they become programmers, developers, web designers and digital marketers in order to conquer new heights. And this inspires us to achieve.\n\nAlready, the training center is a member of the IT Ukraine Association, the official partner of the International Bank of Azerbaijan for the provision of social IT education services to the Azerbaijani market, the gold partner of the Ukrainian Israeli Innovation Summit. We have graduated more than 2,000 students, and the employment rate of graduates reaches 73%.\n\nFor the comfort of our students, in January 2021, we opened another DAN.IT office on the right bank of Kiev. Now it will become easier for residents from Obolon to Goloseevo, from Pechersk to Svyatoshino, from the city center to its suburbs, combining study with work, personal life and leisure. The second location is located at st. Vladimirskaya, 77A, BC "Solo Plus", 2nd floor.\n\nJoining the IT Ukraine Association\n\nIn December 2019, DAN.IT education became the only educational partner and member of the Ukrainian IT Association. Together with the Association, we plan to develop the country\'s information technologies and have already begun work on projects such as ClickToSchool.'
    industry = 'Information Technology & Services'
    location = 'Kyiv, Ukraine'
    numberOfFollowers = 800
    numberOfConnections = 2
    numberOfEmployees = 85
    isFollowedByActiveUser = true
    webSite = 'https://dan-it.com.ua/'
    component = setUp(
      {
        name,
        about,
        industry,
        location,
        numberOfFollowers,
        numberOfConnections,
        numberOfEmployees,
        isFollowedByActiveUser,
        webSite
      }
    )
  })
  it('should render Following', () => {
    expect.stringMatching('Following')
    component.find('SharedButton[id=\'handleFollow\']').simulate('click')
    expect.stringMatching('Follow')
  })
})
