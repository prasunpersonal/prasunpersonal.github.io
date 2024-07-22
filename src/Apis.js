const BASE_URL = "https://prasunpersonal-server.onrender.com/";
// const BASE_URL = "http://localhost:8000";

const Apis = {
    GET_EDUCATION: BASE_URL.concat('educations/'),
    GET_ALL_EDUCATIONS: BASE_URL.concat('educations/', 'all/'),
    ADD_EDUCATIONS: BASE_URL.concat('educations/', 'add/'),
    UPDATE_EDUCATIONS: BASE_URL.concat('educations/', 'update/'),
    DELETE_EDUCATIONS: BASE_URL.concat('educations/', 'delete/'),

    GET_EXPERIENCE: BASE_URL.concat('experiences/'),
    GET_ALL_EXPERIENCES: BASE_URL.concat('experiences/', 'all/'),
    ADD_EXPERIENCES: BASE_URL.concat('experiences/', 'add/'),
    UPDATE_EXPERIENCES: BASE_URL.concat('experiences/', 'update/'),
    DELETE_EXPERIENCES: BASE_URL.concat('experiences/', 'delete/'),

    GET_PROJECT: BASE_URL.concat('projects/'),
    GET_ALL_PROJECTS: BASE_URL.concat('projects/', 'all/'),
    GET_ALL_CATEGORIES: BASE_URL.concat('projects/', 'categories/'),
    ADD_PROJECTS: BASE_URL.concat('projects/', 'add/'),
    UPDATE_PROJECTS: BASE_URL.concat('projects/', 'update/'),
    DELETE_PROJECTS: BASE_URL.concat('projects/', 'delete/'),

    GET_CERTIFICATE: BASE_URL.concat('certificates/'),
    GET_ALL_CERTIFICATES: BASE_URL.concat('certificates/', 'all/'),
    ADD_CERTIFICATES: BASE_URL.concat('projects/', 'add/'),
    UPDATE_CERTIFICATES: BASE_URL.concat('certificates/', 'update/'),
    DELETE_CERTIFICATES: BASE_URL.concat('certificates/', 'delete/'),

    GET_ALL_LANGUAGES: BASE_URL.concat('skills/', 'languages-and-frameworks/'),
    GET_ALL_DATABASES: BASE_URL.concat('skills/', 'databases/'),
    GET_ALL_PROFILES: BASE_URL.concat('skills/', 'profiles/'),
    GET_ALL_SKILLS: BASE_URL.concat('skills/', 'all/'),
    UPDATE_SKILL: BASE_URL.concat('skills/', 'update/'),
    DELETE_SKILL: BASE_URL.concat('skills/', 'delete/'),

    EMAIL_SENDING_URL: BASE_URL.concat('services/', 'sendemail/')
}

export default Apis;