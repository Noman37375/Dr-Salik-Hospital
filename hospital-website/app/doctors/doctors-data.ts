export interface Doctor {
  id: string
  name: string
  qualifications?: string
  role?: string
  specialty: string[]
  image: string
  description?: string
  isHeadDoctor?: boolean
  experience?: string
  education?: string
}

export const doctors: Doctor[] = [
  {
    id: "dr-zafar-salik",
    name: "Dr. Zafar Salik",
    qualifications: "MBBS (DOW), MD (USA)",
    role: "Head of Doctors & Managing Director",
    specialty: ["Adult and Child Psychiatrist", "Drug Rehabilitation", "Infectious Disease Specialist"],
    image: "/Dr Images/Dr-Salik-Picture.jpg",
    description: "Dr. Zafar Salik stands as a testament to what passion, dedication, and relentless pursuit of knowledge can achieve. As the Managing Director of Dr. Salik Hospital, his leadership and vision have been instrumental in shaping the institution's reputation as a beacon of medical excellence.",
    isHeadDoctor: true,
  },
  {
    id: "dr-salman-ahmad-siddiqui",
    name: "Dr. Salman Ahmad Siddiqui",
    specialty: ["Orthopedic Surgery", "Sports Surgery"],
    image: "/Dr Images/Dr-Salman-Ahmad-Orthopedic-Surgeon-480x677.jpeg",
    description: "Dr. Salman is a renowned and specialized orthopedic surgeon with over 7 years of experience after completing his post-graduation from Jinnah Postgraduate Medical Centre in 2016.",
    experience: "7+ years",
    education: "Post-graduation from Jinnah Postgraduate Medical Centre (2016)",
  },
  {
    id: "dr-sadia-kashif",
    name: "Dr. Sadia Kashif",
    specialty: ["Obstetrics and Gynecology"],
    image: "/Dr Images/Dr-Sadia-Kashif-Gynaecologist-480x640.jpeg",
    description: "Dr Sadia Kashif stepped into the professional field by completing her post-graduation from Liaquat National Hospital and Medical College. She is specialized in Obstetrics and Gynecology field and serving humanity for over 10 years.",
    experience: "10+ years",
    education: "Post-graduation from Liaquat National Hospital and Medical College",
  },
  {
    id: "dr-nudrat-zehra",
    name: "Dr. Nudrat Zehra",
    specialty: ["Obstetrics and Gynecology"],
    image: "/Dr Images/Dr-Nudrat-Zehra-480x498.jpeg",
    description: "Dr. Nudrat completed her post-graduation from Royal College of Obstetricians and Gynecologists and passed the MCROG 2 Assessment in 2018. She has been a prominent gynecologist in Karachi with over 15 years of extensive experience.",
    experience: "15+ years",
    education: "MCROG 2, Royal College of Obstetricians and Gynecologists (2018)",
  },
  {
    id: "dr-zohaib-ahmed",
    name: "Dr. Zohaib Ahmed",
    specialty: ["Adult and Pediatric Urology", "General Surgery"],
    image: "/Dr Images/Dr-Zohaib-Ahmad-Urologist.jpeg",
    description: "Dr. Zohaib Ahmed is now a part of the Urology department at Dr. Salik Hospital. He completed his post-graduation from Sindh Institute of Urology and Transplant & Ziauddin University Hospital in 2020. He is specialized in Adult and Pediatric Urology with overall 10 years of experience including General Surgery and Urology.",
    experience: "10+ years",
    education: "Post-graduation from Sindh Institute of Urology and Transplant & Ziauddin University Hospital (2020)",
  },
  {
    id: "dr-ali-taufeeq-rizvi",
    name: "Dr. Ali Taufeeq Rizvi",
    specialty: ["Orthopedic Surgery", "Sports Surgery"],
    image: "/Dr Images/Dr-Ali-Tauseef-Orthopedic-Surgeon-480x480.jpeg",
    description: "Dr. Ali is a renowned and specialized orthopedic surgeon with extensive experience in both orthopedic and sports surgery.",
  },
  {
    id: "dr-asma-khalid",
    name: "Dr. Asma Khalid",
    specialty: ["General Medicine", "Cardiology"],
    image: "/Dr Images/Dr-Asma-Khalid-Cardiologist-e1698775184594-480x270.jpeg",
  },
  {
    id: "dr-hassan-imam",
    name: "Dr. Hassan Imam",
    specialty: ["General Medicine"],
    image: "/Dr Images/Dr. Hassan Imam.jpg",
  },
  {
    id: "dr-humayun",
    name: "Dr. Humayun",
    specialty: ["General Medicine"],
    image: "/Dr Images/Dr. Humayun.jpg",
  },
  {
    id: "dr-sidrah-abbas",
    name: "Dr. Sidrah Abbas",
    specialty: ["General Medicine"],
    image: "/Dr Images/Dr. Sidrah Abbas.jpg",
  },
  {
    id: "dr-babar",
    name: "Dr. Babar",
    specialty: ["General Medicine"],
    image: "/Dr Images/Dr. Babar.jpg",
  },
  {
    id: "dr-wahib-inayat",
    name: "Dr. Wahib Inayat",
    specialty: ["General Medicine"],
    image: "/Dr Images/Dr. Wahib Inayat.jpg",
  },
  {
    id: "dr-moiz-ullah",
    name: "Dr. Moiz Ullah",
    specialty: ["General Medicine"],
    image: "/Dr Images/Dr. Moiz Ullah.jpg",
  },
  {
    id: "dr-syed-ahmed-sultan",
    name: "Dr. Syed Ahmed Sultan",
    specialty: ["General Medicine"],
    image: "/Dr Images/Dr. Syed Ahmed Sultan.jpg",
  },
] 