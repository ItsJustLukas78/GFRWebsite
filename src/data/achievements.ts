export interface AchievementYear {
  seasonName: string;
  seasonYears: string;
  tagLine?: string;
  achievements: TeamAchievements[];
}

export interface TeamAchievements {
  teamNumber: string;
  awards: string[];
}

// UPDATE ANNUALLY
export const Achievements: AchievementYear[] = [
  {
    seasonName: "In The Zone",
    seasonYears: "2017-2018",
    tagLine: "Cones!",
    achievements: [
      {
        teamNumber: "5327A",
        awards: ["Excellence Award @ DV (qualified to states)", "Design Award @ Vanden", "Excellence Award @ Tracy", "Tournament Finalists @ Tracy"]
      },
      {
        teamNumber: "5327C",
        awards: ["Create Award @ DRC", "Amaze Award @ Bell", "Build Award @ Riverdale", "Tournament Champions @ Tracy (qualified to states)", "Tournament Champions @ San Jose States (qualified to worlds)"]
      },
      {
        teamNumber: "5327R",
        awards: ["Design Award @ DV (qualified to states)", "Judges @ Vanden", "Design @ Sacramento States (qualified to worlds)"]
      },
      {
        teamNumber: "5327S",
        awards: ["Tournament Finalists @ DV", "Tournament Champions @ 7th Annual (qualified to states)", "Create Award @ 7th Annual", "Tournament Finalists @ Armijo", "Tournament Finalists @ Tracy", "Robot Skills Champion @ Tracy", "Think Award @ Sacramento States", "Create Award @ Worlds"]
      },
      {
        teamNumber: "5327X",
        awards: ["Excellence Award @ DRC", "Tournament Finalists @ DV (qualified to states)", "Create Award @ 7th Annual", "Tournament Finalists @ Armijo", "Robot Skills Champion @ Armijo", "Create Award @ Armijo", "Design Award @ CV", "Skills Finalists @ CV"]
      }
    ]
  },
  {
    seasonName: "Turning Point",
    seasonYears: "2018-2019",
    tagLine: "Flags!",
    achievements: [
      {
        teamNumber: "5327B",
        awards: [
          "Excellence Award @ Dougherty Valley High School VEX Robotics Tournament",
          "Design Award @ Vanden Robotics Turning Point Tournament",
          "Excellence Award @ Tracy Triangle New Year's VEX Tournament"
        ]
      },
      {
        teamNumber: "5327C",
        awards: [
          "Create Award @ Dublin Robotics Club Turning Point VRC Tournament",
          "Amaze Award @ Bellarmine Bay Area VEX Robotics Tournament",
          "Tournament Champions @ Tracy Triangle New Year's VEX Tournament",
          "Tournament Champions @ 2019 California VEX High School State Championship - SAN JOSE",
          "Create Award @ 2019 California VEX High School State Championship - SAN JOSE"
        ]
      },
      {
        teamNumber: "5327R",
        awards: [
          "Design Award @ Dougherty Valley High School VEX Robotics Tournament",
          "Tournament Finalists @ Vanden Robotics Turning Point Tournament",
          "Judges Award @ Vanden Robotics Turning Point Tournament",
          "Design Award @ Signature Event: Google VEX Turning Point High School Tournament",
          "Design Award @ 2019 California VEX High School State Championship - SACRAMENTO"
        ]
      },
      {
        teamNumber: "5327S",
        awards: [
          "Tournament Finalists @ Dougherty Valley High School VEX Robotics Tournament",
          "Tournament Champions @ 7th Annual VEX Robotics Tournament Turning Point",
          "Create Award @ 7th Annual VEX Robotics Tournament Turning Point",
          "Robot Skills Champion @ Tracy Triangle New Year's VEX Tournament",
          "Think Award @ 2019 California VEX High School State Championship - SACRAMENTO"
        ]
      },
      {
        teamNumber: "5327X",
        awards: [
          "Excellence Award @ Dublin Robotics Club Turning Point VRC Tournament",
          "Tournament Finalists @ Dougherty Valley High School VEX Robotics Tournament",
          "Robot Skills Champion @ Armijo High School 2nd Annual Robotics Tournament",
          "Design Award @ Turning Point in Central Valley"
        ]
      }
    ]
  },
  {
    seasonName: "Tower Takeover",
    seasonYears: "2019-2020",
    tagLine: "Cube Towers!",
    achievements: [
      {
        teamNumber: "5327A",
        awards: [
          "Design Award @ Central Valley Tower Takeover",
          "Excellence Award @ Redwood Rumble II",
          "Tournament Champions @ Redwood Rumble II",
          "Tournament Champions @ Central Valley Tower Takeover"
        ]
      },
      {
        teamNumber: "5327B",
        awards: [
          "Judges Award @ Dougherty Valley High School VEX Robotics Tournament",
          "Judges Award @ NorCal Last Chance"
        ]
      },
      {
        teamNumber: "5327C",
        awards: [
          "Design Award @ Redwood Rumble II",
          "Innovate Award @ Vanden Robotics Tower Takeover Tournament",
          "Design Award @ Central Valley Tower Takeover",
          "Design Award @ NorCal Last Chance",
          "Excellence Award @ Compton Robotics Challenge 2020",
          "Tournament Champions @ Compton Robotics Challenge 2020"
        ]
      },
      {
        teamNumber: "5327E",
        awards: [
          "Create Award @ Dublin Robotics Club Tower Takeover Tournament",
          "Tournament Champions @ Central Valley Tower Takeover",
          "Robot Skills Champion @ Central Valley Tower Takeover"
        ]
      },
      {
        teamNumber: "5327V",
        awards: [
          "Design Award @ Dougherty Valley High School VEX Robotics Tournament",
          "Design Award @ Bellarmine Bay Area VEX Robotics Tournament",
          "Tournament Champions @ Riverdale Tower Takeover",
          "Robot Skills Champion @ Riverdale Tower Takeover",
          "Tournament Champions @ Vanden Robotics Tower Takeover Tournament",
          "Think Award @ Vanden Robotics Tower Takeover Tournament",
          "Robot Skills Champion @ Vanden Robotics Tower Takeover Tournament"
        ]
      },
      {
        teamNumber: "5327Z",
        awards: [
          "Design Award @ Riverdale Tower Takeover",
          "Tournament Champions @ Vanden Robotics Tower Takeover Tournament"
        ]
      }
    ]
  },
  {
    seasonName: "Change Up",
    seasonYears: "2020-2021",
    tagLine: "Ball Towers!",
    achievements: [
      {
        teamNumber: "5327C",
        awards: [
          "Design Award @ Dublin Robotics Club TOURNAMENT - Change Up #1"
        ]
      },
      {
        teamNumber: "5327S",
        awards: [
          "Think Award @ Dublin Robotics Club Skills-Only Event - Change Up #1",
          "Robot Skills Champion @ Dublin Robotics Club Skills-Only Event - Change Up #2",
          "Think Award @ Dublin Robotics Club Skills-Only Event - Change Up #2",
          "Robot Skills Champion @ VEX MN February Skills-Only Remote Live",
          "Design Award @ VEX MN February Skills-Only Remote Live",
          "Design Award @ 2021 Northern California VEX State Championship - Remote Skills Only"
        ]
      },
      {
        teamNumber: "5327U",
        awards: [
          "Amaze Award @ Dublin Robotics Club TOURNAMENT - Change Up #1",
          "Excellence Award @ MRT Change Up TOURNAMENT #5",
          "Innovate Award @ 2021 Northern California VEX State Championship - Remote Skills Only",
          "Create Award @ Pacific Open Championship VRC Change Up - HS"
        ]
      },
      {
        teamNumber: "5327Z",
        awards: [
          "Judges Award @ Dublin Robotics Club Skills-Only Event - Change Up #2"
        ]
      }
    ]
  },
  {
    seasonName: "Tipping Point",
    seasonYears: "2021-2022",
    tagLine: "Mobile Goals!",
    achievements: [
      {
        teamNumber: "5327A",
        awards: [
          "Tournament Champions @ Central Valley VEX Tipping Point Tournament #3",
          "Tournament Finalists @ 2022 Northern California VEX State Championship - SACRAMENTO"
        ]
      },
      {
        teamNumber: "5327E",
        awards: [
          "Design Award @ 7th Annual VEX Robotics Tournament Tipping Point",
          "Tournament Champions @ 2022 Northern California VEX State Championship - SAN JOSE",
          "Think Award @ 2022 Northern California VEX State Championship - SAN JOSE"
        ]
      }
    ]
  },
  {
    seasonName: "Spin Up",
    seasonYears: "2022-2023",
    tagLine: "Discs!",
    achievements: [
      {
        teamNumber: "5327B",
        awards: [
          "Design Award @ 2022 Dublin Robotics Club Pre-Season Scrimmage",
          "Excellence Award @ Central Valley VEX Spin Up Tournament",
          "Tournament Champions @ Central Valley VEX Spin Up Tournament",
          "Design Award @ Tracy Holiday Spin Up Tournament",
          "Excellence Award @ VEX Spin Up at the Pier",
          "Design Award @ Bellarmine Bay Area VEX Spin Up Tournament",
          "Excellence Award @ 2023 Northern California VEX State Championship - SACRAMENTO"
        ]
      },
      {
        teamNumber: "5327C",
        awards: [
          "Design Award @ Dublin Robotics Club TOURNAMENT - Spin Up #2",
          "Excellence Award @ VEX Spin Up at the Pier",
          "Design Award @ Tracy Holiday Spin Up Tournament",
          "Excellence Award @ Signature Event: Google VEX Spin Up",
          "Design Award @ Central Valley VEX Spin Up Tournament",
          "Design Award @ Bellarmine Bay Area VEX Spin Up Tournament",
          "Excellence Award @ 2023 Northern California VEX State Championship - SACRAMENTO",
          "Design Award @ 2023 Northern California VEX State Championship - SACRAMENTO"
        ]
      },
      {
        teamNumber: "5327E",
        awards: [
          "Design Award @ VEX Spin Up at the Pier",
          "Excellence Award @ Dublin Robotics Club TOURNAMENT - Spin Up #1",
          "Design Award @ Dublin Robotics Club TOURNAMENT - Spin Up #1",
          "Excellence Award @ Central Valley VEX Spin Up Tournament",
          "Design Award @ Tracy Holiday Spin Up Tournament",
          "Excellence Award @ 2023 Northern California VEX State Championship - SACRAMENTO"
        ]
      },
      {
        teamNumber: "5327S",
        awards: [
          "Design Award @ Dublin Robotics Club TOURNAMENT - Spin Up #1",
          "Excellence Award @ VEX Spin Up at the Pier",
          "Excellence Award @ Tracy Holiday Spin Up Tournament",
          "Tournament Champions @ Central Valley VEX Spin Up Tournament",
          "Excellence Award @ 2023 Northern California VEX State Championship - SACRAMENTO"
        ]
      }
    ]
  },
  {
    seasonName: "Over Under",
    seasonYears: "2023-2024",
    tagLine: "Tribals!",
    achievements: [
      {
        teamNumber: "5327A",
        awards: ["Tournament Champions @ Central Valley #5 (Regional Qual)", "Tournament Champions @ Mecha Mayhem Sig (Worlds Qual)"]
      },
      {
        teamNumber: "5327B",
        awards: ["Tournament Finalist @ Panther Roar Tournament"]
      },
      {
        teamNumber: "5327J",
        awards: ["Design Award @ Central Valley #5", "Tournament Champions @ NorCal Silicon Valley #1 (Regional Qual)"]
      },
      {
        teamNumber: "5327K",
        awards: ["Think Award @ Winters Robotics FarmBots Tournament", "Design Award @ Central Valley (Regional Qual)", "Excellence Award @ Robolabs Tournament #3 (Regional Qual)", "Tournament Champions @ Maker Showcase - Tehama District Fair 3.0"]
      },
      {
        teamNumber: "5327R",
        awards: ["Amaze Award @ VRC, Duel in Dublin #1", "Tournament Champions @ Placer Robotics Tournament", "Tournament Champions @ River Islands High School Tournament (Regional Qual)", "Think Award @ River Islands High School Tournament"]
      },
      {
        teamNumber: "5327S",
        awards: ["Excellence Award @ Bay Area Cesar Chavez (Regional Qual)"]
      },
      {
        teamNumber: "5327V",
        awards: ["Build Award @ Robolabs Tournament #1", "Excellence Award @ Central Valley (Regional Qual)", "Excellence Award @ DVHS Robotics 13th Annual Tournament (Regional Qual)", "Tournament Finalist @ Panther Roar Tournament", "Design Award @ Panther Roar Tournament (Regional Qual)", "Amaze Award @ Tracy CA Region 2 Championship"]
      }
    ]
  }
]