const BASE_URL = "http://localhost:8000/";
// const BASE_URL = "https://prasunpersonal-portfolio.cyclic.app/";

const Apis = {
    GET_ALL_EDUCATIONS: BASE_URL.concat('educations/', 'all/'),
    GET_ALL_EXPERIENCES: BASE_URL.concat('experiences/', 'all/'),
    GET_ALL_PROJECTS: BASE_URL.concat('projects/', 'all/'),
    GET_ALL_CATEGORIES: BASE_URL.concat('projects/', 'categories/'),
    GET_ALL_CERTIFICATES: BASE_URL.concat('certificates/', 'all/'),
    GET_ALL_LANGUAGES: BASE_URL.concat('skills/', 'languages-and-frameworks/'),
    GET_ALL_DATABASES: BASE_URL.concat('skills/', 'databases/'),
    GET_ALL_PROFILES: BASE_URL.concat('skills/', 'profiles/'),
    EMAIL_SENDING_URL: BASE_URL.concat('services/', 'sendemail/')
}

export default Apis;