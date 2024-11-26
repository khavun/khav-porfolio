// stores/experience.js
import { defineStore } from 'pinia';

export const useExperienceStore = defineStore('experience', {
    state: () => ({
        experiences: [
            {
                title: 'Stage Technology',
                date: '5/02/2022-01/07/2022,// 04 month',
                role: 'ERP',
                color: 'color-1',
                stage: [
                    'Spring Boot, Thymeleaf, HTML, Redis, JavaScript, CSS, Flutter',
                    'IntelliJ IDEA, PostgreSQL, GitLab, Swagger, Postman, AWS, EC2, Route 53',
                    'Actions: Report, Salesman, Sales Team, Sales Manager',
                    'team 4 persons', 
                ],
            },
            {
                title: 'Stage Technology',
                date: '02/07/2022-30/10/2022,//3 month',
                role: 'Education',
                color: 'color-2',
                stage: [
                    'PHP, CodeIgniter, HTML, CSS, Bootstrap, jQuery, Ajax, Flutter',
                    'Sublime, phpMyAdmin, GitLab, Postman, CoreFTP',
                    'Actions: API mobile, Admin page',
                    'team 3 persons',
                ],
            },
            {
                title: 'Stage Technology',
                date: '01/11/2022-30/03/2023,//04 month',
                role: 'ERP',
                color: 'color-3',
                stage: [
                    'Django, Swagger,  Redis Javascript, Html, CSS, Bootstrap, Flutter',
                    'Pycharm, Postgresql, GitLab, Postman, AWS, EC2, ERS, Docker, Nginx',
                    'Actions: Setting',
                    'team 4 persons',
                ],
            },
            {
                title: 'Stage Technology',
                date: '01/04/2023/-30/07/2023,//05 month',
                role: 'Real Estate',
                color: 'color-4',
                stage: [
                    'PHP, Javavscrip, Jquery, Ajax, Html, CSS, Bootstrap, Google Map, Facebook Chate',
                    'Sublime, MySql, GitLab, Core FTP',
                    'Actions: Backend System, Frontend',
                    'team 4 persons',
                ],
            },
            {
                title: 'Stage Technology',
                date: '01/08/2023-30/03/2024,//06 month',
                role: 'Real Estate',
                color: 'color-5',
                stage: [
                    'Laravel, Javascript, Ajax, Html, CSS, Bootstrap',
                    'VS Code, Mysql, GitLab, Postman, AWS, EC2, ERS, Route53, Docker, Nginx',
                    'Actions: All Backend',
                    'team 3 persons',
                ],
            },
            {
                title: 'Stage Technology',
                date: '01/04/2024-30/08/2024,// 04 month',
                role: 'Echo System',
                color: 'color-6',
                team: 'team 4 person',
                stage: [
                    'Odoo, Vue 3, Vite, Primevue, Pinia, Axios, Typescript, Eslint Html, CSS, Tailwind, ext JS',
                    'Pycharm, Postgresql, Swagger Github, Postman, AWS, EC2, ERS, Route53, Docker, Nginx',
                    'Actions: Frontend',
                ],
            },
            {
                title: 'Stage Technology',
                date: '01/09/2024-presentt',
                role: 'Micro service Frontend,//2 month',
                color: 'color-6',
                stage: [
                    'Vue js, Vite, Primevue, Typescript, Pinia, Axios, Html, CSS, Eslint',
                    'Pycharm,Github, Postman, AWS, EC2, ERS, Route53, Docker, Nginx',
                    'Actions: BaseFrom, Base Layout, Base List',
                ],
            }
        ],
    }),
});