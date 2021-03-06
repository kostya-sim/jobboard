'use strict';

const Router = require('shared/router');
const Homepage = require('components/Homepage');
const JobList = require('components/JobList');
const JobCreate = require('components/JobCreate');
const JobEdit = require('components/JobEdit');
const JobDetail = require('components/JobDetail');
const UserLogin = require('components/UserLogin');
const UserRegister = require('components/UserRegister');
const UserDashboard = require('components/UserDashboard');

// Setup routes
let router = new Router();

router.get('/', Homepage);
router.get('/jobs', JobList);
router.get('/jobs/create', JobCreate);
router.get('/jobs/:id', JobDetail);
router.get('/jobs/:id/edit', JobEdit);

router.get('/login', UserLogin);
router.get('/register', UserRegister);
router.get('/user/dashboard', UserDashboard);

module.exports = router;
