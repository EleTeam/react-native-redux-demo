'use strict';

// for user
export const LOGGED_IN 	= 'LOGGED_IN';
export const LOGGED_OUT = 'LOGGED_OUT';
export const LOGGED_ERROR = 'LOGGED_ERROR';
export const LOGGED_DOING = 'LOGGED_DOING';


// for jobs
export const JOBS_DAY_CHANGE = 'JOBS_DAY_CHANGE';
export const JOBS_LOADING = 'JOBS_LOADING';
export const JOBS_LOADING_DONE = 'JOBS_LOADING_DONE';
export const JOBS_LOADING_ERROR = 'JOBS_LOADING_ERROR';


// for job
export const JOB_SIGNIN_START = 'JOB_SIGNIN_START';
export const JOB_SIGNIN_DONE = 'JOB_SIGNIN_DONE';
export const JOB_SIGNOFF_START = 'JOB_SIGNOFF_START';
export const JOB_SIGNOFF_DONE = 'JOB_SIGNOFF_DONE';
export const JOB_OP_ERROR = 'JOB_OP_ERROR';

export const JOB_SELECTED = 'JOB_SELECTED';

export const JOB_DETAIL_DOING = 'JOB_DETAIL_DOING';
export const JOB_DETAIL_DONE = 'JOB_DETAIL_DONE';
export const JOB_DETAIL_ERROR = 'JOB_DETAIL_ERROR';