export const COLLEGE = {
  name: "Shivansh Institute of Higher Education",
  shortName: "SIHE",
  tagline: "Empowering Students for a Better Future",
  tagline2: "Excellence in Education Since 2000",
  address: "NH-28, Near Bypass Chowk, Gorakhpur, Uttar Pradesh - 273001",
  phone: "+91-551-2201234",
  phone2: "+91-9876543210",
  email: "info@sihe.edu.in",
  admissionEmail: "admissions@sihe.edu.in",
  website: "www.sihe.edu.in",
  established: "2000",
  affiliatedTo: "Deen Dayal Upadhyaya Gorakhpur University",
  approvedBy: "UGC, NAAC Accredited",
};

export const STATS = [
  { value: 5000, suffix: "+", label: "Students Enrolled" },
  { value: 120, suffix: "+", label: "Expert Faculty" },
  { value: 35, suffix: "+", label: "Courses Offered" },
  { value: 25, suffix: "+", label: "Years of Excellence" },
];

export const NOTICES = [
  { id: 1, title: "Admission Open for Session 2026-27", date: "2026-04-01", type: "Admission", isNew: true },
  { id: 2, title: "Examination Form Submission – Last Date Extended to 15 April", date: "2026-03-28", type: "Examination", isNew: true },
  { id: 3, title: "Scholarship Registration 2026 Now Open", date: "2026-03-25", type: "Scholarship", isNew: true },
  { id: 4, title: "Annual Sports Meet – Registration Starts 10 April", date: "2026-03-22", type: "Events", isNew: false },
  { id: 5, title: "Result Declared – B.Sc Sem IV December 2025", date: "2026-03-20", type: "Result", isNew: false },
  { id: 6, title: "Holiday Notice – Ram Navami (6 April)", date: "2026-03-19", type: "General", isNew: false },
  { id: 7, title: "Workshop on AI & Machine Learning – 20 April", date: "2026-03-15", type: "Events", isNew: false },
  { id: 8, title: "Fee Payment Last Date – 30 April 2026", date: "2026-03-10", type: "Finance", isNew: false },
];

export const COURSES = [
  {
    category: "Undergraduate (UG)",
    icon: "GraduationCap",
    color: "navy",
    courses: [
      { name: "B.A. (Arts)", duration: "3 Years", seats: 120 },
      { name: "B.Sc. (Science)", duration: "3 Years", seats: 80 },
      { name: "B.Com. (Commerce)", duration: "3 Years", seats: 100 },
      { name: "BCA (Computer Applications)", duration: "3 Years", seats: 60 },
      { name: "B.A. (Political Science)", duration: "3 Years", seats: 80 },
      { name: "B.A. (English Literature)", duration: "3 Years", seats: 60 },
    ]
  },
  {
    category: "Postgraduate (PG)",
    icon: "BookOpen",
    color: "gold",
    courses: [
      { name: "M.A. (Hindi)", duration: "2 Years", seats: 40 },
      { name: "M.A. (English)", duration: "2 Years", seats: 40 },
      { name: "M.Sc. (Mathematics)", duration: "2 Years", seats: 30 },
      { name: "M.Com. (Commerce)", duration: "2 Years", seats: 40 },
      { name: "MCA (Computer Applications)", duration: "2 Years", seats: 30 },
    ]
  },
  {
    category: "Diploma / Certificate",
    icon: "Award",
    color: "green",
    courses: [
      { name: "PGDCA (Computer Applications)", duration: "1 Year", seats: 60 },
      { name: "DCA (Computer Applications)", duration: "6 Months", seats: 60 },
      { name: "Diploma in Yoga", duration: "1 Year", seats: 40 },
      { name: "Certificate in Spoken English", duration: "6 Months", seats: 50 },
    ]
  },
];

export const DEPARTMENTS = [
  { name: "Science", icon: "FlaskConical", desc: "Physics, Chemistry, Mathematics, Biology", head: "Dr. Ramesh Kumar Verma", color: "#1e3a80" },
  { name: "Arts & Humanities", icon: "Palette", desc: "Hindi, English, History, Political Science", head: "Dr. Sunita Mishra", color: "#d97706" },
  { name: "Commerce", icon: "TrendingUp", desc: "Accounting, Economics, Business Studies", head: "Dr. Ashok Gupta", color: "#059669" },
  { name: "Computer Science", icon: "Monitor", desc: "BCA, MCA, PGDCA, DCA", head: "Prof. Vikram Singh", color: "#7c3aed" },
  { name: "Social Science", icon: "Globe", desc: "Sociology, Psychology, Geography", head: "Dr. Priya Yadav", color: "#dc2626" },
  { name: "Physical Education", icon: "Activity", desc: "Sports, Yoga, NCC Activities", head: "Mr. Santosh Tiwari", color: "#0891b2" },
];

export const FACULTY = [
  { id: 1, name: "Dr. Anand Kumar Sharma", designation: "Principal", dept: "Administration", exp: "25+ Years", qual: "Ph.D, M.A.", img: null },
  { id: 2, name: "Dr. Ramesh Kumar Verma", designation: "HOD – Science", dept: "Science", exp: "18 Years", qual: "Ph.D, M.Sc.", img: null },
  { id: 3, name: "Dr. Sunita Mishra", designation: "HOD – Arts", dept: "Arts", exp: "15 Years", qual: "Ph.D, M.A.", img: null },
  { id: 4, name: "Dr. Ashok Gupta", designation: "HOD – Commerce", dept: "Commerce", exp: "20 Years", qual: "Ph.D, M.Com.", img: null },
  { id: 5, name: "Prof. Vikram Singh", designation: "HOD – Computer Science", dept: "Computer", exp: "12 Years", qual: "M.Tech, MCA", img: null },
  { id: 6, name: "Dr. Priya Yadav", designation: "Professor – Social Science", dept: "Social Science", exp: "10 Years", qual: "Ph.D, M.A.", img: null },
  { id: 7, name: "Mr. Rajesh Pandey", designation: "Asst. Professor – Physics", dept: "Science", exp: "8 Years", qual: "M.Sc., B.Ed.", img: null },
  { id: 8, name: "Mrs. Kavita Singh", designation: "Asst. Professor – English", dept: "Arts", exp: "9 Years", qual: "M.A., B.Ed.", img: null },
];

export const GALLERY_ITEMS = [
  { id: 1, title: "Main Building", category: "Campus", color: "#1e3a80" },
  { id: 2, title: "Science Laboratory", category: "Campus", color: "#1e5a80" },
  { id: 3, title: "Annual Function 2025", category: "Events", color: "#d97706" },
  { id: 4, title: "Sports Day", category: "Sports", color: "#059669" },
  { id: 5, title: "Library", category: "Campus", color: "#2d4d99" },
  { id: 6, title: "Seminar Hall", category: "Campus", color: "#7c3aed" },
  { id: 7, title: "Cultural Programme", category: "Events", color: "#dc2626" },
  { id: 8, title: "Computer Lab", category: "Campus", color: "#0891b2" },
  { id: 9, title: "Graduation Ceremony", category: "Events", color: "#d97706" },
  { id: 10, title: "Cricket Tournament", category: "Sports", color: "#059669" },
  { id: 11, title: "Workshop on AI", category: "Seminars", color: "#1e3a80" },
  { id: 12, title: "National Seminar 2025", category: "Seminars", color: "#2d4d99" },
];

export const QUICK_LINKS = [
  { label: "Admission Open", href: "/admission", icon: "ClipboardList", color: "bg-blue-600" },
  { label: "Student Login", href: "/student-corner", icon: "User", color: "bg-green-600" },
  { label: "Exam Form", href: "/examination", icon: "FileText", color: "bg-orange-500" },
  { label: "Fee Payment", href: "/student-corner", icon: "CreditCard", color: "bg-purple-600" },
  { label: "Results", href: "/examination", icon: "BarChart2", color: "bg-red-500" },
  { label: "Old Papers", href: "/student-corner", icon: "Book", color: "bg-teal-600" },
];

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Academics",
    children: [
      { label: "Courses", href: "/courses" },
      { label: "Departments", href: "/departments" },
      { label: "Faculty", href: "/faculty" },
    ]
  },
  { label: "Admission", href: "/admission" },
  { label: "Notices", href: "/notices" },
  { label: "Examination", href: "/examination" },
  { label: "Student Corner", href: "/student-corner" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];
